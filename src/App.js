import logo from './logo.svg';
import './App.css';
import Header from './navbar/Header';
// import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Heading from './heading/Heading';
import Logo from './Logo/Logo';
import BasicTable from './table/BasicTable';
import Brand from './brand/Brand';
import QuickSupport from './quicksupport/QuickSupport';
import SupremeOffer from './supremeoffer/SupremeOffer';
import GenerousBenefits from './generousbenefits/GenerousBenefits';
import WaitTime from './waittime/WaitTime';

function App() {
  
  return (
  
      <div className="App">
        <Header/>
        <Heading/>
        <Logo/>
        <BasicTable/>
        <Brand/>
        <QuickSupport/>
        <SupremeOffer/>
        <GenerousBenefits/>
        <WaitTime/>
      </div>
 
  );
}

export default App;
