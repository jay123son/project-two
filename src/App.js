import React from "react";
import Home from "./screens/home";
import Feed from "./screens/feed";
import Library from "./library/library";
import Trending from "./screens/trending";
import Player from "./screens/player";
import Favorites from "./screens/favorites";
import { Route, Routes, Link } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';

export default function App(){
    return (
        <div className='screen-container'>
            < Home/>
            <div className='main-body'>
      
      <Sidebar />
        <Routes> 
            <Route path= "/" element={<Library />} />
            <Route path= "/feed" element={<Feed />} />
            <Route path= "/trending" element={<Trending />} />
            <Route path= "/player" element={<Player />} />
            <Route path= "/favorites" element={<Favorites />} />
        </Routes>
    
    </div>
   
   </div>
    )
}
