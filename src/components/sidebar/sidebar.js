import React from 'react';
import './sidebar';
import SidebarButton from './sidebarButton';
import { MdFavorite } from 'react-icons/md';
import { FaGripfire, FaPlay } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5';
import { MdSpaceDashboard } from 'react-icons/md';



function Sidebar(){
  return( 
  <div className='sidebar-container'>
  
  <img 
  src='20220819_104614.jpg' 
  className='profile-img' 
  alt='profile' />
  
  <div>;
    <SidebarButton title='Feed' to='/feed' icon={<MdSpaceDashboard />}/>
    <SidebarButton title='Trending' to='/trending' icon={<FaGripfire /> }/>
    <SidebarButton title='Player' to='/player' icon={ <FaPlay />}/>
    <SidebarButton title='Favorites' to='/favorites' icon={<MdFavorite />}/>
    <SidebarButton title='Library' to='/library' icon={<IoLibrary />}/>
   

  </div>
  <SidebarButton title='Sign Out' to='' icon={<FaSignOutAlt />}/>
  </div>
  );
  }
  export default Sidebar;