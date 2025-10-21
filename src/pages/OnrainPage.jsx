import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  BadgeCheck,
  GraduationCap,
  BookOpen,
  BookOpenCheck,
  Video,
  Laptop,
  FileCheck2,
  Mic2,
  Speech,
  MessageSquare,
  FileText,
  Camera,
  Award,
  Users,
  Clock,
  Globe2,
  Headphones,
  ClipboardCheck,
  Layers,
  ArrowRight,
  CheckCircle2,
  Handshake,
  PenTool,
  LineChart,
} from "lucide-react";

export default function NihongoJukuPage() {
  React.useEffect(() => {
    AOS.init({ duration: 820, once: true, easing: "ease-out-cubic" });
    window.scrollTo(0, 0);
  }, []);

  const classes = [
    [
      "Kelas Dasar (Beginner Class)",
      "N5",
      "Belajar hiragana, katakana, salam, dan kosakata dasar.",
    ],
    [
      "Kelas Menengah (Intermediate Class)",
      "N4 – N3",
      "Latihan percakapan dan tata bahasa kerja sehari-hari.",
    ],
    [
      "Kelas Lanjutan (Advance Class)",
      "N2",
      "Persiapan ujian JLPT & komunikasi bisnis formal.",
    ],
    [
      "Kelas Percakapan (Kaiwa Class)",
      "Semua Level",
      "Fokus berbicara aktif & mendengar native Jepang.",
    ],
    [
      "Kelas Khusus SSW / Tokutei Ginou",
      "N5 – N4",
      "Persiapan ujian bahasa untuk Tokutei Ginou.",
    ],
    [
      "Kelas Khusus Gijinkoku / Profesional",
      "N3 – N2",
      "Komunikasi bisnis, dokumen kerja, dan wawancara.",
    ],
    [
      "Private Class (1-on-1)",
      "Bebas",
      "Materi disesuaikan 100% dengan kebutuhan siswa.",
    ],
  ];

  const fasilitas = [
    "Materi lengkap (e-book, latihan, audio)",
    "Akses grup diskusi & tanya jawab",
    "Sertifikat resmi LPK Nichirin",
    "Konsultasi rencana kerja/kuliah ke Jepang",
    "Free trial 1x untuk peserta baru",
  ];

  const cocokUntuk = [
    "Kamu yang ingin kerja ke Jepang (SSW / Gijinkoku)",
    "Kamu yang persiapan sekolah / kuliah di Jepang",
    "Kamu yang ingin lulus JLPT N5–N2",
    "Kamu yang ingin lancar berbicara bahasa Jepang",
    "Kamu yang sibuk bekerja/sekolah tapi tetap ingin belajar",
  ];

  const metode = [
    ["Zoom / Google Meet", Video],
    ["E-book, PDF, Slide Materi", BookOpenCheck],
    ["Latihan Mendengar (Choukai)", Headphones],
    ["Latihan Percakapan Langsung", Mic2],
    ["Evaluasi & Ujian Tiap Level", ClipboardCheck],
    ["Sertifikat Kelulusan Resmi", Award],
  ];

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <BackToTopButton />

      {/* =====================================================
          HERO — Nihongo Onrain Juku
      ====================================================== */}
      <section
        id="hero-juku"
        className="relative overflow-hidden pt-[100px] lg:pt-[120px]"
      >
        <div className="absolute inset-0">
          <img
            src="/img/fotohero1.png"
            alt="Nihongo Onrain Juku Nichirin"
            className="w-full h-full object-cover object-center scale-105"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-[#FFF4F4]" />
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(70rem_50rem_at_10%_-10%,#D6001C_0%,transparent_55%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FFF0F0] text-[#D6001C] font-semibold text-sm ring-1 ring-[#FFD6D6]">
              <BadgeCheck className="w-4 h-4" />
              Nihongo Onrain Juku（にほんごオンライン塾）
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-[#111]">
              Belajar Bahasa Jepang Online
              <br />
              <span className="bg-gradient-to-r from-[#D6001C] via-[#FF4E50] to-[#FF9A8B] text-transparent bg-clip-text">
                Dari Mana Saja!
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed text-justify">
              Nihongo Onrain Juku adalah program kelas bahasa Jepang daring yang
              dirancang fleksibel, efektif, dan terarah — untuk persiapan kerja
              (SSW / Gijinkoku), sekolah (Ryuugaku), JLPT, hingga percakapan
              sehari-hari.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#kelas"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#D6001C] via-[#E3242B] to-[#FF4E50] hover:shadow-[0_0_24px_rgba(255,78,80,0.45)] transition-all"
              >
                Lihat Kelas
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#metode"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold border border-[#D6001C] text-[#D6001C] hover:bg-[#D6001C] hover:text-white transition-all"
              >
                Metode Belajar
              </a>
            </div>
          </div>

          <div data-aos="fade-left" className="md:pl-8">
            <div className="rounded-3xl bg-white border border-[#FFD6D6] p-6 shadow-[0_10px_40px_rgba(214,0,28,0.08)]">
              <h3 className="text-xl font-bold text-[#D6001C] flex items-center gap-2">
                <Laptop className="w-5 h-5" />
                Belajar Tanpa Batas
              </h3>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed text-justify">
                Cukup dengan HP atau laptop dan koneksi internet, kamu bisa
                belajar bahasa Jepang langsung dengan pengajar profesional
                Nichirin dari mana saja — kapan saja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          KENAPA PILIH NIHONGO JUKU
      ====================================================== */}
      <section id="kenapa" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-extrabold text-[#111]"
          >
            Kenapa Pilih{" "}
            <span className="text-[#D6001C]">Nihongo Onrain Juku</span>?
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              ["Belajar fleksibel dari rumah", Laptop],
              ["Pilih waktu sendiri", Clock],
              ["Materi sesuai tujuan (kerja/kuliah/JLPT)", BookOpen],
              ["Dibimbing pengajar berpengalaman", Users],
              ["Sertifikat resmi setelah lulus", Award],
              ["Bisa lanjut ke jalur kerja/sekolah Jepang", Globe2],
            ].map(([text, Icon], i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                className="p-7 rounded-2xl border border-gray-200 hover:border-[#D6001C] transition-all shadow-[0_6px_24px_rgba(16,24,40,0.05)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF0F0] text-[#D6001C] grid place-items-center">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="mt-4 text-sm text-gray-700 leading-relaxed text-justify">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          KELAS YANG TERSEDIA
      ====================================================== */}
      <section id="kelas" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              Kelas yang Tersedia
            </h2>
          </div>

          <div
            className="mt-10 overflow-x-auto rounded-2xl border border-gray-200"
            data-aos="fade-up"
          >
            <table className="min-w-full bg-white text-sm">
              <thead className="bg-[#FFF6F6] text-[#D6001C]">
                <tr className="text-left">
                  <th className="px-5 py-3">Nama Kelas</th>
                  <th className="px-5 py-3">Level</th>
                  <th className="px-5 py-3">Tujuan</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {classes.map(([name, level, tujuan], i) => (
                  <tr key={i}>
                    <td className="px-5 py-3 font-semibold">{name}</td>
                    <td className="px-5 py-3">{level}</td>
                    <td className="px-5 py-3 text-justify">{tujuan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =====================================================
          METODE BELAJAR
      ====================================================== */}
      <section id="metode" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-extrabold text-[#111]"
          >
            Metode Belajar di{" "}
            <span className="text-[#D6001C]">Nihongo Juku</span>
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {metode.map(([title, Icon], i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="p-7 rounded-2xl border border-gray-200 hover:border-[#D6001C] transition-all shadow-[0_6px_24px_rgba(16,24,40,0.05)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF0F0] text-[#D6001C] grid place-items-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="mt-4 font-semibold text-gray-900">{title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FASILITAS
      ====================================================== */}
      <section id="fasilitas" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              Fasilitas Peserta
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {fasilitas.map((f, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                className="rounded-2xl bg-white border border-gray-200 p-5 flex gap-3 items-start"
              >
                <div className="w-9 h-9 rounded-lg bg-[#FFF0F0] text-[#D6001C] grid place-items-center flex-none">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed text-justify">
                  {f}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          UNTUK SIAPA PROGRAM INI
      ====================================================== */}
      <section id="cocok" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-extrabold text-[#111]"
          >
            Siapa yang Cocok Ikut{" "}
            <span className="text-[#D6001C]">Nihongo Onrain Juku?</span>
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cocokUntuk.map((text, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 70}
                className="p-6 rounded-2xl border border-gray-200 bg-[#FFF8F8] hover:shadow-md transition-all"
              >
                <p className="text-sm text-gray-700 leading-relaxed text-justify">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section id="daftar" className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <div
            className="rounded-2xl p-10 bg-gradient-to-r from-[#D6001C] via-[#E3242B] to-[#FF4E50] text-white shadow-[0_10px_36px_rgba(214,0,28,0.2)]"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Siap Belajar Bahasa Jepang Bersama Nihongo Juku?
            </h3>
            <p className="mt-3 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Mulai dari kelas dasar hingga bisnis, semua bisa kamu akses
              online. Dapatkan 1x trial gratis dan bimbingan langsung dari
              pengajar berpengalaman.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/6281399696105"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 rounded-full font-semibold bg-white text-[#D6001C] hover:scale-[1.02] transition-all"
              >
                Daftar Trial Gratis
              </a>
              <a
                href="mailto:ptnichirin@gmail.com"
                className="px-8 py-3 rounded-full font-semibold border border-white/80 hover:bg-white hover:text-[#D6001C] transition-all"
              >
                Hubungi Admin via Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
