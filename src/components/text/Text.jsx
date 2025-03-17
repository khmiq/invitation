import React from 'react';

const Text = () => {
  return (
    <div className=" container text-center px-4 sm:px-6 md:px-8 max-w-[600px] mx-auto mt-16">
    
      <h1 className="font-great font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Дорогой Гость!
      </h1>

     
      <p className="font-raleway text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6">
      Мы  будем  рады  разделить  с  Вами  радость  неповторимого  для нас  дня – дня  нашей  свадьбы !
      </p>

      <p className="font-raleway text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6">
      25.08.2025 в 18:00 <a className='underline font-great' href="https://maps.app.goo.gl/56phdd276V6qLS9c6">Verona Vaciapelli
  Tашкент , ул. Арнасай , 35</a>
      </p>

      <p className='font-great text-7xl sm:text-6xl md:text-6xl lg:text-7xl text-black pt-8'>25 ∞ 25</p>


    
    </div>
  );
};

export default Text;
