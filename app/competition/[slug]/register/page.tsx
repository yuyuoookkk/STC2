"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, User, Trophy, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { EsportsRegistrationForm } from "@/components/esports-registration-form"
import { SpecializedRegistrationForm } from "@/components/specialized-registration-form"

const competitionNames = {
  "web-design": "Web Design",
  "design-poster": "Design Poster",
  "design-maskot": "Design Maskot",
  "esport-ml": "Esport Mobile Legends",
  "esport-ff": "Esport Free Fire",
  "rumus-excel": "Rumus Excel",
  "speed-typing": "Speed Typing",
}

const specializedCompetitions: string[] = [
  "web-design",
  "design-poster",
  "design-maskot",
  "speed-typing",
  "rumus-excel",
]

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  gender: string
  experience: string
  teamName?: string
  teamMembers?: string
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "",
  experience: "",
  teamName: "",
  teamMembers: "",
}

export default function CompetitionRegisterPage({ params }: { params: { slug: string } }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const competitionName = competitionNames[params.slug as keyof typeof competitionNames] || "Kompetisi"
  const isTeamCompetition = params.slug === "esport-ml" || params.slug === "esport-ff"

  const isEsports = params.slug === "esport-ml" || params.slug === "esport-ff"
  if (isEsports) {
    return (
      <main className="min-h-screen py-8 sm:py-12 lg:py-20 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/competition/${params.slug}`}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 sm:mb-6 lg:mb-8 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke {competitionName}
          </Link>

          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3 lg:mb-4">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
              <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-balance text-white">
                Daftar untuk {competitionName}
              </h1>
            </div>
            <p className="text-white/80 text-sm sm:text-base lg:text-lg px-2 mb-3 sm:mb-4">
              Lengkapi pendaftaran tim Anda untuk kompetisi Esport ini.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/70">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>15-17 oktober 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>SMKTIBaliGlobal Jimbaran</span>
              </div>
            </div>
          </div>

          <EsportsRegistrationForm competition={params.slug as "esport-ml" | "esport-ff"} />
        </div>
      </main>
    )
  }

  const requiresSpecializedForm = specializedCompetitions.includes(params.slug)
  if (requiresSpecializedForm) {
    return (
      <main className="min-h-screen py-8 sm:py-12 lg:py-20 px-3 sm:px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href={`/competition/${params.slug}`}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 sm:mb-6 lg:mb-8 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke {competitionName}
          </Link>

          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3 lg:mb-4">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
              <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-balance text-white">
                Daftar untuk {competitionName}
              </h1>
            </div>
            <p className="text-white/80 text-sm sm:text-base lg:text-lg px-2 mb-3 sm:mb-4">
              Lengkapi formulir pendaftaran dengan dokumen yang diperlukan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/70">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>15-17 oktober 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>SMKTIBaliGlobal Jimbaran</span>
              </div>
            </div>
          </div>

          <SpecializedRegistrationForm competitionSlug={params.slug} />
        </div>
      </main>
    )
  }

  const steps = [
    { number: 1, title: "Informasi Pribadi", icon: User },
    { number: 2, title: "Detail Kompetisi", icon: Trophy },
    { number: 3, title: "Tinjau & Kirim", icon: CheckCircle },
  ]

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen py-12 sm:py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href={`/competition/${params.slug}`}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 sm:mb-8 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke {competitionName}
          </Link>

          <Card className="text-center glass-card border-white/30">
            <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-6">
              <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-3 sm:mb-4" />
              <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">Pendaftaran Berhasil!</h2>
              <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
                Terima kasih telah mendaftar untuk {competitionName}. Anda akan menerima email konfirmasi segera dengan
                detail lebih lanjut.
              </p>
              <Badge variant="secondary" className="text-xs sm:text-sm glass bg-white/20 text-white border-white/30">
                ID Pendaftaran: #{params.slug.toUpperCase()}
                {Math.random().toString(36).substr(2, 9).toUpperCase()}
              </Badge>
            </CardContent>
          </Card>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen py-8 sm:py-12 lg:py-20 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href={`/competition/${params.slug}`}
          className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-4 sm:mb-6 lg:mb-8 transition-colors text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke {competitionName}
        </Link>

        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3 lg:mb-4">
            <Trophy className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
            <h1 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-balance text-white">
              Daftar untuk {competitionName}
            </h1>
          </div>
          <p className="text-white/80 text-sm sm:text-base lg:text-lg px-2 mb-3 sm:mb-4">
            Lengkapi pendaftaran Anda untuk berpartisipasi dalam kompetisi yang menarik ini.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-white/70">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>15-17 oktober 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>SMKTIBaliGlobal Jimbaran</span>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-4 sm:mb-6 lg:mb-8 relative px-1 sm:px-2">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isActive = currentStep === step.number
            const isCompleted = currentStep > step.number

            return (
              <div key={step.number} className="flex flex-col items-center flex-1 relative">
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mb-1 sm:mb-2 transition-all duration-300 ${
                    isCompleted
                      ? "glass-button bg-white/30 text-white border-white/40"
                      : isActive
                        ? "glass-button bg-white/25 text-white border-white/40"
                        : "glass bg-white/10 text-white/60 border-white/20"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  ) : (
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  )}
                </div>
                <span
                  className={`text-xs sm:text-sm font-medium text-center px-1 leading-tight max-w-20 sm:max-w-none ${isActive ? "text-white" : "text-white/70"}`}
                >
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div
                    className={`absolute top-4 sm:top-5 lg:top-6 left-1/2 w-full h-0.5 -z-10 ${isCompleted ? "bg-white/40" : "bg-white/20"}`}
                    style={{ transform: "translateX(50%)" }}
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* Form Content */}
        <Card className="glass-card border-white/30">
          <CardHeader className="pb-3 sm:pb-4 lg:pb-6 px-3 sm:px-6">
            <CardTitle className="flex items-center gap-2 text-white text-sm sm:text-base lg:text-lg xl:text-xl">
              <span className="bg-white/20 text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border border-white/30">
                {currentStep}
              </span>
              {steps[currentStep - 1].title}
            </CardTitle>
            <CardDescription className="text-white/80 text-xs sm:text-sm lg:text-base">
              {currentStep === 1 && "Silakan berikan informasi pribadi dasar Anda"}
              {currentStep === 2 && `Detail spesifik untuk pendaftaran ${competitionName}`}
              {currentStep === 3 && "Tinjau informasi Anda sebelum mengirim"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 lg:space-y-6 px-3 sm:px-6">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white text-xs sm:text-sm">
                    Nama Depan *
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="Masukkan nama depan Anda"
                    className="glass border-white/30 text-white placeholder:text-white/60 text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white text-xs sm:text-sm">
                    Nama Belakang *
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Masukkan nama belakang Anda"
                    className="glass border-white/30 text-white placeholder:text-white/60 text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white text-xs sm:text-sm">
                    Alamat Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Masukkan alamat email Anda"
                    className="glass border-white/30 text-white placeholder:text-white/60 text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white text-xs sm:text-sm">
                    Nomor Telepon *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Masukkan nomor telepon Anda"
                    className="glass border-white/30 text-white placeholder:text-white/60 text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth" className="text-white text-xs sm:text-sm">
                    Tanggal Lahir *
                  </Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                    className="glass border-white/30 text-white text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-white text-xs sm:text-sm">
                    Jenis Kelamin *
                  </Label>
                  <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                    <SelectTrigger className="glass border-white/30 text-white text-sm sm:text-base h-10 sm:h-11">
                      <SelectValue placeholder="Pilih jenis kelamin" />
                    </SelectTrigger>
                    <SelectContent className="glass-card border-white/30">
                      <SelectItem value="male">Laki-laki</SelectItem>
                      <SelectItem value="female">Perempuan</SelectItem>
                      <SelectItem value="other">Lainnya</SelectItem>
                      <SelectItem value="prefer-not-to-say">Lebih baik tidak disebutkan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 2: Competition Details */}
            {currentStep === 2 && (
              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-white text-xs sm:text-sm">
                    Tingkat Pengalaman *
                  </Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger className="glass border-white/30 text-white text-sm sm:text-base h-10 sm:h-11">
                      <SelectValue placeholder="Pilih tingkat pengalaman Anda" />
                    </SelectTrigger>
                    <SelectContent className="glass-card border-white/30">
                      <SelectItem value="beginner">Pemula (0-1 tahun)</SelectItem>
                      <SelectItem value="intermediate">Menengah (2-5 tahun)</SelectItem>
                      <SelectItem value="advanced">Lanjutan (5+ tahun)</SelectItem>
                      <SelectItem value="professional">Profesional/Ahli</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Team fields for esports competitions */}
                {isTeamCompetition && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="teamName" className="text-white text-xs sm:text-sm">
                        Nama Tim *
                      </Label>
                      <Input
                        id="teamName"
                        value={formData.teamName}
                        onChange={(e) => handleInputChange("teamName", e.target.value)}
                        placeholder="Masukkan nama tim Anda"
                        className="glass border-white/30 text-white placeholder:text-white/60 text-sm sm:text-base h-10 sm:h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teamMembers" className="text-white text-xs sm:text-sm">
                        Anggota Tim (Nama dan Info Kontak) *
                      </Label>
                      <Textarea
                        id="teamMembers"
                        value={formData.teamMembers}
                        onChange={(e) => handleInputChange("teamMembers", e.target.value)}
                        placeholder="Daftarkan semua anggota tim dengan nama dan informasi kontak mereka"
                        rows={4}
                        className="glass border-white/30 text-white placeholder:text-white/60 text-sm sm:text-base"
                      />
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Step 3: Review */}
            {currentStep === 3 && (
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h3 className="font-semibold mb-2 sm:mb-3 text-white text-sm sm:text-base">Informasi Pribadi</h3>
                    <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                      <p className="text-white">
                        <span className="text-white/70">Nama:</span> {formData.firstName} {formData.lastName}
                      </p>
                      <p className="text-white">
                        <span className="text-white/70">Email:</span> {formData.email}
                      </p>
                      <p className="text-white">
                        <span className="text-white/70">Telepon:</span> {formData.phone}
                      </p>
                      <p className="text-white">
                        <span className="text-white/70">Tanggal Lahir:</span> {formData.dateOfBirth}
                      </p>
                      <p className="text-white">
                        <span className="text-white/70">Jenis Kelamin:</span> {formData.gender}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 sm:mb-3 text-white text-sm sm:text-base">Detail Kompetisi</h3>
                    <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                      <p className="text-white">
                        <span className="text-white/70">Kompetisi:</span> {competitionName}
                      </p>
                      <p className="text-white">
                        <span className="text-white/70">Pengalaman:</span> {formData.experience}
                      </p>
                      {isTeamCompetition && (
                        <>
                          <p className="text-white">
                            <span className="text-white/70">Nama Tim:</span> {formData.teamName}
                          </p>
                          <p className="text-white">
                            <span className="text-white/70">Anggota Tim:</span> {formData.teamMembers}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 lg:pt-6 border-t border-white/20">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="glass-button border-white/30 text-white hover:text-gray-900 bg-transparent order-2 sm:order-1 text-sm sm:text-base py-2 sm:py-3 h-10 sm:h-11"
              >
                Sebelumnya
              </Button>

              {currentStep < 3 ? (
                <Button
                  onClick={handleNext}
                  className="glass-button bg-white/20 hover:bg-white/30 text-white border-white/30 order-1 sm:order-2 text-sm sm:text-base py-2 sm:py-3 h-10 sm:h-11"
                >
                  Langkah Selanjutnya
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="glass-button bg-white/20 hover:bg-white/30 text-white border-white/30 order-1 sm:order-2 text-sm sm:text-base py-2 sm:py-3 h-10 sm:h-11"
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pendaftaran"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
