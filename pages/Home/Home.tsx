import React from "react";
import "./Home.scss";

function Home() {
  return <div className="home">
    {/* navbar */}
    {/* carrousel */}
    {/* products */}

    {/* 3d product */}

    {/* banner */}
    <picture className="home__picture">
      <img loading="lazy"
        src="/images/spromo-large.png" alt="promo_img" />
    </picture>
    {/* footer */}
    <footer className="footer">
      <div className="footer__content">
        <img src="/images/falsefooter.png" alt="false footer" />
        <div className="disclaimer">
          Demo ficticia sin ninguna funcionalidad, solo el único propósito de fomentar nuevas ideas
          y productos dentro de la comunidad web**
        </div>
      </div>
    </footer>
  </div>;
}

export default Home;
