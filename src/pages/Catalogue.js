import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from 'react-router-dom';

import NavbarOther from '../components/NavbarOther';
import CatalogueItems from '../components/CatalogueItems';

import "bootstrap/dist/css/bootstrap.min.css";

import {useTranslation} from 'react-i18next';

function Catalogue() {
    const {t, i18n} = useTranslation();

    function carryForwardLang() {
        sessionStorage.setItem('lang', i18n.language === "en" ? "fr" : "en");
    }

    return (
        <div className="Catalogue">
            <header className="App-header">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik+Mono+One"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Overpass"></link>

                <NavbarOther />
            </header>

            <div style={{marginLeft: "10%", marginRight: "10%"}}>
                <CatalogueItems />

                <Link onClick={carryForwardLang()} to='/checkout'><Button name="Checkout" id={"checkoutButton"} disabled={true} className='bg-dark' style={{width: '100%', marginTop: '5%'}}>Checkout</Button></Link>
            </div>
        </div>
    );
}
  
export default Catalogue;