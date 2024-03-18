import React from 'react';

const Gallery = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4 bg-beige-bg mt-gallery">
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/minnie.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/cafeparis.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/bellaleyendo.jpg" alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/gatofolklore.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/principito.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/mafalda.jpg" alt="" />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/gnomos.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/ironmaiden.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://monpetitparapluie.s3.eu-west-3.amazonaws.com/upload/perritowc.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
