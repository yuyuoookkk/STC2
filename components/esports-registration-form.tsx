"use client";

import type React from "react";

import { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type CompetitionSlug = "esport-ml" | "esport-ff";

type Player = {
  fullName: string;
  nisn: string;
  phone: string;
  nickname: string;
  gameId: string;
};

type FormState = {
  teamName: string;
  school: string;
  players: Player[];
};

type Errors = {
  teamName?: string;
  school?: string;
  players?: Array<Partial<Record<keyof Player, string>>>;
};

function required(value: string) {
  return value.trim().length > 0;
}

function PlayerFields({
  index,
  roleLabel,
  data,
  onChange,
  errors,
  requiredAll,
}: {
  index: number;
  roleLabel: string;
  data: Player;
  onChange: (patch: Partial<Player>) => void;
  errors?: Partial<Record<keyof Player, string>>;
  requiredAll: boolean;
}) {
  const req = requiredAll;

  return (
    <div className="rounded-lg border bg-card text-card-foreground p-4 md:p-6">
      <div className="mb-4">
        <h3 className="font-semibold text-base md:text-lg text-foreground">
          {`Data Diri Anggota ${index + 1}`}{" "}
          {roleLabel ? `(${roleLabel})` : null}
        </h3>
        <p className="text-muted-foreground text-sm">
          Isi data dengan benar sesuai identitas.
        </p>
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
          {errors?.fullName && (
            <p className="text-destructive text-sm">{errors.fullName}</p>
          )}
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
          {errors?.nisn && (
            <p className="text-destructive text-sm">{errors.nisn}</p>
          )}
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
          {errors?.phone && (
            <p className="text-destructive text-sm">{errors.phone}</p>
          )}
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
          {errors?.nickname && (
            <p className="text-destructive text-sm">{errors.nickname}</p>
          )}
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
          {errors?.gameId && (
            <p className="text-destructive text-sm">{errors.gameId}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export function EsportsRegistrationForm({
  competition,
}: {
  competition: CompetitionSlug;
}) {
  const playerCount = competition === "esport-ml" ? 5 : 4;
  const competitionName =
    competition === "esport-ml" ? "Esport Mobile Legends" : "Esport Free Fire";

  const initialPlayers = useMemo<Player[]>(
    () =>
      Array.from({ length: playerCount }).map(() => ({
        fullName: "",
        nisn: "",
        phone: "",
        nickname: "",
        gameId: "",
      })),
    [playerCount]
  );

  const [form, setForm] = useState<FormState>({
    teamName: "",
    school: "",
    players: initialPlayers,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function updatePlayer(index: number, patch: Partial<Player>) {
    setForm((prev) => {
      const nextPlayers = [...prev.players];
      nextPlayers[index] = { ...nextPlayers[index], ...patch };
      return { ...prev, players: nextPlayers };
    });
  }

  function validate(): boolean {
    const nextErrors: Errors = {};
    if (!required(form.teamName)) {
      nextErrors.teamName = "Nama tim wajib diisi.";
    }
    if (!required(form.school)) {
      nextErrors.school = "Asal sekolah wajib diisi.";
    }

    nextErrors.players = form.players.map((p) => {
      const e: Partial<Record<keyof Player, string>> = {};
      if (!required(p.fullName)) e.fullName = "Nama lengkap wajib diisi.";
      if (!required(p.nisn)) e.nisn = "NISN wajib diisi.";
      if (!required(p.phone)) e.phone = "Nomor HP wajib diisi.";
      if (!required(p.nickname)) e.nickname = "Nickname in game wajib diisi.";
      if (!required(p.gameId)) e.gameId = "ID pemain wajib diisi.";
      return e;
    });

    // If any player errors exist, keep them
    const hasPlayerErrors = nextErrors.players.some(
      (pe) => Object.keys(pe).length > 0
    );

    setErrors(nextErrors);
    return !nextErrors.teamName && !nextErrors.school && !hasPlayerErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));

    setSubmitting(false);
    setSubmitted(true);

    // Debug log
    console.log("[v0] Esports registration payload:", {
      competition,
      ...form,
    });
  }

  if (submitted) {
    return (
      <Card className="border">
        <CardHeader>
          <CardTitle>Pendaftaran Berhasil</CardTitle>
          <CardDescription>
            Terima kasih telah mendaftar untuk {competitionName}. Kami akan
            menghubungi Anda melalui kontak yang terdaftar.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-foreground">
            ID Pendaftaran: #{competition.toUpperCase()}
            {Math.random().toString(36).slice(2, 8).toUpperCase()}
          </p>
          <p className="text-muted-foreground text-sm">
            Simpan ID pendaftaran ini untuk referensi di kemudian hari.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="border">
        <CardHeader>
          <CardTitle>Form Pendaftaran {competitionName}</CardTitle>
          <CardDescription>
            Lengkapi data tim dan anggota sesuai ketentuan. ML: 5 pemain total.
            FF: 4 pemain total.
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
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, teamName: e.target.value }))
                }
                aria-invalid={!!errors.teamName}
              />
              {errors.teamName && (
                <p className="text-destructive text-sm">{errors.teamName}</p>
              )}
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
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, school: e.target.value }))
                }
                aria-invalid={!!errors.school}
              />
              {errors.school && (
                <p className="text-destructive text-sm">{errors.school}</p>
              )}
            </div>
          </div>

          <div className="space-y-6">
            {form.players.map((player, idx) => {
              const role =
                idx === 0
                  ? "kapten"
                  : competition === "esport-ml" && idx === 4
                  ? ""
                  : "";

              return (
                <PlayerFields
                  key={idx}
                  index={idx}
                  roleLabel={role}
                  data={player}
                  onChange={(patch) => updatePlayer(idx, patch)}
                  errors={errors.players?.[idx]}
                  requiredAll
                />
              );
            })}
          </div>

          <div className="flex items-center justify-end pt-2">
            <Button type="submit" disabled={submitting}>
              {submitting ? "Mengirim..." : "Kirim Pendaftaran"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
