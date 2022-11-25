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
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const y = useRef<number>();
  const x = useRef<number>();
  const [enterFlag, setEnter] = useState<boolean>();
  const curr = useRef({ currX: 0, currY: 0 });
  const card = useRef<HTMLDivElement>();
  const RAQ_ID = useRef<number>();
  const previousTimeRef = useRef<number>();
  
  let currX = 0, currY = 0;

  const animate = (time: number) => {
    if (previousTimeRef.current && enterFlag) {
      const delta = time - previousTimeRef.current;
      console.log("running ");
      // Lerp
      currX = (currX + (x.current - currX) * 0.15);
      currY = (currY + (y.current - currY) * 0.15);
      // currX = x.current;
      // currY = y.current;

      const { innerWidth, innerHeight } = window;
      const rotX = ((currY / innerHeight) * -2) + 1;
      const rotY = ((currX / innerWidth) * 2) - 1;

      card.current.style.setProperty("--rotX", String(rotX))
      card.current.style.setProperty("--rotY", String(rotY))

      // Light on the card 
      const rect = card.current.getBoundingClientRect();
      const lightX = x.current - rect.left;
      const lightY = y.current - rect.top;
      card.current.style.setProperty("--mouseX", `${lightX}px`)
      card.current.style.setProperty("--mouseY", `${lightY}px`)
      // shadow
      // console.log(rect)
      const halfHeight = rect.height / 2;// 163 ---326
      const halfWidth = rect.width / 2;// 95 ---- 190
      const shadowY = (halfHeight - lightY) / 100;
      const shadowX = (halfWidth - lightX) / 100;
      card.current.style.setProperty("--x-shadow", `${shadowX * 4}px`)
      card.current.style.setProperty("--y-shadow", `${shadowY * 4}px`)
    }
    previousTimeRef.current = time;
    RAQ_ID.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    console.count("useEfect ");
    RAQ_ID.current = requestAnimationFrame(animate);

    return function cleanUp() {
      cancelAnimationFrame(RAQ_ID.current);
    }
  }, [enterFlag]);
  // let currX = 0, currY = 0;
  // useEffect(() => {
  //   // console.count();
  //   // let { currX, currY } = curr.current;
  //   // Lerp
  //   // currX = (currX + (pos.x - currX) * 0.15);
  //   // currY = (currY + (pos.y - currY) * 0.15);
  //   currX = pos.x;
  //   currY = pos.y;

  //   const { innerWidth, innerHeight } = window;
  //   const rotX = ((currY / innerHeight) * -2) + 1;
  //   const rotY = ((currX / innerWidth) * 2) - 1;

  //   card.current.style.setProperty("--rotX", String(rotX))
  //   card.current.style.setProperty("--rotY", String(rotY))

  //   // Light on the card 
  //   const rect = card.current.getBoundingClientRect();
  //   const lightX = pos.x - rect.left;
  //   const lightY = pos.y - rect.top;
  //   card.current.style.setProperty("--mouseX", `${lightX}px`)
  //   card.current.style.setProperty("--mouseY", `${lightY}px`)
  //   // shadow
  //   // console.log(rect)
  //   const halfHeight = rect.height / 2;// 163 ---326
  //   const halfWidth = rect.width / 2;// 95 ---- 190
  //   const shadowY = (halfHeight - lightY) / 100;
  //   const shadowX = (halfWidth - lightX) / 100;
  //   card.current.style.setProperty("--x-shadow", `${shadowX * 4}px`)
  //   card.current.style.setProperty("--y-shadow", `${shadowY * 4}px`)

  //   return () => {
  //     // cancelAnimationFrame(1);
  //   };
  // }, [pos]);

  function onMouseMove(event: any) {
    let e = event.touches ? event.touches[0] : event;
    // setPos({ x: e.clientX, y: e.clientY });
    x.current = e.clientX;
    y.current = e.clientY;
    if (!enterFlag) {
      setEnter(true);
    }
    // let x = e.clientX;
    // let y = e.clientY;
    // runAnimation(x, y);
  }
  function onLeave() {
    console.log(" chau ")
    setEnter(false);
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