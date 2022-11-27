import React, { Suspense } from "react";
import "./Home.scss";
import { Navbar, Carousel, CardProduct, ContainerCardProduct, CanvasProduct, Iphone13 } from "@components";
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
    {/* <Iphone13 /> */}
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50, near: 0.1, far: 500 }} >
      <ambientLight intensity={0.7} />
      <pointLight position={[-5, -5, -5]} intensity={4} />
      <pointLight position={[3, 3, -5]} />

      <Suspense fallback={ 'loading...' }>
        <Float
          position={[0, -0.7, 0]}
          rotation={[0.1, 0, 0]}
          rotationIntensity={3}
          floatIntensity={2}
          speed={2} >

          <Iphone13 />

        </Float>
      </Suspense>

      <Environment ground background={true} files={'royal_esplanade_1k.hdr'} />
      <OrbitControls
        minDistance={2}
        maxDistance={16}
        enableDamping={true}
        enableZoom={true}
        enablePan={false} />
    </Canvas>
    {/* </CanvasProduct> */}

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
