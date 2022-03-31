import React from 'react';
import './GradientLine.css';

interface IGradientProperties {
  width: number;
  stylesNames?: string;
}

const GradientLine = ({ width, stylesNames }: IGradientProperties) => {
  return (
    <div
      className={`gradient-line ${stylesNames}`}
      style={{ width: width + 'px' }}
    ></div>
  );
};

export default GradientLine;
