import React, { useEffect } from 'react';
import FilterSection from '../../components/dashboard/FilterSection';
import TopPremium from '../../components/dashboard/TopPremium';
function Home() {
  // fetch data
  useEffect(() => {
    // fetch data for top premium for rent
    // fetch data for top premium for
  }, []);
  return (
    <div>
      {/* preview section */}
      <FilterSection />
      {/* premium top for rent */}
      <TopPremium title='Top Premium for Rent' data={[]} />
      {/* premium top for sale */}
      <TopPremium title='Top Premium for Sale' data={[]} />
    </div>
  );
}

export default Home;
