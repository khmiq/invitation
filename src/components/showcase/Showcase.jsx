import React from "react";
import one from "../../assets/one.jpg";





const Showcase = () => {     

  return (
    <div className="container w-full max-w-[768px] px-4 flex justify-center">
      <div className="relative flex justify-center">
       
        <img className="w-full h-auto" src={one} alt="frame" />

        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-great text-4xl sm:text-[22px] leading-tight md:text-5xl">Котылев Амаль</h1>
          <h1 className="font-great text-4xl sm:text-[22px] md:text-5xl leading-tight mt-2">Жураева Камила</h1>
         
          <div className="md:pt-20 sm:pt-5">
          <p className="font-raleway text-sm sm:text-[10px] md:text-xs mt-2 text-center">ПРИГЛАШАЕМ НА СВАДЬБУ</p>
<p className="font-raleway pt-3 text-sm sm:text-[10px] md:text-xs text-center">Август</p>


<div className="flex justify-center gap-2">
  <div className="flex flex-col items-center">
    <span className="w-[50px] sm:w-[40px] md:w-[60px] h-[0.5px] bg-zinc-900"></span>
    <p className="font-raleway text-sm sm:text-xs md:text-sm">Понедельник</p>
    <span className="w-[50px] sm:w-[40px] md:w-[60px] h-[0.5px] bg-zinc-900"></span>
  </div>

  
  <div>
    <h1 className="font-great text-4xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-800">25</h1>
  </div>

 
  <div className="flex flex-col items-center">
    <span className="w-[50px] sm:w-[40px] md:w-[60px] h-[0.5px] bg-zinc-900"></span>
    <p className="font-raleway text-sm sm:text-xs md:text-sm">18:00</p>
    <span className="w-[50px] sm:w-[40px] md:w-[60px] h-[0.5px] bg-zinc-900"></span>
  </div>
</div>

<p className="font-raleway text-sm sm:text-[10px] md:text-xs text-center">2025</p>
          </div>

        </div>
      </div>

      
   
    </div>
  );
};

export default Showcase;


