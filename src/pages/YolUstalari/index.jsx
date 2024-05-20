import React from "react";
import { useNavigate } from "react-router-dom";

const YolUstalari = () => {
  const params = useNavigate("/super-admin/");

  console.log(params);

  return (
    <div>
      <h1>Yo'l ustalari</h1>
    </div>
  );
};

export default YolUstalari;
