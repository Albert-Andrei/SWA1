import React from 'react';
import style from './LocationSelector.module.css';
import Image from 'next/image';

const LOCATIONS = ['Horsens', 'Aarhus', 'Copenhagen'];

const LocationSelector = ({ location, onLocationChange }) => {
  return (
    <div className={style.location}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className={style.icon}>
          <Image src="/location.png" alt="img" width={12} height={18} />
        </div>
        <p style={{ fontWeight: 300, fontSize: 20 }}>City</p>
      </div>

      <select
        style={{ fontWeight: 200, fontSize: 15 }}
        value={location}
        onChange={onLocationChange}
      >
        {LOCATIONS.map((location) => (
          <option key={location}>{location}</option>
        ))}
      </select>
    </div>
  );
};

export default LocationSelector;
