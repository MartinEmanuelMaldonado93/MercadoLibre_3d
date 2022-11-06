import React from 'react'
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

  return (
    <div className={css("container")}>
      <img className={css('container__img')}
        src={imgUrl} alt="red shoes" />
      <div className={css("container__card")}>
        <span>${price}</span>
        <span>
          {freeShip ? "Envío gratis" : ""}
        </span>
        <p className={css('container__paragraph')}>
          {description ?
            description :
            "Lorem ipsum lroemasdomsadomsad asdsd asdsadd sdadscripcion Lorem ipsum lroemasdomsadomsad asdsd"}
        </p>
      </div>
    </div >
  )
}
export default CardPrice;