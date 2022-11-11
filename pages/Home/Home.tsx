import React from "react";
import "./Home.scss";
import { Navbar, Carousel, CardProduct, ContainerCardProduct } from "@components";

function Home() {
  return <div className="home">
    <Navbar />
    <Carousel />
    <ContainerCardProduct>
      <CardProduct
        imgUrl="../images/products/redshoes.jpg"
        price={450}
        freeShip={true} />
    </ContainerCardProduct>
    {/* 3d product */}

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
