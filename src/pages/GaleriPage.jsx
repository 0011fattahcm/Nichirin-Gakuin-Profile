// src/pages/GaleriPage.jsx
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function GaleriPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const galleryImages = [
    // Foto di folder utama /img/
    { src: "/img/foto1.png", title: "Kegiatan Nichirin" },
    { src: "/img/foto3-B17qRBH1.png", title: "Kegiatan Nichirin" },
    { src: "/img/foto10-BL_ShWG1.png", title: "Kegiatan Nichirin" },
    { src: "/img/foto12-CiERZKvs.png", title: "Kegiatan Nichirin" },
    { src: "/img/foto14-MO1PPe22.png", title: "Kegiatan Nichirin" },
    { src: "/img/foto15-BuNZk-8p.png", title: "Kegiatan Nichirin" },
    { src: "/img/fotohero1.png", title: "Kegiatan Nichirin" },
    { src: "/img/fotohero2.png", title: "Kegiatan Nichirin" },
    { src: "/img/fotohero3.png", title: "Kegiatan Nichirin" },
    { src: "/img/fotohero4.png", title: "Kegiatan Nichirin" },

    // Foto di folder keberangkatan/
    {
      src: "/img/keberangkatan/1.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/2.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/3.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/4.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/5.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/6.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/7.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/8.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/9.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/10.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/11.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/12.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/13.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/14.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/15.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/16.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/17.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/18.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/19.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/20.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/21.png",
      title: "Keberangkatan Siswa",
    },
    {
      src: "/img/keberangkatan/22.png",
      title: "Keberangkatan Siswa",
    },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Navbar />

      {/* ================= HERO SECTION GALERI ================= */}
      <section className="relative overflow-hidden pt-[100px] lg:pt-[120px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/img/fotohero1.png"
            alt="Galeri Nichirin"
            className="w-full h-full object-cover object-center scale-105"
            draggable={false}
          />
          {/* Overlay merah lembut khas Nichirin */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#D6001C]/90 via-[#E73B3B]/85 to-[#FFF4F4]" />
          {/* Efek cahaya halus di tengah */}
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(80rem_60rem_at_center,#ffffff_0%,transparent_60%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-20 md:py-28">
          <span className="inline-block text-sm font-semibold px-4 py-1 rounded-full bg-[#FFE6E6] text-[#D6001C] ring-1 ring-[#FFC6C6]">
            Dokumentasi Nichirin
          </span>
          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Galeri{" "}
            <span className="text-[#FFDADA]">Nichirin Gakuin Centerindo</span>
          </h1>
          <p className="mt-5 text-white/90 max-w-2xl mx-auto text-justify md:text-center leading-relaxed">
            Dokumentasi kegiatan, pelatihan, dan keberangkatan peserta Nichirin
            menuju Jepang.
          </p>
          <div className="mt-6 w-20 h-[3px] bg-white/80 mx-auto rounded-full" />
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/40 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0A1D4A]">
              Dokumentasi Nichirin
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Momen-momen penting kegiatan pelatihan dan keberangkatan siswa LPK
              Nichirin Gakuin Centerindo.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5 [column-fill:_balance]">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                data-aos="fade-up"
                className="relative overflow-hidden rounded-2xl break-inside-avoid shadow-md hover:shadow-xl transition-all duration-500 group"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-3">
                  <p className="text-white text-sm font-medium">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
