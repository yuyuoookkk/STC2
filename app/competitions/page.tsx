import Link from "next/link"
import { ArrowRight } from "lucide-react"

const competitions = [
  {
    name: "Web Design",
    slug: "web-design",
    description:
      "Buat website yang menakjubkan dan fungsional menggunakan teknologi modern. Tunjukkan keahlian Anda dalam HTML, CSS, JavaScript, dan framework populer.",
    participants: "",
    duration: "",
    prize: "",
    deadline: "",
    grade: "SMA/SMK",
    icon: "💻",
  },
  {
    name: "Design Poster",
    slug: "design-poster",
    description:
      "Desain poster promosi yang menarik dan komunikatif. Gunakan kreativitas Anda dengan tools seperti Photoshop, Illustrator, atau Canva.",
    participants: "",
    duration: "",
    prize: "",
    deadline: "",
    grade: "SMP",
    icon: "🎨",
  },
  {
    name: "Design Maskot",
    slug: "design-maskot",
    description:
      "Buat maskot brand yang berkesan untuk mewakili perusahaan atau acara. Fokus pada desain karakter dan identitas brand.",
    participants: "",
    duration: "",
    prize: "",
    deadline: "",
    grade: "SMP",
    icon: "🦸",
  },

  {
    name: "Esport ML",
    slug: "esport-ml",
    description:
      "Turnamen gaming kompetitif Mobile Legends. Bentuk tim dan berkompetisi dalam gameplay MOBA strategis.",
    participants: "",
    duration: "",
    prize: "",
    deadline: "",
    grade: "SMP",
    icon: "🎮",
  },
  {
    name: "Esport FF",
    slug: "esport-ff",
    description: "Turnamen gaming kompetitif Free Fire. Kompetisi battle royale dengan kategori individu dan tim.",
    participants: "",
    duration: "",
    prize: "",
    deadline: "",
    grade: "SMP",
    icon: "🔫",
  },
  {
    name: "Rumus Excel",
    slug: "rumus-excel",
    description:
      "Kuasai rumus dan fungsi Excel. Selesaikan masalah analisis data kompleks menggunakan teknik Excel lanjutan.",
    participants: "",
    duration: "",
    prize: "",
    deadline: "",
    grade: "SMP",
    icon: "📊",
  },
  {
    name: "Speed Typing",
    slug: "speed-typing",
    description:
      "Uji kecepatan dan akurasi mengetik Anda. Berkompetisi untuk mencapai kata per menit tertinggi dengan kesalahan minimal.",
    participants: "",
    duration: "",
    prize: "",
    deadline: "",
    grade: "SMP",
    icon: "⌨️",
  },
]

const getGradeColor = (grade: string) => {
  switch (grade) {
    case "SMP":
      return "text-orange-300 bg-orange-500/20"
    case "SMA/SMK":
      return "text-red-300 bg-red-500/20"
    default:
      return "text-gray-300 bg-gray-500/20"
  }
}

export default function CompetitionsPage() {
  return (
    <main className="min-h-screen py-16 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Bidang Lomba
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto text-pretty px-4">
            Berikut Bidang Lomba yang Terdapat Pada STC. Pilih kategori yang sesuai dengan keahlian dan minat Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {competitions.map((competition, index) => (
            <div
              key={competition.slug}
              className={`glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:scale-[1.02] transition-all duration-300 ${
                competition.slug === "web-design" ? "xl:col-span-2 xl:max-w-2xl xl:mx-auto" : ""
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0 mx-auto sm:mx-0">
                  {competition.icon}
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between mb-3 sm:mb-4 gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{competition.name}</h3>
                    <span
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getGradeColor(competition.grade)} whitespace-nowrap`}
                    >
                      {competition.grade}
                    </span>
                  </div>

                  <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base text-pretty">
                    {competition.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Link
                      href={`/competition/${competition.slug}`}
                      className="glass-button px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-white font-medium flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                    >
                      Lihat Detail
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Link>
                    <Link
                      href={`/competition/${competition.slug}/register`}
                      className="bg-white/20 backdrop-blur-10 border border-white/30 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-white font-medium hover:bg-white/30 transition-all duration-300 text-center text-sm sm:text-base"
                    >
                      Daftar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
