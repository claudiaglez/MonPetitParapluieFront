import React from 'react'

const Gallery = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-beige-bg">
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/marie.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/cafeparis.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/marypoppins.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/gatofolklore.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/gnomos.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/mafalda.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/principito.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/nicolas.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/perritowc.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/queen.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/ironmaiden.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/minnie.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Gallery;