import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useFilteredHouses = (houseType) => {
  const [searchParams] = useSearchParams();
  const { houses } = useSelector((state) => state.houses);
  const [filteredHouses, setFilteredHouses] = useState([]);

  const [filtersState, setFiltersState] = useState({
    purpose: houseType,
    bedrooms: searchParams.get('bedrooms') || '',
    bathrooms: searchParams.get('bathrooms') || '',
    price: searchParams.get('price') || '',
    area: searchParams.get('area') || '',
  });

  useEffect(() => {
    const filteredHouses = houses.filter((house) => {
      let isValid = true;
      isValid = isValid && house.type === houseType;

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
      isValid = isValid && house.approved === true;
      return isValid;
    });

    setFilteredHouses(filteredHouses);
  }, [houses, searchParams, houseType]);

  return { filteredHouses, filtersState };
};

export default useFilteredHouses;
