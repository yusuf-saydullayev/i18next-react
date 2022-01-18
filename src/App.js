import logo from './logo.svg';
import  React from 'react'
import './App.css';
import Tes from './Tes.js'
import { useTranslation } from 'react-i18next'; 
import './i18next'

function App() {

  const { i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  }

  return (
  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={()=>changeLanguage("uz")}>Uzbek</button>
        <button onClick={()=>changeLanguage("en")}>English</button>
      </header>
      <Tes/>
    </div>
   
  );
}

export default App;

