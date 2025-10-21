// src/components/Footer.jsx
import React from "react";
import Logo from "/img/logo.png";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  MessageCircle,
} from "lucide-react";

const Item = ({ icon: Icon, children }) => (
  <div className="inline-flex items-start gap-2 text-white/90">
    <Icon className="w-5 h-5 mt-[2px]" />
    <span className="leading-relaxed">{children}</span>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 lg:px-24 py-12">
        {/* ===== PANEL BESAR (CARD) ===== */}
        <div className="relative rounded-[32px] text-white px-6 md:px-10 lg:px-14 py-10 lg:py-12 shadow-[0_25px_60px_-20px_rgba(214,0,28,0.35)]">
          {/* gradient merah elegan */}
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-[#B80014] via-[#D6001C] to-[#FF4E50]" />
          {/* inner shading biar kaya depth */}
          <div className="absolute inset-0 rounded-[32px] ring-1 ring-white/10" />
          <div className="absolute -inset-[2px] rounded-[34px] bg-white/10 blur-xl pointer-events-none" />

          {/* ===== CONTENT ===== */}
          <div className="relative grid gap-10 lg:gap-14 md:grid-cols-3 items-start">
            {/* BRAND */}
            <div className="col-span-1">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                  <img
                    src={Logo}
                    alt="Nichirin Gakuin Centerindo"
                    className="w-12 h-12 object-contain"
                    draggable={false}
                  />
                </div>

                <div className="leading-tight">
                  <h3 className="text-2xl font-extrabold tracking-tight">
                    PT NICHIRIN
                  </h3>
                  <p className="text-xl font-extrabold -mt-0.5 tracking-tight">
                    GAKUIN CENTERINDO
                  </p>
                  <p className="text-white/80 text-sm mt-1">
                    Lembaga Pelatihan Kerja{" "}
                    <span className="font-semibold">dan Budaya</span> Jepang
                  </p>
                </div>
              </div>

              {/* garis pemisah tipis di mobile */}
              <div className="mt-6 block md:hidden h-px bg-white/20" />
            </div>

            {/* ALAMAT & KONTAK */}
            <div className="md:col-span-2">
              <div className="grid md:grid-cols-5 gap-6">
                {/* Kolom alamat (lebih lebar) */}
                <div className="md:col-span-3">
                  <div className="text-white font-semibold text-lg">
                    Alamat & Kontak
                  </div>
                  <div className="mt-3 space-y-3 text-sm">
                    <Item icon={MapPin}>
                      Jl. Raya Salopa – Manonjaya, Desa Karyawangi, Kec. Salopa,
                      Kab. Tasikmalaya, Jawa Barat – Indonesia.
                    </Item>
                    <Item icon={Phone}>(+62) 813-9969-6105</Item>
                    <a
                      href="mailto:ptnichirin@gmail.com"
                      className="inline-flex items-start gap-2 text-white/90 hover:text-white transition"
                    >
                      <Mail className="w-5 h-5 mt-[2px]" />
                      ptnichirin@gmail.com
                    </a>
                  </div>
                </div>

                {/* Kolom Terhubung & Sosmed */}
                <div className="md:col-span-2 md:justify-self-end">
                  <div className="text-white font-semibold text-lg md:text-right">
                    Terhubung dengan Kami
                  </div>

                  <div className="mt-4 flex md:justify-end gap-3">
                    {/* Instagram */}
                    <a
                      aria-label="Instagram Nichirin"
                      href="https://www.instagram.com/nichirin_gakuind/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 grid place-items-center rounded-full bg-white text-[#D6001C]
                 ring-1 ring-white/30 hover:ring-white/60 hover:scale-110 transition-all duration-300
                 shadow-sm hover:shadow-[0_0_16px_rgba(255,255,255,0.35)]"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>

                    {/* TikTok */}
                    <a
                      aria-label="TikTok Nichirin"
                      href="https://www.tiktok.com/@lpknichirin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 grid place-items-center rounded-full bg-white text-[#D6001C]
                 ring-1 ring-white/30 hover:ring-white/60 hover:scale-110 transition-all duration-300
                 shadow-sm hover:shadow-[0_0_16px_rgba(255,255,255,0.35)]"
                    >
                      {/* TikTok Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        className="w-6 h-6"
                      >
                        <path d="M412.19 119.11a109.37 109.37 0 0 1-59.09-17.21v177.5a114.8 114.8 0 1 1-97.2-113.59v64.59a50.71 50.71 0 1 0 36.8 48.9V0h60.4a109.32 109.32 0 0 0 59.09 99.45z" />
                      </svg>
                    </a>

                    {/* WhatsApp */}
                    <a
                      aria-label="WhatsApp Nichirin"
                      href="https://wa.me/6281399696105"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 grid place-items-center rounded-full bg-white text-[#D6001C]
                 ring-1 ring-white/30 hover:ring-white/60 hover:scale-110 transition-all duration-300
                 shadow-sm hover:shadow-[0_0_16px_rgba(255,255,255,0.35)]"
                    >
                      <MessageCircle className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* garis pembatas halus */}
              <div className="hidden md:block mt-8 h-px bg-white/20" />

              {/* Legalitas (opsional, sesuai data perusahaan) */}
              <div className="mt-6 text-white/85 text-sm">
                <span className="font-semibold">Legalitas:</span> NIB
                08062300187140003
              </div>
            </div>
          </div>
        </div>

        {/* ===== COPYRIGHT BAR ===== */}
        <div className="mt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Nichirin Gakuin Centerindo. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
