import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  HeartHandshake,
  Stethoscope,
  Users,
  GraduationCap,
  Handshake,
  ShieldCheck,
  ArrowRight,
  FileText,
  IdCard,
  Camera,
  ScrollText,
  FileSignature,
  Landmark,
  Wallet,
  ClipboardList,
  CheckCircle2,
  Globe2,
  Plane,
  FileCheck2,
  Search,
  CalendarDays,
  Activity,
} from "lucide-react";

export default function KaigoPage() {
  React.useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <BackToTopButton />

      {/* =====================================================
          HERO — Program Kaigo (Caregiver)
      ====================================================== */}
      <section
        id="hero-kaigo"
        className="relative overflow-hidden pt-[100px] lg:pt-[120px]"
      >
        <div className="absolute inset-0">
          <img
            src="/img/fotohero2.png"
            alt="Program Kaigo Nichirin"
            className="w-full h-full object-cover object-center scale-105"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-[#FFF4F4]" />
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(70rem_50rem_at_10%_-10%,#D6001C_0%,transparent_55%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FFF0F0] text-[#D6001C] font-semibold text-sm ring-1 ring-[#FFD6D6]">
              <HeartHandshake className="w-4 h-4" />
              Program Khusus — Kaigo (Caregiver)
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-[#111]">
              Kerja ke Jepang
              <br />
              <span className="bg-gradient-to-r from-[#D6001C] via-[#FF4E50] to-[#FF9A8B] text-transparent bg-clip-text">
                Full Dana Talang sampai Berangkat
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Program <b>SSW / Tokutei Ginou — Kaigo (Caregiver)</b> di LPK
              Nichirin Gakuin Centerindo mempersiapkan Anda menjadi tenaga
              profesional bidang perawatan lanjut usia dengan bekal bahasa,
              budaya, dan etika kerja Jepang.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#benefit"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#D6001C] via-[#E3242B] to-[#FF4E50] hover:shadow-[0_0_24px_rgba(255,78,80,0.45)] transition-all"
              >
                Lihat Benefit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://bit.ly/nichirin2026"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold border border-[#D6001C] text-[#D6001C] hover:bg-[#D6001C] hover:text-white transition-all"
              >
                Daftar Sekarang
              </a>
            </div>
          </div>

          <div data-aos="fade-left" className="md:pl-8">
            <div className="rounded-3xl bg-white border border-[#FFD6D6] p-6 shadow-[0_10px_40px_rgba(214,0,28,0.08)]">
              <h3 className="text-xl font-bold text-[#D6001C] flex items-center gap-2">
                <Stethoscope className="w-5 h-5" />
                Apa itu Caregiver/Kaigo?
              </h3>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed text-justify">
                Caregiver (Kaigo) adalah pekerjaan mulia di Jepang yang membantu
                lansia, penyandang disabilitas, atau orang yang membutuhkan
                perawatan harian—seperti membantu makan, mandi, jalan-jalan,
                serta memberikan dukungan dan keceriaan bagi pasien. Berbeda
                dengan perawat medis, caregiver berfokus pada pendampingan dan
                perawatan sehari-hari, bekerja bersama tim medis seperti dokter,
                perawat, dan fisioterapis.
              </p>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed text-justify">
                Bidang Caregiver (Kaigo) termasuk pekerjaan paling dibutuhkan
                dalam program Visa Tokutei Ginou (SSW). Permintaan mencapai
                lebih dari <b>120.000</b> tenaga kerja per tahun dengan{" "}
                <b>gaji bersih rata-rata 18–25 juta rupiah/bulan</b> dan bonus
                tahunan hingga <b>30–50 juta rupiah</b> (bergantung performa &
                masa kerja).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROGRAM SPESIAL (Highlight)
      ====================================================== */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div
            className="rounded-2xl bg-gradient-to-r from-[#D6001C] via-[#E3242B] to-[#FF4E50] text-white p-8 md:p-10 shadow-[0_10px_40px_rgba(214,0,28,0.18)]"
            data-aos="zoom-in"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/20">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-extrabold">
                  Program Spesial Kaigo — Full Dana Talang Sampai Berangkat
                </h3>
                <p className="mt-3 text-white/90 text-justify">
                  LPK Nichirin membuka program <b>Full Dana Talangan</b> untuk
                  calon caregiver yang serius ingin kerja ke Jepang. Peserta
                  mendapatkan: pelatihan & pendampingan profesional, kuota kerja
                  resmi di Jepang, bantuan dana hingga keberangkatan, dan{" "}
                  <b>uang saku saat keberangkatan sebesar 6 juta rupiah</b>.
                </p>
              </div>
              <a
                href="https://bit.ly/nichirin2026"
                className="whitespace-nowrap inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#D6001C] font-semibold hover:scale-[1.02] transition-all"
              >
                Daftar Program
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
    BENEFIT PROGRAM — Metallic Nichirin Style
====================================================== */}
      <section
        id="benefit"
        className="relative py-28 bg-gradient-to-b from-[#f7f7f7] via-[#fdfdfd] to-[#ffffff]"
      >
        {/* background effect */}
        <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_30%_10%,rgba(214,0,28,0.05),transparent_70%)] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] tracking-tight">
              Benefit Program{" "}
              <span className="bg-gradient-to-r from-[#D6001C] via-[#FF4E50] to-[#FF9A8B] bg-clip-text text-transparent">
                Kaigo
              </span>
            </h2>
            <div className="mt-3 mx-auto w-24 h-[3px] bg-gradient-to-r from-[#D6001C] via-[#FF4E50] to-transparent rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dapatkan manfaat eksklusif saat bergabung dengan Program SSW /
              Tokutei Ginou — Kaigo di LPK Nichirin. Kami pastikan Anda siap
              bekerja secara profesional di Jepang dengan pendampingan penuh.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Wallet,
                title: "Gratis Pendaftaran & Seleksi",
                desc: "Proses awal tanpa biaya — fokus pada kesiapan dan kelulusan Anda.",
              },
              {
                icon: GraduationCap,
                title: "Edukasi & Konsultasi Lengkap",
                desc: "Dapatkan bimbingan bahasa, etika kerja, dan arahan karier dari instruktur profesional Nichirin.",
              },
              {
                icon: Handshake,
                title: "Bimbingan Job Matching",
                desc: "Kami bantu Anda diarahkan ke perusahaan Jepang terpercaya melalui sesi mensetsu (wawancara) intensif.",
              },
              {
                icon: Landmark,
                title: "Dana Talangan hingga 100%",
                desc: "Biaya pelatihan, ujian, hingga keberangkatan ditanggung penuh melalui sistem dana talangan Nichirin.",
              },
              {
                icon: ShieldCheck,
                title: "Pengawasan Intensif",
                desc: "Tim kami akan tetap memantau dan mendampingi Anda selama bekerja di Jepang.",
              },
              {
                icon: Globe2,
                title: "Jaringan Nasional & Jepang",
                desc: "Didukung oleh relasi kuat antara lembaga dan Kumiai di seluruh wilayah Jepang.",
              },
            ].map((x, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group relative p-8 rounded-2xl border border-white/40 
          bg-gradient-to-br from-white/40 via-white/60 to-white/80 
          shadow-[0_4px_30px_rgba(0,0,0,0.05)] backdrop-blur-md 
          transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_35px_rgba(214,0,28,0.15)]"
              >
                {/* glowing ring effect */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#D6001C]/50 transition-all duration-500"></div>

                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#D6001C]/10 via-[#E3242B]/20 to-[#FF9A8B]/10 text-[#D6001C] shadow-inner shadow-white/40">
                  <x.icon className="w-6 h-6" />
                </div>

                <h4 className="mt-5 text-lg font-bold text-gray-900 tracking-tight">
                  {x.title}
                </h4>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed text-justify">
                  {x.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
    PERSYARATAN UMUM — Red Metallic Style
====================================================== */}
      <section
        id="persyaratan-umum"
        className="py-24 bg-gradient-to-b from-[#fffafa] to-[#f8f8f8] relative overflow-hidden"
      >
        {/* background dekorasi radial */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_center,rgba(214,0,28,0.05),transparent_80%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              Persyaratan <span className="text-[#D6001C]">Umum</span>
            </h2>
            <p className="mt-3 text-gray-600">
              Ketentuan dasar untuk mengikuti Program Kaigo Nichirin.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Personal",
                points: [
                  "Wanita",
                  "Usia 18 s.d. 32 tahun",
                  "Minimal lulusan SMA/K sederajat",
                  "Tinggi minimal 150 cm",
                  "Sehat jasmani & rohani",
                ],
              },
              {
                title: "Status",
                points: [
                  "Belum menikah (single)",
                  "Belum pernah mengikuti Program Jepang",
                  "Bukan murid aktif LPK/lembaga lain",
                ],
              },
              {
                title: "Fisik",
                points: [
                  "Tidak memiliki riwayat patah tulang",
                  "Tidak bertato",
                  "Tidak cacat fisik",
                  "Tidak memiliki penyakit kronis",
                  "Tidak memiliki asma, TBC, & hepatitis",
                ],
              },
              {
                title: "Lain-lain",
                points: [
                  "Boleh berjilbab",
                  "Boleh berkacamata (minus tidak masalah)",
                  "Belum pengalaman kerja (tidak masalah)",
                  "Bahasa Jepang nol/belum bisa (tidak masalah)",
                ],
              },
            ].map((box, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group relative rounded-2xl p-6 text-white shadow-[0_6px_25px_rgba(214,0,28,0.15)] 
          bg-gradient-to-br from-[#D6001C] via-[#E3242B] to-[#FF4E50] 
          transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_35px_rgba(255,78,80,0.3)]"
              >
                {/* efek border highlight */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all"></div>

                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-white/20 text-white grid place-items-center font-bold shadow-inner">
                    {i + 1}
                  </div>
                  <h4 className="font-bold text-lg tracking-wide">
                    {box.title}
                  </h4>
                </div>

                {/* List */}
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-white/90 leading-relaxed text-justify">
                  {box.points.map((p, j) => (
                    <li key={j} className="marker:text-white/80">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PERSYARATAN DOKUMEN
      ====================================================== */}
      <section id="persyaratan-dokumen" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              Persyaratan <span className="text-[#D6001C]">Dokumen</span>
            </h2>
            <p className="mt-3 text-gray-600">
              Dokumen dasar yang perlu disiapkan untuk pendaftaran.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Camera,
                title: "Pas Foto 3×4 Berwarna (Terbaru)",
              },
              {
                icon: IdCard,
                title: "Fotokopi KTP",
              },
              {
                icon: FileText,
                title: "Ijazah Asli Pendidikan Terakhir",
              },
              {
                icon: ScrollText,
                title: "Akta Lahir Asli & Fotokopi KK",
              },
            ].map((x, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 80}
                className="p-6 rounded-2xl border border-gray-200 hover:border-[#D6001C] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF0F0] text-[#D6001C] grid place-items-center">
                  <x.icon className="w-6 h-6" />
                </div>
                <h4 className="mt-4 font-semibold text-gray-900">{x.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          APA ITU TOKUTEI GINOU? (Ringkas)
      ====================================================== */}
      <section id="tokutei" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              Apa itu{" "}
              <span className="text-[#D6001C]">Tokutei Ginou (SSW)</span>?
            </h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
              Jalur kerja resmi di Jepang bagi tenaga terampil, termasuk bidang{" "}
              <b>Kaigo</b>.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div
              className="rounded-2xl bg-white border border-gray-200 p-6"
              data-aos="fade-up"
            >
              <h4 className="font-semibold text-gray-900 mb-2">Bidang Kerja</h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1.5 text-justify">
                <li>Kaigo (Caregiver) — Perawat Lansia</li>
                <li>Penempatan kerja di seluruh Jepang</li>
                <li>Kontrak kerja 3–5 tahun</li>
              </ul>

              <h4 className="mt-6 font-semibold text-gray-900 mb-2">
                Pendidikan & Pelatihan
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1.5 text-justify">
                <li>
                  Durasi 6–7 bulanan (pra-pendidikan N5, N4; persiapan JFT &
                  SSW, kaiwa, pra mensetsu)
                </li>
                <li>Ujian JFT & SSW diadakan tiap 1–2 bulan</li>
                <li>N3 Basic untuk pra-keberangkatan ke Jepang</li>
              </ul>
            </div>

            <div
              className="rounded-2xl bg-white border border-gray-200 p-6"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <h4 className="font-semibold text-gray-900 mb-2">
                Gaji & Pengeluaran Visa SSW
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1.5 text-justify">
                <li>Gaji pokok new comer Rp 18–26 juta/bulan</li>
                <li>
                  Pengeluaran bulanan (asuransi, pajak, tempat tinggal,
                  utilitas, dll) sekitar 35%–50%
                </li>
                <li>
                  Gaji bersih Rp 9–13 juta (belum termasuk
                  lembur/tunjangan/bonus)
                </li>
              </ul>

              <h4 className="mt-6 font-semibold text-gray-900 mb-2">
                Benefit Visa SSW
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1.5 text-justify">
                <li>Gaji relatif lebih besar dibanding visa Magang</li>
                <li>Cuti tahunan untuk keperluan pulang ke Indonesia</li>
                <li>Dapat pindah bidang/lokasi setelah 2–3 tahun pertama</li>
                <li>
                  Bisa perpanjang masa tinggal hingga Permanent Resident selama
                  aktif bekerja
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ALUR PENDAFTARAN & PELATIHAN
      ====================================================== */}
      <section id="alur" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              Alur Pendaftaran{" "}
              <span className="text-[#D6001C]">dan Pelatihan</span>
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {[
              {
                icon: Search,
                title: "Pendaftaran via Online",
                desc: "Daftar melalui tautan resmi Nichirin.",
              },
              {
                icon: Activity,
                title: "Medikal Check Up",
                desc: "Melakukan MCU di LPK Nichirin.",
              },
              {
                icon: GraduationCap,
                title: "Pelatihan Bahasa",
                desc: "Pelatihan Bahasa Jepang & SSW selama 5–7 bulan (termasuk ujian JFT & SSW).",
              },
              {
                icon: Handshake,
                title: "Matching Job",
                desc: "Interview dengan perusahaan Jepang.",
              },
              {
                icon: FileSignature,
                title: "Dokumen & Persiapan Keberangkatan",
                desc: "Setelah lulus interview: MCU pra-keberangkatan, pembuatan paspor, dan tanda tangan kontrak kerja.",
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
          SISTEM PEMBIAYAAN
      ====================================================== */}
      <section id="pembiayaan" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              Sistem <span className="text-[#D6001C]">Pembiayaan</span>
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Biaya Mandiri */}
            <div
              className="rounded-2xl bg-white border border-gray-200 p-6"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold text-[#111] flex items-center gap-2">
                <Wallet className="w-5 h-5 text-[#D6001C]" />
                Biaya Mandiri (ditanggung Peserta)
              </h3>
              <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-1.5 text-justify">
                <li>Medical Check Up awal (± Rp 500 ribuan)</li>
                <li>
                  Biaya keperluan pribadi selama pelatihan sampai
                  pra-keberangkatan ke Jepang
                </li>
                <li>Makan selama pelatihan (± Rp 300 ribu/bulan)</li>
                <li>
                  Biaya utilitas asrama (air, listrik, IPL, & internet — umumnya
                  ± Rp 20 ribuan/bulan)
                </li>
              </ul>
            </div>

            {/* Dana Talangan */}
            <div
              className="rounded-2xl bg-white border border-gray-200 p-6"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <h3 className="text-xl font-bold text-[#111] flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#D6001C]" />
                Dana Talangan —{" "}
                <span className="text-[#D6001C]">Rp 38 juta</span>
              </h3>
              <p className="mt-2 text-sm text-gray-600 text-justify">
                Dicicil maksimal 12x setelah gajian kerja di Jepang (tanpa
                bunga). Menutup:
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1.5 text-justify">
                <li>
                  Pendidikan Bahasa Jepang N5, N4, SSW; persiapan ujian JFT &
                  SSW; Kaiwa pra-ujian & pra-mensetsu; N3 Basic
                </li>
                <li>
                  Buku materi, seragam, fasilitas kelas & asrama, kegiatan
                  non-pendidikan
                </li>
                <li>
                  Biaya asrama selama pendidikan & pelatihan hingga matching job
                </li>
                <li>Biaya Ujian JFT & SSW (@1x)</li>
                <li>
                  Matching job, pendampingan tanda tangan kontrak & pendaftaran
                  E-KTKLN
                </li>
                <li>
                  MCU akhir, administrasi, translate & pengiriman dokumen,
                  paspor
                </li>
                <li>Asuransi ketenagakerjaan & visa</li>
                <li>Tiket pesawat (one way Jakarta–Jepang) *maks Rp 5 juta</li>
                <li>Akomodasi & pendampingan pra-keberangkatan</li>
                <li>Kelas persiapan N3 & N2 *S&K berlaku</li>
                <li>Kunjungan & evaluasi peserta selama kerja di Jepang</li>
                <li>Pengawasan & pelayanan selama bekerja di Jepang</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA DAFTAR
      ====================================================== */}
      <section id="daftar" className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <div
            className="rounded-2xl p-10 bg-gradient-to-r from-[#D6001C] via-[#E3242B] to-[#FF4E50] text-white shadow-[0_10px_36px_rgba(214,0,28,0.2)]"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Siap Bergabung di Program Kaigo Nichirin?
            </h3>
            <p className="mt-3 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Dapatkan pelatihan profesional, pendampingan lengkap, dan peluang
              kerja resmi di Jepang. Mulai proses pendaftaran Anda sekarang.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/6281399696105"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 rounded-full font-semibold bg-white text-[#D6001C] hover:scale-[1.02] transition-all"
              >
                Hubungi via WhatsApp
              </a>
              <a
                href="mailto:ptnichirin@gmail.com"
                className="px-8 py-3 rounded-full font-semibold border border-white/80 hover:bg-white hover:text-[#D6001C] transition-all"
              >
                Kirim Email Pendaftaran
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
