import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  CheckCircle2,
  FileCheck2,
  Clock,
  PlaneTakeoff,
  GraduationCap,
  Wallet,
} from "lucide-react";

export default function BiayaProsesPage() {
  React.useEffect(() => {
    AOS.init({ duration: 850, once: true, easing: "ease-out-cubic" });
    window.scrollTo(0, 0);
  }, []);

  const biayaOffline = [
    "Pelatihan dan pendidikan Bahasa Jepang sampai terpilih",
    "Buku modul Bahasa Jepang + terjemahan",
    "Bangunan dan fasilitas asrama",
    "Ujian Sertifikasi JFT / JLPT & SSW (max 2 kali)",
    "Seragam olahraga",
    "Napuda (alat kebersihan pribadi)",
    "Infaq bimbingan dan kajian rutin",
  ];

  const biayaOnline = [
    "Pendidikan Bahasa Jepang daring",
    "Buku digital modul Bahasa Jepang + terjemahan",
    "Akses kelas online (Zoom/Google Meet)",
    "Forum bimbingan dan diskusi",
  ];

  const timeline = [
    {
      title: "Pendaftaran dan Seleksi",
      desc: "Calon siswa mengikuti proses pendaftaran dan seleksi, termasuk tes psikologi dan pemeriksaan kesehatan.",
      icon: FileCheck2,
    },
    {
      title: "Pendaftaran Ulang & Pembiayaan",
      desc: "Setelah lulus seleksi, siswa mendaftar ulang dengan biaya pelatihan yang dapat diangsur sesuai ketentuan.",
      icon: Wallet,
    },
    {
      title: "Pelatihan Bahasa & Budaya Jepang",
      desc: "Peserta mengikuti pelatihan bahasa dan budaya Jepang selama 4–5 bulan di bawah bimbingan instruktur Nichirin.",
      icon: GraduationCap,
    },
    {
      title: "Ujian Kemampuan Bahasa Jepang",
      desc: "Peserta mengikuti ujian JFT/JLPT/SSW sebagai syarat untuk lanjut ke tahap pencocokan kerja.",
      icon: CheckCircle2,
    },
    {
      title: "Wawancara dengan Perusahaan Jepang",
      desc: "Program memfasilitasi pencocokan profil dan wawancara resmi dengan perusahaan Jepang.",
      icon: FileCheck2,
    },
    {
      title: "Persiapan Keberangkatan & Dokumen Visa",
      desc: "Peserta dibantu dalam pengurusan visa, paspor, dan dokumen COE untuk keberangkatan.",
      icon: PlaneTakeoff,
    },
    {
      title: "Keberangkatan ke Jepang",
      desc: "Peserta siap diberangkatkan dan didampingi sampai tiba di Jepang.",
      icon: Clock,
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <BackToTopButton />

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section
        id="hero"
        className="relative overflow-hidden pt-[100px] lg:pt-[120px]"
      >
        <div className="absolute inset-0">
          <img
            src="/img/fotohero3.png"
            alt="Biaya dan Proses Nichirin"
            className="w-full h-full object-cover object-center scale-105"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-[#FFF4F4]" />
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(70rem_50rem_at_10%_-10%,#D6001C_0%,transparent_55%)]" />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-24 md:py-32">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#111] leading-tight">
            Biaya &{" "}
            <span className="bg-gradient-to-r from-[#D6001C] via-[#FF4E50] to-[#FF9A8B] bg-clip-text text-transparent">
              Proses Pelatihan
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ketahui rincian biaya pelatihan dan tahapan proses pembelajaran
            hingga keberangkatan ke Jepang bersama{" "}
            <span className="font-semibold text-[#D6001C]">
              LPK Nichirin Gakuin Centerindo
            </span>
            .
          </p>
        </div>
      </section>

      {/* =====================================================
          BIAYA PROGRAM
      ====================================================== */}
      <section id="biaya" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          {/* Offline */}
          <div
            data-aos="fade-up"
            className="grid lg:grid-cols-2 gap-10 bg-white border border-gray-200 rounded-2xl p-8 shadow-[0_8px_30px_rgba(185,0,15,0.08)]"
          >
            <div>
              <h2 className="text-2xl font-extrabold text-[#111]">
                Program Pelatihan Offline{" "}
                <span className="text-[#D6001C]">(Sistem Asrama)</span>
              </h2>
              <p className="mt-3 text-sm text-gray-600 text-justify">
                Diperuntukkan bagi peserta pelatihan tatap muka (Tokutei Ginou,
                Gijinkoku, Kaigo Shoku). Durasi pelatihan 4–5 bulan.
              </p>
              <h3 className="mt-6 font-bold text-[#D6001C]">Biaya Termasuk:</h3>
              <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
                {biayaOffline.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D6001C] mt-[2px]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FFF6F6] rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-[#FFD4D4]">
              <h4 className="text-gray-600 font-medium">
                Pembayaran Cash atau Angsuran
              </h4>
              <p className="mt-3 text-gray-400 line-through text-lg">
                Rp 10.000.000
              </p>
              <span className="mt-2 inline-block px-5 py-1 rounded-full bg-[#D6001C] text-white font-semibold text-sm">
                Diskon 20%
              </span>
              <h2 className="mt-3 text-4xl font-extrabold text-[#111]">
                Rp 8.000.000
              </h2>
              <button className="mt-5 px-8 py-3 bg-[#D6001C] text-white font-semibold rounded-full hover:scale-[1.02] transition-all">
                Dapatkan Diskon
              </button>
              <p className="mt-2 text-xs text-gray-500">
                *Belum termasuk konsumsi selama asrama.
              </p>
            </div>
          </div>

          {/* Online */}
          <div
            data-aos="fade-up"
            className="grid lg:grid-cols-2 gap-10 bg-white border border-gray-200 rounded-2xl p-8 shadow-[0_8px_30px_rgba(185,0,15,0.08)]"
          >
            <div>
              <h2 className="text-2xl font-extrabold text-[#111]">
                Program Pelatihan Online{" "}
                <span className="text-[#D6001C]">(Nihongo Onrain Juku)</span>
              </h2>
              <p className="mt-3 text-sm text-gray-600 text-justify">
                Diperuntukkan bagi peserta yang mengikuti kelas bahasa Jepang
                secara daring, dengan waktu belajar fleksibel dan kurikulum
                profesional.
              </p>
              <h3 className="mt-6 font-bold text-[#D6001C]">Biaya Termasuk:</h3>
              <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
                {biayaOnline.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D6001C] mt-[2px]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FFF6F6] rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-[#FFD4D4]">
              <h4 className="text-gray-600 font-medium">
                Pembayaran Cash Mulai Dari
              </h4>
              <h2 className="mt-3 text-4xl font-extrabold text-[#111]">
                Rp 550.000
              </h2>
              <span className="mt-2 inline-block px-5 py-1 rounded-full bg-[#D6001C] text-white font-semibold text-sm">
                Sampai Dengan
              </span>
              <h2 className="mt-3 text-4xl font-extrabold text-[#111]">
                Rp 1.500.000
              </h2>
              <button className="mt-5 px-8 py-3 bg-[#D6001C] text-white font-semibold rounded-full hover:scale-[1.02] transition-all">
                Dapatkan Harga
              </button>
              <p className="mt-2 text-xs text-gray-500">
                *Biaya menyesuaikan program kelas yang diambil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TIMELINE PROSES
      ====================================================== */}
      <section id="timeline" className="py-28 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-4xl font-extrabold text-[#D6001C]">
              Alur Proses Hingga Berangkat ke Jepang
            </h2>
            <p className="mt-3 text-gray-600">
              Berikut tahapan yang akan kamu jalani dari pendaftaran hingga
              keberangkatan ke Jepang.
            </p>
          </div>

          <div className="relative mt-16 border-l-2 border-[#D6001C]/30">
            {timeline.map((step, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 70}
                className="relative pl-10 pb-10"
              >
                <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#D6001C] shadow-[0_0_12px_rgba(214,0,28,0.4)]" />
                <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3">
                    <step.icon className="w-6 h-6 text-[#D6001C]" />
                    <h3 className="text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-gray-700 text-justify leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
