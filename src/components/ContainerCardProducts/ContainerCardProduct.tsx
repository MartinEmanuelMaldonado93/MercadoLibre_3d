import React, { ReactNode, CSSProperties } from "react";

type props = {
    children?: JSX.Element | JSX.Element[],
}
const ContainerCardProduct = ({ children }: props) => {
    const css: CSSProperties = {
        display: "grid",
        placeContent: "center",
        placeItems: "center",
        margin: "2rem",
        perspective: "800px",
        transformStyle: "preserve-3d",
        perspectiveOrigin: "center center",
    };
    return <div style={css}>
        {children}
    </div>;
}

export default ContainerCardProduct;
