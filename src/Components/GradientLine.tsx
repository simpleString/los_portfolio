import React from 'react';
import './GradientLine.css';

interface IGradientProperties {
  width: number;
}

const GradientLine = ({ width }: IGradientProperties) => {
  return <div className='gradient-line' style={{ width: width + 'px' }}></div>;
};

export default GradientLine;
