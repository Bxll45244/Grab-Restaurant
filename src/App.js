import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RestaurantList from './components/RestaurantList';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      
      <SearchBar />
      <RestaurantList />
    </div>
  );
}

export default App;
