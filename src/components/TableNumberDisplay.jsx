import React from "react";
import { useParams } from "react-router-dom";
import bcg2 from "../assets/bcg2.jpg"
const TableNumberDisplay = () => {
  const { tableNumber } = useParams(); 

  return (
    <div 
      className="flex items-center justify-center bg-cover bg-center text-amber-800" 
      style={{ backgroundImage: `url(${bcg2})` }} 
    >
      {tableNumber && (
        <div className="text-center">
          <h2 className="text-5xl font-great font-bold">Ваш стол</h2>
          <p className="text-7xl font-bold mt-2">{tableNumber}</p>
        </div>
      )}
    </div>
  );
};

export default TableNumberDisplay;
