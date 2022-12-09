import React from 'react'
import style from './BannerSuscription.module.scss';
import { createCss } from '@utils';
import disneyLogo from "@assets/logos/disneyplus.png";
import starLogo from "@assets/logos/star.png";
import meliLogo from "@assets/logos/meli.png";
import meliPayLogo from "@assets/logos/paymeli.png";
const css = createCss(style);

function BannerSuscription() {
    return (
        <div className={css("banner")}>
            <div className={css("banner__suscribe")}>
                <div>
                    Suscribite al nivel 6
                </div>
                <div className={css("banner__suscribe--price")}>
                    <span>
                        <em>$1.199</em>
                        $399 / mes
                    </span>
                    <div>
                        67% OFF TODO UN AÑO
                    </div>
                </div>
            </div>
            <div className={css("banner__logos")}>
                <div className={css('banner__logos--title')}>
                    Conseguí los mejores beneficios en Mercado Libre y Mercado Pago
                </div>

                <img className={css('banner__logos--img')} src={disneyLogo} />
                <div>Disney sin cargo</div>
                <img className={css('banner__logos--img')} src={starLogo} />
                <div> Start+ sin cargo</div>
                <img className={css('banner__logos--img')} src={meliLogo} />
                <div> Beneficios en mercado libre</div>
                <img className={css('banner__logos--img')} src={meliPayLogo}/>
                <div> Mas descuentos con Mercado Pago</div>
            </div>
            <div className={css("banner__footer")}>
                <button className='banner-btn'>Suscribite</button>
            </div>
        </div>
    );
};

export default BannerSuscription;