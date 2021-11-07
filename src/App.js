import React from 'react';
import MyComponent from './MyComponent';
import './App.css';

const App = () =>{
  return <MyComponent name="React"/>;
}

MyComponent.defaultProps = {
  name: '기본 이름'
};

export default App;