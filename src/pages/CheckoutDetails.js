import React from 'react';

import {Button} from "react-bootstrap";
import {Link} from 'react-router-dom';

import Details from '../components/Details';
import NavbarOther from '../components/NavbarOther';

import "bootstrap/dist/css/bootstrap.min.css";

function CheckoutDetails() {
    return (
        <div className="CheckoutDetails">
            <header className="App-header">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik+Mono+One"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Overpass"></link>

                <NavbarOther />
            </header>

            <div style={{marginTop: '5%', marginLeft: '25%', marginRight: '25%'}}>
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
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="50"
                        aria-valuemin="0" aria-valuemax="100" style={{width: '50%', backgroundColor: 'green'}}>
                    </div>
                </div>

                <p style={{marginTop: '10%', fontSize: '38px', fontFamily: 'Overpass'}}>Order Total: ${sessionStorage.getItem('total')}</p>
                <div style={{gap: '25px', display: 'flex', flexWrap: 'wrap'}}>
                    <Details />
                </div>

                <Link to='/checkoutplaceorder'><Button className='bg-dark' style={{width: '100%', marginTop: '5%'}}>Next</Button></Link>
            </div>
        </div>
    );
}
  
export default CheckoutDetails;