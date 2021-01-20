import React from 'react';
import '../assets/css/components/Section.scss';

const Section = (property) => {
  // Section Component
  return (
    <div className='section' id={property.anchor ? property.anchor : property.title}>
      <h3 className="section-title">{property.title}</h3>
      {property.children}
    </div>
  );
};

export default Section;
