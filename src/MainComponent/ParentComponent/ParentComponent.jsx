import React from 'react'
import Brand from './Brand'
import DreamCar from './DreamCar'
import Footer from './Footer'
import GenerousBenefits from './GenerousBenefits'
import Heading from './Heading'
import Kotak from './Kotak'
import Logo from './Logo'
import Header from './Header'
import NeedHelp from './NeedHelp'
import Questions from './Questions'
import QuickSupport from './QuickSupport'
import SupremeOffer from './SupremeOffer'
import BasicTable from './BasicTable'
import WaitTime from './WaitTime'


const ParentComponent = () => {
  return (
    <div>
    
        <Header/>
        <Heading/>
        <Logo/>
        <BasicTable/>
        <Brand/>
        <QuickSupport/>
        <SupremeOffer/>
        <GenerousBenefits/>
        <WaitTime/>
        <DreamCar/>
        <NeedHelp/>
        <Questions/>
        <Kotak/>
        <Footer/> 
      
    </div>
  )
}

export default ParentComponent
