import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'
import { createCss } from "@utils";
import styles from "./CardProduct.module.scss";
import { useAnimationFrame } from './useAnimationFrame';

type props = {
  imgUrl: string,
  price: number,
  description?: string,
  freeShip?: boolean,
}
const css = createCss(styles);

function CardPrice({ imgUrl, price, description, freeShip }: props) {
  const [isOnMove, setEnter] = useState<boolean>(false);
  const y = useRef<number>();
  const x = useRef<number>();
  const card = useRef<HTMLDivElement>();
  const RAF_ID = useRef<number>();
  const previousTime = useRef<number>();
  const DEG = 35;

  let currX = x.current - 0.5, currY = y.current - 0.5;
  const animate = (time: number) => {
    let delta = (time - previousTime.current) / 1000;
    // if (delta > 1) {
    //   console.log(` delta ${delta} `);// each frame 0.02~ aprox.
    //   delta = 0;
    // }
    if (!previousTime.current) {
      previousTime.current = time;
    }
    if (!isOnMove) {
      // console.log("leave")
      setTimeout(() => {
        console.log("cancel 2s ", isOnMove);
        cancelAnimationFrame(RAF_ID.current);
      }, 2000);
      // cancelAnimationFrame(RAF_ID.current);
      return;
    }
    // console.log("running", x.current, y.current)

    // Lerp
    currX = (currX + (x.current - currX) * 0.15);// static 15%
    currY = (currY + (y.current - currY) * 0.15);
    // currX = (currX + (x.current - currX) * (delta * 10));// 0.02 smooth
    // currY = (currY + (y.current - currY) * (delta * 10));
    // currX = x.current;
    // currY = y.current;
    // Rotation
    // const rotX = ((currY / innerHeight) * -2) + 1; // works
    // const rotY = ((currX / innerWidth) * 2) - 1;// works
    const rotX = ((currY / window.innerHeight) * -2) + 1;// 0.012 deg 
    const rotY = ((currX / window.innerWidth) * 2) - 1;
    // console.log(`rotx${rotX} roty${rotY}`);
    // console.log(`sigo prendido ajaajaa`);
    card.current.style.setProperty("--rotX", `${rotX}`)
    card.current.style.setProperty("--rotY", `${rotY}`)

    // Light on the card 
    const rectCard = card.current.getBoundingClientRect();
    const lightX = x.current - rectCard.left;
    const lightY = y.current - rectCard.top;
    card.current.style.setProperty("--mouseX", `${lightX}px`)
    card.current.style.setProperty("--mouseY", `${lightY}px`)

    // shadow
    const halfHeight = rectCard.height / 2;// 163 ---326
    const halfWidth = rectCard.width / 2;// 95 ---- 190
    const shadowY = (halfHeight - lightY) / 100;
    const shadowX = (halfWidth - lightX) / 100;
    card.current.style.setProperty("--x-shadow", `${shadowX * 4}px`)
    card.current.style.setProperty("--y-shadow", `${shadowY * 4}px`)

    RAF_ID.current = requestAnimationFrame(animate);
    previousTime.current = time;
  }
  // USE_EFFECT
  useEffect(() => {
    console.count("useEfect ");

    RAF_ID.current = requestAnimationFrame(animate);

    return () => {
      console.log("cleanUp")
      // cancelAnimationFrame(RAF_ID.current);
      // setTimeout(() => {
      //   console.log("cleanUp")
      //   cancelAnimationFrame(RAF_ID.current);

      // }, 2000);
    }
  }, [isOnMove]);

  function onMouseMove(event: any) {
    const e = event.touches ? event.touches[0] : event;

    if (!isOnMove) { // first time is false
      setEnter(true);
      return;
    }
    x.current = e.clientX;
    y.current = e.clientY;

  }

  function onLeave() {
    //todo: reset function
    console.log(`leave ${isOnMove}`)
    if (isOnMove) {
      setEnter(false);
    }
  }

  return (
    <div className={css("card")}
      ref={card}
      onPointerMove={onMouseMove}
      onPointerLeave={onLeave}>
      <img className={css('card__img')}
        src={imgUrl} alt="red shoes" />
      <div className={css("card__content")}>
        <span>${price}</span>
        <span>
          {freeShip ? "Envío gratis" : ""}
        </span>
        <p className={css('card__paragraph')}>
          {description ?
            description :
            "Lorem ipsum Lorem ipsum lroemasdomsadomsad asdsd"}
        </p>
      </div>
    </div >
  )
}
export default CardPrice;