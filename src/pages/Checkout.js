

import React from 'react';

import {Button} from "react-bootstrap";
import {Link} from 'react-router-dom';

import CheckoutItems from '../components/CheckoutItems';
import NavbarOther from '../components/NavbarOther';

import "bootstrap/dist/css/bootstrap.min.css";

function setQuantities() {
    var listItems = document.getElementsByClassName('card');
    var total = Number(0);

    var quantityInfo = [];
    
    for (var i = 0; i < listItems.length; i++) {
        var name = listItems[i].getElementsByClassName("card-title")[0].innerHTML;
        var quantity = listItems[i].getElementsByClassName("form-select")[0].value;
        var price = listItems[i].getElementsByClassName("card-text")[0].innerHTML.substring(1);
        var totalpriceitem = Number(quantity) * Number(price);

        total += totalpriceitem;
        quantityInfo = quantityInfo.concat([[name, quantity, totalpriceitem]]);
    }

    sessionStorage.setItem('total', total.toFixed(2));
    sessionStorage.setItem('quantityInfo', JSON.stringify(quantityInfo));
}

function Checkout() {
    return (
        <div className="Checkout">
            <header className="App-header">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik+Mono+One"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Overpass"></link>

                <NavbarOther />
            </header>

            <div style={{marginTop: '5%', marginLeft: '25%', marginRight: '25%', fontFamily: "Overpass"}}>
                <div style={{display: 'flex', fontSize: '24px'}}>
                    <span style={{flexGrow: '1'}}>
                        Selection
                    </span>
                    <span style={{flexGrow: '1'}}>
                        Order Details
                    </span>
                    <span style={{flexGrow: '1'}}>
                        Your Info
                    </span>
                    <span style={{flexGrow: '1'}}>
                        Delivery
                    </span>
                </div>
                <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100" style={{width: '25%', backgroundColor: 'green'}}>
                    </div>
                </div>

                <p id="totalStr" style={{marginTop: '10%', fontSize: '38px', fontFamily: 'Overpass'}}>You've Selected</p>
                <div style={{gap: '25px', display: 'flex', flexWrap: 'wrap'}}>
                    <CheckoutItems />
                </div>

                <Link to='/checkoutdetails'><Button className='bg-dark' style={{width: '100%', marginTop: '5%'}} onClick={() => {setQuantities()}}>Checkout</Button></Link>
            </div>
        </div>
    );
}
  
export default Checkout;