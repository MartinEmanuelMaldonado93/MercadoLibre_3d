import React, { Suspense } from "react";
import "./Home.scss";
import { Navbar, Carousel, CardProduct, ContainerCardProduct, CanvasProduct, Iphone13, BannerSuscription } from "@components";
import BuyProduct3D from "../BuyProduct3D/BuyProduct3D";
import { Float, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { Navbar, CanvasProduct } from "@components";

function Home() {
  return <div className="home">
    <Navbar />
    <Carousel />
    <ContainerCardProduct>
      <CardProduct
        imgUrl="../images/products/redshoes.jpg"
        price={34000}
        freeShip={true}
        titleProd="John fool"
        description="Zapatillas John Fool Art 320 Hombre/Mujer Urbanas (34/45)" />
    </ContainerCardProduct>
    {/* 3d product */}

    {/* <BuyProduct3D /> */}

    {/* </CanvasProduct> */}
    <BannerSuscription />
    {/* banner */}
    <picture className="home__picture">
      <img loading="lazy"
        src="../images/fake_promo_large.png" alt="promo_img" />
    </picture>
    <footer className="home__footer">
      <div className="home__footer--content">
        <img src="../images/fake_footer.png" alt="false footer" />
        <p>
          Demo ficticia sin ninguna funcionalidad, solo el único propósito de fomentar nuevas ideas
          y productos dentro de la comunidad web**
        </p>
      </div>
    </footer>
  </div>;
}

export default Home;
