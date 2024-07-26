import React from 'react';
import styles from './LandingPage.module.scss';
import SecondSection from '../components/landingPage/SecondSection';
import FirstSection from '../components/landingPage/FirstSection';
import ThirdSection from '../components/landingPage/ThirdSection';
function LandingPage() {
  return <div>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    </div>;
}

export default LandingPage;
