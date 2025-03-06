import React from 'react'
import frame1 from "../assets/frame1.jpg";
import pic3 from '../assets/pic3.jpg';

const Textt = () => {
  return (
    <div className=" container text-center px-4 sm:px-6 md:px-8 max-w-[600px] mx-auto mt-16">
    
   <div className='mt-6'>
   <h1 className="font-raleway  text-lg sm:text-sm md:text-2xl lg:text-3xl">
   ПРИМЕЧАНИЕ
    </h1>

   
    <p className="font-raleway text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6">
    Держитесь от криков "Горько" на празднике, ведь поцелуй — это знак выражения чувств, 
он не может быть по заказу.
    </p>
   </div>
   

   <div className='mt-6'>
   <h1 className="font-raleway  text-lg sm:text-sm md:text-2xl lg:text-3xl">
   ПОДТВЕРЖДЕНИЕ
    </h1>

   
    <p className="font-raleway text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6">
    Пожалуйста подтвердите свое присутствие до 01.08.2025
    </p>
   </div>
   

   <div className='mt-6'>
   <h1 className="font-raleway  text-lg sm:text-sm md:text-2xl lg:text-3xl">
   ФОТО
    </h1>
   

   
    <p className="font-raleway text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6">
    Опубликуйте фото дня нашей свадьбы в соц.сетях с хештегом #
    </p>
    <img 
            className="rounded-[500px] mt-4 px-4"
            src={pic3} 
            alt="Couple Photo" 
          />
   </div>
    <img className="w-full max-w-[500px] h-auto rounded-lg" src={frame1} alt="Wedding Photo" />
   <h1 className="font-great text-amber-800 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mt-10">
   Ждем Вас на свадьбе!
   </h1>
  
  
  </div>
  )
}

export default Textt
