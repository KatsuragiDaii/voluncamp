"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, ChevronDown, Target, Heart } from "lucide-react";

// Kumpulan gambar untuk slideshow (bisa diganti dengan link gambar Anda nanti)
const heroImages = [
  "/images/IMG1.jpg",
  "/images/IMG2.jpg",
  "/images/IMG3.jpg"
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Logika untuk mengganti gambar otomatis setiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white">
      
      {/* 1. TOP BAR */}
      <div className="bg-gradient-to-r from-[#0f3460] via-[#1e5b99] to-[#2575c0] text-white px-8 md:px-16 py-3.5 flex flex-col sm:flex-row justify-between items-center text-base shadow-sm z-[60] relative">
        <div className="flex items-center gap-8 font-medium">
          <div className="flex items-center gap-2.5 select-none">
            <Mail size={20} className="stroke-[2.2]" /> 
            <span>halo@volunhub.org</span>
          </div>
          <div className="flex items-center gap-2.5 select-none">
            <Phone size={20} className="stroke-[2.2]" /> 
            <span>+62 812 3456 7890</span>
          </div>
        </div>

        <div className="flex items-center gap-6 mt-3 sm:mt-0">
          <button className="bg-white text-[#1e5b99] px-6 py-2 rounded-full font-bold text-sm tracking-wide shadow-md hover:bg-blue-50 hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer">
            Hubungi Kami
          </button>
          
          <div className="relative group">
            <div className="flex items-center gap-2.5 font-semibold text-base cursor-pointer hover:opacity-90 select-none transition-opacity">
              <img src="https://flagcdn.com/w40/id.png" alt="ID" className="w-6 h-auto rounded-sm shadow-sm border border-white/20" />
              <span>ID</span>
              <ChevronDown size={18} className="stroke-[2.5]" />
            </div>
            <div className="absolute right-0 top-full pt-3 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white rounded-lg shadow-xl text-gray-800 flex flex-col overflow-hidden border border-gray-100">
                <div className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors">
                  <img src="https://flagcdn.com/w40/id.png" alt="ID" className="w-5 h-auto rounded-sm shadow-sm" />
                  <span className="font-semibold text-sm">Indonesia</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors border-t border-gray-100">
                  <img src="https://flagcdn.com/w40/us.png" alt="EN" className="w-5 h-auto rounded-sm shadow-sm" />
                  <span className="font-semibold text-sm">English</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="bg-white px-6 md:px-12 py-4 flex justify-between items-center shadow-sm sticky top-0 z-50">
        
        {/* LOGO PNG MENGGANTIKAN TEKS */}
        <div className="flex-shrink-0 cursor-pointer">
          <img 
            src="/images/logo.png" 
            alt="VolunHub Logo" 
            className="h-16 w-auto object-contain" 
            /* Ubah angka h-10 (height) di atas jika logo terasa kurang besar/kecil */
          />
        </div>

        <div className="hidden md:flex gap-8 font-bold text-gray-800">
          <a href="#beranda" className="hover:text-[#1e5b99] transition">Beranda</a>
          <a href="#tentang" className="hover:text-[#1e5b99] transition">Tentang Kami</a>
          <a href="#galeri" className="hover:text-[#1e5b99] transition">Galeri</a>
          <a href="#program" className="hover:text-[#1e5b99] transition">Program</a>
        </div>
      </nav>

      {/* 3. HERO SECTION (SLIDESHOW) */}
      <section id="beranda" className="relative h-[85vh] flex items-center overflow-hidden">
        
        {/* Looping Gambar Background dengan Transisi Fade */}
        {heroImages.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}

        {/* Konten Teks & Tombol (Tanpa key agar animasi hanya berjalan di awal) */}
        <div className="relative z-10 px-6 md:px-16 max-w-4xl">
          
          {/* mb-5 mengatur jarak antara Judul dan Subtitle */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-5 drop-shadow-lg animate-slide-up">
            Menyenangkan & <br/> Bermakna untuk <br/> Semua
          </h1>
          
          {/* mb-9 mengatur jarak antara Subtitle dan Tombol */}
          <p className="text-lg md:text-xl text-gray-100 mb-9 max-w-2xl leading-relaxed drop-shadow-md animate-slide-up delay-150">
            Jaga semangat kepedulian Anda dengan bergabung bersama VolunHub. Temukan program pengabdian yang sesuai dengan passion-mu dan mari berkontribusi membangun masyarakat yang lebih baik.
          </p>
          
          <div className="animate-slide-up delay-300">
            <button className="bg-white text-[#1e5b99] px-8 py-3.5 rounded-full font-bold text-lg shadow-xl transition-all duration-200 hover:bg-blue-50 active:bg-[#1e5b99] active:text-white active:scale-95 cursor-pointer">
            Ikut Engineering Camp Sekarang
            </button>
          </div>
          
        </div>

        {/* Titik Navigasi Dinamis */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 cursor-pointer ${
                index === currentSlide ? "bg-white scale-125" : "bg-transparent hover:bg-white/50"
              }`}
              aria-label={`Pindah ke slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 4. PROFIL & VISI MISI */}
      <section id="tentang" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[#1e5b99] font-bold tracking-wider uppercase text-sm mb-3">Tentang Kami</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Membangun Kepedulian, Menciptakan Perubahan.</h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              VolunHub adalah wadah kolaborasi bagi jiwa-jiwa muda yang peduli pada isu sosial, pendidikan, dan lingkungan. Kami menghubungkan niat baik dengan aksi nyata melalui program kerelawanan yang terstruktur dan berdampak langsung pada masyarakat.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Percaya bahwa setiap langkah kecil sangat berarti, kami membekali relawan dengan pengalaman lapangan yang bermakna dan keterampilan kepemimpinan.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-8 rounded-2xl flex gap-6 items-start">
              <div className="bg-[#1e5b99] text-white p-4 rounded-xl">
                <Target size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Visi</h4>
                <p className="text-gray-600">Menjadi katalisator utama penggerak aksi kerelawanan di Indonesia yang mandiri, inklusif, dan berkelanjutan.</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-2xl flex gap-6 items-start">
              <div className="bg-[#1e5b99] text-white p-4 rounded-xl">
                <Heart size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Misi</h4>
                <p className="text-gray-600">Menyelenggarakan program pengabdian berdampak nyata dan memfasilitasi pengembangan kapasitas pemuda di daerah pelosok.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DOKUMENTASI & GALERI */}
      <section id="galeri" className="bg-gray-50 py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#1e5b99] font-bold tracking-wider uppercase text-sm mb-3">Dokumentasi</h2>
            <h3 className="text-4xl font-extrabold text-gray-900">Jejak Kebaikan Relawan</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1593113563332-ce147ce811f0?q=80&w=800&auto=format&fit=crop" alt="Kegiatan 1" className="w-full h-64 object-cover rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop" alt="Kegiatan 2" className="w-full h-64 object-cover rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop" alt="Kegiatan 3" className="w-full h-64 object-cover rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300" />
            <img src="https://images.unsplash.com/photo-1528301721190-18692550cb16?q=80&w=800&auto=format&fit=crop" alt="Kegiatan 4" className="w-full h-64 object-cover rounded-2xl shadow-sm hover:scale-[1.02] transition-transform duration-300" />
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <p>© 2026 VolunHub. All rights reserved.</p>
      </footer>

    </div>
  );
}