import React, { useState } from 'react';
import { Accordion, Button, Form } from "react-bootstrap";

import cheesefrenzy from '../img/catalogue/cheesefrenzy.png';
import porkcuts from '../img/catalogue/porkcuts.png';
import newyorkstyle from '../img/catalogue/newyorkstyle.png';
import greenieflatbreads from '../img/catalogue/greenieflatbreads.png';
import stuffedcrust from '../img/catalogue/stuffedcrust.png';
import balancio from '../img/catalogue/balancio.png';

import {useTranslation} from 'react-i18next';

const pizzas = [{
    id: '0', name: 'Cheese Frenzy', price: '29.99', picture: cheesefrenzy, meatanddairytopping: ['cheese'], veggietopping: [], crustthickness: 'thin', typeofcrust: 'new york style', crusttexture: 'chewy'
  },
  {
    id: '1', name: 'Pork Cuts', price: '15', picture: porkcuts, meatanddairytopping: ['pork pepperoni'], veggietopping: ['red pepper'], crustthickness: 'medium', typeofcrust: 'detroit style', crusttexture: 'crispy'
  },
  {
    id: '2', name: 'New York Style', price: '9.99', picture: newyorkstyle, meatanddairytopping: ['cheese', 'chicken'], veggietopping: ['onion'], crustthickness: 'thick', typeofcrust: 'new york style', crusttexture: 'chewy'
  },
  {
    id: '3', name: 'Greenie Flatbreads', price: '7', picture: greenieflatbreads, meatanddairytopping: [], veggietopping: ['basil', 'tomato'], crustthickness: 'thin', typeofcrust: 'flatbread', crusttexture: 'chewy'
  },
  {
    id: '4', name: 'Stuffed Crust', price: '13', picture: stuffedcrust, meatanddairytopping: ['cheese', 'beef pepperoni'], veggietopping: [], crustthickness: 'thick', typeofcrust: 'stuffed', crusttexture: 'crispy'
  },
  {
    id: '5', name: 'Balancio', price: '24', picture: balancio, meatanddairytopping: ['cheese', 'chicken'], veggietopping: ['green pepper', 'black olive'], crustthickness: 'medium', typeofcrust: 'new york style', crusttexture: 'crispy'
  },
];

function addToCart(nameItem) {
  var pizzaConverted = JSON.stringify(nameItem);

  var fullCart;

  if (sessionStorage.getItem('cart')) {
    //Cumulative
    fullCart = JSON.parse(sessionStorage.getItem('cart'));
  } else {
    fullCart = [];
  }

  fullCart.push(pizzaConverted);

  var cartConverted = JSON.stringify(fullCart);

  sessionStorage.setItem('cart', cartConverted);

  document.getElementById("checkoutButton").disabled = (fullCart === undefined || fullCart.length === 0);
}

function removeFromCart(nameItem) {
  var pizzaConverted = JSON.stringify(nameItem);

  var fullCart;

  if (sessionStorage.getItem('cart')) {
    //Cumulative
    fullCart = JSON.parse(sessionStorage.getItem('cart'));
  } else {
    fullCart = [];
  }

  if (fullCart.length >= 1) {
    fullCart.splice(fullCart.indexOf(pizzaConverted), 1);
  }

  var cartConverted = JSON.stringify(fullCart);

  sessionStorage.setItem('cart', cartConverted);

  document.getElementById("checkoutButton").disabled = (fullCart === undefined || fullCart.length === 0);
}

const disableList = [];

//Initialize disableList
for (let index in pizzas) {
  disableList[pizzas[index].name] = [false, true];
}

function filterCatalogue(filteredPizzas) {
  return filteredPizzas.map((pizza) => {
    return <div className="card shadow" style={{width: "20rem", flexBasis: '40%', flexGrow: '1'}} key={pizza.id}>
        <img className="card-img-top" src={pizza.picture} alt="Pizza" style={{height: '70%'}}></img>
        <div className="card-body">
            <h5 id={pizza.name} className="card-title" style={{fontWeight: 'bold', fontSize: '1.5rem'}}>{pizza.name}</h5>
            <p className="card-text">${pizza.price}</p>
        </div>
        <div className="p-3 w-100 d-flex align-self-end justify-content-between">
          <Button name="Add to Cart" disabled={disableList[pizza.name][0]} className='bg-dark' onClick={(e) => {addToCart(pizza.name); swap(e, pizza.name, 1);}}>Add to Cart</Button>
          <Button name="Remove from Cart" disabled={disableList[pizza.name][1]} className='bg-dark' onClick={(q) => {removeFromCart(pizza.name); swap(q, pizza.name, 0);}}>Remove from Cart</Button>
        </div>
    </div>
  });
}

function swap (e, pizzaname, i) {
  e.target.disabled = true;
  e.target.parentElement.children[i].disabled = false;
  disableList[pizzaname][1 - i] = true;
  disableList[pizzaname][i] = false;
  if (i === 1) {
    e.target.parentElement.children[i].onclick = function click(q) {removeFromCart(pizzaname); swap(q, pizzaname, 0);}
  }
}

const currentFilters = [];

function filterList(event, setItems) {
  const key = event.target.closest(".accordion-body").id;
  
  if (event.target.checked) {
    if (!currentFilters.hasOwnProperty(key)) currentFilters[key] = [];
    
    currentFilters[key].push(event.target.id.toLowerCase());
  } else {
    currentFilters[key] = currentFilters[key].filter(x => x !== event.target.id.toLowerCase());

    if (currentFilters[key].length === 0) delete currentFilters[key];
  }

  const keysCurrentFilters = Object.keys(currentFilters);
  if ((currentFilters != null)) {
    if (keysCurrentFilters != null) {
      if (keysCurrentFilters.length === 0) {
        setItems(filterCatalogue(pizzas))
      } else {
        //Logical OR within accordions, logical AND across accordions
        setItems(filterCatalogue(checkPizzasForValue()));
      }
    } else {
      setItems(filterCatalogue(pizzas));
    }
  }
}

function checkPizzasForValue() {
  const filteredPizzas = [];

  const keysCurrentFilters = Object.keys(currentFilters);

  pizzas.map(x => {
    //All key:value references must exist in x
    if (keysCurrentFilters.every((key) => (currentFilters[key].some(y => x[key].includes(y))))) {
      filteredPizzas.push(x)
    }
  });

  return filteredPizzas;
}

function CatalogueItems () {
    sessionStorage.setItem('cart', []);
    const [items, setItems] = useState(filterCatalogue(pizzas));
    const {t, i18n} = useTranslation();
  
    //Integrated SearchFilters and CatalogueItems to facilitate coding the faceted search
    return <div style={{marginTop: '10%', display: 'flex'}}>
      <div style={{fontFamily: 'Overpass', textAlign: 'left', width: '25%', marginRight: '10%'}}>
        <b style={{fontSize: '28px'}}>{t('Filters')}</b>
        <div>
            <Accordion style={{width: '100%', textAlign: 'left'}} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{t('Type of Topping')}</Accordion.Header>
                    <Accordion.Body>
                        { /* Types of toppings */ }
                        <Accordion alwaysOpen>

                            { /* Meat toppings */ }
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                  {t('Meat & Dairy')}
                                </Accordion.Header>

                                <Accordion.Body id="meatanddairytopping">
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox" onClick={event => filterList(event, setItems)} id={"Beef Pepperoni"} label={t("Beef Pepperoni")} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox" onClick={event => filterList(event, setItems)} id={"Cheese"} label={t("Cheese")} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox" onClick={event => filterList(event, setItems)} id={"Chicken"} label={t("Chicken")} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox" onClick={event => filterList(event, setItems)} id={"Pork Pepperoni"} label={t("Pork Pepperoni")} />
                                    </Form.Group>
                                </Accordion.Body>
                            </Accordion.Item>

                            { /* Vegetable toppings */ }
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    {t('Veggie')}
                                </Accordion.Header>

                                <Accordion.Body id="veggietopping">
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox" onClick={event => filterList(event, setItems)} id={"Basil"} label={t("Basil")} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox" onClick={event => filterList(event, setItems)} id={"Black olive"} label={t("Black olive")} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox" onClick={event => filterList(event, setItems)} id={"Green pepper"} label={t("Green pepper")} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox" onClick={event => filterList(event, setItems)} id={"Onion"} label={t("Onion")} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox" onClick={event => filterList(event, setItems)} id={"Red pepper"} label={t("Red pepper")} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox" onClick={event => filterList(event, setItems)} id={"Tomato"} label={t("Tomato")} />
                                    </Form.Group>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion style={{width: '100%', textAlign: 'left'}} alwaysOpen>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>{t('Crust Thickness')}</Accordion.Header>
                    <Accordion.Body id="crustthickness">
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" onClick={event => filterList(event, setItems)} id={"Thin"} label={t("Thin")} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" onClick={event => filterList(event, setItems)} id={"Medium"} label={t("Medium")} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" onClick={event => filterList(event, setItems)} id={"Thick"} label={t("Thick")} />
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <Accordion style={{width: '100%', textAlign: 'left'}} alwaysOpen>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>{t('Type of Crust')}</Accordion.Header>
                    <Accordion.Body id="typeofcrust">
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" onClick={event => filterList(event, setItems)} id={"Detroit style"} label={t("Detroit style")} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" onClick={event => filterList(event, setItems)} id={"Flatbread"} label={t("Flatbread")} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" onClick={event => filterList(event, setItems)} id={"Stuffed"} label={t("Stuffed")} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" onClick={event => filterList(event, setItems)} id={"New York style"} label={t("New York style")} />
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion style={{width: '100%', textAlign: 'left'}} alwaysOpen>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>{t('Crust Texture')}</Accordion.Header>
                    <Accordion.Body id="crusttexture">
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" onClick={event => filterList(event, setItems)} id={"Chewy"} label={t("Chewy")} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" onClick={event => filterList(event, setItems)} id={"Crispy"} label={t("Crispy")} />
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
      </div>

      <div id="replaceInner" style={{width: '65%', gap: '25px', display: 'flex', flexWrap: 'wrap'}}>
        {items}
      </div>
    </div>
}

export default CatalogueItems;