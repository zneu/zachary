import Link from "next/link";

// Icons as components
const SpotifyIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const SoundCloudIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c0 .055.045.094.09.094s.089-.045.104-.104l.21-1.319-.21-1.334c0-.061-.044-.09-.09-.09m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.12.119.12.061 0 .105-.061.121-.12l.254-2.474-.254-2.548c-.016-.06-.061-.12-.121-.12m.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.15l.24-2.532-.24-2.623c0-.075-.06-.135-.135-.135l-.031-.017zm1.155.36c-.005-.09-.075-.149-.159-.149-.09 0-.158.06-.164.149l-.217 2.43.2 2.563c0 .09.075.157.159.157.074 0 .148-.068.148-.158l.227-2.563-.227-2.444.033.015zm.809-1.709c-.101 0-.18.09-.18.181l-.21 3.957.187 2.563c0 .09.08.164.18.164.094 0 .174-.09.18-.18l.209-2.563-.209-3.972c-.008-.104-.088-.18-.18-.18m.959-.914c-.105 0-.195.09-.203.194l-.18 4.872.165 2.548c0 .12.09.209.195.209.104 0 .194-.089.21-.209l.193-2.548-.192-4.856c-.016-.12-.105-.21-.21-.21m.989-.449c-.121 0-.211.089-.225.209l-.165 5.275.165 2.52c.014.119.104.225.225.225.119 0 .225-.105.225-.225l.195-2.52-.196-5.275c0-.12-.105-.225-.225-.225m1.245.045c0-.135-.105-.24-.24-.24-.119 0-.24.105-.24.24l-.149 5.441.149 2.503c.016.135.121.24.256.24s.24-.105.24-.24l.164-2.503-.164-5.456-.016.015zm.749-.134c-.135 0-.255.119-.255.254l-.15 5.322.15 2.473c0 .15.12.255.255.255s.255-.12.255-.27l.15-2.474-.165-5.306c0-.148-.12-.27-.271-.27m1.005.166c-.164 0-.284.135-.284.285l-.103 5.143.135 2.474c0 .149.119.277.284.277.149 0 .271-.12.284-.285l.121-2.443-.135-5.112c-.012-.164-.135-.285-.285-.285m1.184-.945c-.016-.18-.165-.285-.33-.285-.165 0-.315.105-.315.285l-.075 6.086.09 2.428c.016.18.15.285.315.285.165 0 .315-.105.315-.285l.105-2.428-.09-6.086h-.015zm.705-.463c-.165 0-.315.119-.33.284l-.06 6.549.075 2.39c.016.18.165.3.33.3.181 0 .33-.135.345-.315l.09-2.39-.105-6.534c0-.165-.164-.3-.345-.3m1.755 1.035c-.06-.297-.24-.555-.48-.72-.18-.12-.39-.18-.615-.18-.12 0-.238.015-.359.06-.165.061-.315.12-.42.24-.135.15-.195.33-.21.495-.016.015-.016 5.186-.016 5.186l.075 2.312c.03.27.21.48.435.58.119.06.254.09.389.09.21 0 .405-.074.569-.21.225-.195.36-.48.36-.779v-.033-.014l.091-6.934-.015-.015c-.016-.165-.061-.36-.104-.495m9.406 2.176c-.555 0-1.08.135-1.545.359-.225-2.503-2.324-4.471-4.904-4.471-.599 0-1.184.104-1.725.3-.224.089-.285.18-.3.36v8.814c.016.18.15.33.33.345h8.129c1.545-.015 2.789-1.26 2.79-2.806.015-1.545-1.245-2.805-2.79-2.805"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default function Home() {
  return (
    <div className="gradient-bg min-h-screen">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold tracking-tight text-gradient">
            ZN
          </Link>
          <div className="flex items-center gap-8">
            <Link href="#about" className="text-sm text-white/60 hover:text-white transition-colors link-hover">
              About
            </Link>
            <Link href="#ventures" className="text-sm text-white/60 hover:text-white transition-colors link-hover">
              Ventures
            </Link>
            <Link href="#music" className="text-sm text-white/60 hover:text-white transition-colors link-hover">
              Music
            </Link>
            <Link href="#contact" className="text-sm text-white/60 hover:text-white transition-colors link-hover">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 pt-20 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/live-3.jpg"
            alt=""
            className="w-full h-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[#d4af37]/30 shadow-2xl shadow-[#d4af37]/20">
                <img
                  src="/profile.jpg"
                  alt="Zachary Neumann"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-black flex items-center justify-center">
                <span className="text-xs">&#10003;</span>
              </div>
            </div>
          </div>
          <p className="text-[#d4af37]/60 text-sm tracking-[0.3em] mb-6 uppercase">
            Founder &bull; Technologist &bull; Artist
          </p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-gradient glow font-serif">Zachary Neumann</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building the infrastructure for human transformation through AI.
            Creating sonic experiences that move millions as{" "}
            <span className="text-[#d4af37]">Akriza</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#ventures"
              className="btn-shine inline-block px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#996515] text-black font-semibold rounded-xl hover:scale-105 transition-transform"
            >
              View Portfolio
            </Link>
            <Link
              href="#music"
              className="inline-block px-8 py-4 border border-[#d4af37]/30 text-[#d4af37] font-semibold rounded-xl hover:bg-[#d4af37]/10 transition-colors"
            >
              Experience the Sound
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <svg className="w-6 h-6 text-[#d4af37]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-divider mb-20" />
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#d4af37]/60 text-sm tracking-[0.3em] mb-4 uppercase">
                The Vision
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">
                Building What<br />
                <span className="text-gradient">Matters Next</span>
              </h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  I spent years engineering mission-critical systems for the{" "}
                  <span className="text-white">U.S. Federal Government</span>—building
                  infrastructure that serves millions and leading technical teams
                  across major state operations.
                </p>
                <p>
                  That foundation taught me how to build at scale. Now I&apos;m applying
                  it to something bigger: creating AI systems that fundamentally
                  change how humans grow, connect, and understand themselves. The
                  same discipline that automated federal workflows is now building
                  the future of personal transformation.
                </p>
                <p>
                  On the creative side, I&apos;ve performed for tens of thousands
                  at the world&apos;s most transformative gatherings—
                  <span className="text-white">Burning Man</span>,{" "}
                  <span className="text-white">Envision Festival</span>,{" "}
                  <span className="text-white">Lightning in a Bottle</span>.
                  Music and technology share the same goal: moving people.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-gradient mb-2">$2M+</div>
                <div className="text-white/50 text-sm">Systems Delivered</div>
              </div>
              <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                <div className="text-white/50 text-sm">Projects Shipped</div>
              </div>
              <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-gradient mb-2">2M+</div>
                <div className="text-white/50 text-sm">People Reached</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ventures Section */}
      <section id="ventures" className="py-32 px-6 bg-gradient-to-b from-transparent via-[#d4af37]/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#d4af37]/60 text-sm tracking-[0.3em] mb-4 uppercase">
              The Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif">
              <span className="text-gradient">Audio Alchemy</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto">
              An AI product studio focused on human transformation. One mission: unlock human potential at scale.
            </p>
            <p className="text-white/40 text-sm mt-3">
              Click any product to explore
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="https://astrology.audioalchemycollective.com" target="_blank" rel="noopener noreferrer" className="glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 group block">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">&#9789;</span>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400">LIVE</span>
              </div>
              <h3 className="text-xl font-semibold text-[#d4af37] mb-3">Throne</h3>
              <p className="text-white/50 leading-relaxed mb-4">
                The most advanced Vedic astrology platform on the market. Authentic
                Jyotish traditions meets frontier AI. Thousands of consultations delivered.
              </p>
              <div className="text-xs text-[#d4af37]/40 tracking-wider">
                ANTHROPIC CLAUDE &bull; SWISS EPHEMERIS
              </div>
            </a>
            <a href="https://coaching.audioalchemycollective.com" target="_blank" rel="noopener noreferrer" className="glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 group block">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">&#128172;</span>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400">LIVE</span>
              </div>
              <h3 className="text-xl font-semibold text-[#d4af37] mb-3">Coaching AI</h3>
              <p className="text-white/50 leading-relaxed mb-4">
                AI-powered transformation coaching that actually works. Built on
                real frameworks from world-class coaches. Not another chatbot.
              </p>
              <div className="text-xs text-[#d4af37]/40 tracking-wider">
                NLP &bull; BEHAVIORAL SCIENCE
              </div>
            </a>
            <a href="https://contacts.audioalchemycollective.com" target="_blank" rel="noopener noreferrer" className="glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 group block">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">&#128101;</span>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400">LIVE</span>
              </div>
              <h3 className="text-xl font-semibold text-[#d4af37] mb-3">Cortex</h3>
              <p className="text-white/50 leading-relaxed mb-4">
                Relationship intelligence for the connected age. Never forget a
                connection. Never miss an opportunity. Your network, amplified.
              </p>
              <div className="text-xs text-[#d4af37]/40 tracking-wider">
                RELATIONSHIP AI &bull; GRAPH INTELLIGENCE
              </div>
            </a>
          </div>
          <div className="text-center mt-12">
            <p className="text-white/40 text-sm">
              <span className="text-[#d4af37]">Audio Alchemy</span> &mdash; Where ancient wisdom meets frontier technology
            </p>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-divider mb-20" />
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="glass-card rounded-3xl p-8 animate-pulse-glow">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-black mb-6 overflow-hidden">
                  <img
                    src="/live-1.jpg"
                    alt="Akriza performing live"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://open.spotify.com/artist/akriza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#1DB954]/20 text-[#1DB954] hover:bg-[#1DB954]/30 transition-colors"
                    aria-label="Spotify"
                  >
                    <SpotifyIcon />
                  </a>
                  <a
                    href="https://soundcloud.com/akriza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#ff5500]/20 text-[#ff5500] hover:bg-[#ff5500]/30 transition-colors"
                    aria-label="SoundCloud"
                  >
                    <SoundCloudIcon />
                  </a>
                  <a
                    href="https://instagram.com/akrizamusic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#E4405F]/20 text-[#E4405F] hover:bg-[#E4405F]/30 transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-[#d4af37]/60 text-sm tracking-[0.3em] mb-4 uppercase">
                The Other Side
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">
                Performing as<br />
                <span className="text-gradient">Akriza</span>
              </h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  World-fusion bass music that bridges{" "}
                  <span className="text-white">ancient traditions</span> with
                  frontier electronic production. Sitar, ney, oud, and duduk
                  woven into heavy, cinematic soundscapes.
                </p>
                <p>
                  Signed to <span className="text-[#d4af37]">Gravitas Recordings</span>,{" "}
                  <span className="text-[#d4af37]">Odyzey</span>, and{" "}
                  <span className="text-[#d4af37]">High Vibe Records</span>.
                  Hundreds of thousands of streams. Music placed in global compilations.
                </p>
                <p>
                  Performed for tens of thousands at{" "}
                  <span className="text-white">Burning Man</span>,{" "}
                  <span className="text-white">Envision Festival</span>,{" "}
                  <span className="text-white">Lightning in a Bottle</span>,{" "}
                  <span className="text-white">Unison</span>, and stages across the Americas.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full border border-[#d4af37]/20 text-sm text-white/50">
                  World Bass
                </span>
                <span className="px-4 py-2 rounded-full border border-[#d4af37]/20 text-sm text-white/50">
                  Electronic
                </span>
                <span className="px-4 py-2 rounded-full border border-[#d4af37]/20 text-sm text-white/50">
                  Festival Artist
                </span>
                <span className="px-4 py-2 rounded-full border border-[#d4af37]/20 text-sm text-white/50">
                  Multi-Instrumentalist
                </span>
              </div>
              <a
                href="https://www.akriza.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block px-8 py-4 border border-[#d4af37]/30 text-[#d4af37] font-semibold rounded-xl hover:bg-[#d4af37]/10 transition-colors"
              >
                Visit akriza.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-[#d4af37]/3 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#d4af37]/60 text-sm tracking-[0.3em] mb-4 uppercase">
              Track Record
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif">
              <span className="text-gradient">Background</span>
            </h2>
          </div>
          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 border-l-4 border-[#d4af37]">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Founder & CEO</h3>
                <span className="text-[#d4af37]/60 text-sm">2024 - Present</span>
              </div>
              <p className="text-[#d4af37] mb-3">Audio Alchemy</p>
              <p className="text-white/50 leading-relaxed">
                Building an AI product studio focused on human transformation. Leading product development,
                go-to-market, and vision for three AI products in the personal development space.
                Scaling to thousands of users across platforms.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Technical Lead & Investor</h3>
                <span className="text-[#d4af37]/60 text-sm">2022 - Present</span>
              </div>
              <p className="text-[#d4af37] mb-3">Real Estate Holdings — Sierra Nevada, CA</p>
              <p className="text-white/50 leading-relaxed">
                Building a portfolio of mountain properties in Northern California. Combining
                technical expertise with real asset investments. Long-term wealth building
                through strategic property acquisition.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Senior GIS Manager & Technical Lead</h3>
                <span className="text-[#d4af37]/60 text-sm">2022 - Present</span>
              </div>
              <p className="text-[#d4af37] mb-3">Consultant — California & National Operations</p>
              <p className="text-white/50 leading-relaxed">
                Leading GIS operations across California and national projects. Managing
                technical teams, client relationships, and strategic direction. Executed
                complete technology modernization—transitioning legacy systems to modern
                infrastructure with 90% operational efficiency gains.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">Lead Systems Architect & GIS Administrator</h3>
                <span className="text-[#d4af37]/60 text-sm">2016 - 2022</span>
              </div>
              <p className="text-[#d4af37] mb-3">U.S. Forest Service — Washington Office, Business Operations</p>
              <p className="text-white/50 leading-relaxed">
                Recruited to federal headquarters-level role straight out of university.
                Architected and developed the agency&apos;s entire GIS infrastructure system.
                Designed crowdsourcing platforms for national-scale geospatial data collection.
                Automated 50+ projects. Reduced deployment from 80 hours to 15 minutes.
                Managed systems processing 7,000+ public stakeholder inputs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="section-divider mb-20" />
          <p className="text-[#d4af37]/60 text-sm tracking-[0.3em] mb-4 uppercase">
            Let&apos;s Connect
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif">
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Whether you&apos;re interested in collaboration, consulting, or just want to say hello &mdash;
            I&apos;d love to hear from you.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="mailto:zneu.dev@gmail.com"
              className="p-4 rounded-full glass-card hover:border-[#d4af37]/40 transition-all hover:-translate-y-1"
              aria-label="Email"
            >
              <MailIcon />
            </a>
            <a
              href="https://github.com/zneu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass-card hover:border-[#d4af37]/40 transition-all hover:-translate-y-1"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://instagram.com/akrizamusic"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass-card hover:border-[#d4af37]/40 transition-all hover:-translate-y-1"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
          <a
            href="mailto:zneu.dev@gmail.com"
            className="btn-shine inline-block px-10 py-4 bg-gradient-to-r from-[#d4af37] to-[#996515] text-black font-semibold rounded-xl hover:scale-105 transition-transform text-lg"
          >
            Send a Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Zachary Neumann. All rights reserved.
          </div>
          <div className="text-[#d4af37]/40 text-sm tracking-widest">
            DENVER, CO
          </div>
        </div>
      </footer>
    </div>
  );
}
