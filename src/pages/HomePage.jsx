// src/pages/HomePage.jsx
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { ChevronDown } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Hook: deteksi scroll untuk shadow navbar
function useScrolled() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11l-1.2 1.2a16 16 0 0 0 6.72 6.72l1.2-1.2a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 4h16v16H4z" />
      <path d="M22 6 12 13 2 6" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6-1.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.46 2.9h-2.4v7A10 10 0 0 0 22 12z" />
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M22 5.8c-.7.3-1.4.5-2.2.6.8-.5 1.3-1.1 1.6-2-.8.5-1.6.8-2.5 1a3.6 3.6 0 0 0-6.1 3.2A10.3 10.3 0 0 1 3 5.2a3.6 3.6 0 0 0 1.1 4.8c-.6 0-1.2-.2-1.7-.5a3.6 3.6 0 0 0 2.9 3.6 3.7 3.7 0 0 1-1.6.1 3.6 3.6 0 0 0 3.4 2.6A7.3 7.3 0 0 1 2 18c.6.4 2.5.8 4.5.8 5.4 0 9.7-3.7 9.7-8.4v-.4c.7-.5 1.3-1.1 1.8-1.8z" />
    </svg>
  );
}

export default function HomePage() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScrolled();

  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true, startEvent: "DOMContentLoaded" });
    AOS.refresh(); // ✅ penting supaya AOS tahu elemen hero sudah ready
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <BackToTopButton />
      {/* === HERO SLIDER MODERN NICHIRIN (KREASI ANIMATED) === */}
      <section
        id="hero"
        className="relative overflow-hidden pt-[100px] lg:pt-[120px] min-h-[100vh] flex items-center justify-center w-full"
      >
        {(() => {
          const [current, setCurrent] = React.useState(0);
          const images = [
            "/img/fotohero1.png",
            "/img/fotohero2.png",
            "/img/fotohero3.png",
            "/img/fotohero4.png",
          ];

          React.useEffect(() => {
            const interval = setInterval(() => {
              setCurrent((prev) => (prev + 1) % images.length);
            }, 4000);
            return () => clearInterval(interval);
          }, []);

          return (
            <>
              {/* === Background Slide with Parallax Motion === */}
              <div
                className="absolute inset-0 transition-transform duration-[4000ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{
                  transform: `scale(1.05) translateY(${current * 3}px)`,
                }}
              >
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Slide ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      i === current
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                    draggable={false}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#D6001C]/60 to-black/80" />
              </div>

              {/* === Decorative Glow Layer === */}
              <div className="absolute bottom-0 left-0 right-0 h-44 bg-[radial-gradient(80%_80%_at_center,rgba(255,78,80,0.25),transparent_80%)] blur-3xl pointer-events-none" />

              {/* === Content === */}
              <div
                className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center text-white"
                data-aos="fade-up"
              >
                {/* focus overlay di area teks */}
                <div className="absolute inset-0 mx-auto max-w-5xl h-[60%] top-1/2 -translate-y-1/2 bg-gradient-to-b from-black/25 via-black/45 to-transparent blur-md rounded-xl"></div>

                <div className="space-y-4">
                  <div className="relative">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight animate-fadeInUp">
                      <span className="block animate-slideDown delay-75">
                        Menjadi Jembatan Antara
                      </span>
                      <span className="bg-gradient-to-r from-[#FF4E50] via-[#FFD1D1] to-[#FFFFFF] bg-clip-text text-transparent animate-slideUp delay-150">
                        Indonesia & Jepang
                      </span>
                    </h1>

                    <p className="mt-5 text-lg md:text-xl font-medium text-white/90 max-w-3xl mx-auto leading-relaxed animate-fadeIn delay-300">
                      Lembaga pelatihan dan pengiriman tenaga kerja resmi yang
                      berfokus pada pendidikan bahasa, budaya, dan etika kerja
                      Jepang — membentuk generasi unggul yang siap berkarier di
                      negeri sakura.
                    </p>
                  </div>
                  {/* === CTA Buttons === */}
                  <div className="mt-10 flex flex-wrap justify-center gap-5 animate-fadeInUp delay-500">
                    <a
                      href="#program"
                      className="px-8 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-500 
                  bg-gradient-to-r from-[#D6001C] via-[#E3242B] to-[#FF4E50]
                  hover:shadow-[0_0_25px_rgba(255,78,80,0.6)] hover:-translate-y-1 hover:scale-[1.03]"
                    >
                      Program Kami
                    </a>
                    <a
                      href="#kontak"
                      className="px-8 py-3 rounded-full font-semibold border-2 border-white/80 text-white hover:bg-white hover:text-[#D6001C] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03]"
                    >
                      Hubungi Kami
                    </a>
                  </div>
                </div>
              </div>

              {/* === Slide Indicators === */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? "bg-white scale-110 shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                        : "bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </>
          );
        })()}
      </section>
      {/* === Animasi Custom === */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        .animate-slideUp {
          animation: slideUp 1s ease forwards;
        }
        .animate-slideDown {
          animation: slideDown 1s ease forwards;
        }
        .animate-fadeIn {
          animation: fadeInUp 1.2s ease forwards;
        }
      `}</style>

      {/* STRIP KEUNGGULAN 3 KOLOM */}
      <section id="benefits" className="relative -mt-16 z-20">
        <div className="container mx-auto px-24 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Pembinaan Berstandar Jepang",
              desc: "Kurikulum dan etika pelatihan mengikuti standar perusahaan Jepang untuk membentuk karakter unggul, disiplin, dan tangguh.",
              gradient: "from-red-100 to-gray-50",
              textColor: "text-red-800",
              icon: <ShieldIcon className="text-red-600" />,
            },
            {
              title: "Pelatihan Bahasa & Budaya",
              desc: "Pengajaran bahasa Jepang dan pemahaman budaya dilakukan langsung oleh instruktur berpengalaman agar peserta siap adaptasi di Jepang.",
              gradient: "from-rose-100 to-pink-50",
              textColor: "text-red-700",
              icon: <ScaleIcon className="text-red-500" />,
            },
            {
              title: "Jembatan Karier Internasional",
              desc: "Terhubung dengan berbagai perusahaan Jepang dan lembaga penyalur resmi, membuka peluang kerja luas bagi lulusan.",
              gradient: "from-red-100 to-gray-50",
              textColor: "text-red-700",
              icon: <LawIcon className="text-red-500" />,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl shadow-md p-6 bg-gradient-to-br ${item.gradient} hover:shadow-lg transition`}
              data-aos="zoom-in"
              data-aos-delay={idx * 150}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white shadow">
                  {item.icon}
                </div>
                <div>
                  <h3 className={`font-semibold text-lg ${item.textColor}`}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed text-justify">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: PROGRAM KAMI (PANAH DI SAMPING PROGRESS BAR)*/}
      <section id="program" className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          <h2
            className="text-4xl font-extrabold text-[#D6001C] mb-16 text-center"
            data-aos="fade-up"
          >
            Program Kami
          </h2>

          {(() => {
            const [index, setIndex] = React.useState(0);
            const programs = [
              {
                title: "Tokutei Ginou",
                desc: "Program kerja ke Jepang bagi tenaga terampil dengan kemampuan bahasa dan keahlian yang diakui oleh pemerintah Jepang. Peserta akan ditempatkan di berbagai industri seperti manufaktur, konstruksi, perhotelan, dan pertanian.",
                img: "/img/tokuteiginou.jpg",
              },
              {
                title: "Ginou Jisshu",
                desc: "Program magang Jepang (Kenshusei) yang memberikan pengalaman kerja nyata di berbagai industri serta meningkatkan keterampilan dan kedisiplinan peserta agar siap bersaing di dunia kerja global.",
                img: "/img/ginoujisshu.jpeg",
              },
              {
                title: "Kaigo Shoku",
                desc: "Program spesialis perawatan lansia (care worker) bagi peserta yang memiliki jiwa sosial tinggi dan ingin berkarier di bidang kesejahteraan Jepang, dengan pelatihan teori dan praktik langsung.",
                img: "/img/kaigo.jpg",
              },
              {
                title: "Gijinkoku",
                desc: "Program khusus yang menjembatani hubungan antara lembaga pendidikan, perusahaan Jepang, dan peserta pelatihan untuk kerja sama berkelanjutan dan penempatan tenaga kerja profesional.",
                img: "/img/gijinkoku.jpg",
              },
              {
                title: "Nihongo Onrain Juku",
                desc: "Program pembelajaran bahasa Jepang daring interaktif dengan kurikulum berbasis JLPT dan pembimbing asli Jepang. Peserta dapat belajar fleksibel dengan hasil maksimal.",
                img: "/img/onrainjuku.jpg",
              },
              {
                title: "Ryuugaku",
                desc: "Program studi ke Jepang bagi peserta yang ingin melanjutkan pendidikan tinggi, memahami budaya Jepang secara langsung, dan memperluas wawasan internasional.",
                img: "/img/ryuugaku.jpg",
              },
            ];

            const nextSlide = () =>
              setIndex((prev) => (prev + 1) % programs.length);
            const prevSlide = () =>
              setIndex(
                (prev) => (prev - 1 + programs.length) % programs.length
              );

            React.useEffect(() => {
              const timer = setInterval(nextSlide, 7000);
              return () => clearInterval(timer);
            }, []);

            return (
              <>
                {/* === KONTEN === */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                  {/* === TEKS === */}
                  <div className="relative w-full md:w-1/2 flex items-center justify-center min-h-[420px]">
                    {programs.map((item, i) => (
                      <div
                        key={i}
                        className={`absolute transition-all duration-[1000ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
                          i === index
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-10"
                        }`}
                      >
                        <h3 className="text-4xl font-extrabold text-[#0F172A] mb-4 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-justify mb-8">
                          {item.desc}
                        </p>
                        <a
                          href={`/program/${item.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="inline-block px-8 py-3 rounded-full font-semibold text-white shadow-md bg-gradient-to-r from-[#D6001C] to-[#FF4E50] hover:shadow-[0_0_20px_rgba(255,78,80,0.5)] transition-all duration-300"
                        >
                          Lihat Selengkapnya
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* === GAMBAR === */}
                  <div className="relative w-full md:w-1/2 h-[460px] overflow-hidden rounded-2xl shadow-xl">
                    {programs.map((item, i) => (
                      <img
                        key={i}
                        src={item.img}
                        alt={item.title}
                        className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-all duration-[1500ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
                          i === index
                            ? "opacity-100 scale-100 translate-x-0"
                            : "opacity-0 scale-105 translate-x-5"
                        }`}
                        draggable={false}
                      />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl" />
                  </div>
                </div>

                {/* === NAVIGASI === */}
                <div className="relative w-full flex flex-col items-center mt-16 space-y-6">
                  {/* PROGRESS + PANAH DI SAMPING */}
                  <div className="relative flex items-center justify-center w-full md:w-[70%]">
                    {/* Panah kiri */}
                    <button
                      onClick={prevSlide}
                      aria-label="Previous Slide"
                      className="absolute left-0 p-4 rounded-full bg-white shadow-md hover:bg-gray-50 hover:shadow-lg transition-all duration-300 text-xl font-bold text-[#D6001C] active:scale-95"
                    >
                      ‹
                    </button>

                    {/* Progress bar */}
                    <div className="w-[80%] h-[3px] bg-gray-200 overflow-hidden rounded-full mx-auto">
                      <div
                        key={index}
                        className="h-full bg-gradient-to-r from-[#D6001C] to-[#FF4E50] animate-[progress_7s_linear_forwards]"
                      />
                    </div>

                    {/* Panah kanan */}
                    <button
                      onClick={nextSlide}
                      aria-label="Next Slide"
                      className="absolute right-0 p-4 rounded-full bg-white shadow-md hover:bg-gray-50 hover:shadow-lg transition-all duration-300 text-xl font-bold text-[#D6001C] active:scale-95"
                    >
                      ›
                    </button>
                  </div>

                  {/* DOTS */}
                  <div className="flex justify-center items-center gap-3 mt-3">
                    {programs.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                          i === index
                            ? "bg-gradient-to-r from-[#D6001C] to-[#FF4E50] scale-125 shadow-md"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>

                  <style>{`
              @keyframes progress {
                from { width: 0%; }
                to { width: 100%; }
              }
            `}</style>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* =====================================================
   SECTION: PENCAPAIAN NICHIRIN (MODERN NEON GRADIENT)
===================================================== */}
      <section
        id="stats"
        className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-b from-[#fff8f8] via-[#fff2f4] to-[#fff0f0]"
      >
        {/* === Background dekoratif === */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,#f9c5d1_0%,transparent_45%),radial-gradient(circle_at_80%_70%,#f7a4a4_0%,transparent_45%),radial-gradient(circle_at_50%_100%,#fad0c4_0%,transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#E11D48_1px,transparent_1px),linear-gradient(to_bottom,#E11D4810_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
          {/* === Judul === */}
          <div data-aos="fade-up" className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#E11D48] via-[#EC4899] to-[#8B5CF6] text-transparent bg-clip-text">
              Pencapaian Nichirin Gakuin Centerindo
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Bersama peserta, mitra, dan pelatih, kami terus menumbuhkan
              generasi unggul yang siap bekerja di Jepang.
            </p>
          </div>

          {/* === GRID === */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="grid sm:grid-cols-3 gap-6 md:gap-8"
          >
            {/* === CARD 1 === */}
            <div className="group relative flex flex-col items-start gap-3 rounded-2xl bg-gradient-to-br from-[#ffffff] to-[#fdf7ff] p-6 md:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 border border-[#f1d4e8]/50">
              <div className="p-2.5 rounded-lg bg-gradient-to-tr from-[#8B5CF6] via-[#EC4899] to-[#F43F5E] text-white shadow-lg group-hover:shadow-[#EC4899]/30 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#111827]">
                  2023
                </h3>
                <p className="text-gray-600 text-sm md:text-base font-medium">
                  Tahun Berdiri
                </p>
              </div>
              <div className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F43F5E] opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>

            {/* === CARD 2 === */}
            <div className="group relative flex flex-col items-start gap-3 rounded-2xl bg-gradient-to-br from-[#ffffff] to-[#fff5f8] p-6 md:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 border border-[#f3d2df]/50">
              <div className="p-2.5 rounded-lg bg-gradient-to-tr from-[#EC4899] via-[#F43F5E] to-[#FB7185] text-white shadow-lg group-hover:shadow-[#F43F5E]/40 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 14c3.866 0 7-1.343 7-3V7a1 1 0 00-1-1H6a1 1 0 00-1 1v4c0 1.657 3.134 3 7 3z" />
                  <path d="M5 10v5c0 2.5 3.582 4 7 4s7-1.5 7-4v-5" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#F43F5E] via-[#EC4899] to-[#8B5CF6] text-transparent bg-clip-text">
                  200<span className="font-bold">+</span>
                </h3>
                <p className="text-gray-600 text-sm md:text-base font-medium">
                  Peserta Dilatih
                </p>
              </div>
              <div className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-[#F43F5E] via-[#EC4899] to-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>

            {/* === CARD 3 === */}
            <div className="group relative flex flex-col items-start gap-3 rounded-2xl bg-gradient-to-br from-[#ffffff] to-[#f8f7ff] p-6 md:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 border border-[#e4d9ff]/50">
              <div className="p-2.5 rounded-lg bg-gradient-to-tr from-[#F43F5E] via-[#8B5CF6] to-[#06B6D4] text-white shadow-lg group-hover:shadow-[#8B5CF6]/30 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 17v-5l12-2v7a2 2 0 01-2 2H9zM3 12V7l12-2v5L3 12z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F43F5E] text-transparent bg-clip-text">
                  50<span className="font-bold">+</span>
                </h3>
                <p className="text-gray-600 text-sm md:text-base font-medium">
                  Mitra Perusahaan Jepang
                </p>
              </div>
              <div className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F43F5E] opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
   SECTION: DOKUMENTASI KEBERANGKATAN (AUTO SCROLL LOOP)
===================================================== */}
      <section
        id="keberangkatan"
        className="relative bg-gradient-to-b from-white via-[#fef8f8] to-[#fff2f2] py-16 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          {/* Judul */}
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#D6001C] via-[#FF4E50] to-[#FF9A8B] text-transparent bg-clip-text"
          >
            Momen Keberangkatan Siswa ke Jepang
          </h2>

          {/* Pengantar */}
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-3 text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
          >
            Setiap keberangkatan adalah awal dari perjalanan baru. Bersama
            Nichirin Gakuin Centerindo, para siswa kami siap menapaki karier dan
            masa depan di Negeri Sakura dengan semangat dan harapan terbaik.
          </p>

          {/* === AUTO SCROLL CONTAINER === */}
          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="relative mt-12 overflow-hidden"
          >
            <div className="flex w-max animate-scroll-x space-x-6">
              {/* Loop pertama */}
              {Array.from({ length: 22 }, (_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-64 h-40 md:w-72 md:h-48 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={`/img/keberangkatan/${i + 1}.png`}
                    alt={`Keberangkatan ${i + 1}`}
                    className="w-full h-full object-cover object-center"
                    draggable={false}
                  />
                </div>
              ))}

              {/* Duplikat agar loop seamless */}
              {Array.from({ length: 22 }, (_, i) => (
                <div
                  key={`dup-${i}`}
                  className="flex-shrink-0 w-64 h-40 md:w-72 md:h-48 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={`/img/keberangkatan/${i + 1}.png`}
                    alt={`Keberangkatan ${i + 1}`}
                    className="w-full h-full object-cover object-center"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animasi scroll halus */}
        <style>{`
    @keyframes scroll-x {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .animate-scroll-x {
      animation: scroll-x 45s linear infinite;
    }
  `}</style>
      </section>

      {/* =====================================================
   SECTION: BIDANG & PROGRAM UNGGULAN NICHIRIN
===================================================== */}
      <section
        id="program-unggulan"
        className="relative bg-gradient-to-b from-white via-[#fff5f5] to-[#ffe9e9] py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative text-center">
          <h2
            data-aos="fade-up"
            className="text-4xl font-extrabold bg-gradient-to-r from-[#D6001C] via-[#FF416C] to-[#FF9A8B] text-transparent bg-clip-text"
          >
            Bidang & Program Unggulan Nichirin Gakuin Centerindo
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-3 text-gray-600 text-center max-w-3xl mx-auto"
          >
            Kami terus berkomitmen mencetak tenaga profesional Indonesia untuk
            bekerja dan belajar di Jepang. Program unggulan Nichirin difokuskan
            pada bidang industri prioritas dengan pembekalan bahasa, budaya, dan
            etos kerja Jepang.
          </p>

          {/* GRID */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Program Tokutei Ginou",
                tag: "特定技能",
                desc: "Program kerja resmi di Jepang dengan sertifikasi kemampuan dan bidang industri tertentu seperti manufaktur, restoran, dan pertanian.",
                gradient: "from-[#FF416C] to-[#FF9A8B]",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 20h9" />
                    <path d="M3 20h9M12 3v17M5 10h14" />
                  </svg>
                ),
              },
              {
                title: "Program Ginou Jisshuu",
                tag: "技能実習",
                desc: "Memberikan kesempatan magang kerja di Jepang bagi peserta untuk belajar keterampilan dan disiplin industri secara langsung di perusahaan Jepang.",
                gradient: "from-[#D6001C] to-[#FF4E50]",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 12h18M12 3v18" />
                  </svg>
                ),
              },
              {
                title: "Bidang Kaigo Shoku",
                tag: "介護職",
                desc: "Pelatihan dan pengiriman peserta kerja di bidang perawatan lansia dengan keterampilan komunikasi dan empati sesuai standar Jepang.",
                gradient: "from-[#FF758C] to-[#FF7EB3]",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 11a4 4 0 110-8 4 4 0 010 8zm-6 8a6 6 0 1112 0H6z" />
                  </svg>
                ),
              },
              {
                title: "Bidang Manufaktur & Industri",
                tag: "製造業",
                desc: "Pelatihan teknis di bidang mesin, elektronika, dan perakitan industri bagi peserta Tokutei Ginou untuk memenuhi kebutuhan sektor manufaktur Jepang.",
                gradient: "from-[#FF4E50] to-[#D6001C]",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16v16H4zM9 9h6v6H9z" />
                  </svg>
                ),
              },
              {
                title: "Bidang Pertanian & Peternakan",
                tag: "農業・畜産",
                desc: "Program pengiriman tenaga kerja sektor agrikultur dan peternakan Jepang dengan pelatihan budidaya dan manajemen hasil tani modern.",
                gradient: "from-[#FB7185] to-[#F43F5E]",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 20V10l7-6 7 6v10H5z" />
                  </svg>
                ),
              },
              {
                title: "Nihongo Juku & Budaya Jepang",
                tag: "日本語塾",
                desc: "Pembelajaran bahasa dan budaya Jepang berbasis komunikasi dengan metode interaktif untuk kesiapan bekerja dan hidup di Jepang.",
                gradient: "from-[#FF416C] via-[#FF4E50] to-[#D6001C]",
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in-up"
                data-aos-delay={i * 120}
                className="group relative rounded-2xl bg-white p-6 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-[#ffe5e5]"
              >
                {/* Icon Gradient */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl text-white shadow-lg bg-gradient-to-br ${item.gradient}`}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h4 className="mt-4 font-semibold text-slate-900 group-hover:text-[#D6001C] transition-colors">
                  {item.title}
                </h4>

                {/* Tag */}
                <span className="mt-2 inline-block px-2 py-1 text-xs rounded-full bg-[#fff0f0] text-[#d6001c] ring-1 ring-[#ffd0d0]">
                  {item.tag}
                </span>

                {/* Desc */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {item.desc}
                </p>

                {/* Gradient Accent Line */}
                <div
                  className={`absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <a
              href="/tokutei-ginou"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold
           bg-gradient-to-r from-[#D6001C] via-[#FF4E50] to-[#FF9A8B] text-white shadow-md hover:shadow-lg hover:brightness-110 transition"
            >
              Lihat Program Lengkap Kami
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
   SECTION: FAQ - NICHIRIN GAKUIN CENTERINDO (WITH VISUAL BLEND)
===================================================== */}
      <section
        id="faq"
        className="relative overflow-hidden bg-gradient-to-b from-white via-[#fff5f5] to-[#ffe5e5]"
      >
        {/* Background gradient halus */}
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_center,#FF4E50,transparent_70%)]" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 items-center gap-8">
          {/* FAQ kiri */}
          <div className="lg:col-span-7 px-6 lg:px-10 py-16 order-2 lg:order-1 z-10">
            {/* Judul */}
            <div className="text-left mb-10">
              <h2
                data-aos="fade-up"
                className="text-4xl font-extrabold bg-gradient-to-r from-[#D6001C] via-[#FF4E50] to-[#FF9A8B] text-transparent bg-clip-text"
              >
                Pertanyaan yang Sering Diajukan
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="150"
                className="mt-3 text-gray-600 max-w-xl"
              >
                Informasi seputar program pelatihan, proses pengiriman, dan
                sistem pendidikan di Nichirin Gakuin Centerindo.
              </p>
            </div>

            {/* FAQ list */}
            <div data-aos="fade-up" className="space-y-4">
              {[
                {
                  q: "Apa itu program Tokutei Ginou dan siapa yang bisa mengikutinya?",
                  a: "Tokutei Ginou (特定技能) adalah program kerja resmi di Jepang bagi tenaga kerja terampil dengan sertifikasi kemampuan dan bahasa Jepang minimal JLPT N4. Program ini terbuka bagi peserta yang telah mengikuti pelatihan di Nichirin Gakuin Centerindo dan lulus seleksi perusahaan Jepang.",
                },
                {
                  q: "Apa perbedaan antara Tokutei Ginou dan Ginou Jisshuu?",
                  a: "Ginou Jisshuu (技能実習) adalah program magang di Jepang yang berfokus pada pembelajaran keterampilan teknis selama 3 tahun. Sementara Tokutei Ginou adalah program kerja penuh setelah peserta memiliki kemampuan dan pengalaman kerja yang diakui.",
                },
                {
                  q: "Berapa lama proses pelatihan sebelum keberangkatan?",
                  a: "Durasi pelatihan bervariasi antara 3–6 bulan tergantung bidang dan tingkat kemampuan peserta. Selama pelatihan, peserta akan belajar bahasa Jepang, budaya kerja, etika, serta keterampilan praktis sesuai bidangnya.",
                },
                {
                  q: "Apakah Nichirin Gakuin Centerindo bekerja sama langsung dengan perusahaan Jepang?",
                  a: "Ya. Kami bekerja sama dengan berbagai perusahaan Jepang dan kumiai (asosiasi penerima) di bidang manufaktur, perawatan lansia (kaigo), restoran, agrikultur, dan lainnya untuk menyalurkan lulusan yang siap kerja.",
                },
                {
                  q: "Apa saja fasilitas yang disediakan selama pelatihan?",
                  a: "Nichirin menyediakan asrama nyaman, kelas modern, pengajar bersertifikat, simulasi wawancara perusahaan Jepang, serta pendampingan administratif hingga keberangkatan.",
                },
                {
                  q: "Apakah peserta akan dibimbing hingga bekerja di Jepang?",
                  a: "Ya, Nichirin memberikan pendampingan penuh mulai dari seleksi, pelatihan pra-keberangkatan, hingga bimbingan karier dan komunikasi dengan pihak penerima di Jepang.",
                },
              ].map((item, i) => {
                const [open, setOpen] = React.useState(false);

                return (
                  <div
                    key={i}
                    onClick={() => setOpen(!open)}
                    className={`cursor-pointer rounded-xl border p-5 transition-all ${
                      open
                        ? "bg-white shadow-lg border-[#FF9A8B]/60"
                        : "bg-white border-gray-200 hover:border-[#FF9A8B]/70"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-800 text-left">
                        {item.q}
                      </h4>

                      <span
                        className={`ml-4 inline-flex w-8 h-8 items-center justify-center rounded-full 
                    bg-gradient-to-r from-[#D6001C] to-[#FF4E50] text-white shadow-sm transition-transform duration-300 ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </div>

                    <div
                      className={`mt-3 text-gray-600 text-sm leading-relaxed transition-all duration-300 overflow-hidden ${
                        open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.a}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual kanan - blend collage */}
          <div
            data-aos="fade-left"
            data-aos-delay="150"
            className="lg:col-span-5 relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-md">
              {/* Layer foto */}
              <div className="grid grid-cols-2 gap-3 rounded-3xl overflow-hidden">
                <img
                  src="/img/fotohero1.png"
                  alt="Keberangkatan 1"
                  className="object-cover w-full h-48 rounded-2xl"
                />
                <img
                  src="/img/fotohero2.png"
                  alt="Keberangkatan 2"
                  className="object-cover w-full h-48 rounded-2xl"
                />
                <img
                  src="/img/fotohero3.png"
                  alt="Keberangkatan 3"
                  className="object-cover w-full h-48 rounded-2xl"
                />
                <img
                  src="/img/fotohero4.png"
                  alt="Keberangkatan 4"
                  className="object-cover w-full h-48 rounded-2xl"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#ff6961]/40 via-[#ffb3b3]/20 to-transparent rounded-3xl backdrop-blur-[1px]" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA AKHIR - NICHIRIN GAKUIN (ELEGANT VERSION) */}
      <section
        data-aos="fade-up"
        id="contact"
        className="relative text-white"
        style={{
          backgroundImage: `url('/img/fotohero2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay gradient elegan */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#420000]/95 via-[#7a0b0b]/85 to-[#0e0e0e]/90"></div>

        <div className="relative container mx-auto px-6 lg:px-24 py-24 flex flex-col items-center">
          {/* glass card */}
          <div
            data-aos="zoom-in"
            data-aos-delay="150"
            className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.1)] p-10 max-w-3xl text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
              Siap Melangkah Menuju Karier di Jepang Bersama Nichirin?
            </h2>

            <p className="mt-5 text-lg text-gray-100 leading-relaxed">
              Dapatkan pelatihan bahasa, budaya, dan etika kerja Jepang secara
              profesional untuk mempersiapkan masa depan Anda di perusahaan
              Jepang terbaik.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="https://wa.me/6281399696105"
                target="_blank"
                className="px-10 py-3 rounded-xl font-semibold shadow-lg 
                     bg-gradient-to-r from-white to-gray-100 
                     text-[#2b0000] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] 
                     transition-all duration-300"
              >
                Hubungi Kami Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/**
 * useCountUp – animasi angka saat elemen terlihat di viewport
 * options: { end:number, duration:ms, easing:'linear'|'easeOut' }
 */
/* === Component & Hook === */
function StatCard({ icon, numberEnd, suffix = "", label }) {
  const { ref, value } = useCountUp({
    end: numberEnd,
    duration: 1500,
    easing: "easeOut",
  });

  return (
    <div
      ref={ref}
      className="group rounded-2xl bg-white/70 backdrop-blur-md
                 shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                 transition-all duration-500 p-8 flex flex-col items-center text-center"
    >
      <div
        className="mb-4 grid place-items-center w-14 h-14 rounded-xl 
                      bg-gradient-to-br from-sky-500 to-emerald-500 text-white"
      >
        {icon}
      </div>
      <div className="text-4xl font-extrabold text-slate-900 tracking-tight">
        {value}
        {suffix}
      </div>
      <p className="mt-2 text-gray-600">{label}</p>
    </div>
  );
}

function useCountUp({ end = 0, duration = 1200, easing = "easeOut" } = {}) {
  const ref = React.useRef(null);
  const [value, setValue] = React.useState(0);
  const startedRef = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            animateCount(
              0,
              end,
              duration,
              (v) => setValue(Math.round(v)),
              easing
            );
          }
        });
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [end, duration, easing]);

  return { ref, value };
}

function animateCount(from, to, duration, onUpdate, easing = "easeOut") {
  const start = performance.now();
  const ease = (t) => {
    if (easing === "linear") return t;
    return 1 - Math.pow(1 - t, 3); // easeOutCubic
  };

  function frame(now) {
    const p = Math.min(1, (now - start) / duration);
    const v = from + (to - from) * ease(p);
    onUpdate(v);
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ===== Ikon (SVG inline) ===== */

function ScaleIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.07-6.07L17.66 7.34M7.34 17.66L5.93 19.07m12.73 0l-1.41-1.41M7.34 6.34 5.93 4.93" />
    </svg>
  );
}
function LawIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 3L2 9l10 6 10-6-10-6z" />
      <path d="M2 9v6l10 6 10-6V9" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
