import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={{ marginLeft: 80 }}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="20"
        visible={true}
      />
    </div>
  );
};

export default Loader;
