import React from 'react';
import './Home.scss';
// Components
import NavBarMenu from "./components/NavBarMenu";
import Carousel from "./components/Carousel";
import CardPrice from "./components/CardPrice";
import CardMeta from "./components/CardMeta";
import Payments from "./components/Payments";
import BannerSuscription from "./components/BannerSuscription";


function Home() {
  return (
    <div className="main-page">
      <NavBarMenu />
      <div className="body-page">
        <Carousel />
        <Payments />

        <section className='ultima-vista'>
          <div className='historial'>Basado en tu ultima vista
            <a rel="noreferrer" target="_blank" href="https://github.com/MartinEmanuelMaldonado93">
              Ver Historial...
            </a>
          </div>

          <div className='product-cards' >
            {Array.from(Array(5)).map((product, i) => (
              <CardPrice
                key={i * Date.now()}
                imageUrl='./images/products/redshoes.jpg' />
            ))}
          </div>
          <div className='product-cards01' >
            {Array.from(Array(5)).map((product, i) => (
              <CardPrice
                key={i * Date.now()}
                imageUrl='../images/products/tv.jpg' />
            ))}
          </div>
        </section>

        <CardMeta />

        <BannerSuscription />
        <img src="../images/streamingpromo.png" />

        <footer className="footer">
          <div className="footer__content">
            <img src="/images/falsefooter.png" alt="false footer" />
            <div className="disclaimer">
              Demo ficticia sin ninguna funcionalidad, solo el único propósito de fomentar nuevas ideas
              y productos dentro de la comunidad web**
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;