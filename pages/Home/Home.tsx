import React, { lazy, Suspense } from "react";
import {
  Navbar, Carousel, CardProduct, ContainerCardProduct, BannerSuscription
} from "@components";
import { Link, Route, Routes } from "react-router-dom";
import BuyProduct3D from "pages/BuyProduct3D/BuyProduct3D";
import { createCss } from "@utils";
import style from "./Home.module.scss";
const css = createCss(style);

const Banner3D = lazy(() => import("../../src/components/Banner3D/Banner3D"));

function Home() {
  return <div className={css('home')} >
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
    <BannerSuscription />
    <picture className={css('home__picture')}>
      <img loading="lazy"
        src="../images/fake_promo_large.png" alt="promo_img" />
    </picture>
    {/* <Banner3D /> */}
    <footer className={css('home__footer')}>
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
