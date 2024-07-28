import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FilterSection from '../../components/dashboard/FilterSection';

function RentPage() {
  const [searchParams] = useSearchParams();
  const { houses } = useSelector((state) => state.houses);
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [filtersState, setFiltersState] = useState({
    purpose: 'sale',
    bedrooms: searchParams.get('bedrooms') || '',
    bathrooms: searchParams.get('bathrooms') || '',
    price: searchParams.get('price') || '',
    area: searchParams.get('area') || '',
  });
  useEffect(() => {
    const filteredHouses = houses.filter((house) => {
      let isValid = true;

      isValid = isValid && house.type === 'rent';
      const filters = {
        bedrooms: searchParams.get('bedrooms') || '',
        bathrooms: searchParams.get('bathrooms') || '',
        price: searchParams.get('price') || '',
        area: searchParams.get('area') || '',
      };

      if (filters.bedrooms) {
        isValid = isValid && house.bedrooms === Number(filters.bedrooms);
      }
      if (filters.bathrooms) {
        isValid = isValid && house.bathrooms === Number(filters.bathrooms);
      }
      if (filters.price) {
        isValid = isValid && house.price <= Number(filters.price);
      }
      if (filters.area) {
        isValid = isValid && house.area <= Number(filters.area);
      }
      return isValid;
    });

    setFilteredHouses(filteredHouses);
  }, [houses, searchParams]);

  return (
    <div>
      <FilterSection
        hidePurpose={true}
        purpose={'rent'}
        filtersOptions={filtersState}
      />
      <h1>RentPage</h1>
      <ul>
        <h1>{filteredHouses.length}</h1>
        {filteredHouses.map((house) => (
          <li
            key={house._id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '10px',
              margin: '10px',
            }}
          >
            <h2>{house.title}</h2>
            <img src={house.imageUrl} alt={house.title} />
            <p>{house.description}</p>
            <p>{house.price}</p>
            <p>{house.area}</p>
            <p>{house.bedrooms}</p>
            <p>{house.bathrooms}</p>
            <p>{house.realtor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RentPage;
