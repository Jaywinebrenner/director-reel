import React from 'react';
import './App.css';
import ResponsivePlayer from './ResponsivePlayer';
import { Route } from 'react-router-dom';
import Home from './home.jsx';

function App() {


  return (
        <Route path="/" component={ Home } />
  );
}

export default App;
