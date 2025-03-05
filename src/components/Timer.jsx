import React from "react";
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const weddingDate = new Date(2025, 7, 25, 11, 0, 0).getTime(); // August 25, 2025, 11:00 AM

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
      return { weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
      days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 7),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const labels = ["недель", "дней", "часов", "минут", "секунд"];

  return (
    <div className=" container flex justify-center items-center gap-1 mt-6">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <div key={index} className="flex flex-col items-center  text-black  rounded-lg  sm:w-14">
          <span className="text-2xl sm:text-lg md:text-lg font-bold font-great">{String(value).padStart(2, "0")}</span>
          <span className="text-base font-great md:text-lg sm:text-[16px] ">{labels[index]}</span>
        </div>
      ))}
    </div>
  );
};
export default CountdownTimer