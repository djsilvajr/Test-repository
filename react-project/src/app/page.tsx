"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Loading from "./components/loading/loading";
import IsMobile from "./utils/deviceCheck";
import "./styles/page.css";

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    //checa se é mobile
    setIsMobileDevice(IsMobile());

    // Simula um carregamento (API ou dados)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 segundos de loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading message="Buscando dados..." size={50} />
      ) : (
        <div>
          {isMobileDevice ? (
            <p>Você está acessando de um dispositivo móvel!</p>
          ) : (
            <p>Você está acessando de um PC!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
