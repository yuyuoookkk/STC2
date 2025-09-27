"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const competitions = [
  { name: "Desain Web", slug: "web-design" },
  { name: "Desain Poster", slug: "design-poster" },
  { name: "Desain Maskot", slug: "design-maskot" },
  { name: "Esport ML", slug: "esport-ml" },
  { name: "Esport FF", slug: "esport-ff" },
  { name: "Rumus Excel", slug: "rumus-excel" },
  { name: "Speed Typing", slug: "speed-typing" },
];

export default function Navigation() {
  const [isCompetitionOpen, setIsCompetitionOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="images/LOGO_STC.svg" // Update with your logo path
              alt="STC Logo"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="text-white font-bold text-xl">STC</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-purple-200 transition-colors duration-200 font-medium"
            >
              Beranda
            </Link>

            {/* Competition Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCompetitionOpen(!isCompetitionOpen)}
                className="flex items-center space-x-1 text-white hover:text-purple-200 transition-colors duration-200 font-medium"
              >
                <span>Kompetisi</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isCompetitionOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isCompetitionOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 glass-card rounded-lg shadow-lg py-2">
                  {competitions.map((competition) => (
                    <Link
                      key={competition.slug}
                      href={`/competition/${competition.slug}`}
                      className="block px-4 py-2 text-white hover:bg-white/10 transition-colors duration-200"
                      onClick={() => setIsCompetitionOpen(false)}
                    >
                      {competition.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-purple-200 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 py-4">
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-white hover:text-purple-200 transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Beranda
              </Link>

              <div className="space-y-2">
                <span className="block text-white font-medium">Kompetisi</span>
                <div className="pl-4 space-y-2">
                  {competitions.map((competition) => (
                    <Link
                      key={competition.slug}
                      href={`/competition/${competition.slug}`}
                      className="block text-white/80 hover:text-white transition-colors duration-200 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {competition.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
