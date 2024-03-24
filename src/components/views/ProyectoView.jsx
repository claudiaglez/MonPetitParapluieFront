import React from 'react'
import Navbar from '../molecules/Navbar'
import Footer from '../molecules/Footer'

const ProyectoView = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center flex-grow bg-beige-bg p-4">
        <img className="rounded-full w-96 h-96" src="src\assets\images\Cloti.jpg" alt="image description" />
        <div className="ml-8">
            <h2 className="text-indigo text-2xl">El Proyecto</h2>
          <p className="text-indigo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nisl euismod, facilisis massa ac, sollicitudin
            ipsum. Sed auctor ultrices tellus, ac cursus lectus convallis nec. Cras ultricies dolor nec urna convallis
            pretium. Aliquam ac sapien non urna vehicula ullamcorper. Nam id leo felis. Aenean at justo augue. Proin
            ullamcorper felis ut consectetur rhoncus. Quisque lobortis suscipit diam, eget congue ex bibendum eu. Fusce
            hendrerit tincidunt ligula, sit amet fermentum ipsum fermentum ut. Integer sed pharetra nunc. Aliquam vel
            tellus arcu. Sed tempus eros eu mauris euismod, nec hendrerit ex ultricies.</p>
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  )
}

export default ProyectoView

