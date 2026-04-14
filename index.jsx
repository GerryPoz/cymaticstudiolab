export default function CymaticsStudioLabHomePage() {
  const faqs = [
    {
      q: 'What is Cymatics Studio Lab?',
      a: 'Cymatics Studio Lab is a real-time wave simulation app inspired by cymatics and Faraday wave behavior. It lets you generate dynamic geometric visuals by adjusting simulation parameters live.',
    },
    {
      q: 'Is this pre-rendered animation?',
      a: 'No. The visuals are generated in real time. What you see is the direct result of parameter changes inside the simulation.',
    },
    {
      q: 'Can I save what I create?',
      a: 'Yes. You can export high-resolution images and keep your favorite presets for future exploration.',
    },
    {
      q: 'How do I pay for the app?',
      a: 'Cymatics Studio Lab is a one-time purchase. No subscriptions. No ads.',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.22),transparent_35%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.18),transparent_30%),linear-gradient(to_bottom,#020202,#09090b,#000000)]" />

      <header className="sticky top-0 z-30 backdrop-blur-md bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-black border border-orange-500/30 shadow-[0_0_25px_rgba(255,140,0,0.35)] flex items-center justify-center overflow-hidden">
              <div className="w-6 h-6 rounded-full border border-orange-400 relative">
                <div className="absolute inset-0 rounded-full border border-orange-400/80 rotate-45" />
                <div className="absolute inset-0 rounded-full border border-orange-400/70 -rotate-45" />
                <div className="absolute inset-0 rounded-full border border-orange-400/60 rotate-90" />
                <div className="absolute left-1/2 top-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.9)]" />
              </div>
            </div>
            <div className="leading-tight">
              <p className="font-black tracking-wide text-sm sm:text-base">CYMATICS</p>
              <p className="font-black tracking-wide text-sm sm:text-base bg-gradient-to-r from-orange-500 via-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">STUDIO LAB</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#gallery" className="hover:text-white transition">Gallery</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="#download" className="inline-flex items-center rounded-2xl bg-white text-black px-4 py-2 font-semibold hover:scale-[1.02] transition">Get the App</a>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-orange-300/90 border border-orange-400/20 rounded-full px-4 py-2 bg-orange-500/5 mb-6">
              Real-time. Not pre-rendered.
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight">
              This is not animation.
              <span className="block mt-3 bg-gradient-to-r from-orange-400 via-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                It’s real-time wave simulation.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-zinc-300 max-w-2xl leading-relaxed">
              Create generative art inspired by cymatics and Faraday waves. Control every parameter in real time, export your creations, and save your favorite presets.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                id="download"
                href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-3xl bg-white text-black px-7 py-4 text-lg font-bold hover:scale-[1.02] transition shadow-2xl"
              >
                Get it on Google Play
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-3xl border border-white/15 bg-white/5 px-7 py-4 text-lg font-semibold text-white hover:bg-white/10 transition"
              >
                Explore Features
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">✔ One-time purchase</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">✔ No ads</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">✔ No subscriptions</span>
            </div>

            <div className="mt-8 rounded-3xl border border-red-500/20 bg-red-950/30 p-4 text-sm text-red-100 max-w-2xl">
              <span className="font-bold text-red-300">Photosensitivity Warning:</span> This application contains rapidly flashing lights and geometric patterns which may trigger seizures in people with photosensitive epilepsy. Viewer discretion is advised.
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full" />
            <div className="relative rounded-[2rem] border border-white/10 bg-black/50 backdrop-blur-xl p-3 shadow-[0_0_60px_rgba(255,140,0,0.18)]">
              <div className="aspect-[9/16] rounded-[1.6rem] overflow-hidden bg-black relative">
                <video className="w-full h-full object-cover" autoPlay loop muted playsInline poster="/hero-poster.jpg">
                  <source src="/hero-loop.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-4 left-4 rounded-full border border-white/10 bg-black/40 backdrop-blur-md px-3 py-1 text-xs tracking-wide text-zinc-200">
                  Real-time simulation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80 mb-3">Features</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">Built for exploration</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Full Parameter Control', text: 'Adjust waves, frequencies, symmetry, and behavior in real time with intuitive controls.' },
            { title: 'Export & Presets', text: 'Save high-resolution images and build your own library of reusable visual presets.' },
            { title: 'Science Meets Art', text: 'Explore the beauty of cymatics through a visual experience designed for both creativity and learning.' },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-xl">
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-zinc-300 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80 mb-3">Gallery</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight">What you can create</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['/gallery-1.jpg', '/gallery-2.jpg', '/gallery-3.jpg'].map((src, i) => (
            <div key={i} className="rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 group">
              <div className="aspect-square overflow-hidden">
                <img src={src} alt={`Cymatics artwork ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-[2.2rem] border border-white/10 bg-white/5 p-8 sm:p-10 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-orange-300/80 mb-3">Why it stands out</p>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight">A premium creative tool — not just a visual toy</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-zinc-300">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">Designed for artists, curious minds, and anyone fascinated by the hidden beauty of wave physics.</div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">Perfect for creative inspiration, visual experimentation, and educational exploration.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.22em] text-cyan-300/80 mb-3">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">Questions people actually have</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-[1.6rem] border border-white/10 bg-white/5 p-6 open:bg-white/[0.07] transition">
              <summary className="cursor-pointer list-none text-xl font-bold flex items-center justify-between gap-4">
                {item.q}
                <span className="text-zinc-400 group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-4 text-zinc-300 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-28">
        <div className="rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-cyan-500/10 p-8 sm:p-12 text-center shadow-2xl">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">Turn equations into living visuals.</h2>
          <p className="mt-4 text-zinc-300 text-lg max-w-2xl mx-auto">A premium creative tool for artists, curious minds, and anyone fascinated by the hidden beauty of wave physics.</p>
          <a href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center justify-center rounded-3xl bg-white text-black px-8 py-4 text-lg font-bold hover:scale-[1.02] transition">
            Download on Google Play
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} Cymatics Studio Lab. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
            <a href="mailto:your@email.com" className="hover:text-white transition">Contact</a>
            <a href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME" target="_blank" rel="noreferrer" className="hover:text-white transition">Google Play</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
