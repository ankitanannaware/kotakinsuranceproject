import logo from './logo.svg';
import './App.css';
import Header from './MainComponent/ParentComponent/Header';
// import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Heading from './MainComponent/ParentComponent/Heading';
import Logo from './MainComponent/ParentComponent/Logo';
import BasicTable from './MainComponent/ParentComponent/BasicTable';
import Brand from './MainComponent/ParentComponent/Brand';
import QuickSupport from './MainComponent/ParentComponent/QuickSupport';
import SupremeOffer from './MainComponent/ParentComponent/SupremeOffer';
import GenerousBenefits from './MainComponent/ParentComponent/GenerousBenefits';
import WaitTime from './MainComponent/ParentComponent/WaitTime';
import Garages from './MainComponent/ParentComponent/Garages';
import DreamCar from './MainComponent/ParentComponent/DreamCar';
import NeedHelp from './MainComponent/ParentComponent/NeedHelp';
import Questions from './MainComponent/ParentComponent/Questions';
import Kotak from './MainComponent/ParentComponent/Kotak';
import Footer from './MainComponent/ParentComponent/Footer';
import ParentComponent from './MainComponent/ParentComponent/ParentComponent';
import Example from './Example';
import Example1 from './Example1';




function App() {
  
  return (
  
      <div className="App"> 
      {/* <Example/>   */}
        <ParentComponent/>
        {/* <Example1/> */}
        
       
      </div>
 
  );
}

export default App;
