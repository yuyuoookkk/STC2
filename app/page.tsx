"use client"

import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const competitions = [
    {
      name: "Desain Web",
      slug: "web-design",
      description: "Buat website yang menakjubkan dan fungsional",
      participants: "",
      icon: "💻",
    },
    {
      name: "Desain Poster",
      slug: "design-poster",
      description: "Desain poster promosi yang menarik perhatian",
      participants: "",
      icon: "🎨",
    },
    {
      name: "Desain Maskot",
      slug: "design-maskot",
      description: "Buat maskot merek yang berkesan",
      participants: "",
      icon: "🦸",
    },
    {
      name: "Esport ML",
      slug: "esport-ml",
      description: "Kompetisi gaming Mobile Legends",
      participants: "",
      icon: "🎮",
    },
    {
      name: "Esport FF",
      slug: "esport-ff",
      description: "Kompetisi gaming Free Fire",
      participants: "",
      icon: "🎮",
    },
    {
      name: "Rumus Excel",
      slug: "rumus-excel",
      description: "Kuasai rumus dan fungsi Excel",
      participants: "",
      icon: "📊",
    },
    {
      name: "Speed Typing",
      slug: "speed-typing",
      description: "Uji kecepatan dan akurasi mengetik Anda",
      participants: "",
      icon: "⌨️",
    },
  ]

  const galleryImages = [
    {
      id: 1,
      title: "STC 2024 Opening Ceremony",
      description: "Pembukaan kompetisi teknologi terbesar di Bali",
      image: "/technology-competition-opening-ceremony-with-stude.jpg",
    },
    {
      id: 2,
      title: "Web Design Competition",
      description: "Peserta menunjukkan kreativitas dalam desain web",
      image: "/students-working-on-web-design-competition-with-co.jpg",
    },
    {
      id: 3,
      title: "Esport Tournament",
      description: "Pertandingan sengit Mobile Legends dan Free Fire",
      image: "/esport-gaming-tournament-with-multiple-screens-and.jpg",
    },
    {
      id: 4,
      title: "Speed Typing Challenge",
      description: "Kompetisi mengetik tercepat dan terakurat",
      image: "/speed-typing-competition-with-keyboards-and-focuse.jpg",
    },
    {
      id: 5,
      title: "Award Ceremony",
      description: "Penyerahan penghargaan kepada para juara",
      image: "/award-ceremony-with-trophies-and-winners-on-stage.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-white/25 rounded-full animate-pulse delay-300"></div>
        </div>

        <div className="text-center z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white mb-6 text-balance">
            STIBAJRA Technology Competition
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 text-pretty">
            Opening the Portal Of Technology To Iluminate Creativity And Imagination
          </p>
          <p className="text-base sm:text-lg text-white/70 mb-12 max-w-2xl mx-auto text-pretty">
            Dengan menyambut hadirnya STC atau “Stibajra Technology Competition” pada tahun 2025. SMK TI Bali Global
            Jimbaran menyelenggarakan ajang kompetisi untuk siswa siswi SMP/MTs dan SMA/SMK/MAN sederajat se-Bali yang
            diadakan setiap setahun sekali.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/competitions"
              className="glass-button px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
            >
              Lihat Kompetisi
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/register"
              className="bg-white/20 backdrop-blur-10 border border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-semibold hover:bg-white/30 transition-all duration-300"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </section>

      {/* Competition Preview */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Bidang Lomba
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4">
              Pilih dari 7 kategori kompetisi yang menarik dan tunjukkan bakat Anda
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {/* First row - 4 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {competitions.slice(0, 4).map((competition, index) => (
                <Link
                  key={competition.slug}
                  href={`/competition/${competition.slug}`}
                  className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 group h-full"
                >
                  <div className="text-center h-full flex flex-col">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg sm:rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-base sm:text-lg md:text-xl">{competition.icon}</span>
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                      {competition.name}
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow leading-relaxed">
                      {competition.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Second row - 3 cards centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 w-full max-w-4xl">
                {competitions.slice(4).map((competition, index) => (
                  <Link
                    key={competition.slug}
                    href={`/competition/${competition.slug}`}
                    className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 group h-full"
                  >
                    <div className="text-center h-full flex flex-col">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg sm:rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                        <span className="text-white font-bold text-base sm:text-lg md:text-xl">{competition.icon}</span>
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                        {competition.name}
                      </h3>
                      <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow leading-relaxed">
                        {competition.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/competitions"
              className="glass-button px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-white font-semibold inline-flex items-center gap-2 hover:scale-105 transition-all duration-300"
            >
              Lihat Semua Kompetisi
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Galeri Kompetisi
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-4">
              Lihat momen-momen terbaik dari kompetisi teknologi sebelumnya
            </p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {galleryImages.map((image) => (
                  <div key={image.id} className="w-full flex-shrink-0 relative">
                    <div className="glass-card rounded-xl sm:rounded-2xl overflow-hidden">
                      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96">
                        <img
                          src={image.image || "/placeholder.svg"}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                            {image.title}
                          </h3>
                          <p className="text-white/80 text-sm md:text-base leading-relaxed">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 glass-button p-2 sm:p-3 rounded-full text-white hover:scale-110 transition-all duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 glass-button p-2 sm:p-3 rounded-full text-white hover:scale-110 transition-all duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 sm:mt-6 gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-white" : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
