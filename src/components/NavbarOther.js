import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import logoXen from '../img/logo.png';
import logoXfr from '../img/logoXfr.png';

import {useState} from 'react';
import {useTranslation} from 'react-i18next';

function NavbarOther() {  
  //Forced to repeat the translation code below since we need the variables
  const {t, i18n} = useTranslation();
  let defaultLang;
  defaultLang = (sessionStorage.getItem('lang') != null) ? defaultLang = sessionStorage.getItem('lang') : "fr";

  const [lang, setLang] = useState(defaultLang);

  updateAllCards();

  function setLangToOpposite() {
    if (lang === "en") {
      setLang("fr");
    } else {
      setLang("en");
    }
  }

  function displayLang() {
    return (lang === "en") ? "English" : "Française";
  }

  function carryForwardLang() {
    sessionStorage.setItem('lang', lang);
  }

  //Add listener to any checkout buttons
  const checkoutElem = document.getElementById("checkoutButton");
  if (checkoutElem != null) {
    checkoutElem.onClick = carryForwardLang();
  }

  function updateAllCards() {
    //These cards are so deeply nested that you have to manually update them
    const allCards = document.getElementsByClassName("card-title");

    if ((allCards != null) && (allCards.length > 0)) {
      for (var i = 0; i < allCards.length; i++) {
        const card = allCards[i];
        card.innerHTML = t(card.id);
      }
    }

    //Do the same for the card buttons as well as checkout
    const allCardButtons = document.getElementsByClassName("btn-primary");
    if ((allCardButtons != null) && (allCardButtons.length > 0)) {
      for (var i = 0; i < allCardButtons.length; i++) {
        const card = allCardButtons[i];

        card.innerHTML = t(card.name);
      }
    }

    //Repeat for card footers/text at bottom of cards
    const allCardData = document.getElementsByName("card-footer-inner");
    if ((allCardData != null) && (allCardData.length > 0)) {
      for (var i = 0; i < allCardData.length; i++) {
        const card = allCardData[i].children[0];

        card.innerHTML = t(card.getAttribute("name"));
      }
    }
  }

  return (
    <>  
      <Navbar style={{width: '100%', height: '100px'}} collapseOnSelect expand="lg" bg="dark" variant="dark">  
        <Container style={{height: '100%'}} fluid={true}>  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
          <Navbar.Collapse style={{height: '100%'}} id="responsive-navbar-nav">  
            <Nav style={{fontFamily: 'Rubik Mono One', fontSize: '20px', width: '100%', height: '100%'}} className="d-lg-flex align-items-center me-auto">  
              {/* HashLink fixes the lack of auto scrolling to sections in Link */}
              <HashLink onClick={carryForwardLang()} style={{width: '100%', textDecoration: "none", color: "white"}} to="/#aboutus">{t('ABOUT US')}</HashLink> 
              <Link onClick={carryForwardLang()} style={{fontSize: '30px', width: '100%', height: "100%"}} to="/"><img style={{height: "100%"}} src={i18n.language === "en" ? logoXen : logoXfr} alt="logo"></img></Link>
              <HashLink onClick={carryForwardLang()} style={{width: '100%', textDecoration: "none", color: "white"}} to="/#contactus">{t('CONTACT US')}</HashLink> 
            </Nav>
          </Navbar.Collapse>  
        </Container>  
      </Navbar>
      <div style={{float: 'right', padding: '10px'}}>
        <button id="translatebutton" onClick={() => {i18n.changeLanguage(lang); updateAllCards(); setLangToOpposite();}}>{displayLang()}</button>
      </div>
    </>  
  ); 
}  
export default NavbarOther;  