import React from 'react';
import '../components/styles/components_scss/Home.scss';
// Components
// import NavBarMenu from "../../src/components/NavbarMenu/NavBarMenu";
// import Carousel from "../../src/components/Carousel/Carousel";
// import CardPrice from "../../src/components/CardPrice";
// import CardMeta from "../../src/components/CardMeta";
// import Payments from "../../src/components/Payments";
// import BannerSuscription from "../../src/components/BannerSuscription/BannerSuscription";

function App() {
  return (
    <div className="main-page">
      {/* <NavBarMenu /> */}
      <div className="body-page">
        {/* <Carousel /> */}
        {/* <Payments /> */}

        <section className='ultima-vista'>
          <div className='historial'>Basado en tu ultima vista
            <a rel="noreferrer" target="_blank" href="https://github.com/MartinEmanuelMaldonado93">
              Ver Historial...
            </a>
          </div>

          {/* <div className='product-cards' >
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
          </div> */}
        </section>

        {/* <CardMeta />

        <BannerSuscription /> */}
       

        
      </div>
    </div>
  );
}

export default App;