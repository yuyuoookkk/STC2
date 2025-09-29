"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type CompetitionSlug = "esport-ml" | "esport-ff"

type Player = {
  fullName: string
  nisn: string
  phone: string
  nickname: string
  gameId: string
  studentCard?: File | null
}

type FormState = {
  teamName: string
  school: string
  lombaYangDiikuti: string
  players: Player[]
  buktiTwibbon?: File | null
  buktiPembayaran?: File | null
  buktiFollow?: File | null
}

type Errors = {
  teamName?: string
  school?: string
  lombaYangDiikuti?: string
  players?: Array<Partial<Record<keyof Player, string>>>
  buktiTwibbon?: string
  buktiPembayaran?: string
  buktiFollow?: string
}

function required(value: string) {
  return value.trim().length > 0
}

function PlayerFields({
  index,
  roleLabel,
  data,
  onChange,
  errors,
  requiredAll,
  onFileChange,
}: {
  index: number
  roleLabel: string
  data: Player
  onChange: (patch: Partial<Player>) => void
  errors?: Partial<Record<keyof Player, string>>
  requiredAll: boolean
  onFileChange: (file: File | null) => void
}) {
  const req = requiredAll

  return (
    <div className="rounded-lg border bg-card text-card-foreground p-4 md:p-6">
      <div className="mb-4">
        <h3 className="font-semibold text-base md:text-lg text-foreground">
          {`Data Diri Anggota ${index + 1}`} {roleLabel ? `(${roleLabel})` : null}
        </h3>
        <p className="text-muted-foreground text-sm">Isi data dengan benar sesuai identitas.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor={`fullName-${index}`}>
            Nama Lengkap{" "}
            {req && (
              <span aria-hidden="true" className="text-destructive">
                *
              </span>
            )}
          </Label>
          <Input
            id={`fullName-${index}`}
            value={data.fullName}
            onChange={(e) => onChange({ fullName: e.target.value })}
            aria-invalid={!!errors?.fullName}
          />
          {errors?.fullName && <p className="text-destructive text-sm">{errors.fullName}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor={`nisn-${index}`}>
            NISN{" "}
            {req && (
              <span aria-hidden="true" className="text-destructive">
                *
              </span>
            )}
          </Label>
          <Input
            id={`nisn-${index}`}
            value={data.nisn}
            onChange={(e) => onChange({ nisn: e.target.value })}
            aria-invalid={!!errors?.nisn}
          />
          {errors?.nisn && <p className="text-destructive text-sm">{errors.nisn}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor={`phone-${index}`}>
            Nomor HP{" "}
            {req && (
              <span aria-hidden="true" className="text-destructive">
                *
              </span>
            )}
          </Label>
          <Input
            id={`phone-${index}`}
            value={data.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            aria-invalid={!!errors?.phone}
          />
          {errors?.phone && <p className="text-destructive text-sm">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor={`nickname-${index}`}>
            Nickname In Game{" "}
            {req && (
              <span aria-hidden="true" className="text-destructive">
                *
              </span>
            )}
          </Label>
          <Input
            id={`nickname-${index}`}
            value={data.nickname}
            onChange={(e) => onChange({ nickname: e.target.value })}
            aria-invalid={!!errors?.nickname}
          />
          {errors?.nickname && <p className="text-destructive text-sm">{errors.nickname}</p>}
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor={`gameId-${index}`}>
            ID (User/Player){" "}
            {req && (
              <span aria-hidden="true" className="text-destructive">
                *
              </span>
            )}
          </Label>
          <Input
            id={`gameId-${index}`}
            value={data.gameId}
            onChange={(e) => onChange({ gameId: e.target.value })}
            aria-invalid={!!errors?.gameId}
          />
          {errors?.gameId && <p className="text-destructive text-sm">{errors.gameId}</p>}
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor={`studentCard-${index}`}>
            Bukti Kartu Pelajar / Surat Keterangan Kepala Sekolah{" "}
            <span aria-hidden="true" className="text-destructive">
              *
            </span>
          </Label>
          <Input
            id={`studentCard-${index}`}
            type="file"
            accept="image/*,.pdf"
            onChange={(e) => onFileChange(e.target.files?.[0] || null)}
            aria-invalid={!!errors?.studentCard}
          />
          {errors?.studentCard && <p className="text-destructive text-sm">{errors.studentCard}</p>}
          {!errors?.studentCard && data.studentCard && (
            <p className="text-muted-foreground text-xs">Dipilih: {data.studentCard.name}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export function EsportsRegistrationForm({ competition }: { competition: CompetitionSlug }) {
  const playerCount = competition === "esport-ml" ? 5 : 4
  const competitionName = competition === "esport-ml" ? "Esport Mobile Legends" : "Esport Free Fire"

  const initialPlayers = useMemo<Player[]>(
    () =>
      Array.from({ length: playerCount }).map(() => ({
        fullName: "",
        nisn: "",
        phone: "",
        nickname: "",
        gameId: "",
        studentCard: null,
      })),
    [playerCount],
  )

  const [form, setForm] = useState<FormState>({
    teamName: "",
    school: "",
    lombaYangDiikuti: "",
    players: initialPlayers,
    buktiTwibbon: null,
    buktiPembayaran: null,
    buktiFollow: null,
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function updatePlayer(index: number, patch: Partial<Player>) {
    setForm((prev) => {
      const nextPlayers = [...prev.players]
      nextPlayers[index] = { ...nextPlayers[index], ...patch }
      return { ...prev, players: nextPlayers }
    })
  }

  type DocKey = "buktiTwibbon" | "buktiPembayaran" | "buktiFollow"

  function handleFileChange(key: DocKey, file: File | null) {
    setErrors((prev) => ({ ...prev, [key]: undefined }))

    if (!file) {
      setForm((prev) => ({ ...prev, [key]: null }))
      return
    }

    const maxSize = 5 * 1024 * 1024 // 5MB
    const isImage = file.type.startsWith("image/")
    const isPdf = file.type === "application/pdf"

    const allowPdf = key !== "buktiTwibbon"
    const isAllowedType = allowPdf ? isImage || isPdf : isImage

    if (!isAllowedType) {
      const msg =
        key === "buktiTwibbon"
          ? "Hanya gambar (JPG/PNG) yang diperbolehkan."
          : "Hanya gambar (JPG/PNG) atau PDF yang diperbolehkan."
      setErrors((prev) => ({ ...prev, [key]: msg }))
      setForm((prev) => ({ ...prev, [key]: null }))
      return
    }

    if (file.size > maxSize) {
      setErrors((prev) => ({ ...prev, [key]: "Ukuran file melebihi 5MB." }))
      setForm((prev) => ({ ...prev, [key]: null }))
      return
    }

    setForm((prev) => ({ ...prev, [key]: file }))
  }

  function handlePlayerFileChange(index: number, file: File | null) {
    setErrors((prev) => {
      const nextPlayers = [...(prev.players || Array.from({ length: form.players.length }).map(() => ({})))]
      if (!file) {
        nextPlayers[index] = { ...(nextPlayers[index] || {}), studentCard: "Bukti kartu pelajar wajib diunggah." }
        return { ...prev, players: nextPlayers }
      }
      const maxSize = 5 * 1024 * 1024
      const isImage = file.type.startsWith("image/")
      const isPdf = file.type === "application/pdf"
      if (!(isImage || isPdf)) {
        nextPlayers[index] = {
          ...(nextPlayers[index] || {}),
          studentCard: "Hanya gambar (JPG/PNG) atau PDF yang diperbolehkan.",
        }
        return { ...prev, players: nextPlayers }
      }
      if (file.size > maxSize) {
        nextPlayers[index] = { ...(nextPlayers[index] || {}), studentCard: "Ukuran file melebihi 5MB." }
        return { ...prev, players: nextPlayers }
      }
      nextPlayers[index] = { ...(nextPlayers[index] || {}), studentCard: undefined }
      return { ...prev, players: nextPlayers }
    })

    setForm((prev) => {
      const players = [...prev.players]
      players[index] = { ...players[index], studentCard: file }
      return { ...prev, players }
    })
  }

  function validate(): boolean {
    const nextErrors: Errors = {}
    if (!required(form.teamName)) {
      nextErrors.teamName = "Nama tim wajib diisi."
    }
    if (!required(form.school)) {
      nextErrors.school = "Asal sekolah wajib diisi."
    }
    if (!required(form.lombaYangDiikuti)) {
      nextErrors.lombaYangDiikuti = "Lomba yang diikuti wajib diisi."
    }

    nextErrors.players = form.players.map((p) => {
      const e: Partial<Record<keyof Player, string>> = {}
      if (!required(p.fullName)) e.fullName = "Nama lengkap wajib diisi."
      if (!required(p.nisn)) e.nisn = "NISN wajib diisi."
      if (!required(p.phone)) e.phone = "Nomor HP wajib diisi."
      if (!required(p.nickname)) e.nickname = "Nickname in game wajib diisi."
      if (!required(p.gameId)) e.gameId = "ID pemain wajib diisi."
      if (!p.studentCard) e.studentCard = "Bukti kartu pelajar wajib diunggah."
      return e
    })

    if (!form.buktiTwibbon) nextErrors.buktiTwibbon = "Bukti upload twibbon wajib diunggah."
    if (!form.buktiPembayaran) nextErrors.buktiPembayaran = "Bukti pembayaran wajib diunggah."
    if (!form.buktiFollow) nextErrors.buktiFollow = "Bukti follow wajib diunggah."

    const hasPlayerErrors = nextErrors.players.some((pe) => Object.keys(pe).length > 0)
    const hasDocErrors = !!nextErrors.buktiTwibbon || !!nextErrors.buktiPembayaran || !!nextErrors.buktiFollow

    setErrors(nextErrors)
    return (
      !nextErrors.teamName && !nextErrors.school && !nextErrors.lombaYangDiikuti && !hasPlayerErrors && !hasDocErrors
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)

    await new Promise((r) => setTimeout(r, 1200))

    setSubmitting(false)
    setSubmitted(true)

    console.log("[v0] Esports registration payload:", {
      competition,
      teamName: form.teamName,
      school: form.school,
      lombaYangDiikuti: form.lombaYangDiikuti,
      players: form.players.map((p) => ({
        fullName: p.fullName,
        nisn: p.nisn,
        phone: p.phone,
        nickname: p.nickname,
        gameId: p.gameId,
        studentCard: p.studentCard?.name,
      })),
      documents: {
        buktiTwibbon: form.buktiTwibbon?.name,
        buktiPembayaran: form.buktiPembayaran?.name,
        buktiFollow: form.buktiFollow?.name,
      },
    })
  }

  if (submitted) {
    return (
      <Card className="border">
        <CardHeader>
          <CardTitle>Pendaftaran Berhasil</CardTitle>
          <CardDescription>
            Terima kasih telah mendaftar untuk {competitionName}. Kami akan menghubungi Anda melalui kontak yang
            terdaftar.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-foreground">
            ID Pendaftaran: #{competition.toUpperCase()}
            {Math.random().toString(36).slice(2, 8).toUpperCase()}
          </p>
          <p className="text-muted-foreground text-sm">Simpan ID pendaftaran ini untuk referensi di kemudian hari.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="border">
        <CardHeader>
          <CardTitle>Form Pendaftaran {competitionName}</CardTitle>
          <CardDescription>
            Lengkapi data tim dan anggota sesuai ketentuan. ML: 5 pemain total. FF: 4 pemain total.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="teamName">
                Nama Tim{" "}
                <span aria-hidden="true" className="text-destructive">
                  *
                </span>
              </Label>
              <Input
                id="teamName"
                value={form.teamName}
                onChange={(e) => setForm((prev) => ({ ...prev, teamName: e.target.value }))}
                aria-invalid={!!errors.teamName}
              />
              {errors.teamName && <p className="text-destructive text-sm">{errors.teamName}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="school">
                Asal Sekolah{" "}
                <span aria-hidden="true" className="text-destructive">
                  *
                </span>
              </Label>
              <Input
                id="school"
                value={form.school}
                onChange={(e) => setForm((prev) => ({ ...prev, school: e.target.value }))}
                aria-invalid={!!errors.school}
              />
              {errors.school && <p className="text-destructive text-sm">{errors.school}</p>}
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="lombaYangDiikuti">
                Lomba Yang Diikuti{" "}
                <span aria-hidden="true" className="text-destructive">
                  *
                </span>
              </Label>
              <Select
                value={form.lombaYangDiikuti}
                onValueChange={(value) => setForm((prev) => ({ ...prev, lombaYangDiikuti: value }))}
              >
                <SelectTrigger
                  className={errors.lombaYangDiikuti ? "border-destructive bg-background" : "bg-background"}
                >
                  <SelectValue placeholder="Pilih lomba yang diikuti" />
                </SelectTrigger>
                <SelectContent className="bg-background border border-border">
                  <SelectItem value="esport-ml" className="bg-background hover:bg-accent">
                    Mobile Legends Bang Bang
                  </SelectItem>
                  <SelectItem value="esport-ff" className="bg-background hover:bg-accent">
                    Free Fire
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.lombaYangDiikuti && <p className="text-destructive text-sm">{errors.lombaYangDiikuti}</p>}
            </div>
          </div>

          <div className="space-y-6">
            {form.players.map((player, idx) => {
              const role = idx === 0 ? "kapten" : competition === "esport-ml" && idx === 4 ? "cadangan" : "anggota"

              return (
                <PlayerFields
                  key={idx}
                  index={idx}
                  roleLabel={role}
                  data={player}
                  onChange={(patch) => updatePlayer(idx, patch)}
                  errors={errors.players?.[idx]}
                  requiredAll
                  onFileChange={(file) => handlePlayerFileChange(idx, file)}
                />
              )
            })}
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-base md:text-lg text-foreground">Berkas Pendukung</h3>
            <p className="text-muted-foreground text-sm">
              Unggah berkas sesuai ketentuan. Format yang diperbolehkan: JPG, PNG, dan PDF (maks 5MB).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="buktiTwibbon">Bukti Upload Twibbon *</Label>
                <Input
                  id="buktiTwibbon"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange("buktiTwibbon", e.target.files?.[0] || null)}
                  aria-invalid={!!errors.buktiTwibbon}
                />
                {errors.buktiTwibbon && <p className="text-destructive text-sm">{errors.buktiTwibbon}</p>}
                {!errors.buktiTwibbon && form.buktiTwibbon && (
                  <p className="text-muted-foreground text-xs">Dipilih: {form.buktiTwibbon.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="buktiPembayaran">Bukti Pembayaran *</Label>
                <Input
                  id="buktiPembayaran"
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => handleFileChange("buktiPembayaran", e.target.files?.[0] || null)}
                  aria-invalid={!!errors.buktiPembayaran}
                />
                {errors.buktiPembayaran && <p className="text-destructive text-sm">{errors.buktiPembayaran}</p>}
                {!errors.buktiPembayaran && form.buktiPembayaran && (
                  <p className="text-muted-foreground text-xs">Dipilih: {form.buktiPembayaran.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="buktiFollow">Bukti Follow *</Label>
                <Input
                  id="buktiFollow"
                  type="file"
                  accept="image/*,.pdf"
                  onChange={(e) => handleFileChange("buktiFollow", e.target.files?.[0] || null)}
                  aria-invalid={!!errors.buktiFollow}
                />
                {errors.buktiFollow && <p className="text-destructive text-sm">{errors.buktiFollow}</p>}
                {!errors.buktiFollow && form.buktiFollow && (
                  <p className="text-muted-foreground text-xs">Dipilih: {form.buktiFollow.name}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end pt-2">
            <Button type="submit" disabled={submitting}>
              {submitting ? "Mengirim..." : "Kirim Pendaftaran"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}