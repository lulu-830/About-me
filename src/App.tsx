import { useState, useEffect } from 'react';
import {
  Github,
  Mail,
  ArrowUpRight,
  Code2,
  Sparkles,
  Star,
  GitFork,
  MapPin,
  Heart,
  Menu,
  X,
  ChevronDown,
  Terminal,
  Cpu,
  Bug,
  Shield,
  Waves,
  Mountain,
  Languages,
  GraduationCap,
  Target,
} from 'lucide-react';

const profile = {
  name: 'David',
  username: 'lulu-830',
  title: 'Fachinformatiker für Systemintegration (Umschulung)',
  tagline: 'Automatisierung, Reverse Engineering & Systemnahe Programmierung – Lernend durch Projekte.',
  location: 'Germany',
  bio: 'Ich befinde mich im 1. Lehrjahr meiner Umschulung zum Fachinformatiker für Systemintegration und nutze GitHub, um meine Projekte und meinen Lernfortschritt zu teilen. Mein Fokus liegt auf Automatisierung, systemnaher Programmierung und Reverse Engineering. Aktuell lerne ich Python, um meine Automatisierungsprojekte zu erweitern. Mein Ziel nach der Ausbildung: IT-Sicherheit.',
  email: 'liebschwager.david97@gmail.com',
  github: 'https://github.com/lulu-830',
  avatar: 'https://avatars.githubusercontent.com/u/302008009?v=4',
};

const skills = [
  { name: 'AutoIt', level: 85, color: 'from-green-500 to-green-400' },
  { name: 'AutoHotkey', level: 80, color: 'from-blue-500 to-blue-400' },
  { name: 'Reverse Engineering', level: 70, color: 'from-purple-500 to-purple-400' },
  { name: 'x64dbg', level: 65, color: 'from-cyan-500 to-cyan-400' },
  { name: 'Cheat Engine', level: 70, color: 'from-orange-500 to-orange-400' },
  { name: 'Git', level: 75, color: 'from-red-500 to-red-400' },
  { name: 'Python', level: 25, color: 'from-yellow-500 to-yellow-400' },
  { name: 'IT-Sicherheit', level: 30, color: 'from-emerald-500 to-emerald-400' },
];

const techStack = [
  'AutoIt', 'AutoHotkey', 'x64dbg', 'Cheat Engine',
  'Reverse Engineering', 'Binary Patching', 'GUI Development',
  'State Machines', 'Memory Access', 'Automation',
  'Git', 'GitHub', 'Laufzeitanalyse', 'Debugging',
  'Python (Lernend)', 'IT-Sicherheit (Ziel)',
];

const projects = [
  {
    name: 'Fiesta-Online---Bot-Projekt',
    description: 'Fiesta Bot in AutoIt – entstanden zu Lern- und Weiterbildungszwecken. Automatisierung, GUI-Entwicklung, Speicherzugriffe und komplexe Zustandsautomaten.',
    language: 'AutoIt',
    stars: 0,
    forks: 0,
    url: 'https://github.com/lulu-830/Fiesta-Online---Bot-Projekt',
    topics: ['AutoIt', 'Automation', 'GUI', 'State Machine'],
  },
  {
    name: 'Albion-Online---AHK-Makros',
    description: 'Sammlung von AutoHotkey-Makros fuer wiederkehrende Aufgaben im Albion Online Marketplace. Skripte fuer Ausruestung, Offhands und Verkaufsangebote.',
    language: 'AutoHotkey',
    stars: 0,
    forks: 0,
    url: 'https://github.com/lulu-830/Albion-Online---AHK-Makros',
    topics: ['AutoHotkey', 'Macros', 'Automation'],
  },
  {
    name: 'Reverse-Engineering-Runtime-Analysis-Fiesta-Online',
    description: 'Reverse Engineering, Binary Patching und Laufzeitanalyse mit x64dbg und Cheat Engine. Ausschliesslich zu Lern- und Demonstrationszwecken im Rahmen der Ausbildung.',
    language: 'Assembly',
    stars: 0,
    forks: 0,
    url: 'https://github.com/lulu-830/Reverse-Engineering-Runtime-Analysis-Fiesta-Online',
    topics: ['Reverse Engineering', 'x64dbg', 'Cheat Engine', 'Binary Patching'],
  },
];

const languageColors: Record<string, string> = {
  AutoIt: '#1C344B',
  AutoHotkey: '#34a853',
  Assembly: '#6E4C13',
  TypeScript: '#3178c6',
  Python: '#3572A5',
};

const languages = [
  { name: 'Deutsch', level: 'Muttersprache', flag: '🇩🇪' },
  { name: 'Englisch', level: 'Fließend', flag: '🇬🇧' },
  { name: 'Spanisch', level: 'Fortgeschritten', flag: '🇪🇸' },
  { name: 'Latein', level: 'Grundkenntnisse', flag: '🏛️' },
  { name: 'Französisch', level: 'Grundkenntnisse', flag: '🇫🇷' },
];

const interests = [
  { icon: 'Waves', label: 'Schwimmen' },
  { icon: 'Mountain', label: 'Wandern' },
  { icon: 'Cpu', label: 'Automatisierung' },
  { icon: 'Shield', label: 'IT-Sicherheit' },
];

const stats = [
  { label: 'Repositories', value: '3' },
  { label: 'Lehrjahr', value: '1. Jahr' },
  { label: 'Ausbildung', value: 'Systemintegration' },
  { label: 'Weg', value: 'Umschulung' },
];

function Nav({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const links = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d1117]/90 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 text-white font-bold text-lg">
          <Github className="w-6 h-6" />
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all border border-white/10 hover:border-white/20"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d1117] border-b border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              {link}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-white text-sm font-medium w-fit"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Avatar */}
        <div className="inline-block mb-8 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          <img
            src={profile.avatar}
            alt={profile.name}
            className="relative w-32 h-32 rounded-full border-2 border-white/20 object-cover"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-[#0d1117] flex items-center justify-center">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
        </div>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 animate-fade-in">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-gray-400">In Ausbildung zum Fachinformatiker</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
          Hi, ich bin{' '}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-300 transition-colors mb-4"
        >
          <Github className="w-4 h-4" />
          @{profile.username}
        </a>

        <p className="text-xl md:text-2xl text-gray-400 mb-3 font-light">
          {profile.title}
        </p>
        <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
          {profile.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-medium transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:scale-105"
          >
            <Sparkles className="w-5 h-5" />
            Projekte ansehen
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-all border border-white/10 hover:border-white/20"
          >
            <Github className="w-5 h-5" />
            GitHub Profile
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
          <ChevronDown className="w-6 h-6 text-gray-600 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-sm text-blue-400 font-medium mb-4">
              <Code2 className="w-4 h-4" />
              ABOUT ME
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Developer mit{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Leidenschaft
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              {profile.bio}
            </p>
            <div className="flex items-center gap-2 text-gray-500 mb-6">
              <MapPin className="w-4 h-4" />
              <span>{profile.location}</span>
            </div>

            {/* Interests */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">Interessen</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Waves, label: 'Schwimmen' },
                  { icon: Mountain, label: 'Wandern' },
                  { icon: Cpu, label: 'Automatisierung' },
                  { icon: Shield, label: 'IT-Sicherheit' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-blue-500/30 hover:bg-blue-500/5 transition-all"
                  >
                    <item.icon className="w-4 h-4 text-blue-400" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Goal */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-blue-500/5 border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-emerald-400" />
                <h3 className="text-white font-semibold">Mein Ziel nach der Ausbildung</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Spezialisierung auf IT-Sicherheit – mein naechster grosser Schritt.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Stats card */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/0 to-cyan-500/0 group-hover:from-blue-600/5 group-hover:to-cyan-500/5 transition-all duration-300" />
                  <div className="relative">
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <h3 className="text-white font-semibold">Ausbildung</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Beruf</span>
                  <span className="text-white">Fachinformatiker für Systemintegration</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Art</span>
                  <span className="text-white">Umschulung</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Lehrjahr</span>
                  <span className="text-white">1. Jahr</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Languages className="w-5 h-5 text-blue-400" />
                <h3 className="text-white font-semibold">Sprachen</h3>
              </div>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-gray-300 text-sm">{lang.name}</span>
                    </div>
                    <span className="text-gray-500 text-xs">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const [visibleSkills, setVisibleSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisibleSkills(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm text-blue-400 font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            SKILLS
          </div>
          <h2 className="text-4xl font-bold text-white">
            Tech{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
        </div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
          {skills.map((skill, i) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-gray-500 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: visibleSkills ? `${skill.level}%` : '0%',
                    transitionDelay: `${i * 150}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech, i) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-sm font-medium hover:text-white hover:border-blue-500/30 hover:bg-blue-500/5 transition-all cursor-default"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm text-blue-400 font-medium mb-4">
            <Github className="w-4 h-4" />
            PROJECTS
          </div>
          <h2 className="text-4xl font-bold text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Repositories
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center gap-4 text-sm text-gray-500 pt-3 border-t border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: languageColors[project.language] || '#8b949e' }}
                    />
                    {project.language}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4" />
                    {project.stars}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GitFork className="w-4 h-4" />
                    {project.forks}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-all border border-white/10 hover:border-white/20"
          >
            <Github className="w-5 h-5" />
            Alle Repositories ansehen
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="relative p-12 rounded-3xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 overflow-hidden">
          {/* Glow */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 text-sm text-blue-400 font-medium mb-4">
              <Mail className="w-4 h-4" />
              CONTACT
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Lass uns{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                reden
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Ich bin offen für neue Projekte, Zusammenarbeit und interessante Gespraeche. Schreib mir gerne!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-medium transition-all shadow-lg shadow-blue-600/25 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Email senden
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-all border border-white/10 hover:border-white/20"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          <span>by {profile.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={`mailto:${profile.email}`} className="text-gray-500 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d1117] text-white selection:bg-blue-500/30">
      <Nav scrolled={scrolled} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
