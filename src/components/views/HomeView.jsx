import React from 'react'
import '../views/homeView.css'
import Navbar from '../molecules/Navbar'
import Banner from '../molecules/Banner'
import Gallery from '../molecules/Gallery'

const HomeView = () => {
  return (
    <>
    <div className='homeViewContainer'>
   <Navbar />
   <Banner />
   <Gallery />
   </div>
   </>
  )
}

export default HomeView