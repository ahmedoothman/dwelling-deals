import React from 'react';
import FirstSection from '../components/landingPage/FirstSection';
import SecondSection from '../components/landingPage/SecondSection';
import ThirdSection from '../components/landingPage/ThirdSection';
import FourthSection from '../components/landingPage/FourthSection';
import MapSection from '../components/landingPage/MapSection';
import EnterEmail from '../components/landingPage/EnterEmail';
import Footer from '../components/landingPage/Footer';


function LandingPage() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection></FourthSection>
      <MapSection></MapSection>
      <EnterEmail></EnterEmail>
      <Footer></Footer>
      
    </div>
  );
}

export default LandingPage;
