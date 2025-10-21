// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  MessageCircle,
  Youtube,
  ChevronDown,
} from "lucide-react";
import Logo from "/img/logo.png";

/* --------------------------- Small UX helpers --------------------------- */
const useScrollStates = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showTopbar, setShowTopbar] = useState(true);
  const last = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setShowTopbar(y < last.current || y < 40);
      last.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return { scrolled, showTopbar };
};

const NavUnderline = ({ active }) => (
  <span
    className={`pointer-events-none absolute left-0 -bottom-[6px] h-[2px] rounded-full transition-all duration-300
      ${active ? "w-full" : "w-0"} 
      bg-[linear-gradient(90deg,#D6001C_0%,#FF4E50_60%,#ffffff_100%)]`}
  />
);

/* ------------------------------ Main Navbar ---------------------------- */
export default function Navbar() {
  const { scrolled, showTopbar } = useScrollStates();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const location = useLocation();

  // close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
    setDropdown(null);
  }, [location.pathname]);

  const menus = [
    { label: "Beranda", path: "/" },
    {
      label: "Tentang Kami",
      sub: [
        { label: "Profil", path: "/profil" },
        { label: "Galeri", path: "/galeri" },
      ],
    },
    {
      label: "Program",
      sub: [
        { label: "Tokutei Ginou", path: "/tokutei-ginou" },
        { label: "Gijinkoku", path: "/gijinkoku" },
        { label: "Kaigo Shoku", path: "/kaigo" },
        { label: "Ryuugaku", path: "/ryuugaku" },
        { label: "Nihongo Onrain Juku", path: "/nihongo-onrain-juku" },
        { label: "Biaya & Proses", path: "/biaya-proses" },
      ],
    },
    { label: "Kontak", path: "/kontak" },
    {
      label: "Digitalisasi",
      sub: [
        { label: "Simulasi JFT & SSW", path: "https://simulasijft.com" },
        { label: "CV Builder", path: "https://cvbuilderjeca.com" },
      ],
    },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* ============================== TOPBAR ============================== */}
      <div
        className={`transition-all duration-500 bg-[#D6001C] text-white text-[13px] 
        ${
          showTopbar ? "opacity-100 max-h-12" : "opacity-0 max-h-0"
        } overflow-hidden`}
        aria-hidden={!showTopbar}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
          {/* Left contacts */}
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="mailto:ptnichirin@gmail.com"
              className="flex items-center gap-2 hover:opacity-90"
            >
              <Mail size={16} /> ptnichirin@gmail.com
            </a>
            <a
              href="tel:+6281399696105"
              className="flex items-center gap-2 hover:opacity-90"
            >
              <Phone size={16} /> (+62) 813-9969-6105
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> Jl. Raya Salopa – Manonjaya, Tasikmalaya
            </span>
          </div>
          {/* ==================== SOCIAL ICONS (HEADER) ==================== */}
          <div className="flex items-center gap-3 ml-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/nichirin_gakuind/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/90 hover:text-[#D6001C] transition-colors duration-300"
            >
              <Instagram size={18} />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@lpknichirin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-white/90 hover:text-[#D6001C] transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-[18px] h-[18px]"
              >
                <path d="M412.19 119.11a109.37 109.37 0 0 1-59.09-17.21v177.5a114.8 114.8 0 1 1-97.2-113.59v64.59a50.71 50.71 0 1 0 36.8 48.9V0h60.4a109.32 109.32 0 0 0 59.09 99.45z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6281399696105"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white/90 hover:text-[#25D366] transition-colors duration-300"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* ============================= NAVBAR ============================== */}
      <div
        className={`transition-all duration-700 ${
          scrolled
            ? "text-black bg-white/85 backdrop-blur-xl ring-1 ring-white/25 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]"
            : "text-white bg-gradient-to-r from-[#0A0A0A] via-[#121212] to-[#1E1E1E] shadow-[0_10px_30px_-18px_rgba(0,0,0,0.9)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 md:py-4 flex items-center justify-between">
          {/* ------------------------------- Logo + Brand ------------------------------- */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={Logo}
              alt="Logo Nichirin"
              className="h-11 md:h-14 object-contain select-none"
              draggable={false}
            />
            <div
              className={`leading-tight transition-colors ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              <div className="flex items-baseline gap-1">
                <span className="font-extrabold text-lg md:text-xl tracking-wide">
                  NICHIRIN
                </span>
              </div>
              <p className="text-[12.5px] md:text-sm tracking-wider opacity-90">
                GAKUIN CENTERINDO
              </p>
            </div>
          </Link>

          {/* ------------------------------ Desktop Nav ------------------------------ */}
          <nav
            className={`hidden lg:flex items-center gap-10 font-medium transition-colors ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {menus.map((m, i) =>
              m.sub ? (
                <div
                  key={m.label}
                  className="relative group"
                  onMouseEnter={() => setDropdown(i)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 relative focus:outline-none"
                    aria-haspopup="true"
                    aria-expanded={dropdown === i}
                  >
                    <span className="relative">
                      {m.label}
                      <NavUnderline
                        active={
                          m.label !== "Digitalisasi" &&
                          location.pathname.startsWith(
                            (m.sub?.[0]?.path || "").split("/")[1] ?? "_"
                          )
                        }
                      />
                    </span>
                    <ChevronDown
                      size={16}
                      className={`mt-[2px] transition-transform duration-300 ${
                        dropdown === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 top-full mt-3 rounded-2xl overflow-hidden transition-all duration-500
                    ${
                      dropdown === i
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div
                      className="relative min-w-[260px] rounded-2xl border border-white/15 shadow-[0_18px_50px_-20px_rgba(214,0,28,0.55)] overflow-hidden
                        bg-[radial-gradient(1000px_300px_at_-10%_-10%,rgba(214,0,28,0.08),transparent_40%),linear-gradient(145deg,rgba(20,20,20,0.92),rgba(45,45,45,0.88))]
                        backdrop-blur-[14px]"
                    >
                      {/* top accent line */}
                      <div className="absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,#D6001C, #FF4E50, transparent)] opacity-90" />
                      {m.sub.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          className={`relative block px-5 py-3 text-[14px] text-gray-200/95 hover:text-white
                              transition-colors duration-200
                              hover:bg-[linear-gradient(90deg,rgba(214,0,28,0.18),rgba(255,78,80,0.12))]
                              ${
                                location.pathname === s.path
                                  ? "text-[#FF6A6A] font-semibold"
                                  : ""
                              }`}
                        >
                          {/* subtle left glow bar */}
                          <span className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#D6001C]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={m.path} to={m.path} className="relative">
                  <span className="relative">
                    {m.label}
                    <NavUnderline active={location.pathname === m.path} />
                  </span>
                </Link>
              )
            )}
          </nav>

          {/* === CTA BUTTON CLEAN MODERN === */}
          <div className="hidden lg:flex">
            <Link
              to="/kontak"
              className={`relative inline-flex items-center justify-center px-7 py-2.5 font-semibold text-sm tracking-wide rounded-full overflow-hidden transition-all duration-500 ${
                scrolled
                  ? "text-white shadow-[0_0_20px_rgba(255,78,80,0.4)]"
                  : "text-white border border-white/50"
              }`}
            >
              {/* Background gradient layer */}
              <span
                className={`absolute inset-0 rounded-full transition-all duration-500 ${
                  scrolled
                    ? "bg-gradient-to-r from-[#D6001C] via-[#E3242B] to-[#FF4E50]"
                    : "hover:bg-gradient-to-r hover:from-[#D6001C] hover:via-[#E3242B] hover:to-[#FF4E50]"
                }`}
              />

              {/* Glow overlay (soft radial) */}
              <span
                className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 ${
                  scrolled ? "opacity-100" : "hover:opacity-100"
                } bg-[radial-gradient(circle_at_center,rgba(255,78,80,0.4),transparent_70%)]`}
              />

              {/* Inner text */}
              <span className="relative z-10">Hubungi Kami</span>
            </Link>
          </div>

          {/* ------------------------------ Hamburger ------------------------------- */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Navigation"
            aria-expanded={open}
            className={`lg:hidden relative inline-flex items-center justify-center w-10 h-10 rounded-lg 
              transition-colors ${
                scrolled ? "text-black" : "text-white"
              } focus:outline-none`}
          >
            <span
              className={`absolute block h-0.5 w-6 bg-current transition-transform duration-300
                ${open ? "rotate-45 translate-y-[6px]" : "-translate-y-2"}`}
            />
            <span
              className={`absolute block h-0.5 w-6 bg-current transition-opacity duration-300
                ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute block h-0.5 w-6 bg-current transition-transform duration-300
                ${open ? "-rotate-45 -translate-y-[6px]" : "translate-y-2"}`}
            />
          </button>
        </div>

        {/* ------------------------------ Mobile Drawer ----------------------------- */}
        <div
          className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 
            ${open ? "max-h-[620px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav
            className="px-6 py-5 space-y-2 text-white 
            bg-[linear-gradient(180deg,rgba(10,10,10,0.98),rgba(10,10,10,0.92))] 
            backdrop-blur-xl border-t border-white/10"
          >
            {menus.map((m, i) =>
              m.sub ? (
                <MobileGroup
                  key={m.label}
                  label={m.label}
                  open={dropdown === i}
                  onToggle={() => setDropdown(dropdown === i ? null : i)}
                >
                  {m.sub.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className={`block rounded-lg px-4 py-2.5 text-sm transition-colors
                        ${
                          location.pathname === s.path
                            ? "bg-[#D6001C]/20 text-[#FF9A9A]"
                            : "hover:bg-white/5"
                        }`}
                    >
                      {s.label}
                    </Link>
                  ))}
                </MobileGroup>
              ) : (
                <Link
                  key={m.path}
                  to={m.path}
                  className={`block rounded-lg px-4 py-2.5 text-[15px] transition-colors
                    ${
                      location.pathname === m.path
                        ? "bg-[#D6001C]/20 text-[#FF9A9A]"
                        : "hover:bg-white/5"
                    }`}
                >
                  {m.label}
                </Link>
              )
            )}

            {/* CTA in drawer */}
            <Link
              to="/kontak"
              className="block mt-4 text-center font-semibold rounded-xl px-5 py-3
                bg-[conic-gradient(from_210deg,#D6001C_0%,#FF4E50_40%,#E7E7E7_100%)]
                text-white shadow-[0_0_18px_rgba(255,78,80,0.45)]"
            >
              Hubungi Kami
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

/* ---------------------------- Mobile group item ---------------------------- */
function MobileGroup({ label, open, onToggle, children }) {
  return (
    <div className="rounded-xl border border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 text-[15px] font-semibold"
        aria-expanded={open}
      >
        <span>{label}</span>
        <ChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          size={18}
        />
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-500 
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="pb-3 space-y-1">{children}</div>
      </div>
    </div>
  );
}
