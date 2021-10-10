import React from 'react';

function App() {
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontweight: 'bold',
    padding: '16px'
  };
  return <div style = {style}>{name}</div>
}

export default App;