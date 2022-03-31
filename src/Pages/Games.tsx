import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

const Games = () => {
  const [games, setGames] = useState([]);

  return (
    <div className='games'>
      <Typography>This is a games page</Typography>
    </div>
  );
};

export default Games;
