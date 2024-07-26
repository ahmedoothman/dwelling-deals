import React from 'react';
import styles from './LandingPage.module.scss';
import ExplorePart from '../components/LandingPageComponents/ExplorePart';
import MapSection from '../components/LandingPageComponents/MapSection';
import EnterEmail from '../components/LandingPageComponents/EnterEmail';
import Footer from '../components/LandingPageComponents/Footer';
function LandingPage() {
  return <div>

    <ExplorePart></ExplorePart>
    <MapSection></MapSection>
    <EnterEmail></EnterEmail>
    <Footer></Footer>
  </div>;
}

export default LandingPage;
