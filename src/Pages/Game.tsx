import React from 'react';
import ReactMarkdown from 'react-markdown';

const Game = () => {
  const markdown = `Just a link: https://reactjs.com.`;
  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Game;
