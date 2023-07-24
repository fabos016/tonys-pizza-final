import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';

function NavbarHome() {  
  //Forced to repeat the translation code below since we need the variables
  const {t, i18n} = useTranslation();
  let defaultLang;
  defaultLang = (sessionStorage.getItem('lang') != null) ? sessionStorage.getItem('lang') : "fr";

  //lang is what the button should say (the opposite of the currently displayed language)
  const [lang, setLang] = useState(defaultLang);

  //Mismatch
  let newLang = i18n.language;
  if (i18n.language === sessionStorage.getItem('lang')) {
    newLang = (i18n.language === "en") ? "fr" : "en";
  }

  useEffect(() => 
  {i18n.changeLanguage(newLang)}, []);

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

  return (  
    <>  
      <Navbar style={{width: '100%'}} collapseOnSelect expand="lg" bg="dark" variant="dark">  
        <Container fluid={true}>  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
          <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav style={{fontFamily: 'Rubik Mono One', fontSize: '20px', width: '100%'}} className="d-lg-flex align-items-center me-auto">  
              <Nav.Link style={{width: '100%'}} href="#aboutus">{t('ABOUT US')}</Nav.Link> 
              <Link onClick={carryForwardLang()} style={{fontSize: '30px', width: '100%', height: "100%", textDecoration: 'none', color: 'white'}} to="/catalogue">{t('ORDER PIZZA FOR DELIVERY')}</Link>
              <Nav.Link style={{width: '100%'}} href="#contactus">{t('CONTACT US')}</Nav.Link>
            </Nav>
          </Navbar.Collapse>  
        </Container>
      </Navbar>
      <div style={{float: 'right', padding: '10px'}}>
        <button id="translatebutton" onClick={() => {i18n.changeLanguage(lang); setLangToOpposite();}}>{displayLang()}</button>
      </div>
    </>  
  ); 
}  
export default NavbarHome;  