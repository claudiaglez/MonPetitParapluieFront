import React from 'react'
import Navbar from '../molecules/Navbar'
import Footer from '../molecules/Footer'

const MiParaguasView = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center flex-grow bg-beige-bg p-4">
        <h2 className="text-indigo text-2xl mb-4 mt-4">Ooops! Todavía estamos bordando esta página. ¡Perdón!</h2>
        <img className="rounded-full w-96 h-96" src="src\assets\images\FaviconBeige.svg" alt="image description" />
      </div>
      <Footer className="mt-auto" />
    </div>
  )
}

export default MiParaguasView