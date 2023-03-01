import React from "react";
import { createCss } from "@utils";
import style from "./ContainerCardProduct.module.scss";

const css = createCss(style);
type props = {
  children?: JSX.Element | JSX.Element[];
};
const ContainerCardProduct = ({ children }: props) => {
  return (
    <div className={css("container")}>
      {/* <div className={css('container__title')}>
                Producto destacado:
            </div> */}
      <div className={css("container__card")}>{children}</div>
    </div>
  );
};

export default ContainerCardProduct;
