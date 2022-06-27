import React from 'react'
import style from './Payments.module.scss';
import {FaRegCreditCard,FaCcMastercard,FaHandHoldingUsd,
    FaMoneyBillWave} from "react-icons/fa";

//FaRegCreditCard
function Payments() {
  return (
    <section className={ style.payment_container }> 
        <div> 
            <div className={style.payment_icon}>
                <FaRegCreditCard/>
            </div>
            <p>Targeta de Crédito
                <a>Ver promociones bancarias</a>
            </p>  
        </div> 
        <div>
            <div className={style.payment_icon}>
                <FaCcMastercard/>
            </div>
            <p>Targeta de débito<a>Ver más</a></p>
        </div> 
        <div>
            <div className={style.payment_icon}>
                <FaHandHoldingUsd/>
            </div>
            <p>Cuotas sin tarjeta
                <a>Conocé Mercado crédito</a>
            </p>

        </div>
        <div>
            <div className={style.payment_icon}>
                <FaMoneyBillWave/>
            </div>
            <p>Efectivo
                <a>Ver más</a>
            </p>
        </div>  
       
       <div className={style.plus_icon}><div>➕</div></div>
    </section>
  );
};

export default Payments;