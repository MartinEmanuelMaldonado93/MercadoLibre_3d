import React from 'react' 
import './BannerSuscription.scss';



function BannerSuscription() {
  return (
    <div className='banner-container'>
        <div className='banner-title'> 
            <div className="suscribite">
                Suscribite al nivel 6
            </div>

            <div className='offer'>
                <span className='offer-prev-price'>
                    <em>$1.199</em>
                    $399 / mes            
                </span>
                <div className='offer-year'>
                    67% OFF TODO UN AÑO
                </div>
            </div>
        </div>
        <div className='banner-logos'>
            <div className='banner-logos-subtitle'>
                Conseguí los mejores beneficios en Mercado Libre y Mercado Pago
            </div>

            <img style={{height:'3rem', borderRadius:'50%'}} 
            src='./images/disneyplus.png' />
            <div>Disney sin cargo</div>
            <img style={{height:'3rem', borderRadius:'50%'}} 
            src='./images/star.png' />
            <div> Start+ sin cargo</div>
            <img style={{height:'3rem', borderRadius:'50%'}} 
            src='./images/meli.png' />
            <div> Beneficios en mercado libre</div>
            <img style={{height:'3rem', borderRadius:'50%'}} 
            src='./images/paymeli.png' />
            <div> Mas descuentos con Mercado Pago</div>
        </div>
        <div className='banner-footer'>
            <button className='banner-btn'>Suscribite</button>
        </div>
    </div>
  );
};

export default BannerSuscription