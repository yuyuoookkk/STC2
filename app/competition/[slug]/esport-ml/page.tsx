import type { Metadata } from "next";
import { EsportsRegistrationForm } from "@/components/esports-registration-form";

export const metadata: Metadata = {
  title: "Pendaftaran Esport Mobile Legends",
};

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <section className="max-w-4xl mx-auto space-y-6">
        <header>
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground text-balance">
            Pendaftaran Esport Mobile Legends
          </h1>
          <p className="text-muted-foreground mt-2">
            Lengkapi data tim Anda. Total 4 pemain (1 kapten + 3 anggota).
          </p>
        </header>

        <EsportsRegistrationForm competition="esport-ml" />
      </section>
    </main>
  );
}
