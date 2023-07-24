import './App.css';

import React, { useEffect } from 'react';
import Main from './components/Main'
import {useTranslation} from 'react-i18next';

function App() {
  const {t} = useTranslation();

  return (
    useEffect(() => {
      document.title = t('doctitle');
    }, []),

    <div className="App" style={{backgroundColor: "white"}}>
      <Main />
    </div>
  );
}

export default App;
