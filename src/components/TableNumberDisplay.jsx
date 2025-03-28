import React from "react";
import { useParams } from "react-router-dom";
import bcg2 from "../assets/bcg2.jpg";

const TableNumberDisplay = () => {
  const { tableNumber } = useParams();

  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center bg-no-repeat bg-contain bg-center my-2 rounded-lg"
      style={{ backgroundImage: `url(${bcg2})` }}
    >
      {tableNumber && (
        <div className="text-center text-amber-800 flex flex-col items-center justify-center">
          <h2 className="md:text-6xl sm:text-4xl font-great pt-">Ваш стол</h2>
          <p className="md:text-9xl sm:text-7xl font-great mt-4">{tableNumber}</p>
        </div>
      )}
    </div>
  );
};

export default TableNumberDisplay;
