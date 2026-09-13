export default function Home() {
    return (
      <div className="min-h-screen font-sans bg-white">
        
        {/* 1. TOP BAR (Bagian Biru Paling Atas) */}
        <div className="bg-[#1e5b99] text-white px-6 py-2 flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              ✉ halo@volunhub.org
            </span>
            <span className="flex items-center gap-2">
              📞 +62 812 3456 7890
            </span>
          </div>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <button className="bg-white text-[#1e5b99] px-4 py-1.5 rounded-full font-bold hover:bg-gray-100 transition">
              Hubungi Kami
            </button>
            <span className="font-semibold cursor-pointer">ID ⌄</span>
          </div>
        </div>
  
        {/* 2. MAIN NAVBAR */}
        <nav className="bg-white px-6 md:px-12 py-5 flex justify-between items-center shadow-sm">
          <div className="font-extrabold text-2xl tracking-tight text-gray-900 leading-none">
            VOLUNHUB
          </div>
          <div className="hidden md:flex gap-8 font-bold text-gray-800">
            <a href="#beranda" className="hover:text-[#1e5b99] transition">Beranda</a>
            <a href="#tentang" className="hover:text-[#1e5b99] transition">Tentang Kami</a>
            <a href="#program" className="hover:text-[#1e5b99] transition">Program</a>
          </div>
        </nav>
  
        {/* 3. HERO SECTION (Teks Kiri & Background Full) */}
        <section className="relative h-[85vh] flex items-center">
          {/* Background Image dengan Overlay Gelap */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1470&auto=format&fit=crop')" }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
  
          {/* Konten Hero - Rata Kiri */}
          <div className="relative z-10 px-6 md:px-16 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Menyenangkan & <br/> Bermakna untuk <br/> Semua
            </h1>
            <button className="bg-white text-[#1e5b99] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">
              Ikut Volunteer Sekarang
            </button>
          </div>
  
          {/* Carousel Indicators (Titik di Bawah) */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
            <div className="w-3 h-3 rounded-full border-2 border-white bg-transparent cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full border-2 border-white bg-white cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full border-2 border-white bg-transparent cursor-pointer"></div>
          </div>
        </section>
  
      </div>
    );
  }