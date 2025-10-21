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
  ShieldCheck,
  BookOpenCheck,
  School,
  Building2,
  FileCheck2,
  IdCard,
  FileText,
  ScrollText,
  FileSignature,
  Camera,
  Wallet,
  Globe2,
  ArrowRight,
  Plane,
  Briefcase,
  Layers,
  CheckCircle2,
} from "lucide-react";

export default function RyuugakuPage() {
  React.useEffect(() => {
    AOS.init({ duration: 820, once: true, easing: "ease-out-cubic" });
    window.scrollTo(0, 0);
  }, []);

  const schoolTracks = [
    {
      name: "Nihongo Gakkou（日本語学校）",
      desc: "Sekolah Bahasa Jepang untuk pondasi bahasa & kehidupan di Jepang.",
      dur: "6 bulan – 2 tahun",
    },
    {
      name: "Senmon Gakkou（専門学校）",
      desc: "Sekolah kejuruan/vokasi untuk skill teknis dan profesional.",
      dur: "2 – 3 tahun",
    },
    {
      name: "Daigaku（大学）",
      desc: "Universitas program Sarjana (S1) berbagai jurusan.",
      dur: "4 tahun",
    },
    {
      name: "Tandai（短期大学）",
      desc: "Junior College/Diploma dengan fokus terapan.",
      dur: "2 – 3 tahun",
    },
    {
      name: "Daigakuin（大学院）",
      desc: "Pascasarjana (S2/S3) untuk riset lanjutan.",
      dur: "2 – 5 tahun",
    },
  ];

  const benefits = [
    "Bekerja paruh waktu hingga 28 jam/minggu (sesuai aturan imigrasi).",
    "Kesempatan lanjut kerja (Tokutei Ginou / Gijinkoku) setelah studi.",
    "Pendidikan berstandar internasional & jejaring global.",
    "Bisa pindah sekolah atau lanjut ke jenjang lebih tinggi.",
    "Peluang beasiswa (MEXT, JASSO, dan swasta).",
    "Belajar budaya dan bahasa Jepang langsung di Jepang.",
  ];

  const afterGrad = [
    "Lanjut studi (dari sekolah bahasa ke senmon/universitas).",
    "Masuk kerja dengan visa Gijinkoku (bila memenuhi syarat).",
    "Ubah status ke Tokutei Ginou/SSW untuk jalur kerja teknis.",
    "Pulang dan bekerja di perusahaan Jepang di Indonesia.",
  ];

  const services = [
    {
      icon: GraduationCap,
      title: "Konsultasi Pemilihan Sekolah",
      desc: "Kurasi kampus/sekolah sesuai target jurusan, biaya, dan kota.",
    },
    {
      icon: FileCheck2,
      title: "Pengurusan COE & Visa Pelajar",
      desc: "Pendampingan dokumen aplikasi hingga Certificate of Eligibility.",
    },
    {
      icon: BookOpenCheck,
      title: "Kursus Bahasa Jepang N5–N2",
      desc: "Kelas intensif + ujian JLPT/JFT untuk kesiapan akademik.",
    },
    {
      icon: Wallet,
      title: "Dokumen Sponsor Keuangan",
      desc: "Template & verifikasi berkas sponsor finansial.",
    },
    {
      icon: Globe2,
      title: "Komunikasi dengan Sekolah Jepang",
      desc: "Koordinasi administrasi dan timeline pendaftaran.",
    },
    {
      icon: Plane,
      title: "Bantuan Keberangkatan & Asrama",
      desc: "Briefing pra-keberangkatan, penjemputan, dan penempatan hunian.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <BackToTopButton />

      {/* =====================================================
          HERO — Program Ryuugaku
      ====================================================== */}
      <section
        id="hero-ryuugaku"
        className="relative overflow-hidden pt-[100px] lg:pt-[120px]"
      >
        <div className="absolute inset-0">
          <img
            src="/img/fotohero4.png"
            alt="Program Ryuugaku Nichirin"
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
              Program Ryuugaku（留学）— Sekolah/Kuliah di Jepang
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-[#111]">
              Langkah Pendidikan ke Jepang
              <br />
              <span className="bg-gradient-to-r from-[#D6001C] via-[#FF4E50] to-[#FF9A8B] text-transparent bg-clip-text">
                Visa Pelajar（留学ビザ）
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed text-justify">
              Ryuugaku berarti studi di luar negeri (Jepang) menggunakan Visa
              Pelajar. Jalur ini mencakup sekolah bahasa, sekolah kejuruan
              (senmon gakkou), universitas, hingga pascasarjana. Cocok untuk
              membangun fondasi bahasa, akademik, dan karier masa depan di
              Jepang.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#jalur"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#D6001C] via-[#E3242B] to-[#FF4E50] hover:shadow-[0_0_24px_rgba(255,78,80,0.45)] transition-all"
              >
                Jalur Pendidikan
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#syarat"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold border border-[#D6001C] text-[#D6001C] hover:bg-[#D6001C] hover:text-white transition-all"
              >
                Syarat & Dokumen
              </a>
            </div>
          </div>

          <div data-aos="fade-left" className="md:pl-8">
            <div className="rounded-3xl bg-white border border-[#FFD6D6] p-6 shadow-[0_10px_40px_rgba(214,0,28,0.08)]">
              <h3 className="text-xl font-bold text-[#D6001C] flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Kenapa Ryuugaku?
              </h3>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed text-justify">
                Belajar langsung bahasa, budaya, dan teknologi di Jepang. Selain
                akses pendidikan global, Anda mendapat peluang kerja paruh waktu
                dan jalur karier ke Tokutei Ginou maupun Gijinkoku setelah
                lulus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          JALUR PENDIDIKAN — Tabel
      ====================================================== */}
      <section id="jalur" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              Jalur Pendidikan <span className="text-[#D6001C]">Ryuugaku</span>{" "}
              di Jepang
            </h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
              Pilih institusi sesuai tujuan: penguasaan bahasa, skill vokasi,
              atau gelar akademik.
            </p>
          </div>

          <div
            className="mt-10 overflow-x-auto rounded-2xl border border-gray-200"
            data-aos="fade-up"
          >
            <table className="min-w-full bg-white text-sm">
              <thead className="bg-[#FFF6F6] text-[#D6001C]">
                <tr className="text-left">
                  <th className="px-5 py-3">Jenis Sekolah</th>
                  <th className="px-5 py-3">Penjelasan</th>
                  <th className="px-5 py-3">Lama Belajar</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {schoolTracks.map((row, i) => (
                  <tr key={i}>
                    <td className="px-5 py-3 font-semibold">{row.name}</td>
                    <td className="px-5 py-3 text-justify">{row.desc}</td>
                    <td className="px-5 py-3 whitespace-nowrap">{row.dur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =====================================================
          SYARAT UMUM & DOKUMEN
      ====================================================== */}
      <section id="syarat" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Syarat Umum */}
            <div
              data-aos="fade-right"
              className="rounded-2xl bg-white border border-gray-200 p-7"
            >
              <h3 className="text-2xl font-extrabold text-[#111] flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-[#D6001C]" />
                Syarat Umum Program Ryuugaku
              </h3>
              <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-2 text-justify">
                <li>Lulusan minimal SMA/SMK/sederajat.</li>
                <li>
                  Kemampuan dasar bahasa Jepang (N5–N4 untuk sekolah bahasa).
                </li>
                <li>Mampu secara finansial atau memiliki sponsor/beasiswa.</li>
                <li>Lulus seleksi dari sekolah di Jepang.</li>
                <li>Dokumen lengkap sesuai ketentuan.</li>
              </ul>
            </div>

            {/* Dokumen */}
            <div
              data-aos="fade-left"
              className="rounded-2xl bg-white border border-gray-200 p-7"
            >
              <h3 className="text-2xl font-extrabold text-[#111] flex items-center gap-2">
                <FileCheck2 className="w-6 h-6 text-[#D6001C]" />
                Dokumen yang Dibutuhkan
              </h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {[
                  [IdCard, "Paspor, KTP, & KK"],
                  [FileText, "Ijazah & Transkrip Nilai"],
                  [ScrollText, "Akta Kelahiran"],
                  [Wallet, "Surat Sponsor & Dokumen Keuangan"],
                  [GraduationCap, "Sertifikat JLPT/JFT (jika ada)"],
                  [Camera, "Foto 3×4 atau 4×6"],
                  [FileSignature, "Certificate of Eligibility (COE)"],
                ].map(([Icon, label], i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#FFF0F0] text-[#D6001C] grid place-items-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-justify">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Keuntungan */}
          <div className="mt-14">
            <div className="text-center" data-aos="fade-up">
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#111]">
                Keuntungan Program Ryuugaku
              </h3>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
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
                    {b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SETELAH LULUS — Opsi Jalur
      ====================================================== */}
      <section id="setelah-lulus" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              Setelah Lulus, Bisa Apa?
            </h2>
            <p className="mt-3 text-gray-600">
              Pilih jalur lanjutan sesuai target karier dan kualifikasi Anda.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {afterGrad.map((s, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 90}
                className="grid md:grid-cols-[56px_1fr] items-start gap-4 bg-white border border-gray-200 rounded-2xl p-5"
              >
                <div className="w-14 h-14 rounded-xl bg-[#FFF0F0] text-[#D6001C] grid place-items-center">
                  {i === 0 ? (
                    <Layers className="w-7 h-7" />
                  ) : i === 1 ? (
                    <Briefcase className="w-7 h-7" />
                  ) : i === 2 ? (
                    <BadgeCheck className="w-7 h-7" />
                  ) : (
                    <Building2 className="w-7 h-7" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {i + 1}. Opsi {i + 1}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed text-justify">
                    {s}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LAYANAN NICHIRIN UNTUK RYUUGAKU
      ====================================================== */}
      <section id="layanan" className="py-28 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              Layanan <span className="text-[#D6001C]">Nichirin</span> untuk
              Ryuugaku
            </h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
              Full support mulai dari konsultasi sekolah sampai tiba dan tinggal
              di Jepang.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((x, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="p-7 rounded-2xl border border-gray-200 hover:border-[#D6001C] transition-all shadow-[0_6px_24px_rgba(16,24,40,0.05)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF0F0] text-[#D6001C] grid place-items-center">
                  <x.icon className="w-6 h-6" />
                </div>
                <h4 className="mt-4 font-semibold text-gray-900">{x.title}</h4>
                <p className="mt-1.5 text-sm text-gray-600 leading-relaxed text-justify">
                  {x.desc}
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
              Siap Sekolah/Kuliah di Jepang lewat Ryuugaku?
            </h3>
            <p className="mt-3 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Bersama LPK Nichirin Gakuin Centerindo, kami bantu dari pemilihan
              sekolah, COE, visa, hingga keberangkatan dan hunian. Konsultasi
              gratis sekarang.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/6281399696105"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 rounded-full font-semibold bg-white text-[#D6001C] hover:scale-[1.02] transition-all"
              >
                Konsultasi via WhatsApp
              </a>
              <a
                href="mailto:ptnichirin@gmail.com"
                className="px-8 py-3 rounded-full font-semibold border border-white/80 hover:bg-white hover:text-[#D6001C] transition-all"
              >
                Kirim Dokumen Awal via Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
