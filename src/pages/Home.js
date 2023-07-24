import { Text } from 'react-native';

import NavbarHome from '../components/NavbarHome';

import logopizzabannerXen from '../img/logo-pizza-banner.png';
import cheesefrenzybannerXen from '../img/cheesefrenzybanner.png';
import porkdetroitbannerXen from '../img/porkdetroitbanner.png';
import greenieflatbreadsbannerXen from '../img/greenieflatbreadsbanner.png';
import newyorkstylebannerXen from '../img/newyorkstylebanner.png';
import stuffedcrustbannerXen from '../img/stuffedcrustbanner.png';
import linktocataloguebannerXen from '../img/linktocataloguebanner.png';
import storeimage from '../img/storeimage.png';
import tonyimage from '../img/tonyimage.png';

import logopizzabannerXfr from '../img/logopizzabannerXfr.png';
import cheesefrenzybannerXfr from '../img/cheesefrenzybannerXfr.png';
import porkdetroitbannerXfr from '../img/porkdetroitbannerXfr.png';
import greenieflatbreadsbannerXfr from '../img/greenieflatbreadsbannerXfr.png';
import newyorkstylebannerXfr from '../img/newyorkstylebannerXfr.png';
import stuffedcrustbannerXfr from '../img/stuffedcrustbannerXfr.png';
import linktocataloguebannerXfr from '../img/linktocataloguebannerXfr.png';

import {useTranslation} from 'react-i18next';

function Home() {
    const {t, i18n} = useTranslation();

    return (
        <div className="Home">
            <header className="App-header">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik+Mono+One"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Overpass"></link>
            <link rel="text/css" href='./components/NavbarHome.css'></link>

            <img style={{width: '100%', height: '600px'}} src={(i18n.language === 'en') ? logopizzabannerXen : logopizzabannerXfr} alt=""></img>
            <NavbarHome />
            </header>

            <div style={{marginLeft: "10%", marginRight: "10%"}}>
                {/* Row 1 */}
                <div style={{marginTop: '3%', height: '700px'}}>
                <img style={{width: '69%', height: '100%', marginRight: '1%'}} src={(i18n.language === 'en') ? cheesefrenzybannerXen : cheesefrenzybannerXfr} alt=""></img>
                <img style={{width: '30%', height: '100%'}} src={(i18n.language === 'en') ? porkdetroitbannerXen : porkdetroitbannerXfr} alt=""></img>
                </div>

                {/* Row 2 */}
                <img style={{marginTop: '3%', width: '100%', height: '50%'}} src={(i18n.language === 'en') ? newyorkstylebannerXen : newyorkstylebannerXfr} alt=""></img>

                <div style={{marginTop: '1%', height: '450px'}}>
                <img style={{width: '59%', marginRight: '1%', height: '100%'}} src={(i18n.language === 'en') ? greenieflatbreadsbannerXen : greenieflatbreadsbannerXfr} alt=""></img>
                <img style={{width: '40%', height: '100%'}} src={(i18n.language === 'en') ? stuffedcrustbannerXen : stuffedcrustbannerXfr} alt=""></img>
                </div>

                {/* Catalogue */}
                <img style={{marginTop: '3%', width: '100%', height: '50%'}} src={(i18n.language === 'en') ? linktocataloguebannerXen : linktocataloguebannerXfr} alt=""></img>

                {/* Contact Us */}
                <div id="contactus" className="shadow mb-5" style={{marginTop: '3%', display: 'flex', height: '400px'}}>
                <img style={{marginRight: '5%', height: '100%'}} src={storeimage} alt=""></img>
                <Text style={{fontFamily: "Overpass", fontSize: '20px', paddingTop: '30px'}}>
                    <b>631 Saquoi Rd, Ottawa, ON</b>
                    <b>{'\n'}{'\n'}{t('contactPageLine2')}</b>
                    <p>{t('contactPageLine3')}</p>
                    <p>8AM - 6PM</p>
                    {'\n'}
                    <b>{t('contactPageLine5')}</b>
                    <p>+1-800-323-2323</p>
                    <p>help@tonyspizza.com</p>
                </Text>
                </div>

                {/* About Us */}
                <div id="aboutus" className="shadow mb-5" style={{display: 'flex', marginTop: '3%', height: '600px'}}>
                <Text style={{fontFamily: "Overpass", paddingLeft: '30px', paddingTop: '30px', marginRight: '5%', fontSize: '32px'}}>
                    <b>{t('aboutPageLine1')}</b>

                    <b>{'\n'}{'\n'}{t('aboutPageLine2')}</b>
                    <p>{t('aboutPageLine3')}</p>

                    <b>{'\n'}{t('aboutPageLine4')}</b>
                    <p>{t('aboutPageLine5')}</p>
                </Text>
                
                <img style={{height: '100%'}} src={tonyimage} alt=""></img>
                </div>
            </div>
        </div>
    );
}
  
export default Home;