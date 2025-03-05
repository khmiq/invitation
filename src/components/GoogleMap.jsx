import React from "react";

const GoogleMap = () => {
  return (
    <div className="w-full w-max-[768px] flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.217184506726!2d69.22748837591286!3d41.28237747131345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a5cff14cc97%3A0xce21378570a4b887!2sVerona!5e0!3m2!1sru!2s!4v1741059413518!5m2!1sru!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
