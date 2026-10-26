"use client";

import { useState } from "react";

const skills = [
  "Python",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "React",
  "Tailwind CSS",
  "HTML & CSS",
  "Git & GitHub",
  "AI Development",
  "Chatbot Development",
  "Problem Solving",
];

const projects = [
  {
    number: "01",
    category: "Web Development",
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio website built to showcase my skills, academic journey, and development projects.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    icon: "⌘",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    number: "02",
    category: "Artificial Intelligence",
    title: "AI Chatbot Assistant",
    description:
      "A conversational assistant concept designed to answer questions, provide useful information, and improve user interactions.",
    technologies: ["Python", "AI", "NLP"],
    icon: "✳",
    color: "from-violet-500/20 to-blue-500/10",
  },
  {
    number: "03",
    category: "Python Development",
    title: "Inventory Management System",
    description:
      "A Python-based inventory application featuring object-oriented programming, stock management, and item value calculations.",
    technologies: ["Python", "OOP", "Problem Solving"],
    icon: "▤",
    color: "from-cyan-500/20 to-teal-500/10",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/",
    icon: "GH",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: "in",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio message from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:waqas@example.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#07111f] text-slate-200 selection:bg-blue-500/30 selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#07111f]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#home" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-extrabold text-white shadow-lg shadow-blue-600/25 transition group-hover:bg-blue-500">
              MW
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              Muhammad Waqas<span className="text-blue-500">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-400 transition hover:text-blue-400"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <a
            href="#contact"
            className="hidden rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500 sm:inline-flex"
          >
            Let&apos;s Talk
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-xl text-white transition hover:bg-white/5 md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/[0.07] bg-[#0a1728] px-5 py-4 md:hidden">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-blue-400"
                >
                  {item}
                </a>
              )
            )}
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-[88vh] scroll-mt-24 items-center overflow-hidden"
      >
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 md:grid-cols-[1.25fr_0.75fr] lg:px-12 lg:py-32">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2 text-sm font-medium text-blue-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
              </span>
              BS Student · AI Enthusiast
            </div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Hello, I&apos;m
            </p>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Muhammad
              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Waqas.
              </span>
            </h1>

            <h2 className="mt-7 text-xl font-semibold text-slate-200 sm:text-2xl">
              Aspiring AI Developer &amp; Chatbot Builder
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
              I&apos;m a BS student at the University of Sargodha, passionate
              about programming, artificial intelligence, and building
              intelligent applications that solve real-world problems.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-500"
              >
                Explore My Work <span>↗</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <span className="text-blue-400">⌖</span>
                Sargodha, Pakistan
              </span>
              <span className="flex items-center gap-2">
                <span className="text-blue-400">✧</span>
                Always Learning
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-600/20 to-cyan-500/5 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-[#0c1b2e] p-6 shadow-2xl shadow-black/30 sm:p-8">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>
                <span className="font-mono text-xs text-slate-500">
                  waqas.ts
                </span>
              </div>

              <div className="py-8 font-mono text-sm leading-8 sm:text-base">
                <p className="text-slate-500">// A little about me</p>
                <p className="mt-4">
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-cyan-300">developer</span>{" "}
                  <span className="text-slate-300">= {"{"}</span>
                </p>
                <p className="pl-5">
                  <span className="text-blue-300">name</span>
                  <span className="text-slate-400">: </span>
                  <span className="text-green-300">
                    &quot;Muhammad Waqas&quot;
                  </span>
                  <span className="text-slate-400">,</span>
                </p>
                <p className="pl-5">
                  <span className="text-blue-300">degree</span>
                  <span className="text-slate-400">: </span>
                  <span className="text-green-300">&quot;BS&quot;</span>
                  <span className="text-slate-400">,</span>
                </p>
                <p className="pl-5">
                  <span className="text-blue-300">interests</span>
                  <span className="text-slate-400">: [</span>
                </p>
                <p className="pl-10 text-green-300">
                  &quot;Artificial Intelligence&quot;,
                </p>
                <p className="pl-10 text-green-300">
                  &quot;Chatbots&quot;,
                </p>
                <p className="pl-10 text-green-300">
                  &quot;Web Development&quot;
                </p>
                <p className="pl-5 text-slate-400">],</p>
                <p className="pl-5">
                  <span className="text-blue-300">mindset</span>
                  <span className="text-slate-400">: </span>
                  <span className="text-green-300">
                    &quot;Keep building&quot;
                  </span>
                </p>
                <p className="text-slate-300">{"};"}</p>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-blue-400/15 bg-blue-500/[0.07] p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/15 text-xl text-blue-300">
                  ✦
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Building the future
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    One project at a time.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 top-16 hidden rounded-xl border border-white/10 bg-[#102139] px-4 py-3 shadow-xl sm:block">
              <span className="text-sm font-semibold text-cyan-300">
                AI + Code
              </span>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/10 bg-[#102139] px-4 py-3 shadow-xl sm:block">
              <span className="text-sm font-semibold text-blue-300">
                Learning Every Day ↗
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 border-t border-white/[0.06] bg-[#091625] py-24 sm:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              Get to know me
            </p>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Turning curiosity
              <span className="block text-slate-400">
                into creation.
              </span>
            </h2>
            <div className="mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-400 sm:text-lg">
            <p>
              I&apos;m Muhammad Waqas, a BS student at the University of
              Sargodha with a growing interest in software development and
              artificial intelligence. I enjoy understanding how technology
              works and using what I learn to build practical projects.
            </p>
            <p>
              My current focus is strengthening my programming fundamentals,
              exploring modern web development, and learning how AI-powered
              chatbots can make digital experiences more helpful and
              interactive.
            </p>
            <p>
              I believe consistent practice, curiosity, and learning from
              mistakes are essential to becoming a skilled developer. My goal
              is to turn ideas into useful applications and continue growing
              as a developer.
            </p>

            <div className="grid gap-4 pt-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/[0.08] bg-[#0d1d30] p-5 transition hover:border-blue-400/30">
                <span className="text-2xl text-blue-400">⌘</span>
                <h3 className="mt-3 font-bold text-white">
                  Software Development
                </h3>
                <p className="mt-2 text-sm leading-6">
                  Writing code and building practical applications.
                </p>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-[#0d1d30] p-5 transition hover:border-cyan-400/30">
                <span className="text-2xl text-cyan-400">✳</span>
                <h3 className="mt-3 font-bold text-white">
                  Artificial Intelligence
                </h3>
                <p className="mt-2 text-sm leading-6">
                  Exploring intelligent systems and conversational AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-24 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              My toolkit
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Skills &amp; Technologies
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Technologies I&apos;m learning and using to develop my
              programming skills and turn ideas into projects.
            </p>
          </div>

          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="group rounded-xl border border-white/10 bg-[#0c1b2e] px-5 py-3 text-sm font-semibold text-slate-300 shadow-lg shadow-black/5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300"
              >
                <span className="mr-2 text-blue-500">
                  {["✦", "</>", "⌘", "▲"][index % 4]}
                </span>
                {skill}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-blue-400/15 bg-gradient-to-r from-blue-500/[0.08] to-cyan-500/[0.04] p-6 text-center sm:p-8">
            <p className="text-lg font-bold text-white">
              Always exploring. Always improving.
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              These skills represent my learning journey, with plenty more to
              discover and master.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-24 border-y border-white/[0.06] bg-[#091625] py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
                What I&apos;m building
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Featured Projects
              </h2>
            </div>
            <p className="max-w-md leading-7 text-slate-400">
              A selection of projects that reflect my interests in web
              development, Python programming, and AI.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c1b2e] transition duration-300 hover:-translate-y-2 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-950/30"
              >
                <div
                  className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}
                >
                  <span className="absolute right-5 top-5 font-mono text-sm text-slate-400/70">
                    {project.number}
                  </span>
                  <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-[#07111f]/50 text-5xl text-blue-300 shadow-xl transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {project.icon}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-white transition group-hover:text-blue-300">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-white/[0.08] pt-5">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400">
                      Learning &amp; Building
                      <span className="transition group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28"
      >
        <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-2 lg:gap-20 lg:px-12">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-400">
              Get in touch
            </p>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Let&apos;s build
              <span className="block text-blue-400">something great.</span>
            </h2>
            <p className="mt-6 max-w-lg leading-8 text-slate-400">
              Have a project idea, want to discuss AI and chatbots, or simply
              want to connect with a fellow learner? Send me a message.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-xl text-blue-400">
                  ✉
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="mt-1 font-medium text-white">
                    waqas@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-xl text-blue-400">
                  ⌖
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="mt-1 font-medium text-white">
                    Sargodha, Pakistan
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-bold text-slate-300 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-blue-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/[0.08] bg-[#0c1b2e] p-6 shadow-2xl shadow-black/10 sm:p-8"
          >
            <h3 className="text-2xl font-bold text-white">
              Send a Message
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Fill in the details below to start a conversation.
            </p>

            <div className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-300"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => {
                    setSubmitted(false);
                    setForm({ ...form, name: e.target.value });
                  }}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-[#07111f] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-300"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  value={form.email}
                  onChange={(e) => {
                    setSubmitted(false);
                    setForm({ ...form, email: e.target.value });
                  }}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-[#07111f] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={5}
                  maxLength={3000}
                  rows={5}
                  value={form.message}
                  onChange={(e) => {
                    setSubmitted(false);
                    setForm({ ...form, message: e.target.value });
                  }}
                  placeholder="Tell me about your idea..."
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#07111f] px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Send Message <span>↗</span>
              </button>

              {submitted && (
                <p
                  role="status"
                  className="rounded-lg border border-blue-400/20 bg-blue-500/10 p-3 text-sm leading-6 text-blue-300"
                >
                  Your email app should open with your message prepared.
                  Please send the email to complete your message.
                </p>
              )}

              <p className="text-center text-xs leading-5 text-slate-500">
                This form uses your email application. No message is stored
                on a server.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.07] bg-[#050d18]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 sm:px-8 md:flex-row lg:px-12">
          <a
            href="#home"
            className="text-lg font-bold tracking-tight text-white"
          >
            Muhammad Waqas<span className="text-blue-500">.</span>
          </a>

          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Muhammad Waqas. Built with Next.js
            &amp; Tailwind CSS.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-blue-400"
          >
            Back to top <span>↑</span>
          </a>
        </div>
      </footer>
    </main>
  );
}