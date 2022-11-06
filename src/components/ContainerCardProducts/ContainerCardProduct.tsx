import React, {ReactNode, CSSProperties} from "react";

type props = {
    children?:JSX.Element | JSX.Element[],
}
const ContainerCardProduct = ({children}: props) => {
    const css: CSSProperties = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr)",
    };
    return <div style={css}>
        { children }
  </div>;
}

export default ContainerCardProduct;
