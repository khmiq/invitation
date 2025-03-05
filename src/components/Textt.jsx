import React from 'react'
import Frame1 from "../assets/Frame1.jpg";
import frame2 from "../assets/frame2.jpg";
import frame3 from "../assets/frame3.jpg";
import pic3 from '../assets/pic3.jpg';

const Textt = () => {
  return (
    <div className=" container text-center px-4 sm:px-6 md:px-8 max-w-[600px] mx-auto mt-16">
    
   <div className='mt-6'>
   <h1 className="font-raleway  text-lg sm:text-sm md:text-2xl lg:text-3xl">
    МЕНЮ
    </h1>

   
    <p className="font-raleway text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6">
    Меню разнообразно, поэтому сообщите нам заранее, если у вас есть какие-либо предпочтения или диетические ограничения. После подтверждения вы сможете пройти опрос о своих вкусовых предпочтениях и напитках.
    </p>
   </div>


   <div className='mt-6'>
    
   <h1 className="font-raleway  text-lg sm:text-sm md:text-2xl lg:text-3xl">
   ПОЖЕЛАНИЯ ПО ПОДАРКАМ
    </h1>

   
    <p className="font-raleway text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6">
    Ваше присутствие в день нашей свадьбы - самый значимый подарок для нас!

Мы понимаем, что дарить цветы на свадьбу - это традиция, но мы не сможем насладиться их красотой в полной мере... 
Будем рады любой другой альтернативе (вино или в денежном эквиваленте).
    </p>
   </div>

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
    Пожалуйста подтвердите свое присутствие до 01.07.2025
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
    <img className="w-full max-w-[500px] h-auto rounded-lg" src={Frame1} alt="Wedding Photo" />
   <h1 className="font-great text-amber-800 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mt-10">
   Ждем Вас на свадьбе!
   </h1>
   <p className="font-raleway text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6">
   Будем благодарны, если при выборе нарядов на наше торжество вы придержитесь следующей палитры
   </p>

  
     
      <div className="flex gap-1 items-center justify-center mt-3">
        <div className="w-12 h-12  rounded-full bg-red-500"></div>
        <div className="w-12 h-12  rounded-full bg-red-600"></div>
        <div className="w-12 h-12  rounded-full bg-red-700"></div>
        <div className="w-12 h-12  rounded-full bg-red-800"></div>
        <div className="w-12 h-12  rounded-full bg-red-900"></div>
        <div className="w-12 h-12  rounded-full bg-red-950"></div>
     
    </div>

  
  </div>
  )
}

export default Textt
