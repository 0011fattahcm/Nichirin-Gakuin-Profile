import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  BadgeCheck,
  Building,
  Factory,
  Hammer,
  Ship,
  Car,
  Plane,
  Hotel,
  Sprout,
  Fish,
  UtensilsCrossed,
  Salad,
  Users,
  Globe2,
  GraduationCap,
  ShieldCheck,
  Handshake,
  FileCheck2,
  ScrollText,
  IdCard,
  FileText,
  Camera,
  Wallet,
  Landmark,
  Search,
  Activity,
  FileSignature,
  ArrowRight,
  Wrench,
  Cpu,
  Layers,
} from "lucide-react";

export default function TokuteiGinouPage() {
  React.useEffect(() => {
    AOS.init({ duration: 820, once: true, easing: "ease-out-cubic" });
    window.scrollTo(0, 0);
  }, []);

  // 14 Bidang kerja Tokutei Ginou (urutan sesuai daftar user)
  const fields = [
    {
      icon: Users,
      name: "Perawat Lansia (Care Worker/Kaigo)",
      jp: "介護（Kaigo）",
      short: "Bekerja di panti jompo atau rumah perawatan lansia.",
      desc: "Merawat lansia/penyandang disabilitas di fasilitas kaigo: pendampingan aktivitas harian (makan, mandi, mobilitas), observasi, komunikasi keluarga, dan pencatatan layanan. Menuntut empati, kesabaran, dan standar kebersihan tinggi.",
    },
    {
      icon: Building,
      name: "Pembersihan Gedung (Building Cleaning Management)",
      jp: "ビルクリーニング",
      short: "Melakukan pekerjaan kebersihan di gedung-gedung.",
      desc: "Menangani kebersihan gedung, hotel, rumah sakit, dan fasilitas umum. Fokus pada sanitasi, manajemen limbah, perawatan peralatan cleaning, SOP area berisiko (lift, lobby, toilet, area medis), dan keselamatan kerja.",
    },
    {
      icon: Layers,
      name: "Industri Material Processing",
      jp: "素形材産業",
      short: "Bekerja di pabrik-pabrik yang mengolah material dasar.",
      desc: "Mengolah material mentah menjadi komponen dasar industri: casting, forging, molding, rolling, heat treatment, hingga finishing. Mendukung rantai pasok manufaktur sektor otomotif, mesin, dan elektronik.",
    },
    {
      icon: Factory,
      name: "Industri Permesinan Pabrik (Industrial Machinery Industry)",
      jp: "産業機械製造業",
      short: "Mengoperasikan dan merawat mesin-mesin pabrik.",
      desc: "Produksi dan perakitan mesin industri (press, milling, conveyor). Meliputi pengoperasian, perawatan preventif, kalibrasi, troubleshooting, dan dokumentasi mutu. Menuntut pemahaman mekanikal & K3.",
    },
    {
      icon: Wrench,
      name: "Industri Mesin & Komponen Mesin (Machine Parts & Tooling Industries)",
      jp: "機械部品・工具製造業",
      short: "Memproduksi komponen dan suku cadang mesin.",
      desc: "Pembuatan suku cadang presisi: gear, bearing, axle, toolings. Menggunakan mesin presisi/CNC, alat ukur (caliper, micrometer), kontrol kualitas, dan standar toleransi ketat.",
    },
    {
      icon: Cpu,
      name: "Industri Elektronik, Kelistrikan, dan Informasi",
      jp: "電気電子情報関連産業",
      short: "Bekerja di pabrik produksi peralatan elektronik dan informasi.",
      desc: "Perakitan, pengujian, dan quality control perangkat elektronik, kelistrikan, dan sistem informasi. Menuntut ketelitian tinggi, ESD-safety, dan pemahaman dasar sirkuit/komponen.",
    },
    {
      icon: Hammer,
      name: "Konstruksi (Construction)",
      jp: "建設業（Kensetsu）",
      short: "Membangun gedung dan infrastruktur.",
      desc: "Proyek infrastruktur: gedung, jembatan, jalan. Pekerjaan bekisting, pengecoran, pemasangan rangka baja, scaffolding, pengukuran, finishing, serta disiplin K3 dan ketepatan waktu.",
    },
    {
      icon: Ship,
      name: "Industri Pembuatan Kapal dan Mesin Kapal (Shipbuilding and Marine Industry)",
      jp: "造船・舶用工業",
      short: "Memproduksi dan memperbaiki kapal.",
      desc: "Fabrikasi dan perawatan kapal: pemotongan baja, pengelasan, perakitan blok, pengecatan antikarat, pemasangan mesin/propulsi dan sistem pipa kelautan sesuai standar maritim.",
    },
    {
      icon: Car,
      name: "Industri Pemeliharaan Otomotif (Automobile Maintenance)",
      jp: "自動車整備業（Jidousha Seibi）",
      short: "Melakukan perawatan dan perbaikan mobil dan kendaraan.",
      desc: "Servis kendaraan: inspection, maintenance, repair. Cek sistem kelistrikan, rem, suspensi, mesin, oli & parts, diagnostik OBD, dokumentasi servis sesuai manual pabrikan.",
    },
    {
      icon: Plane,
      name: "Industri Penerbangan (Aviation Industry)",
      jp: "航空業（Kōkūgyō）",
      short:
        "Bekerja di bandara, seperti penanganan bagasi atau perawatan pesawat.",
      desc: "Ground handling: bagasi, pembersihan kabin, catering, marshaling dasar, dokumen, dan support perawatan. Wajib taat ramp safety & security dan SOP operasional maskapai/bandara.",
    },
    {
      icon: Hotel,
      name: "Industri Perhotelan dan Akomodasi (Accommodation)",
      jp: "宿泊業（Shukuhaku）",
      short: "Bekerja di hotel sebagai pelayan atau staf akomodasi lainnya.",
      desc: "Front office, housekeeping, F&B service, dan event support. Mengutamakan omotenashi (hospitality Jepang), komunikasi, problem solving tamu, dan standar kebersihan.",
    },
    {
      icon: Sprout,
      name: "Industri Pertanian (Agriculture)",
      jp: "農業（Nougyou）",
      short: "Bertani dan beternak dengan bantuan teknologi modern.",
      desc: "Budidaya tanaman & ternak: penanaman, perawatan, panen, sortir. Lingkungan kerja ladang/greenhouse; menggunakan irigasi modern, hidroponik, pemupukan tepat, dan biosecurity.",
    },
    {
      icon: Fish,
      name: "Industri Perikanan dan Akuakultur (Fishery and Aquaculture)",
      jp: "漁業（Gyogyou）",
      short: "Bekerja menangkap ikan atau budidaya perairan.",
      desc: "Penangkapan ikan dan budidaya laut/tambak: pakan, pemeliharaan, panen, pengolahan awal, kebersihan area, pemeliharaan alat, serta pengendalian kualitas hasil tangkapan.",
    },
    {
      icon: Salad,
      name: "Industri Makanan dan Minuman (Food and Beverage Manufacturing)",
      jp: "飲食料品製造業",
      short: "Bekerja di pabrik makanan dan minuman.",
      desc: "Produksi pangan: persiapan bahan, mixing, cooking, filling, packing, labeling, dan QC. Menekankan higienitas, pengendalian suhu, HACCP, dan traceability.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <BackToTopButton />

      {/* =====================================================
          HERO — Tokutei Ginou / SSW
      ====================================================== */}
      <section
        id="hero-ssw"
        className="relative overflow-hidden pt-[100px] lg:pt-[120px]"
      >
        <div className="absolute inset-0">
          <img
            src="/img/fotohero2.png"
            alt="Tokutei Ginou Nichirin"
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
              Panduan Lengkap — Tokutei Ginou / SSW
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-[#111]">
              Bekerja Resmi di Jepang
              <br />
              <span className="bg-gradient-to-r from-[#D6001C] via-[#FF4E50] to-[#FF9A8B] text-transparent bg-clip-text">
                Program Specified Skilled Worker (SSW)
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed text-justify">
              Tokutei Ginou (特定技能) adalah visa kerja Jepang bagi tenaga
              asing dengan keterampilan khusus yang siap bekerja profesional.
              Program ini bertujuan mengisi kekurangan tenaga kerja di berbagai
              sektor industri Jepang.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#jenis"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#D6001C] via-[#E3242B] to-[#FF4E50] hover:shadow-[0_0_24px_rgba(255,78,80,0.45)] transition-all"
              >
                Jenis Visa
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#bidang"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold border border-[#D6001C] text-[#D6001C] hover:bg-[#D6001C] hover:text-white transition-all"
              >
                14 Bidang SSW
              </a>
            </div>
          </div>

          <div data-aos="fade-left" className="md:pl-8">
            <div className="rounded-3xl bg-white border border-[#FFD6D6] p-6 shadow-[0_10px_40px_rgba(214,0,28,0.08)]">
              <h3 className="text-xl font-bold text-[#D6001C] flex items-center gap-2">
                <Globe2 className="w-5 h-5" />
                Mengapa Memilih SSW?
              </h3>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed text-justify">
                SSW membuka jalur karier resmi di Jepang dengan pengakuan
                kompetensi. Bekerja langsung di industri, gaji sesuai regulasi,
                serta peluang jenjang karier hingga SSW 2-gou.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          JENIS VISA — SSW 1-gou & 2-gou
      ====================================================== */}
      <section id="jenis" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              Jenis Visa Tokutei Ginou
            </h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
              Program terbagi menjadi dua tingkat: <b>1-gou</b> untuk pekerja
              terampil dasar, dan <b>2-gou</b> untuk tenaga ahli.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* 1-gou */}
            <div
              className="rounded-2xl bg-[#FFF6F6] border border-[#FFD6D6] p-7"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold text-[#D6001C]">
                Tokutei Ginou 1-gou（特定技能1号）
              </h3>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-2 text-justify">
                <li>
                  Pekerja dengan keterampilan dasar & bahasa level menengah.
                </li>
                <li>Masa tinggal maksimal 5 tahun (perpanjang tahunan).</li>
                <li>Tidak boleh membawa keluarga.</li>
                <li>
                  Wajib lulus Senmon Shiken dan JLPT N4 atau JFT Basic A2.
                </li>
              </ul>
            </div>

            {/* 2-gou */}
            <div
              className="rounded-2xl bg-white border border-gray-200 p-7"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <h3 className="text-xl font-bold text-[#111]">
                Tokutei Ginou 2-gou（特定技能2号）
              </h3>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-2 text-justify">
                <li>
                  Untuk tenaga kerja berkemampuan lebih tinggi dan
                  berpengalaman.
                </li>
                <li>Dapat membawa keluarga dan tinggal jangka panjang.</li>
                <li>Berpeluang menuju status penduduk tetap (PR).</li>
                <li>
                  Saat ini tersedia pada beberapa bidang (mis. konstruksi &
                  perkapalan) dan akan diperluas.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SYARAT — Umum & Dokumen
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
                Syarat Umum
              </h3>
              <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-2 text-justify">
                <li>Usia minimal 18 tahun.</li>
                <li>Lulusan SMA/SMK atau sederajat.</li>
                <li>Memiliki sertifikat SSW bidang yang dipilih (jika ada).</li>
                <li>
                  Menguasai bahasa Jepang minimal JLPT N4 atau JFT Basic A2
                  (jika ada).
                </li>
                <li>Kondisi kesehatan baik (Medical Check-Up).</li>
              </ul>
            </div>

            {/* Dokumen */}
            <div
              data-aos="fade-left"
              className="rounded-2xl bg-white border border-gray-200 p-7"
            >
              <h3 className="text-2xl font-extrabold text-[#111] flex items-center gap-2">
                <FileCheck2 className="w-6 h-6 text-[#D6001C]" />
                Dokumen yang Disiapkan
              </h3>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {[
                  [IdCard, "KTP"],
                  [ScrollText, "Kartu Keluarga"],
                  [FileText, "Akta Lahir"],
                  [GraduationCap, "Ijazah"],
                  [ShieldCheck, "SKCK (Jika Ada)"],
                  [Wallet, "NPWP (Jika Ada)"],
                  [Camera, "Paspor Aktif (Jika Ada)"],
                  [Handshake, "Surat Persetujuan Orang Tua/Wali"],
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

          {/* Benefit ringkas */}
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              ["Gaji setara standar pekerja Jepang", GraduationCap],
              ["Pengalaman kerja & pelatihan internasional", Globe2],
              ["Tidak wajib pengalaman kerja sebelumnya", BadgeCheck],
              ["Bisa lanjut ke Tokutei Ginou 2-gou", ArrowRight],
              ["Proses visa legal & jelas", ShieldCheck],
              ["Dibimbing oleh LPK berpengalaman (Nichirin)", Handshake],
            ].map(([text, Icon], i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                className="rounded-2xl bg-white border border-gray-200 p-5 flex gap-3 items-start"
              >
                <div className="w-9 h-9 rounded-lg bg-[#FFF0F0] text-[#D6001C] grid place-items-center flex-none">
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
          14 BIDANG PEKERJAAN
      ====================================================== */}
      <section id="bidang" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              14 Bidang Pekerjaan{" "}
              <span className="text-[#D6001C]">Tokutei Ginou / SSW</span>
            </h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
              Bidang-bidang yang dibuka pemerintah Jepang dalam skema SSW. Pilih
              sesuai minat dan kompetensi Anda.
            </p>
          </div>

          {/* TABEL RINGKAS (pakai short 1 kalimat) */}
          <div
            className="mt-10 overflow-x-auto rounded-2xl border border-gray-200"
            data-aos="fade-up"
          >
            <table className="min-w-full bg-white text-sm">
              <thead className="bg-[#FFF6F6] text-[#D6001C]">
                <tr className="text-left">
                  <th className="px-5 py-3">No</th>
                  <th className="px-5 py-3">Nama Bidang</th>
                  <th className="px-5 py-3">日本語</th>
                  <th className="px-5 py-3">Deskripsi Ringkas</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {fields.map((f, i) => (
                  <tr key={i} className="align-top">
                    <td className="px-5 py-3">{i + 1}</td>
                    <td className="px-5 py-3 font-semibold">{f.name}</td>
                    <td className="px-5 py-3 whitespace-nowrap">{f.jp}</td>
                    <td className="px-5 py-3 text-justify">{f.short}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* GRID DETAIL (pakai desc panjang) */}
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fields.map((f, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={(i % 6) * 80}
                className="p-7 rounded-2xl border border-gray-200 hover:border-[#D6001C] transition-all shadow-[0_6px_24px_rgba(16,24,40,0.05)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFF0F0] text-[#D6001C] grid place-items-center">
                  <f.icon className="w-6 h-6" />
                </div>
                <h4 className="mt-4 font-bold text-gray-900">
                  {i + 1}. {f.name}{" "}
                  <span className="text-[#D6001C]">— {f.jp}</span>
                </h4>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed text-justify">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ALUR PENDAFTARAN — adapt dari Kaigo
      ====================================================== */}
      <section id="alur" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              Alur Pendaftaran{" "}
              <span className="text-[#D6001C]">Program SSW</span>
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {[
              {
                icon: Search,
                title: "Pendaftaran Online",
                desc: "Lengkapi form pendaftaran resmi Nichirin.",
              },
              {
                icon: Activity,
                title: "Medical Check Up",
                desc: "Lakukan MCU untuk memastikan kondisi kesehatan siap kerja.",
              },
              {
                icon: GraduationCap,
                title: "Pelatihan Bahasa & Keterampilan",
                desc: "Belajar JLPT/JFT dan persiapan Senmon Shiken.",
              },
              {
                icon: Handshake,
                title: "Job Matching (Mensetsu)",
                desc: "Wawancara dengan perusahaan Jepang sesuai bidang pilihan.",
              },
              {
                icon: FileSignature,
                title: "Pengurusan Dokumen & Visa",
                desc: "Setelah lolos, siapkan berkas, kontrak, dan proses visa.",
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
          PEMBIAYAAN (opsional mengikuti Kaigo)
      ====================================================== */}
      <section id="pembiayaan" className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              Dukungan <span className="text-[#D6001C]">Pembiayaan</span>{" "}
              (Opsional)
            </h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
              Nichirin menyediakan opsi pendanaan terstruktur untuk membantu
              proses pelatihan hingga keberangkatan, tergantung program & bidang
              kerja.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div
              className="rounded-2xl bg-white border border-gray-200 p-6"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold text-[#111] flex items-center gap-2">
                <Wallet className="w-5 h-5 text-[#D6001C]" />
                Skema Biaya Mandiri
              </h3>
              <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-1.5 text-justify">
                <li>
                  Medical check-up awal & kebutuhan pribadi selama pelatihan.
                </li>
                <li>Konsumsi & utilitas asrama jika diperlukan.</li>
                <li>Komponen lain yang tidak tercakup oleh skema bantuan.</li>
              </ul>
            </div>

            <div
              className="rounded-2xl bg-white border border-gray-200 p-6"
              data-aos="fade-up"
              data-aos-delay="120"
            >
              <h3 className="text-xl font-bold text-[#111] flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#D6001C]" />
                Skema Bantuan/Dana Talangan
              </h3>
              <p className="mt-2 text-sm text-gray-600 text-justify">
                Tersedia pada program tertentu. Menutup sebagian/seluruh
                komponen pelatihan, ujian, proses dokumen, hingga keberangkatan.
                Ketentuan, plafon, dan cicilan mengikuti perjanjian program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LAYANAN DI LPK NICHIRIN
      ====================================================== */}
      <section id="layanan" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111]">
              Layanan <span className="text-[#D6001C]">Nichirin</span> untuk SSW
            </h2>
            <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
              Semua dukungan yang Anda butuhkan untuk lolos seleksi hingga
              bekerja resmi di Jepang.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              [
                GraduationCap,
                "Pelatihan Bahasa Jepang",
                "Kurikulum JLPT/JFT komunikatif dengan target kelulusan.",
              ],
              [
                BadgeCheck,
                "Bimbingan Ujian SSW",
                "Persiapan Senmon Shiken bidang terpilih dengan tryout & simulasi.",
              ],
              [
                Activity,
                "Medical Check-Up",
                "MCU menyeluruh sebelum proses penempatan.",
              ],
              [
                FileCheck2,
                "Pengurusan Dokumen Visa",
                "Pendampingan administratif hingga visa terbit.",
              ],
              [
                Handshake,
                "Simulasi Wawancara & Budaya",
                "Latihan mensetsu dan pengenalan etika kerja Jepang.",
              ],
              [
                Globe2,
                "Penyaluran Kerja ke Jepang",
                "Job matching ke perusahaan & Kumiai terpercaya.",
              ],
            ].map(([Icon, title, desc], i) => (
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
                <p className="mt-1.5 text-sm text-gray-600 leading-relaxed text-justify">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA — Daftar Sekarang
      ====================================================== */}
      <section id="daftar" className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <div
            className="rounded-2xl p-10 bg-gradient-to-r from-[#D6001C] via-[#E3242B] to-[#FF4E50] text-white shadow-[0_10px_36px_rgba(214,0,28,0.2)]"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold">
              Siap Bergabung dalam Program Tokutei Ginou / SSW?
            </h3>
            <p className="mt-3 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Bersama LPK Nichirin Gakuin Centerindo, wujudkan impianmu bekerja
              di Jepang secara legal, profesional, dan berjenjang karier jelas.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/6281399696105"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 rounded-full font-semibold bg-white text-[#D6001C] hover:scale-[1.02] transition-all"
              >
                Daftar Sekarang via WhatsApp
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
