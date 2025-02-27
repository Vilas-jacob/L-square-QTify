import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { StyledEngineProvider } from '@mui/material';

function App() {

  const [data,setData]=useState({});

  const generateData = (key, source)=>{
    source().then((data)=>{
      setData((prevState)=>{
        return {...prevState,[key]:data};
      });
    });
  };


  const {topAlbums=[],newAlbums=[],songs=[],genres=[]}=data;


  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar searchData={[...topAlbums,...newAlbums]}/>
      </StyledEngineProvider>
    </>
  );
}

export default App;
