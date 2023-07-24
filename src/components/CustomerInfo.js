import "bootstrap/dist/css/bootstrap.min.css";

import {useTranslation} from 'react-i18next';

function CheckoutItems() {
    const {t, i18n} = useTranslation();

    return (
        <div style={{display: 'flex', flexWrap: 'wrap', textAlign: 'left', height: '400px', marginTop: '10px', fontSize: '30px'}}>
            <div style={{width: '45%', marginRight: '10%'}}>
                <label className="form-label">{t('Name')}</label>
                <input className="form-control bg-dark text-white" />
            </div>

            <div style={{width: '45%'}}>
                <label className="form-label">{t('Street Number')}</label>
                <input className="form-control bg-dark text-white" />
            </div>

            <div style={{width: '45%', marginRight: '10%'}}>
                <label className="form-label">{t('City')}</label>
                <input className="form-control bg-dark text-white" />
            </div>

            <div style={{width: '45%'}}>
                <label className="form-label">{t('Province')}</label>
                <input className="form-control bg-dark text-white" />
            </div>
        </div>
    );
}
  
export default CheckoutItems;