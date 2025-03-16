// import React from "react";
// import one from "../../assets/one.jpg";





// const Showcase = () => {     

//   return (
//     <div className="container w-full max-w-[768px] px-4 flex justify-center">
//       <div className="relative flex justify-center">
       
//         <img className="w-full h-auto" src={one} alt="frame" />

        
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
//           <h1 className="font-great text-4xl sm:text-[22px] leading-tight md:text-5xl">Котылев Амаль</h1>
//           <h1 className="font-great text-4xl sm:text-[22px] md:text-5xl leading-tight mt-2">Жураева Камила</h1>
         
//           <div className="md:pt-20 sm:pt-5">
//           <p className="font-raleway text-sm sm:text-[10px] md:text-xs mt-2 text-center">ПРИГЛАШАЕМ НА СВАДЬБУ</p>
// <p className="font-raleway pt-3 text-sm sm:text-[10px] md:text-xs text-center">Август</p>


// <div className="flex justify-between items-center w-full gap-4 mr-10">

//   <div className="flex flex-col items-center flex-[3]">
//     <span className="w-full h-[0.5px] bg-zinc-900"></span>
//     <p className="font-raleway text-sm sm:text-xs md:text-sm text-center">Понедельник</p>
//     <span className="w-full h-[0.5px] bg-zinc-900"></span>
//   </div>


//   <div className="flex-[1] flex justify-center">
//     <h1 className="font-great text-4xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-800">
//       25
//     </h1>
//   </div>

 
//   <div className="flex flex-col items-center flex-[3]">
//     <span className="w-full h-[0.5px] bg-zinc-900"></span>
//     <p className="font-raleway text-sm sm:text-xs md:text-sm text-center">18:00</p>
//     <span className="w-full h-[0.5px] bg-zinc-900"></span>
//   </div>
// </div>


// <p className="font-raleway text-sm sm:text-[10px] md:text-xs text-center">2025</p>


//           </div>

//         </div>
//       </div>

      
   
//     </div>
//   );
// };

// export default Showcase;


import React from "react";
import { motion } from "framer-motion";
import one from "../../assets/one.jpg";

const TypingText = ({ text, delay = 0, className = "" }) => {
  return (
    <motion.span className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.05, delay: delay + index * 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Showcase = () => {
  return (
    <div className="container w-full max-w-[768px] px-4 flex justify-center">
      <div className="relative flex justify-center">
        <img className="w-full h-auto" src={one} alt="frame" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <TypingText text="Котылев Амаль" delay={0.2} className="font-great text-4xl sm:text-[22px] md:text-5xl" />
          <TypingText text="Жураева Камила" delay={0.2} className="font-great text-4xl sm:text-[22px] md:text-5xl mt-2" />
          
          <div className="md:pt-20 sm:pt-5">
            <TypingText text="ПРИГЛАШАЕМ НА СВАДЬБУ" delay={2} className="font-raleway text-sm sm:text-[10px] md:text-xs text-center" />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="font-raleway pt-3 text-sm sm:text-[10px] md:text-xs text-center"
            >
              Август
            </motion.p>
            
            <div className="flex justify-between items-center w-full gap-4 mr-10">
              {/* First Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.7 }}
                className="flex flex-col items-center flex-[3]"
              >
                <span className="w-full h-[0.5px] bg-zinc-900"></span>
                <p className="font-raleway text-sm sm:text-xs md:text-sm text-center">Понедельник</p>
                <span className="w-full h-[0.5px] bg-zinc-900"></span>
              </motion.div>
              
              {/* Middle Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.9 }}
                className="flex-[1] flex justify-center"
              >
                <h1 className="font-great text-4xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-800">
                  25
                </h1>
              </motion.div>
              
              {/* Third Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 3.1 }}
                className="flex flex-col items-center flex-[3]"
              >
                <span className="w-full h-[0.5px] bg-zinc-900"></span>
                <p className="font-raleway text-sm sm:text-xs md:text-sm text-center">18:00</p>
                <span className="w-full h-[0.5px] bg-zinc-900"></span>
              </motion.div>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.3 }}
              className="font-raleway text-sm sm:text-[10px] md:text-xs text-center"
            >
              2025
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
