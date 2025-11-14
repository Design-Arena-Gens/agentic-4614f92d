const highlights = [
  {
    title: "Create",
    description:
      "Sketch ideas, capture notes, or outline your next project with a friendly workspace.",
  },
  {
    title: "Connect",
    description:
      "Share a quick hello with teammates and keep the vibe positive with lightweight updates.",
  },
  {
    title: "Celebrate",
    description:
      "Mark small wins with confetti flair and keep morale high in your digital clubhouse.",
  },
];

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-100">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-gradient-to-br from-blue-400 via-violet-400 to-amber-300 mix-blend-screen blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[480px] w-[480px] rounded-full bg-gradient-to-bl from-teal-300 via-blue-300 to-violet-400 mix-blend-screen blur-3xl" />
      </div>

      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-20 sm:px-12 sm:pt-24 md:pt-32">
        <header className="flex flex-col gap-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-6 text-balance">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 backdrop-blur">
              Say Hello
            </span>
            <h1 className="text-4xl font-black text-slate-900 sm:text-5xl lg:text-6xl">
              Hello, friend! Let&apos;s build something bright together.
            </h1>
            <p className="text-lg text-slate-600 sm:text-xl">
              This playful landing page is a warm welcome for your community or
              product. Drop a friendly greeting, highlight what matters, and
              invite visitors to take the next step.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#highlights"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:translate-y-0.5 hover:bg-slate-800"
              >
                Explore Highlights
              </a>
              <a
                href="#newsletter"
                className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-900/20 hover:bg-slate-50"
              >
                Join the Hello Club
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-white/40 bg-white/60 p-6 shadow-xl shadow-blue-500/10 backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-700">
                Daily Hello
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                09:41 AM
              </span>
            </div>
            <div className="space-y-3">
              <p className="rounded-2xl bg-blue-500/10 px-4 py-3 text-sm text-slate-800">
                “Hello! You&apos;re doing amazing. Keep sharing your light
                today.”
              </p>
              <p className="ml-auto w-fit rounded-2xl bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
                “Thanks for the boost! Let&apos;s make it a good one.”
              </p>
            </div>
            <form
              className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-900/10 bg-white px-3 py-2 text-sm shadow-sm"
              aria-label="Send a hello"
            >
              <input
                className="w-full bg-transparent text-slate-500 outline-none placeholder:text-slate-300"
                placeholder="Send a quick hello..."
                aria-label="Message"
              />
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-500"
              >
                <span className="sr-only">Send message</span>
                &#10148;
              </button>
            </form>
          </div>
        </header>

        <section
          id="highlights"
          className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10"
        >
          {highlights.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-900/10 bg-white p-6 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-gradient-to-br from-blue-200 via-indigo-100 to-rose-100 opacity-60 transition group-hover:opacity-90" />
              <h2 className="mb-2 text-xl font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </section>

        <section
          id="newsletter"
          className="grid grid-cols-1 gap-10 rounded-3xl bg-white/70 p-10 shadow-lg shadow-blue-500/10 backdrop-blur md:grid-cols-[2fr,1fr]"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">
              Join the Hello Club
            </h2>
            <p className="text-base text-slate-600">
              Be the first to get fresh greetings, uplifting prompts, and
              community highlights. We send one friendly email each week—no spam
              ever.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="flex-1 rounded-full border border-slate-900/10 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-white"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500"
              >
                Get weekly hellos
              </button>
            </form>
            <p className="text-xs text-slate-400">
              By subscribing, you agree to our friendly updates and can opt out
              anytime—no feelings hurt.
            </p>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 p-6 text-white shadow-lg">
            <div>
              <h3 className="text-lg font-semibold">Today&apos;s Spark</h3>
              <p className="mt-2 text-sm text-white/80">
                Share three good things that happened this week. Spread the joy
                and tag a friend who should join the fun.
              </p>
            </div>
            <div className="space-y-2 rounded-2xl bg-white/10 p-4 text-sm text-white/90">
              <p className="font-semibold">Member Shoutout</p>
              <p>
                “Shoutout to Maya for organizing the Hello Lunch! We met three
                new friends and tried an amazing lemon tart.”
              </p>
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-4 border-t border-slate-900/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <span>
            &copy; {new Date().getFullYear()} Hello Studio. All smiles reserved.
          </span>
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@example.com"
              className="transition hover:text-slate-700"
            >
              Contact
            </a>
            <a
              href="https://nextjs.org"
              className="transition hover:text-slate-700"
            >
              Built with Next.js
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
