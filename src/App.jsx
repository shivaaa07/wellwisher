import { useState } from 'react';
import Menu from './Navbar/Menu';
import Hero from './Banner/Hero';
import Overview from './Overview/Overview';
import Configuration from './Configuration/Configuration';
import AmenitiesGallery from './Amenities/AmenitiesGallery';
import Location from './LocationAdvantages/Location';
import Gallery from './Gallery/Gallery';
import AboutUS from './AboutUs/About';
import ContactUs from './ContactUs/Contact';
import Footer from './Footer/Footer';
import ModalButton from './modalButton/Button';
// import './App.css'

function App() {

  const brochureBtn = "Download Brochure";
  const enquireBtn = "Enquire Now";

  
  return (
    <>
     <Menu></Menu>
     <Hero></Hero>
     <Overview></Overview>
     <Configuration></Configuration>
     <AmenitiesGallery></AmenitiesGallery>
     <Location></Location>
     <Gallery></Gallery>
     <AboutUS></AboutUS>
     <ContactUs></ContactUs>
     <ModalButton btnName={brochureBtn} btnStyle={'leftposition'}></ModalButton>
     <ModalButton btnName={enquireBtn} btnStyle={'rightposition'}></ModalButton>
     <Footer></Footer>
    </>
  )
}

export default App
