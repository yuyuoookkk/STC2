import Link from "next/link"
import { ArrowLeft, Users, Clock, Trophy, Calendar, CheckCircle, Award, Target, BookOpen } from "lucide-react"
import { notFound } from "next/navigation"

const competitionData = {
  "web-design": {
    name: "Web Design",
    description:
      "Create stunning and functional websites using modern technologies. Showcase your skills in HTML, CSS, JavaScript, and popular frameworks.",
    fullDescription:
      "The Web Design competition challenges participants to create innovative, responsive, and user-friendly websites. You'll be judged on creativity, functionality, code quality, and user experience. This competition is perfect for developers who want to showcase their front-end skills and design sensibilities.",
    participants: "120+",
    duration: "3 days",
    prize: "$5,000",
    deadline: "March 15, 2024",
    grade: "SMA/SMK",
    icon: "💻",
    requirements: [
      "Proficiency in HTML, CSS, and JavaScript",
      "Experience with responsive design",
      "Knowledge of modern frameworks (React, Vue, Angular)",
      "Understanding of web accessibility standards",
      "Basic knowledge of version control (Git)",
    ],
    judging: [
      "Babak Penyisihan — Antarmuka (45%)",
      "Babak Penyisihan — Kesesuaian dengan Tema (25%)",
      "Babak Penyisihan — Kreativitas dan Inovasi (30%)",
      "Babak Final — Presentasi (60%)",
      "Babak Final — Tanya Jawab (40%)",
      "Nilai Akhir — Babak Penyisihan (60%)",
      "Nilai Akhir — Babak Final (40%)",
    ],
    timeline: [
      {
        phase: "Pendaftaran - Gel. 1",
        date: "29 Sep 2025 – 13 Okt 2025",
        description: "Pendaftaran gelombang pertama",
      },
      { phase: "Pendaftaran - Gel. 2", date: "14 Okt 2025 – 24 Okt 2025", description: "Pendaftaran gelombang kedua" },
      { phase: "Technical Meeting", date: "4 Okt 2025", description: "Sosialisasi aturan dan teknis lomba" },
      {
        phase: "Pengumpulan Bahan Website",
        date: "24–26 Okt 2025",
        description: "Unggah bahan untuk pembuatan website",
      },
      { phase: "Hari Lomba", date: "28 Okt 2025", description: "Pelaksanaan lomba Web Design" },
      {
        phase: "Puncak Acara & Penghargaan",
        date: "8 Nov 2025",
        description: "Pengumuman pemenang dan penyerahan hadiah",
      },
    ],
  },
  "design-poster": {
    name: "Design Poster",
    description:
      "Design eye-catching promotional posters that communicate effectively. Use your creativity with tools like Photoshop, Illustrator, or Canva.",
    fullDescription:
      "The Design Poster competition focuses on creating compelling visual communications. Participants will design promotional posters for various themes, demonstrating their ability to combine typography, imagery, and color theory to create impactful designs.",
    participants: "85+",
    duration: "2 days",
    prize: "$3,000",
    deadline: "March 12, 2024",
    grade: "SMP",
    icon: "🎨",
    requirements: [
      "Proficiency in design software (Photoshop, Illustrator, Canva)",
      "Understanding of typography and color theory",
      "Knowledge of composition and layout principles",
      "Ability to work with high-resolution graphics",
      "Creative thinking and conceptual skills",
    ],
    judging: [
      "Makna/Pesan Poster (40%)",
      "Teknik Pembuatan (20%)",
      "Presentasi Hasil Karya (30%)",
      "Kreativitas Penyampaian (10%)",
    ],
    timeline: [
      { phase: "Registration", date: "March 1-8", description: "Register and submit portfolio samples" },
      { phase: "Brief Release", date: "March 9", description: "Competition brief and themes announced" },
      { phase: "Competition", date: "March 12-13", description: "2 days of design creation" },
      { phase: "Judging", date: "March 14-15", description: "Design experts evaluate submissions" },
      { phase: "Results", date: "March 16", description: "Winners announced and exhibition opens" },
    ],
  },
  "design-maskot": {
    name: "Desain Maskot",
    description: "Buat maskot merek yang berkesan.",
    fullDescription:
      "Kompetisi Desain Maskot berfokus pada pembuatan karakter maskot yang kuat secara visual dan relevan dengan identitas merek.",
    participants: "100+",
    duration: "—",
    prize: "$3,000",
    deadline: "—",
    grade: "SMP",
    icon: "🦸",
    requirements: [
      "Kemampuan ilustrasi vektor/raster",
      "Pemahaman identitas merek",
      "Kreativitas dan konsistensi karakter",
    ],
    judging: [
      "Penjelasan Konsep Karya (30%)",
      "Filosofi Desain & Makna Warna (25%)",
      "Keterkaitan dengan Tema Kegiatan & Logo Sekolah (25%)",
      "Jawaban Atas Pertanyaan Juri (20%)",
    ],
    timeline: [
      { phase: "Pendaftaran - Gel. 1", date: "29 Sep 2025 – 13 Okt 2025", description: "" },
      { phase: "Pendaftaran - Gel. 2", date: "14 Okt 2025 – 22 Okt 2025", description: "" },
      { phase: "Technical Meeting", date: "4 Okt 2025", description: "" },
      { phase: "Pengumpulan Karya", date: "24 Okt 2025", description: "Pengumpulan serentak maksimal 18.00 WITA" },
      { phase: "Final", date: "26 Okt 2025", description: "" },
      { phase: "Puncak Acara & Penghargaan", date: "8 Nov 2025", description: "" },
    ],
  },
  "esport-ml": {
    name: "Esport Mobile legends",
    description: "Mobile Legends competitive gaming tournament. Form teams and compete in strategic MOBA gameplay.",
    fullDescription:
      "The Mobile Legends esports tournament brings together the best MOBA players in the region. Teams of 5 players will compete in intense strategic battles, showcasing their teamwork, individual skills, and game knowledge in this popular mobile game.",
    participants: "200+",
    duration: "1 day",
    prize: "$8,000",
    deadline: "March 10, 2024",
    grade: "SMP",
    icon: "🎮",
    requirements: [
      "Team of 5 players (+ 1 substitute allowed)",
      "All players must be rank Epic or above",
      "Stable internet connection for online matches",
      "Discord for team communication",
      "Updated Mobile Legends game version",
    ],
    judging: [
      "Tournament bracket elimination system",
      "Best of 3 matches in early rounds",
      "Best of 5 matches in finals",
      "Standard Mobile Legends tournament rules apply",
    ],
    timeline: [
      { phase: "Pendaftaran - Gel. 1", date: "29 Sep 2025 – 13 Okt 2025", description: "Pendaftaran tim" },
      { phase: "Pendaftaran - Gel. 2", date: "14 Okt 2025 – 26 Okt 2025", description: "Pendaftaran tim" },
      { phase: "Technical Meeting", date: "4 Okt 2025", description: "Briefing teknis turnamen" },
      { phase: "Babak Penyisihan", date: "29 Okt 2025", description: "Pertandingan penyisihan" },
      { phase: "Semifinal & Final", date: "1 Nov 2025", description: "Babak semifinal dan final" },
      { phase: "Puncak Acara & Penghargaan", date: "8 Nov 2025", description: "Pengumuman pemenang dan penghargaan" },
    ],
  },
  "esport-ff": {
    name: "Esport Free Fire",
    description: "Free Fire competitive gaming tournament. Form teams and compete in strategic battle royale gameplay.",
    fullDescription:
      "The Free Fire esports tournament brings together the best battle royale players in the region. Teams of 4 players will compete in intense strategic battles, showcasing their teamwork, individual skills, and game knowledge in this popular mobile game.",
    participants: "150+",
    duration: "1 day",
    prize: "$6,000",
    deadline: "March 11, 2024",
    grade: "SMP",
    icon: "🎮",
    requirements: [
      "Team of 4 players (+ 1 substitute allowed)",
      "All players must be rank Epic or above",
      "Stable internet connection for online matches",
      "Discord for team communication",
      "Updated Free Fire game version",
    ],
    judging: [
      "Tournament bracket elimination system",
      "Best of 3 matches in early rounds",
      "Best of 5 matches in finals",
      "Standard Free Fire tournament rules apply",
    ],
    timeline: [
      { phase: "Pendaftaran - Gel. 1", date: "29 Sep 2025 – 13 Okt 2025", description: "Pendaftaran tim" },
      { phase: "Pendaftaran - Gel. 2", date: "14 Okt 2025 – 26 Okt 2025", description: "Pendaftaran tim" },
      { phase: "Technical Meeting", date: "4 Okt 2025", description: "Briefing teknis turnamen" },
      { phase: "Babak Penyisihan", date: "29 Okt 2025", description: "Pertandingan penyisihan" },
      { phase: "Final", date: "1 Nov 2025", description: "Pertandingan final" },
      { phase: "Puncak Acara & Penghargaan", date: "8 Nov 2025", description: "Pengumuman pemenang dan penghargaan" },
    ],
  },
  "rumus-excel": {
    name: "Rumus Excel",
    description:
      "Master Excel formulas and functions. Solve complex data analysis problems using advanced Excel techniques.",
    fullDescription:
      "Kuasai rumus dan fungsi Excel. Selesaikan masalah analisis data kompleks menggunakan teknik Excel lanjutan.",
    participants: "100+",
    duration: "2 hours",
    prize: "$4,000",
    deadline: "—",
    grade: "SMP",
    icon: "📊",
    requirements: [
      "Basic knowledge of Excel",
      "Understanding of formulas and functions",
      "Ability to analyze data",
      "Stable internet connection",
      "Time management skills",
    ],
    judging: ["Ketepatan Penggunaan Tool dan Fitur", "Kerapian", "Kesesuaian"],
    timeline: [
      { phase: "Pendaftaran - Gel. 1", date: "29 Sep 2025 – 13 Okt 2025", description: "" },
      { phase: "Pendaftaran - Gel. 2", date: "14 Okt 2025 – 26 Okt 2025", description: "" },
      { phase: "Technical Meeting", date: "4 Okt 2025", description: "" },
      { phase: "Final", date: "27 Okt 2025", description: "" },
      { phase: "Puncak Acara & Penghargaan", date: "8 Nov 2025", description: "" },
    ],
  },
  "speed-typing": {
    name: "Speed Typing",
    description: "Test your typing speed and accuracy in a fast-paced competition.",
    fullDescription:
      "The Speed Typing competition challenges participants to type as quickly and accurately as possible. You'll be tested on your ability to type complex sentences and navigate through different text formats.",
    participants: "150+",
    duration: "30 minutes",
    prize: "$2,000",
    deadline: "—",
    grade: "SMP",
    icon: "⌨️",
    requirements: [
      "Basic typing skills",
      "Comfort with keyboard layout",
      "Focus and concentration",
      "Stable internet connection",
      "Time management skills",
    ],
    judging: ["Word Per Minute (40%)", "Akurasi (30%)", "Konsistensi (20%)", "Kesalahan dan Benar Kata (10%)"],
    timeline: [
      { phase: "Pendaftaran - Gel. 1", date: "29 Sep 2025 – 13 Okt 2025", description: "" },
      { phase: "Pendaftaran - Gel. 2", date: "14 Okt 2025 – 26 Okt 2025", description: "" },
      { phase: "Technical Meeting", date: "4 Okt 2025", description: "" },
      { phase: "Hari Lomba", date: "27 Okt 2025", description: "" },
      { phase: "Puncak Acara & Penghargaan", date: "8 Nov 2025", description: "" },
    ],
  },
}

const getGradeColor = (Grade: string) => {
  switch (Grade) {
    case "SMP":
      return "text-orange-300 bg-orange-500/20"
    case "SMA/SMK":
      return "text-red-300 bg-red-500/20"
    default:
      return "text-gray-300 bg-gray-500/20"
  }
}

export default function CompetitionDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const competition = competitionData[params.slug as keyof typeof competitionData]

  if (!competition) {
    notFound()
  }

  return (
    <main className="min-h-screen py-12 sm:py-16 lg:py-20 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/competitions"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 sm:mb-6 lg:mb-8 transition-colors text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Kompetisi
        </Link>

        {/* Header */}
        <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6 lg:mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl lg:text-3xl flex-shrink-0 mx-auto sm:mx-0">
              {competition.icon}
            </div>
            <div className="flex-1 text-center sm:text-left w-full min-w-0">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between mb-3 sm:mb-4 gap-2 sm:gap-4">
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-balance leading-tight">
                  {competition.name}
                </h1>
                <span
                  className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex-shrink-0 ${getGradeColor(
                    competition.grade,
                  )}`}
                >
                  {competition.grade}
                </span>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-white/70 mb-4 sm:mb-6 text-pretty leading-relaxed">
                {competition.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Description */}
            <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                Tentang Kompetisi Ini
              </h2>
              <p className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed text-pretty">
                {competition.fullDescription}
              </p>
            </div>

            {/* Requirements */}
            <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                Persyaratan
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {competition.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3 text-white/70 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-pretty">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Judging Criteria */}
            <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                Kriteria Penilaian
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {competition.judging.map((criteria, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3 text-white/70 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-pretty">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Registration CTA */}
            <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Siap Berkompetisi?</h3>
              <p className="text-white/70 mb-4 sm:mb-6 text-sm sm:text-base text-pretty">
                Bergabunglah dengan kompetisi menarik ini dan tunjukkan kemampuan Anda!
              </p>
              <Link
                href={`/competition/${params.slug}/register`}
                className="glass-button w-full py-3 sm:py-4 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 block text-center text-sm sm:text-base"
              >
                Daftar Sekarang
              </Link>
            </div>

            {/* Timeline */}
            <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Timeline</h3>
              <div className="space-y-3 sm:space-y-4">
                {competition.timeline.map((phase, index) => (
                  <div key={index} className="border-l-2 border-purple-400 pl-3 sm:pl-4">
                    <h4 className="font-semibold text-white text-sm sm:text-base">{phase.phase}</h4>
                    <p className="text-xs sm:text-sm text-purple-300 mb-1">{phase.date}</p>
                    <p className="text-xs sm:text-sm text-white/60 text-pretty">{phase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}