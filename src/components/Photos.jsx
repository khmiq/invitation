import React from "react";
import Frame1 from "../assets/Frame1.jpg";
import pic1 from "../assets/pic1.jpg";
import bcg from "../assets/bcg.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

const Photos = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-10">
      
     

     
      <div 
        className="relative w-full max-w-[768px] mt-6 rounded-xl overflow-hidden"
        style={{ 
          backgroundImage: `url(${bcg})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center"
        }}
      >
        
        <div className="absolute inset-y-0 left-[10%] right-[10%] backdrop-blur-[2px]"></div>

       
        <div className="relative z-10 flex flex-col items-center ">
          <img 
            className="rounded-[500px]  mt-4 p-20"
            src={pic1} 
            alt="Couple Photo" 
          />
          <p className="font-great text-amber-800 mt-4 text-xl sm:text-xl md:text-2xl lg:text-3xl mb-6">
            Там, где посеяна любовь, растёт радость!
          </p>
          <img 
            className="rounded-[500px] mt-4 p-20"
            src={pic2} 
            alt="Couple Photo" 
          />
          
         
        </div>
      </div>
    </div>
  );
};

export default Photos;
