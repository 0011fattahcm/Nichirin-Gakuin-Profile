import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  BadgeCheck,
  Globe2,
  ShieldCheck,
  GraduationCap,
  FileCheck2,
  IdCard,
  FileText,
  ScrollText,
  FileSignature,
  Camera,
  Wallet,
  ArrowRight,
  Briefcase,
  Code2,
  Languages,
  PenTool,
  BookOpenCheck,
  Users,
  Scale,
  Megaphone,
  LineChart,
  Building2,
  Search,
  Activity,
  Handshake,
} from "lucide-react";

export default function GijinkokuPage() {
  React.useEffect(() => {
    AOS.init({ duration: 820, once: true, easing: "ease-out-cubic" });
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      icon: Code2,
      title: "Engineer (技術)",
      points: [
        "Software Developer, Web/Mobile, Network/Cloud, AI/ML Engineer.",
        "Kualifikasi: S1 bidang terkait atau pengalaman ekuivalen; portfolio/sertifikasi plus.",
      ],
    },
    {
      icon: Languages,
      title: "International Services（国際業務）",
      points: [
        "Interpreter/Translator, PR, Marketing global, Sales internasional.",
        "Kualifikasi: S1 relevan; bahasa Inggris/Jepang kuat; komunikasi lintas budaya.",
      ],
    },
    {
      icon: BookOpenCheck,
      title: "Specialist in Humanities（人文知識）",
      points: [
        "Legal Staff, HRD, Researcher, Akuntan, Business Analyst.",
        "Kualifikasi: S1 ilmu humaniora/bisnis/hukum/ekonomi; literasi dokumen Jepang.",
      ],
    },
    {
      icon: PenTool,
      title: "Creative",
      points: [
        "Graphic/Product/UI Designer, Content Strategist.",
        "Kualifikasi: S1/portfolio kuat; paham proses design & kolaborasi tim.",
      ],
    },
    {
      icon: Users,
      title: "Education",
      points: [
        "Guru Bahasa Asing (mis. English Teacher di Eikaiwa).",
        "Kualifikasi: S1 + kemampuan pedagogi; sertifikasi pengajaran nilai tambah.",
      ],
    },
    {
      icon: LineChart,
      title: "Business & Marketing",
      points: [
        "Digital Marketer, SEO/SEM, Growth, Partnership.",
        "Kualifikasi: S1 relevan; analitik dan KPI marketing; tools digital.",
      ],
    },
  ];

  const services = [
    {
      icon: GraduationCap,
      title: "Pelatihan Bahasa Jepang hingga JLPT N2",
      desc: "Pembelajaran intensif (reading, listening, business keigo) untuk kerja kantoran.",
    },
    {
      icon: FileCheck2,
      title: "Pembuatan CV & Dokumen Kerja",
      desc: "Penyusunan 履歴書 (rirekisho) & 職務経歴書 (shokumu keirekisho) standar Jepang.",
    },
    {
      icon: Handshake,
      title: "Simulasi Wawancara Perusahaan Jepang",
      desc: "Latihan mensetsu: perkenalan, motivasi, kasus, hingga negosiasi gaji.",
    },
    {
      icon: ShieldCheck,
      title: "Konsultasi Karier & Legalitas Visa",
      desc: "Pendampingan eligibilitas, scope kerja sesuai jurusan/pengalaman.",
    },
    {
      icon: Globe2,
      title: "Penyaluran Kerja Profesional",
      desc: "Akses ke jaringan perusahaan Jepang & posisi white-collar.",
    },
    {
      icon: Briefcase,
      title: "Strategi Transisi SSW → Gijinkoku",
      desc: "Opsi lanjut kuliah/upgrade skill untuk migrasi ke jalur profesional.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <BackToTopButton />

      {/* =====================================================
          HERO — Visa Gijinkoku / Engineer
      ====================================================== */}
      <section
        id="hero-gijinkoku"
        className="relative overflow-hidden pt-[100px] lg:pt-[120px]"
      >
        <div className="absolute inset-0">
          <img
            src="/img/fotohero1.png"
            alt="Visa Gijinkoku Nichirin"
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
              Program Visa Gijinkoku / Engineer（技人国ビザ）
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-[#111]">
              Jalur Profesional ke Jepang
              <br />
              <span className="bg-gradient-to-r from-[#D6001C] via-[#FF4E50] to-[#FF9A8B] text-transparent bg-clip-text">
                Engineer / Humanities / International Services
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed text-justify">
              Gijinkoku adalah visa kerja jangka panjang untuk talenta
              profesional di bidang <b>Engineer</b>,{" "}
              <b>Specialist in Humanities</b>, dan <b>International Services</b>
              . Cocok untuk pekerjaan “white-collar” seperti IT, penerjemah,
              pemasaran global, desainer, guru bahasa asing, dan lain-lain.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#persyaratan"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#D6001C] via-[#E3242B] to-[#FF4E50] hover:shadow-[0_0_24px_rgba(255,78,80,0.45)] transition-all"
              >
                Lihat Persyaratan
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#perbandingan"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold border border-[#D6001C] text-[#D6001C] hover:bg-[#D6001C] hover:text-white transition-all"
              >
                Bandingkan vs SSW
              </a>
            </div>
          </div>

          <div data-aos="fade-left" className="md:pl-8">
            <div className="rounded-3xl bg-white border border-[#FFD6D6] p-6 shadow-[0_10px_40px_rgba(214,0,28,0.08)]">
              <h3 className="text-xl font-bold text-[#D6001C] flex items-center gap-2">
                <Globe2 className="w-5 h-5" />
                Apa Itu Visa Gijinkoku?
              </h3>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed text-justify">
                Secara resmi bernama{" "}
                <b>
                  Engineer / Specialist in Humanities / International Services
                </b>
                （技術・人文知識・国際業務）. Visa ini diberikan untuk lulusan
                sarjana atau profesional dengan keahlian relevan agar bekerja di
                posisi kantoran/ahli di perusahaan Jepang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PERSYARATAN UTAMA
      ====================================================== */}
      <section id="persyaratan" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              Persyaratan Utama Visa Gijinkoku
            </h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
              Syarat wajib yang umumnya diminta perusahaan & imigrasi Jepang.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Kolom kiri */}
            <div
              className="rounded-2xl bg-white border border-gray-200 p-7"
              data-aos="fade-up"
            >
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2 text-justify">
                <li>
                  <b>Pendidikan:</b> minimal <b>S1</b> (bidang relevan).{" "}
                  <i>Catatan:</i> bisa D3 dengan pengalaman kerja ≥10 tahun
                  (case by case).
                </li>
                <li>
                  <b>Offer kerja:</b> kontrak & gaji tetap dari perusahaan
                  Jepang.
                </li>
                <li>
                  <b>Relevansi:</b> pekerjaan harus sesuai bidang studi atau
                  pengalaman kerja.
                </li>
                <li>
                  <b>Bahasa Jepang:</b> umumnya minimal <b>JLPT N3 – N2</b>;
                  untuk posisi internasional bisa tanpa N-level jika menggunakan
                  bahasa Inggris.
                </li>
                <li>
                  <b>Dokumen lengkap:</b> ijazah, CV, surat kerja/portofolio,
                  kontrak, dll.
                </li>
              </ul>
            </div>

            {/* Kolom kanan: dokumen */}
            <div
              className="rounded-2xl bg-white border border-gray-200 p-7"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <h3 className="text-xl font-bold text-[#111] flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-[#D6001C]" />
                Dokumen yang Disiapkan
              </h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {[
                  [IdCard, "KTP & Passport Aktif"],
                  [ScrollText, "Ijazah & Transkrip"],
                  [FileSignature, "Surat Keterangan Kerja / Referensi"],
                  [FileText, "CV / Portofolio (jika perlu)"],
                  [Camera, "Pas Foto Latar Terang"],
                  [Wallet, "Bukti Penawaran Kerja / Kontrak"],
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
        </div>
      </section>

      {/* =====================================================
          PERBANDINGAN SSW vs GIJINKOKU
      ====================================================== */}
      <section id="perbandingan" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              Perbedaan Gijinkoku vs Tokutei Ginou (SSW)
            </h2>
            <p className="mt-3 text-gray-600">
              Ringkasan aspek penting yang paling sering ditanyakan.
            </p>
          </div>

          <div
            className="mt-10 overflow-x-auto rounded-2xl border border-gray-200"
            data-aos="fade-up"
          >
            <table className="min-w-full bg-white text-sm">
              <thead className="bg-[#FFF6F6] text-[#D6001C]">
                <tr className="text-left">
                  <th className="px-5 py-3">Aspek</th>
                  <th className="px-5 py-3">Tokutei Ginou (SSW)</th>
                  <th className="px-5 py-3">Gijinkoku Visa</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  [
                    "Level Pekerjaan",
                    "Pekerja teknis / lapangan",
                    "Profesional / Kantoran",
                  ],
                  [
                    "Pendidikan",
                    "SMA/SMK cukup",
                    "Minimal S1 (atau pengalaman tinggi)",
                  ],
                  [
                    "Bahasa Jepang",
                    "JLPT N4 / JFT Basic",
                    "JLPT N3 – N2 (atau fluent English)",
                  ],
                  [
                    "Durasi Visa",
                    "Maks. 5 tahun (SSW-1)",
                    "Dapat diperpanjang terus menerus",
                  ],
                  [
                    "Bawa Keluarga",
                    "Tidak (kecuali SSW-2)",
                    "Bisa membawa keluarga",
                  ],
                  [
                    "Contoh Pekerjaan",
                    "Konstruksi, pabrik, perawat",
                    "Programmer, translator, HR, designer",
                  ],
                ].map(([a, ssw, gij], i) => (
                  <tr key={i}>
                    <td className="px-5 py-3 font-semibold">{a}</td>
                    <td className="px-5 py-3">{ssw}</td>
                    <td className="px-5 py-3">{gij}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =====================================================
          KATEGORI & CONTOH PEKERJAAN GIJINKOKU
      ====================================================== */}
      <section id="kategori" className="py-28 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              Kategori & Contoh Pekerjaan{" "}
              <span className="text-[#D6001C]">Gijinkoku</span>
            </h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
              Contoh posisi prioritas dan kualifikasinya. Semua teks dijustify
              agar enak dibaca.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((c, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={(i % 6) * 80}
                className="p-7 rounded-2xl border border-gray-200 hover:border-[#D6001C] transition-all shadow-[0_6px_24px_rgba(16,24,40,0.05)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF0F0] text-[#D6001C] grid place-items-center">
                  <c.icon className="w-6 h-6" />
                </div>
                <h4 className="mt-4 font-bold text-gray-900">{c.title}</h4>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-600 space-y-1.5 text-justify">
                  {c.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          KEUNTUNGAN VISA GIJINKOKU
      ====================================================== */}
      <section id="keuntungan" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              Keuntungan Visa Gijinkoku
            </h2>
            <p className="mt-3 text-gray-600">
              Kenapa jalur ini menarik untuk profesional muda Indonesia.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              ["Gaji tinggi & status profesional", Briefcase],
              ["Visa dapat diperpanjang berkali-kali", ShieldCheck],
              ["Bisa membawa keluarga (spouse & anak)", Users],
              ["Peluang menuju Permanent Resident", Building2],
              ["Bisa pindah tempat kerja secara legal", ArrowRight],
              ["Pengalaman kerja global di perusahaan Jepang", Globe2],
            ].map(([text, Icon], i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                className="rounded-2xl bg-[#FFF6F6] border border-[#FFD6D6] p-5 flex gap-3 items-start"
              >
                <div className="w-9 h-9 rounded-lg bg-white text-[#D6001C] grid place-items-center flex-none">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed text-justify">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CARA MENGIKUTI PROGRAM GIJINKOKU
      ====================================================== */}
      <section id="alur" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              Cara Mengikuti{" "}
              <span className="text-[#D6001C]">Program Gijinkoku</span>
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {[
              {
                icon: Search,
                title: "Melalui LPK/Agensi Profesional",
                desc: "Konsultasi profil, kurasi lowongan, dan pendampingan dokumen–wawancara.",
              },
              {
                icon: GraduationCap,
                title: "SSW → Gijinkoku (Upgrade)",
                desc: "Lanjut kuliah atau tingkatkan kualifikasi agar eligible untuk jalur profesional.",
              },
              {
                icon: Globe2,
                title: "Daftar Langsung ke Perusahaan Jepang",
                desc: "Apply via job portal Jepang; siapkan CV Jepang & portofolio.",
              },
              {
                icon: Activity,
                title: "Jalur Kampus/Beasiswa Jepang",
                desc: "Selesaikan studi/univ Jepang lalu beralih ke kerja dengan Gijinkoku.",
              },
            ].map((s, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 90}
                className="grid md:grid-cols-[56px_1fr] items-start gap-4 bg-white border border-gray-200 rounded-2xl p-5"
              >
                <div className="w-14 h-14 rounded-xl bg-[#FFF0F0] text-[#D6001C] grid place-items-center">
                  <s.icon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {i + 1}. {s.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed text-justify">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LAYANAN NICHIRIN UNTUK GIJINKOKU
      ====================================================== */}
      <section id="layanan" className="py-28 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              Layanan <span className="text-[#D6001C]">Nichirin</span> untuk
              Gijinkoku
            </h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
              Kami dampingi dari persiapan bahasa, dokumen, sampai penempatan
              kerja profesional.
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
              Siap Masuk Jalur Profesional Gijinkoku?
            </h3>
            <p className="mt-3 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Jika kamu lulusan S1 atau profesional dan ingin kerja di Jepang
              dengan visa Gijinkoku, Nichirin siap bantu dari persiapan sampai
              penempatan.
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
                Kirim CV ke Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
