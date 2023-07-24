import React from 'react';

import OrderContent from '../components/OrderContent';
import NavbarOther from '../components/NavbarOther';

import "bootstrap/dist/css/bootstrap.min.css";

import {useTranslation} from 'react-i18next';

function Order() {
    const {t, i18n} = useTranslation();

    return (
        <div className="Order">
            <header className="App-header">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik+Mono+One"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Overpass"></link>

                <NavbarOther />
            </header>

            <div style={{marginTop: '5%', marginLeft: '25%', marginRight: '25%'}}>
                <b style={{fontSize: '38px', fontFamily: 'Overpass', color: 'green'}}>{t('Your order has been placed!')}</b>
                    
                <OrderContent />
                <b style={{fontSize: '18px', fontFamily: 'Overpass'}}>{t('NOTE: Payment is made in-person to the delivery driver upon pizza delivery.')}</b>
            </div>
        </div>
    );
}
  
export default Order;