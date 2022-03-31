import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Footer from '../Components/Footer';
import GradientLine from '../Components/GradientLine';
import ProfileImg from '../images/Profile_img.png';
import './Main.css';

const Main = () => {
  return (
    <div className='main'>
      <div className='main__row'>
        <div>
          <Box
            component='img'
            src={ProfileImg}
            sx={{
              height: 110,
              width: 110,
            }}
          />
        </div>
        <div>
          <h2>LOIS MECHAEL</h2>
          <GradientLine width={208} />
          <ul>
            <li>Game development on UNITY</li>
            <li>Creation of the game concept</li>
            <li>Creating and fixing bugs</li>
          </ul>
        </div>
      </div>
      <div className='main__row main__row-second'>
        <div>
          <h2>My progress</h2>
          <GradientLine width={208} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            facere temporibus cumque eveniet at nesciunt, nihil ab modi suscipit
            porro distinctio quasi. Veniam esse unde facere itaque maxime!
            Reiciendis, saepe!
          </p>
        </div>
      </div>
      <div className='main__row'>
        <Button variant='contained'>Games</Button>
      </div>
      <div className='main__row'>
        <div>
          <h2 className='main__row-third'>My progress</h2>
          <div className='main__row-third'>
            <GradientLine width={208} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            facere temporibus cumque eveniet at nesciunt, nihil ab modi suscipit
            porro distinctio quasi. Veniam esse unde facere itaque maxime!
            Reiciendis, saepe!
          </p>
        </div>
      </div>
      <div className='main__row'>
        <Button variant='contained'>Posts</Button>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
