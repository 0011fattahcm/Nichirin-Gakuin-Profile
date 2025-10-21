// src/components/LoadingScreen.jsx
import React, { useEffect, useState } from "react";
import logo from "/img/logo.png";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-700 ${
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="relative w-44 h-44 flex items-center justify-center">
        {/* Cincin merah berputar */}
        <div className="absolute inset-0 rounded-full border-[6px] border-transparent border-t-[#ffb3b3] border-r-[#ffffff] border-b-[#ffb3b3] animate-spin-smooth shadow-[0_0_35px_rgba(255,255,255,0.25)]" />

        {/* Lingkaran glow luar */}
        <div className="absolute inset-0 rounded-full border-[6px] border-[#ffffff20] blur-md" />

        {/* Logo */}
        <img
          src={logo}
          alt="Nichirin Logo"
          className="w-24 h-24 object-contain animate-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
        />
      </div>
    </div>
  );
}
