// ResponsivePicture.jsx
import React from 'react';
import desktopImage from '../../assets/process1.png'; // Import paths if using module bundlers
import phoneImage from '../../assets/process2.png';

const ResponsivePicture = () => {
  return (
    <picture>
      {/* Source for screens wider than 768px */}
      <source media="(min-width: 768px)" srcSet={desktopImage} />

      {/* Default image for small screens (and fallback) */}
      <img src={phoneImage} alt="Responsive example" style={{ width: '100%' }} />
    </picture>
  );
};

export default ResponsivePicture;
