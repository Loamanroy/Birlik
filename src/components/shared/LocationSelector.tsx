import React from 'react';
import { useLocation } from '../../contexts/LocationContext';

const LocationSelector = () => {
  const { city, setCity } = useLocation();
  
  const cities = [
    'Астана', 'Алматы', 'Шымкент', 'Караганда', 'Актобе', 'Тараз', 
    'Павлодар', 'Усть-Каменогорск', 'Семей', 'Костанай', 'Атырау', 'Кызылорда'
  ];

  return (
    <div className="flex items-center space-x-2">
      <label className="text-sm font-medium">Город:</label>
      <select 
        className="text-sm border rounded p-1"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        {cities.map(c => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelector;
