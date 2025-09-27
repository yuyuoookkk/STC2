"use client"

import { MapPin, Mail, Phone, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-3">
              <img
                src="/images/TEKS STIBAJRA.png"
                alt="STIBAJRA"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-3">
              STIBAJRA Technology Competition - Empowering the next generation of tech innovators.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <MapPin className="w-4 h-4" />
              <span>SMK Ti Bali Global Jimbaran</span>
            </div>
          </div>

          {/* Competition Section */}
          <div>
            <h3 className="text-white font-semibold mb-3">Competition</h3>
            <ul className="space-y-1">
              <li>
                <a href="/competition/web-design" className="text-white/70 hover:text-white text-sm transition-colors">
                  Web Design
                </a>
              </li>
              <li>
                <a
                  href="/competition/design-poster"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Design Poster
                </a>
              </li>
              <li>
                <a
                  href="/competition/speed-typing"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Speed Typing
                </a>
              </li>
              <li>
                <a href="/competition/digital-art" className="text-white/70 hover:text-white text-sm transition-colors">
                  Digital Art
                </a>
              </li>
              <li>
                <a href="/competition/rumus-excel" className="text-white/70 hover:text-white text-sm transition-colors">
                  Rumus Excel
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-white font-semibold mb-3">Resources</h3>
            <ul className="space-y-1">
              <li>
                <a href="/guidelines" className="text-white/70 hover:text-white text-sm transition-colors">
                  GuideBook
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-white/70 hover:text-white text-sm transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-white font-semibold mb-3">Connect</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://www.instagram.com/osis_stibajra?igsh=OW5wNGJrNHFjdTV3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram (@osis_stibajra)
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281529023333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp Keischa (+62 815-2902-3333)
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6285338001840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp Felicia (+62 853-3800-1840)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Lokasi Event</h3>
            <div className="w-full h-48 rounded-lg overflow-hidden glass border border-white/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.9884726404885!2d115.17517497501599!3d-8.78715219126483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24522d38bc181%3A0x2b7a93761cba8439!2sSMKTI%20Bali%20Global%20Jimbaran!5e0!3m2!1sen!2sid!4v1758939903018!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter brightness-90"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">© 2025 SMK Ti Bali Global Jimbaran. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}