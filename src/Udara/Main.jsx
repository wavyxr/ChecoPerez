import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Sliders from './Sliders';

const Main = () => {
    const Imagenes ={
        Imagen_1:'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/22a682ad-7638-4e7c-bfc9-b9e605ac0e29.9088ecff021979252b5ef1b151315500.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
        Imagen_2:'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/009baefa-fd22-4837-a6f8-4a310aa7927d.0d196245c109804072211ebfd37ae9d5.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
        Imagen_3 : 'https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00880609429751l.jpg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
        Imagen_4:'https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00084002321887L.jpg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
        Imagen_5:'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/22a682ad-7638-4e7c-bfc9-b9e605ac0e29.9088ecff021979252b5ef1b151315500.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',

    }

    const Imagenes2 = {
        Imagen1: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg",
        Imagen2: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg",
        Imagen3: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg",
        Imagen4: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg",
        Imagen5: "https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg",
      };
      


  return (
    <div>
      <main className='mt-16 w-full text-white'>
        <h2 className='text-center '>Servicio de Reparacion de Celulares y Equipos de Computo</h2>

        <section className='bg-white/5 mt-10  w-[95%] flex flex-col gap-5 pb-20 pt-5 mx-auto '>
          <h3 className='text-center items-center'>Celulares</h3>

          <div className="mt-5 w-80 h-80  mx-auto ">
            <Sliders Imagen1={Imagenes.Imagen_1} Imagen2={Imagenes.Imagen_2} Imagen3={Imagenes.Imagen_1} Imagen4={Imagenes.Imagen_4} Imagen5={Imagenes.Imagen_5}></Sliders>
          </div>
        </section>

        <section className='bg-white/5 mt-10 w-[95%]  flex flex-col gap-5 p-5 mx-auto mb-10 '>
          <h3 className='text-center items-center'>Equipos de Computo</h3>
          <div className="mt-5 w-80 h-64  mx-auto">
            <Sliders Imagen1={Imagenes2.Imagen1} Imagen2={Imagenes2.Imagen2} Imagen3={Imagenes2.Imagen1} Imagen4={Imagenes2.Imagen4} Imagen5={Imagenes2.Imagen5}></Sliders>
           
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
