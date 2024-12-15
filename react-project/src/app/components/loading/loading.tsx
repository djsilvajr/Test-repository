"use client"

import React from "react";
import "./css/loading.css"; 

const Loading = ({ message = "Carregando...", size = 50 }) => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>{message}</p>
    </div>
  );
};

export default Loading;