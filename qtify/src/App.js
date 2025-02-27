import React, { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import { StyledEngineProvider } from '@mui/material';
import { fetchFilters,fetchNewAlbums,fetchSongs,fetchTopAlbums, } from './api/api';
import { Outlet } from 'react-router-dom';


function App() {

  const [data,setData]=useState({});

  const generateData = (key, source)=>{
    source().then((data)=>{
      setData((prevState)=>{
        return {...prevState,[key]:data};
      });
    })
    .catch((error)=>{
      console.error(`Error fetching ${key}:`, error);
    });
  };

  useEffect(()=>{
    generateData("topAlbums", fetchTopAlbums);
    generateData("songs",fetchSongs);
    generateData("newAlbums", fetchNewAlbums);
    generateData("genres", fetchFilters);
  },[]);

  useEffect(() => {
    console.log('Fetched data:', data);
  }, [data]);


  const {topAlbums=[],newAlbums=[],songs=[],genres=[]}=data;


  return (
    <>
      <StyledEngineProvider injectFirst>
      <Navbar searchData={[...topAlbums,...newAlbums]}/>
      
      <Outlet context={{data: {topAlbums, newAlbums, songs, genres}}} />
     
      </StyledEngineProvider>
    </>
  );
}

export default App;
