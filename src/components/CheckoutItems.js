import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import cheesefrenzy from '../img/catalogue/cheesefrenzy.png';
import porkcuts from '../img/catalogue/porkcuts.png';
import newyorkstyle from '../img/catalogue/newyorkstyle.png';
import greenieflatbreads from '../img/catalogue/greenieflatbreads.png';
import stuffedcrust from '../img/catalogue/stuffedcrust.png';
import balancio from '../img/catalogue/balancio.png';

import {useTranslation} from 'react-i18next';

const pizzas = [{
    id: '0', name: 'Cheese Frenzy', price: '29.99', picture: cheesefrenzy, meatanddairytopping: ['cheese'], veggietopping: [], crustthickness: 'thin', typeofcrust: 'newyorkstyle', crusttexture: 'chewy'
  },
  {
    id: '1', name: 'Pork Cuts', price: '15', picture: porkcuts, meatanddairytopping: ['pepperoni (pork)'], veggietopping: ['red pepper'], crustthickness: 'medium', typeofcrust: 'detroitstyle', crusttexture: 'crispy'
  },
  {
    id: '2', name: 'New York Style', price: '9.99', picture: newyorkstyle, meatanddairytopping: ['cheese, chicken'], veggietopping: ['onion'], crustthickness: 'thick', typeofcrust: 'newyorkstyle', crusttexture: 'thick'
  },
  {
    id: '3', name: 'Greenie Flatbreads', price: '7', picture: greenieflatbreads, meatanddairytopping: [], veggietopping: ['basil', 'tomato'], crustthickness: 'thin', typeofcrust: 'flatbread', crusttexture: 'chewy'
  },
  {
    id: '4', name: 'Stuffed Crust', price: '13', picture: stuffedcrust, meatanddairytopping: ['cheese', 'pepperoni (beef)'], veggietopping: [], crustthickness: 'thick', typeofcrust: 'stuffedcrust', crusttexture: 'thick'
  },
  {
    id: '5', name: 'Balancio', price: '24', picture: balancio, meatanddairytopping: ['cheese, chicken'], veggietopping: ['green pepper', 'black olive'], crustthickness: 'medium', typeofcrust: 'newyorkstyle', crusttexture: 'crispy'
  },
];

function CheckoutItems() {
    var fullCart = JSON.parse(sessionStorage.getItem('cart'));

    const {t, i18n} = useTranslation();

    return fullCart.map((pizza) => (
      <div className="card shadow" style={{marginTop: '10px', width: "20rem", flexBasis: '40%', flexGrow: '1'}} key={pizzas.find(x => x.name === JSON.parse(pizza)).id}>
        <img className="card-img-top" src={pizzas.find(x => x.name === JSON.parse(pizza)).picture} alt="Pizza" style={{height: '70%'}}></img>
        <div className="card-body">
            <h5 id={pizza.replaceAll("\"", "")} className="card-title" style={{fontWeight: 'bold', fontSize: '1.5rem'}}>{t(JSON.parse(pizza))}</h5>
            <p className="card-text">${pizzas.find(x => x.name === JSON.parse(pizza)).price}</p>
        </div>
        <div className="card-footer text-muted">
            <select className="form-select" defaultValue="1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div>
      </div>
    ));
}
  
export default CheckoutItems;