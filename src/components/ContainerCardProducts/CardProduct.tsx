import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'
import { createCss } from "@utils";
import styles from "./CardProduct.module.scss";

type props = {
  imgUrl: string,
  price: number,
  description?: string,
  freeShip?: boolean,
}
const css = createCss(styles);

function CardPrice({ imgUrl, price, description, freeShip }: props) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const curr = useRef({ currX: 0, currY: 0 });
  const card = useRef<HTMLDivElement>();
  let start, previous;
  function RAQ() {
    requestAnimationFrame(
      (clock) => {
        let { currX, currY } = curr.current;
        // Lerp 
        currX = (currX + (pos.x - currX) * 0.15);
        currY = (currY + (pos.y - currY) * 0.15);

        const { innerWidth, innerHeight } = window;
        const rotX = (currY / innerHeight * -2) + 1;
        const rotY = (currX / innerWidth * 2) - 1;
        console.log(String(rotX), String(rotY));

        card.current.style.setProperty("--rotX", String(rotX))
        card.current.style.setProperty("--rotY", String(rotY))
        RAQ();
      }
    );
  };

  useEffect(() => {
    let { currX, currY } = curr.current;
    // Lerp
    // currX = (currX + (pos.x - currX) * 0.15);
    // currY = (currY + (pos.y - currY) * 0.15);

    currX = pos.x;
    currY = pos.y;

    const { innerWidth, innerHeight } = window;
    const rotX = ((currY / innerHeight) * -2) + 1;
    const rotY = ((currX / innerWidth) * 2) - 1;
    card.current.style.setProperty("--rotX", String(rotX))
    card.current.style.setProperty("--rotY", String(rotY))

    const mouseY = pos.y - (card.current.clientHeight / 2);
    const mouseX = pos.x - (card.current.clientWidth / 2);

    card.current.style.setProperty("--mouseX", `${mouseX}px`)
    card.current.style.setProperty("--mouseY", `${mouseY}px`)
    // shadow 
    // card.current.style.setProperty("--x-shadow", `${rotX*10}px`)
    // card.current.style.setProperty("--y-shadow", `${rotY*10}px`)
    // card.current.style.transform = "translateZ(10px)";
    return () => {
      // cancelAnimationFrame(1);
    };
  }, [pos]);

  function onMouseMove(event: MouseEvent<HTMLDivElement>) {
    let e = event.touches ? event.touches[0] : event;
    // console.log(e);
    setPos({ x: e.clientX, y: e.clientY });
  }

  return (
    <div className={css("card")}
      ref={card}
      onMouseMove={onMouseMove}>
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