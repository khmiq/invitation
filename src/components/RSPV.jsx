import React, { useState } from "react";
import Confetti from "react-confetti";
import axios from "axios";
import { useWindowSize } from "react-use";

const RSVPForm = () => {
  const { width, height } = useWindowSize();
  const [showForm, setShowForm] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    attending: "",
    food: "",
    drink: "",
    child: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://khmiq.onrender.com/webhook", formData);
      alert("Ваш RSVP успешно отправлен!");
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Не удалось отправить RSVP. Попробуйте снова.");
    }
  };

  const handleConfirmClick = () => {
    setShowForm(true);
    setShowConfetti(true);
   
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-4 mt-12">

{/* {showConfetti && <Confetti width={width} height={height} />} */}
{showConfetti && (
        <div className="fixed inset-0 z-50">
          <Confetti 
          width={width} 
          height={height}  
          numberOfPieces={500} 
          gravity={0.2}  
          colors={["#EF4444", "#DC2626", "#B91C1C"]} 
          wind={0.02}
          initialVelocityY={10} />
        </div>
      )}
      {!showForm && ( 
        <button
          onClick={handleConfirmClick}
          className="bg-green-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-900 transition duration-300"
        >
          Подтвердить
        </button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mt-6 w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4 text-center">RSVP</h2>

          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded mb-2 outline-none"
            required
          />

          <input
            type="text"
            name="surname"
            placeholder="Фамилия"
            value={formData.surname}
            onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
            className="w-full p-2 border rounded mb-2 outline-none"
            required
          />

          <select
            name="attending"
            value={formData.attending}
            onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
            className="w-full p-2 border rounded mb-2 outline-none"
            required
          >
            <option value="">Вы придёте?</option>
            <option value="Да">Да</option>
            <option value="Нет">Нет</option>
          </select>

        

          <select
            name="child"
            value={formData.child}
            onChange={(e) => setFormData({ ...formData, child: e.target.value })}
            className="w-full p-2 border rounded mb-2 outline-none"
            required
          >
            <option  value="">Будет ли с вами ребёнок?</option>
            <option  value="Да">Да</option>
            <option  value="Нет">Нет</option>
          </select>

          <button
            type="submit"
            className="bg-green-800 text-white px-4 py-2 rounded mt-4 w-full hover:bg-green-900 transition duration-300"
          >
            Отправить
          </button>
        </form>
      )}
    </div>
  );
};

export default RSVPForm;

