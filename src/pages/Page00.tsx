import React from 'react';
import ShowProduct3d from '../3dComponents/ShowProduct3d';
import Iphone13 from '../3dComponents/Iphone13';
import Skull from '../3dComponents/Skull';


export default function Page00() {
  return (
    <ShowProduct3d nextPage='Page01'>
      <Iphone13 position={[0, 0, -2]} scale={7} /> 
    </ShowProduct3d>
  );
}

