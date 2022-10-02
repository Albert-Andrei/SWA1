import React from 'react';

const ForecastRow = ({ label, value }) => {
  return (
    <div style={{ marginRight: 25 }}>
      <p
        style={{
          color: '#939cb0',
          fontSize: 12,
          fontWeight: 300,
          marginBottom: 5,
        }}
      >
        {label}
      </p>
      <p>{value}</p>
    </div>
  );
};

export default ForecastRow;
