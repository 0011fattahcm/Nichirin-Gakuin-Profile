// src/pages/ProfilPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

import {
  Building2,
  Calendar,
  FileText,
  MapPin,
  Phone,
  Mail,
  Globe,
  ShieldCheck,
  Users,
  BookOpen,
  Handshake,
  Plane,
  Briefcase,
  Languages,
  BadgeCheck,
  Factory,
  HeartHandshake,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function ProfilPage() {
  React.useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <BackToTopButton />

      {/* =====================================================
      HERO PROFIL — NICHIRIN GAKUIN CENTERINDO
===================================================== */}
      <section
        id="hero-profil"
        className="relative overflow-hidden pt-[100px] lg:pt-[120px] min-h-[90vh] flex items-center bg-white"
      >
        {/* === BACKGROUND FOTO + OVERLAY GRADIENT === */}
        <div className="absolute inset-0">
          <img
            src="/img/fotohero3.png"
            alt="Kegiatan Pelatihan Nichirin Gakuin"
            className="w-full h-full object-cover object-center scale-105 brightness-[0.85]"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#D6001C]/70 to-[#FF9A8B]/40" />
        </div>

        {/* === CONTENT === */}
        <div
          className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 text-white"
          data-aos="fade-up"
        >
          <div className="max-w-3xl space-y-5">
            {/* Label */}
            <span className="inline-block bg-white/20 backdrop-blur-sm text-sm tracking-wide font-semibold px-4 py-1.5 rounded-full border border-white/30 shadow-sm">
              会社概要 — Company Profile
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#fff] via-[#FFD1D1] to-[#FF9A8B] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
              LPK Nichirin Gakuin Centerindo
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              Lembaga pelatihan resmi berizin Kementerian Ketenagakerjaan
              Republik Indonesia yang menjembatani kerja sama antara{" "}
              <span className="font-semibold text-[#FFD1D1]">
                Indonesia dan Jepang
              </span>{" "}
              melalui pendidikan bahasa, pelatihan keterampilan, dan pengiriman
              tenaga kerja terampil (特定技能) serta teknis (技能実習生) ke
              perusahaan-perusahaan Jepang.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-5">
              <a
                href="#visi-misi"
                className="px-8 py-3 rounded-full font-semibold shadow-lg bg-gradient-to-r from-[#D6001C] via-[#E3242B] to-[#FF4E50] hover:shadow-[0_0_25px_rgba(255,78,80,0.6)] hover:-translate-y-1 transition-all duration-500"
              >
                Lihat Visi & Misi
              </a>
              <a
                href="/public/ニチリン学院センター会社概要.pdf"
                className="px-8 py-3 rounded-full font-semibold border-2 border-white/80 text-white hover:bg-white hover:text-[#D6001C] transition-all duration-500 hover:-translate-y-1"
              >
                Lihat Company Profile
              </a>
            </div>
          </div>
        </div>

        {/* === DEKORASI LIGHT GLOW === */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-40 bg-[radial-gradient(60%_60%_at_center,rgba(255,255,255,0.25),transparent_80%)] blur-3xl pointer-events-none" />
      </section>

      {/* =====================================================
     LEGAL BADGE (Kemnaker) — Modern Nichirin Style
===================================================== */}
      <section className="relative py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div
            className="relative flex flex-col md:flex-row items-center justify-between gap-6
                 bg-white border border-[#FFE2E2] rounded-2xl px-8 py-8
                 shadow-[0_10px_40px_rgba(214,0,28,0.06)] hover:shadow-[0_12px_45px_rgba(214,0,28,0.12)]
                 transition-all duration-500"
            data-aos="zoom-in"
          >
            {/* Decorative gradient stripe */}
            <div className="absolute top-0 left-0 w-full h-[5px] rounded-t-2xl bg-gradient-to-r from-[#D6001C] via-[#FF4E50] to-[#FF9A8B]" />

            {/* Left Section */}
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFF0F0] to-white ring-1 ring-[#FFD6D6]">
                <ShieldCheck className="w-6 h-6 text-[#D6001C]" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#111]">
                  Terdaftar di{" "}
                  <span className="bg-gradient-to-r from-[#D6001C] via-[#FF4E50] to-[#FF9A8B] bg-clip-text text-transparent">
                    Kementerian Ketenagakerjaan RI
                  </span>
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Nomor VIN Resmi:{" "}
                  <span className="font-semibold text-[#D6001C]">
                    2310320601
                  </span>
                </p>
              </div>
            </div>

            {/* Right Section - CTA */}
            <div className="flex-shrink-0">
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white
                     bg-gradient-to-r from-[#D6001C] via-[#E3242B] to-[#FF4E50]
                     hover:shadow-[0_0_25px_rgba(255,78,80,0.5)]
                     hover:-translate-y-[2px] transition-all duration-500"
              >
                <span>Hubungi Kami</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Optional subtle glow background */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_center,rgba(255,200,200,0.15),transparent_70%)] blur-3xl pointer-events-none" />
        </div>
      </section>

      {/* =====================================================
          SECTION — TENTANG NICHIRIN
      ====================================================== */}
      <section id="tentang" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div data-aos="fade-right">
            <img
              src="/img/fotohero2.png"
              alt="Tentang Nichirin"
              className="rounded-3xl w-full h-[450px] object-cover"
            />
          </div>

          {/* Right Text */}
          <div data-aos="fade-left" className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111]">
              Tentang{" "}
              <span className="bg-gradient-to-r from-[#D6001C] to-[#FF4E50] bg-clip-text text-transparent">
                LPK Nichirin Gakuin
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Kami berkomitmen meningkatkan kualitas SDM Indonesia melalui
              pembelajaran bahasa Jepang, pembinaan etika kerja, dan pelatihan
              keterampilan. Nichirin menjadi penghubung antara peserta Indonesia
              dan perusahaan penerima di Jepang dengan sistem yang transparan
              dan terdokumentasi.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                {
                  icon: BookOpen,
                  title: "Fokus Kami",
                  text: "Bahasa Jepang, budaya kerja, dan etos profesional unggul.",
                },
                {
                  icon: Users,
                  title: "Metode",
                  text: "Pelatihan intensif & simulasi interview perusahaan Jepang.",
                },
                {
                  icon: Handshake,
                  title: "Jaringan",
                  text: "Kumiai & perusahaan di berbagai sektor prioritas.",
                },
                {
                  icon: Plane,
                  title: "Pendampingan",
                  text: "Administratif hingga keberangkatan & pasca penempatan.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-4 border border-gray-200 rounded-xl hover:border-[#D6001C] transition-all"
                >
                  <item.icon className="w-5 h-5 text-[#D6001C] mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION — DATA PERUSAHAAN
      ====================================================== */}
      <section className="py-28 bg-[#FAFAFA]" id="data">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div data-aos="fade-right" className="space-y-6">
            <h2 className="text-4xl font-extrabold text-[#111]">
              Data <span className="text-[#D6001C]">Perusahaan</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Berikut informasi legalitas dan identitas resmi perusahaan kami
              yang terdaftar di Kementerian Ketenagakerjaan Republik Indonesia.
            </p>
            <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-6">
              <ul className="space-y-4 text-sm text-gray-700">
                {[
                  ["Nama", "PT NICHIRIN GAKUIN CENTERINDO"],
                  ["Tahun Berdiri", "6 Juni 2023"],
                  ["Nomor Registrasi", "08062300187140003"],
                  ["Nomor VIN Kemnaker", "2310320601"],
                  [
                    "Alamat",
                    "Jl. Raya Salopa – Manonjaya, Ds. Karyawangi, Kec. Salopa, Kab. Tasikmalaya",
                  ],
                  ["Telepon", "(+62) 813-9969-6105"],
                  ["Email", "ptnichirin@gmail.com"],
                  ["Website", "nichiringakuin.com"],
                ].map(([label, val], i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-[#D6001C]" />
                    <div>
                      <p className="text-gray-500 text-xs">{label}</p>
                      <p className="font-semibold">{val}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Image */}
          <div data-aos="fade-left">
            <img
              src="/img/fotohero3.png"
              alt="Gedung Perusahaan Nichirin"
              className="rounded-3xl w-full h-[450px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
     SECTION — VISI & MISI (Compact Metallic Nichirin)
===================================================== */}
      <section
        id="visi-misi"
        className="relative overflow-hidden py-20 bg-gradient-to-b from-[#0A0A0A] via-[#161616] to-[#1B1B1B] text-white"
      >
        {/* background metalic */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(circle_at_80%_90%,rgba(214,0,28,0.25),transparent_70%)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 text-center">
          {/* ===== TITLE ===== */}
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10"
          >
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#D6001C] to-[#FF4E50] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,78,80,0.4)]">
              VISI & MISI
            </span>
          </h2>

          {/* ===== VISI ===== */}
          <div
            data-aos="fade-up"
            className="relative max-w-3xl mx-auto bg-gradient-to-br from-[#2A2A2A]/60 via-[#1A1A1A]/70 to-[#0F0F0F]/60
                 border border-[#D6001C]/40 rounded-2xl p-8 text-justify
                 shadow-[inset_0_0_20px_rgba(255,255,255,0.05),0_10px_30px_rgba(214,0,28,0.2)]
                 hover:shadow-[inset_0_0_25px_rgba(255,255,255,0.08),0_15px_40px_rgba(214,0,28,0.3)]
                 transition-all duration-700"
          >
            <h3 className="text-xl font-bold text-[#FF9A8B] mb-3 tracking-wide">
              V I S I
            </h3>
            <p className="text-sm text-gray-200 leading-relaxed">
              Menjadi lembaga pengembangan kemampuan yang secara konsisten
              membantu pemerintah meningkatkan kompetensi sumber daya manusia
              Indonesia guna menjadi insan yang produktif dan berkualitas dalam
              menghadapi ekonomi global.
            </p>
            <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D6001C] via-[#FF4E50] to-transparent rounded-b-2xl" />
          </div>

          {/* ===== MISI ===== */}
          <div
            className="mt-14 grid md:grid-cols-3 gap-6 text-left"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            {[
              {
                title: "Pelatihan & Pendampingan",
                desc: "Menyelenggarakan kegiatan pelatihan dan pendampingan dalam program pemagangan ke Jepang berbasis pengembangan sumber daya manusia yang berkualitas dan memiliki daya saing tinggi.",
              },
              {
                title: "Peningkatan Keterampilan",
                desc: "Memberikan dorongan bagi masyarakat utamanya usia produktif untuk meningkatkan kualitas dan keterampilan sehingga dapat bersaing dan berkarya di dunia kerja, baik dalam maupun luar negeri.",
              },
              {
                title: "Pemberdayaan Potensi",
                desc: "Memberdayakan dan mengoptimalkan potensi unggulan yang dimiliki setiap individu atau kelompok masyarakat melalui program magang khususnya bidang pertanian, peternakan, perikanan dan industri guna memberi nilai tambah untuk kepentingan ekonomi, sosial dan budaya.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group overflow-hidden p-6 rounded-2xl border border-[#D6001C]/50
                     bg-gradient-to-br from-[#2B2B2B]/70 via-[#1B1B1B]/80 to-[#0E0E0E]/80
                     shadow-[inset_0_0_15px_rgba(255,255,255,0.05),0_8px_25px_rgba(214,0,28,0.25)]
                     hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.1),0_12px_35px_rgba(214,0,28,0.3)]
                     transition-all duration-700 text-justify"
                data-aos="zoom-in"
                data-aos-delay={i * 120}
              >
                {/* Reflection overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0.04)_70%,rgba(255,255,255,0)_100%)] opacity-70 group-hover:opacity-90 transition-all duration-700" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-md bg-gradient-to-br from-[#FF4E50]/90 to-[#D6001C]/90 text-white text-xs font-bold shadow-[0_0_8px_rgba(214,0,28,0.4)]">
                      {i + 1}
                    </div>
                    <h4 className="text-base font-semibold text-[#FFB3B3]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[13px] text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#D6001C] via-[#FF4E50] to-transparent opacity-70" />
              </div>
            ))}
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
