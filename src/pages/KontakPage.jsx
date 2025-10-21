import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Instagram,
  Facebook,
  Music2,
} from "lucide-react";

export default function ContactPage() {
  useEffect(() => {
    // aktifkan AOS + TikTok embed script
    AOS.init({ duration: 850, once: true });
    window.scrollTo(0, 0);
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const contactData = [
    {
      icon: MapPin,
      title: "Alamat",
      desc: "Jl. Raya Salopa – Manonjaya, Ds. Karyawangi, Kec. Salopa, Kab. Tasikmalaya, Jawa Barat, Indonesia",
    },
    {
      icon: Phone,
      title: "Telepon / WhatsApp",
      desc: "(+62) 813-9969-6105",
    },
    {
      icon: Mail,
      title: "Email",
      desc: "ptnichirin@gmail.com",
    },
    {
      icon: Globe,
      title: "Website",
      desc: "nichiringakuin.com",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <BackToTopButton />

      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden pt-[100px] lg:pt-[120px]">
        <div className="absolute inset-0">
          <img
            src="/img/fotohero2.png"
            alt="Kontak LPK Nichirin Gakuin"
            className="w-full h-full object-cover object-center scale-105"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-[#FFF4F4]" />
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(80rem_60rem_at_center,#D6001C_0%,transparent_60%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 py-20 md:py-28">
          <span className="inline-block text-sm font-semibold px-4 py-1 rounded-full bg-[#FFE6E6] text-[#D6001C] ring-1 ring-[#FFC6C6]">
            Hubungi Kami
          </span>
          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold text-[#111] leading-tight">
            Kontak{" "}
            <span className="text-[#D6001C]">
              LPK Nichirin Gakuin Centerindo
            </span>
          </h1>
          <p className="mt-5 text-gray-700 max-w-2xl mx-auto text-justify md:text-center">
            Kami siap membantu Anda untuk konsultasi, kerja sama, maupun
            informasi program pelatihan, pendidikan, dan pengiriman tenaga kerja
            ke Jepang.
          </p>
        </div>
      </section>

      {/* ============== INFO KONTAK ============== */}
      <main className="-mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          {/* Info Cards */}
          <div className="grid md:grid-cols-4 gap-6" data-aos="fade-up">
            {contactData.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#FFD6D6] p-6 rounded-2xl shadow-[0_10px_30px_rgba(214,0,28,0.06)] hover:shadow-[0_10px_36px_rgba(214,0,28,0.15)] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0F0] text-[#D6001C] grid place-items-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111]">{item.title}</h4>
                    <p className="text-sm text-gray-700 mt-1 text-justify">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ============== SOSIAL MEDIA PREVIEW ============== */}
          <section data-aos="fade-up" className="text-center">
            <h2 className="text-3xl font-extrabold text-[#D6001C]">
              Ikuti Kami di Media Sosial
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Terhubunglah dengan Nichirin Gakuin di berbagai platform digital
              untuk update terbaru program pelatihan & keberangkatan ke Jepang.
            </p>

            <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-3 gap-8 justify-center">
              {/* ==== TikTok ==== */}
              <div
                className="bg-white border border-[#FFD6D6] rounded-2xl shadow-[0_6px_24px_rgba(214,0,28,0.08)] p-5 hover:shadow-[0_8px_32px_rgba(214,0,28,0.15)] transition-all"
                data-aos="zoom-in"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0F0] text-[#D6001C] grid place-items-center">
                    <Music2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-[#111]">TikTok</h4>
                </div>

                <div
                  id="tiktok-embed-container"
                  className="w-full flex justify-center"
                >
                  <blockquote
                    className="tiktok-embed"
                    cite="https://www.tiktok.com/@lpknichirin"
                    data-unique-id="lpknichirin"
                    data-embed-type="creator"
                    style={{ maxWidth: "780px", minWidth: "288px" }}
                  >
                    <section>
                      <a
                        target="_blank"
                        href="https://www.tiktok.com/@lpknichirin?refer=creator_embed"
                        rel="noreferrer"
                      >
                        @lpknichirin
                      </a>
                    </section>
                  </blockquote>
                </div>

                <a
                  href="https://www.tiktok.com/@lpknichirin"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-[#D6001C] hover:underline"
                >
                  Lihat TikTok
                </a>
              </div>

              {/* ==== Instagram ==== */}
              <div
                className="bg-white border border-[#FFD6D6] rounded-2xl shadow-[0_6px_24px_rgba(214,0,28,0.08)] p-5 hover:shadow-[0_8px_32px_rgba(214,0,28,0.15)] transition-all"
                data-aos="zoom-in"
                data-aos-delay="150"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0F0] text-[#D6001C] grid place-items-center">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-[#111]">Instagram</h4>
                </div>

                <iframe
                  src="https://www.instagram.com/nichirin_gakuind/embed/"
                  className="w-full h-[280px] rounded-lg border border-gray-200"
                  loading="lazy"
                  title="Instagram Nichirin"
                ></iframe>

                <a
                  href="https://www.instagram.com/nichirin_gakuind/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-[#D6001C] hover:underline"
                >
                  Lihat Instagram
                </a>
              </div>

              {/* ==== Facebook ==== */}
              <div
                className="bg-white border border-[#FFD6D6] rounded-2xl shadow-[0_6px_24px_rgba(214,0,28,0.08)] p-5 hover:shadow-[0_8px_32px_rgba(214,0,28,0.15)] transition-all"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0F0] text-[#D6001C] grid place-items-center">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-[#111]">Facebook</h4>
                </div>

                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/imanbacharuddin&tabs=timeline&width=340&height=250&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                  className="w-full h-[280px] rounded-lg border border-gray-200"
                  loading="lazy"
                  title="Facebook Nichirin"
                ></iframe>

                <a
                  href="https://www.facebook.com/imanbacharuddin"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-[#D6001C] hover:underline"
                >
                  Lihat Facebook
                </a>
              </div>
            </div>
          </section>

          {/* ============== MAP & CTA ============== */}
          <div className="grid lg:grid-cols-2 gap-10 mt-20 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl font-extrabold text-[#111] mb-4">
                Kunjungi Kami
              </h2>
              <p className="text-gray-600 text-justify mb-6">
                Kantor utama kami berlokasi di Tasikmalaya, Jawa Barat. Anda
                dapat datang langsung atau menghubungi kami melalui WhatsApp
                untuk informasi lebih lanjut mengenai program pelatihan dan
                keberangkatan kerja ke Jepang.
              </p>
              <a
                href="https://wa.me/6281399696105"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#D6001C] hover:bg-[#E3242B] text-white px-8 py-3 rounded-full font-semibold transition-all"
              >
                Hubungi via WhatsApp
              </a>
            </div>

            <div
              data-aos="fade-left"
              className="rounded-2xl overflow-hidden border border-[#FFD6D6] shadow-[0_8px_30px_rgba(214,0,28,0.06)]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.452884611278!2d108.28046517476194!3d-7.415024492595328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e65f7d6c881aa41%3A0xafae8dbb55303b1b!2sLPK%20Nichirin%20Gakuin%20Centerindo!5e0!3m2!1sen!2sid!4v1760092229707!5m2!1sen!2sid"
                className="w-full h-[400px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LPK Nichirin Gakuin Centerindo Map"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
