import React from 'react';
import styles from './LandingPage.module.scss';
import ExplorePart from '../components/LandingPageComponents/ExplorePart';
import MapSection from '../components/LandingPageComponents/MapSection';
function LandingPage() {
  return <div>

    <ExplorePart></ExplorePart>
    <MapSection></MapSection>
  </div>;
}

export default LandingPage;
