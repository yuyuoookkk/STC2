"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, User, Upload, FileText } from "lucide-react"

interface SpecializedFormData {
  namaLengkap: string
  nisn: string
  asalSekolah: string
  noHandphone: string
  lombaYangDiikuti: string // Added competition field
  buktiKartuPelajar: File | null
  buktiTwibbon: File | null
  buktiPembayaran: File | null
  buktiFollow: File | null
}

const initialFormData: SpecializedFormData = {
  namaLengkap: "",
  nisn: "",
  asalSekolah: "",
  noHandphone: "",
  lombaYangDiikuti: "", // Added initial value for competition field
  buktiKartuPelajar: null,
  buktiTwibbon: null,
  buktiPembayaran: null,
  buktiFollow: null,
}

const competitionOptions = [
  { value: "webdesign", label: "Web Design" },
  { value: "rumus-excel", label: "Rumus Excel" },
  { value: "design-maskot", label: "Design Maskot" },
  { value: "design-poster", label: "Design Poster" },
  { value: "speed-typing", label: "Speed Typing" },
]

const allowedCompetitions = [
  "web-design",
  "speed-typing",
  "rumus-excel",
  "design-maskot",
  "digital-art",
  "design-poster",
]

interface SpecializedRegistrationFormProps {
  competitionSlug?: string
}

export function SpecializedRegistrationForm({ competitionSlug }: SpecializedRegistrationFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<SpecializedFormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Check if this competition requires the specialized form
  const requiresSpecializedForm = competitionSlug && allowedCompetitions.includes(competitionSlug)

  const steps = [
    { number: 1, title: "Informasi Pribadi", icon: User },
    { number: 2, title: "Upload Dokumen", icon: Upload },
    { number: 3, title: "Tinjau & Kirim", icon: CheckCircle },
  ]

  const handleInputChange = (field: keyof SpecializedFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (field: keyof SpecializedFormData, file: File | null) => {
    setFormData((prev) => ({ ...prev, [field]: file }))
  }

  const checkStep = (step: number): { valid: boolean; errors: Record<string, string> } => {
    const e: Record<string, string> = {}

    if (step === 1) {
      if (!formData.namaLengkap.trim()) e.namaLengkap = "Nama lengkap wajib diisi"
      if (!formData.nisn.trim()) e.nisn = "NISN wajib diisi"
      if (!formData.asalSekolah.trim()) e.asalSekolah = "Asal sekolah wajib diisi"
      if (!formData.noHandphone.trim()) e.noHandphone = "No handphone wajib diisi"
      if (!formData.lombaYangDiikuti.trim()) e.lombaYangDiikuti = "Lomba yang diikuti wajib dipilih" // Added validation for competition field
    }

    if (step === 2) {
      if (!formData.buktiKartuPelajar) e.buktiKartuPelajar = "Bukti kartu pelajar wajib diupload"
      if (!formData.buktiTwibbon) e.buktiTwibbon = "Bukti twibbon wajib diupload"
      if (!formData.buktiPembayaran) e.buktiPembayaran = "Bukti pembayaran wajib diupload"
      if (!formData.buktiFollow) e.buktiFollow = "Bukti follow wajib diupload"
    }

    return { valid: Object.keys(e).length === 0, errors: e }
  }

  const handleNext = () => {
    const { valid, errors: stepErrors } = checkStep(currentStep)
    if (!valid) {
      setErrors(stepErrors)
      return
    }
    setErrors({})
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

  if (!requiresSpecializedForm) {
    return null // Return null if this competition doesn't require specialized form
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4">
        <Card className="text-center glass-card border-white/30">
          <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8 px-4 sm:px-6">
            <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-3 sm:mb-4" />
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">Pendaftaran Berhasil!</h2>
            <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
              Terima kasih telah mendaftar untuk STC. Anda akan menerima email konfirmasi segera dengan detail lebih
              lanjut.
            </p>
            <Badge variant="secondary" className="text-xs sm:text-sm glass bg-white/20 text-white border-white/30">
              ID Pendaftaran: #STC{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </Badge>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Stepper stays as the first visible element */}
      <div className="flex justify-between mb-6 sm:mb-8 relative px-2">
        {steps.map((step, index) => {
          const Icon = step.icon
          const isActive = currentStep === step.number
          const isCompleted = currentStep > step.number

          return (
            <div key={step.number} className="flex flex-col items-center flex-1 relative">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-1 sm:mb-2 transition-all duration-300 ${
                  isCompleted
                    ? "glass-button bg-white/30 text-white border-white/40"
                    : isActive
                      ? "glass-button bg-white/25 text-white border-white/40"
                      : "glass bg-white/10 text-white/60 border-white/20"
                }`}
              >
                {isCompleted ? (
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                ) : (
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                )}
              </div>
              <span
                className={`text-xs sm:text-sm font-medium text-center px-1 leading-tight ${isActive ? "text-white" : "text-white/70"}`}
              >
                {step.title}
              </span>
              {index === 0 && (
                <div
                  className={`absolute top-4 sm:top-5 md:top-6 left-1/2 w-full h-0.5 -z-10 ${
                    isCompleted ? "bg-white/40" : "bg-white/20"
                  }`}
                  style={{ transform: "translateX(50%)" }}
                />
              )}
            </div>
          )
        })}
      </div>

      <Card className="glass-card border-white/30">
        <CardHeader className="pb-4 sm:pb-6">
          <CardTitle className="flex items-center gap-2 text-white text-base sm:text-lg md:text-xl">
            <span className="bg-white/20 text-white w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border border-white/30">
              {currentStep}
            </span>
            {steps[currentStep - 1].title}
          </CardTitle>
          <CardDescription className="text-white/80 text-xs sm:text-sm md:text-base">
            {currentStep === 1 && "Silakan berikan informasi pribadi lengkap Anda"}
            {currentStep === 2 && "Upload dokumen yang diperlukan"}
            {currentStep === 3 && "Tinjau informasi Anda sebelum mengirim"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="namaLengkap" className="text-white text-sm">
                  Nama Lengkap *
                </Label>
                <Input
                  id="namaLengkap"
                  value={formData.namaLengkap}
                  onChange={(e) => handleInputChange("namaLengkap", e.target.value)}
                  placeholder="Masukkan nama lengkap Anda"
                  className="glass border-white/30 text-white placeholder:text-white/60 text-sm sm:text-base bg-background"
                  aria-invalid={Boolean(errors.namaLengkap)}
                />
                {errors.namaLengkap && <p className="text-red-300 text-xs">{errors.namaLengkap}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="nisn" className="text-white text-sm">
                  NISN *
                </Label>
                <Input
                  id="nisn"
                  value={formData.nisn}
                  onChange={(e) => handleInputChange("nisn", e.target.value)}
                  placeholder="Masukkan NISN Anda"
                  className="glass border-white/30 text-white placeholder:text-white/60 text-sm sm:text-base bg-background"
                  aria-invalid={Boolean(errors.nisn)}
                />
                {errors.nisn && <p className="text-red-300 text-xs">{errors.nisn}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="asalSekolah" className="text-white text-sm">
                  Asal Sekolah *
                </Label>
                <Input
                  id="asalSekolah"
                  value={formData.asalSekolah}
                  onChange={(e) => handleInputChange("asalSekolah", e.target.value)}
                  placeholder="Masukkan nama sekolah Anda"
                  className="glass border-white/30 text-white placeholder:text-white/60 text-sm sm:text-base bg-background"
                  aria-invalid={Boolean(errors.asalSekolah)}
                />
                {errors.asalSekolah && <p className="text-red-300 text-xs">{errors.asalSekolah}</p>}
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="noHandphone" className="text-white text-sm">
                  No Handphone/WhatsApp *
                </Label>
                <Input
                  id="noHandphone"
                  type="tel"
                  value={formData.noHandphone}
                  onChange={(e) => handleInputChange("noHandphone", e.target.value)}
                  placeholder="Masukkan nomor handphone/WhatsApp Anda"
                  className="glass border-white/30 text-white placeholder:text-white/60 text-sm sm:text-base bg-background"
                  aria-invalid={Boolean(errors.noHandphone)}
                />
                {errors.noHandphone && <p className="text-red-300 text-xs">{errors.noHandphone}</p>}
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="lombaYangDiikuti" className="text-white text-sm">
                  Lomba yang Diikuti *
                </Label>
                <Select
                  value={formData.lombaYangDiikuti}
                  onValueChange={(value) => handleInputChange("lombaYangDiikuti", value)}
                >
                  <SelectTrigger className="glass border-white/30 text-white bg-background">
                    <SelectValue placeholder="Pilih lomba yang diikuti" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-white/30">
                    {competitionOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value} className="text-foreground hover:bg-accent">
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.lombaYangDiikuti && <p className="text-red-300 text-xs">{errors.lombaYangDiikuti}</p>}
              </div>
            </div>
          )}

          {/* Step 2: Document Upload */}
          {currentStep === 2 && (
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="buktiKartuPelajar" className="text-white text-sm">
                  Bukti Kartu Pelajar/Surat Keterangan Kepala Sekolah *
                </Label>
                <div className="glass border-white/30 border-2 border-dashed rounded-lg p-4 text-center">
                  <FileText className="w-8 h-8 text-white/60 mx-auto mb-2" />
                  <Input
                    id="buktiKartuPelajar"
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => handleFileChange("buktiKartuPelajar", e.target.files?.[0] || null)}
                    className="hidden"
                    aria-invalid={Boolean(errors.buktiKartuPelajar)}
                  />
                  <Label htmlFor="buktiKartuPelajar" className="cursor-pointer">
                    <span className="text-white/80 text-sm">
                      {formData.buktiKartuPelajar ? formData.buktiKartuPelajar.name : "Klik untuk upload file"}
                    </span>
                    <p className="text-white/60 text-xs mt-1">Format: JPG, PNG, PDF (Max 5MB)</p>
                  </Label>
                </div>
                {errors.buktiKartuPelajar && <p className="text-red-300 text-xs">{errors.buktiKartuPelajar}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="buktiTwibbon" className="text-white text-sm">
                  Bukti Upload Twibbon *
                </Label>
                <div className="glass border-white/30 border-2 border-dashed rounded-lg p-4 text-center">
                  <FileText className="w-8 h-8 text-white/60 mx-auto mb-2" />
                  <Input
                    id="buktiTwibbon"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange("buktiTwibbon", e.target.files?.[0] || null)}
                    className="hidden"
                    aria-invalid={Boolean(errors.buktiTwibbon)}
                  />
                  <Label htmlFor="buktiTwibbon" className="cursor-pointer">
                    <span className="text-white/80 text-sm">
                      {formData.buktiTwibbon ? formData.buktiTwibbon.name : "Klik untuk upload screenshot twibbon"}
                    </span>
                    <p className="text-white/60 text-xs mt-1">Format: JPG, PNG (Max 5MB)</p>
                  </Label>
                </div>
                {errors.buktiTwibbon && <p className="text-red-300 text-xs">{errors.buktiTwibbon}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="buktiPembayaran" className="text-white text-sm">
                  Bukti Pembayaran *
                </Label>
                <div className="glass border-white/30 border-2 border-dashed rounded-lg p-4 text-center">
                  <FileText className="w-8 h-8 text-white/60 mx-auto mb-2" />
                  <Input
                    id="buktiPembayaran"
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => handleFileChange("buktiPembayaran", e.target.files?.[0] || null)}
                    className="hidden"
                    aria-invalid={Boolean(errors.buktiPembayaran)}
                  />
                  <Label htmlFor="buktiPembayaran" className="cursor-pointer">
                    <span className="text-white/80 text-sm">
                      {formData.buktiPembayaran ? formData.buktiPembayaran.name : "Klik untuk upload bukti pembayaran"}
                    </span>
                    <p className="text-white/60 text-xs mt-1">Format: JPG, PNG, PDF (Max 5MB)</p>
                  </Label>
                </div>
                {errors.buktiPembayaran && <p className="text-red-300 text-xs">{errors.buktiPembayaran}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="buktiFollow" className="text-white text-sm">
                  Bukti Follow *
                </Label>
                <div className="glass border-white/30 border-2 border-dashed rounded-lg p-4 text-center">
                  <FileText className="w-8 h-8 text-white/60 mx-auto mb-2" />
                  <Input
                    id="buktiFollow"
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => handleFileChange("buktiFollow", e.target.files?.[0] || null)}
                    className="hidden"
                    aria-invalid={Boolean(errors.buktiFollow)}
                  />
                  <Label htmlFor="buktiFollow" className="cursor-pointer">
                    <span className="text-white/80 text-sm">
                      {formData.buktiFollow ? formData.buktiFollow.name : "Klik untuk upload bukti pembayaran"}
                    </span>
                    <p className="text-white/60 text-xs mt-1">Format: JPG, PNG, PDF (Max 5MB)</p>
                  </Label>
                </div>
                {errors.buktiFollow && <p className="text-red-300 text-xs">{errors.buktiFollow}</p>}
              </div>
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
                      <span className="text-white/70">Nama Lengkap:</span> {formData.namaLengkap}
                    </p>
                    <p className="text-white">
                      <span className="text-white/70">NISN:</span> {formData.nisn}
                    </p>
                    <p className="text-white">
                      <span className="text-white/70">Asal Sekolah:</span> {formData.asalSekolah}
                    </p>
                    <p className="text-white">
                      <span className="text-white/70">No Handphone:</span> {formData.noHandphone}
                    </p>
                    <p className="text-white">
                      <span className="text-white/70">Lomba yang Diikuti:</span>{" "}
                      {competitionOptions.find((opt) => opt.value === formData.lombaYangDiikuti)?.label ||
                        formData.lombaYangDiikuti}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 sm:mb-3 text-white text-sm sm:text-base">Dokumen Terupload</h3>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <p className="text-white">
                    <span className="text-white/70">Kartu Pelajar:</span>{" "}
                    {formData.buktiKartuPelajar?.name || "Belum diupload"}
                  </p>
                  <p className="text-white">
                    <span className="text-white/70">Twibbon:</span> {formData.buktiTwibbon?.name || "Belum diupload"}
                  </p>
                  <p className="text-white">
                    <span className="text-white/70">Pembayaran:</span>{" "}
                    {formData.buktiPembayaran?.name || "Belum diupload"}
                  </p>
                  <p className="text-white">
                    <span className="text-white/70">Follow:</span> {formData.buktiFollow?.name || "Belum diupload"}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/20">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="glass-button border-white/30 text-white hover:text-gray-900 bg-transparent order-2 sm:order-1 text-sm sm:text-base py-2 sm:py-3"
            >
              Sebelumnya
            </Button>

            {currentStep < 3 ? (
              <Button
                onClick={handleNext}
                disabled={!checkStep(currentStep).valid}
                className="glass-button bg-white/20 hover:bg-white/30 text-white border-white/30 order-1 sm:order-2 text-sm sm:text-base py-2 sm:py-3"
              >
                Langkah Selanjutnya
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="glass-button bg-white/20 hover:bg-white/30 text-white border-white/30 order-1 sm:order-2 text-sm sm:text-base py-2 sm:py-3"
              >
                {isSubmitting ? "Mengirim..." : "Kirim Pendaftaran"}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}