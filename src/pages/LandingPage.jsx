import React from 'react';
import styles from './LandingPage.module.scss';
import SecondSection from '../components/landingPage/SecondSection';
import FirstSection from '../components/landingPage/FirstSection';
import ThirdSection from '../components/landingPage/ThirdSection';
import ExplorePart from '../components/LandingPageComponents/ExplorePart';
import MapSection from '../components/LandingPageComponents/MapSection';
import EnterEmail from '../components/LandingPageComponents/EnterEmail';
import Footer from '../components/LandingPageComponents/Footer';
function LandingPage() {
  return <div>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <ExplorePart></ExplorePart>
    <MapSection></MapSection>
    <EnterEmail></EnterEmail>
    <Footer></Footer>
  </div>;
}

export default LandingPage;
