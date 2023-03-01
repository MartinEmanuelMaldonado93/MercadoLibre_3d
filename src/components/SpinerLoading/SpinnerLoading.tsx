import React from "react";
import style from "./SpinnerLoading.module.scss";
type props = {
  color?: string;
};
function SpinnerLoading({ color }: props) {
  return (
    <div className={style.ldsRoller} data-color={color}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default SpinnerLoading;
