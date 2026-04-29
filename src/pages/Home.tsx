import { motion, MotionConfig } from "framer-motion";
import { Heart, Target, User, Handshake, Star, Menu, X, Brain, Bone, PersonStanding, CheckCircle2, Phone, Instagram, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { IMAGES } from "@/assets/images";
import { WHATSAPP_LINK, specialties, testimonials, differentials } from "@/lib/index";
import { fadeInUp, staggerContainer, staggerItem, springPresets } from "@/lib/motion";
const iconMap: Record<string, React.ComponentType<{
  className?: string;
}>> = {
  user: User,
  heart: Heart,
  target: Target,
  handshake: Handshake
};
const specialtyIconMap: Record<string, React.ComponentType<{
  className?: string;
}>> = {
  neurofuncional: Brain,
  "traumato-ortopedica": Bone,
  "saude-idoso": PersonStanding
};
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, {
      threshold
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return {
    ref,
    visible
  };
}
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const heroIn = useInView(0.05);
  const atendIn = useInView();
  const especIn = useInView();
  const eficIn = useInView();
  const depIn = useInView();
  const ctaIn = useInView();
  const navLinks = [{
    label: "Início",
    href: "#hero"
  }, {
    label: "Especialidades",
    href: "#especialidades"
  }, {
    label: "Sobre",
    href: "#eficiencia"
  }, {
    label: "Depoimentos",
    href: "#depoimentos"
  }];
  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };
  return <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-background font-sans antialiased">

        {/* ── NAVBAR ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-md" : "bg-transparent"}`} style={scrolled ? {
        background: "#005F70"
      } : {}}>
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
            <a href="#hero" className="flex items-center">
                <img src="public\images\Captura de tela9149.png" alt="Joselma de Sousa – Fisioterapeuta" className={`h-12 w-auto transition-all duration-300 ${scrolled ? "brightness-75" : "brightness-100"}`} />
              </a>

              {/* Desktop nav */}
              <nav className="hidden md:flex items-center gap-7">
                {navLinks.map(link => <a key={link.href} href="javascript:void(0)" onClick={() => handleNavClick(link.href)} className={`text-sm font-medium transition-colors hover:text-white/80 ${scrolled ? "text-white/90" : "text-white/90"}`}>
                    {link.label}
                  </a>)}
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-primary font-semibold text-sm px-4 py-2 rounded-full shadow hover:bg-primary hover:text-white transition-all duration-200">
                  <SiWhatsapp className="h-4 w-4" />
                  Agendar
                </a>
              </nav>

              {/* Mobile toggle */}
              <button className={`md:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-white"}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Abrir menu">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: "auto"
        }} className="md:hidden border-t border-white/20 shadow-lg" style={{
          background: "#005F70"
        }}>
              <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
                {navLinks.map(link => <a key={link.href} href="javascript:void(0)" onClick={() => {
                  handleNavClick(link.href);
                  setMobileMenuOpen(false);
}} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </a>)}
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-primary text-white font-semibold text-sm px-4 py-2 rounded-full" onClick={() => setMobileMenuOpen(false)}>
                  <SiWhatsapp className="h-4 w-4" />
                  Agendar Agora
                </a>
              </nav>
            </motion.div>}
        </header>

        {/* ── HERO ── */}
        <section id="hero" ref={heroIn.ref} className="relative min-h-screen flex items-center overflow-hidden" style={{
        background: "linear-gradient(135deg, #005F70 0%, #0a7a6a 45%, #26BF80 100%)"
      }}>
          {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none" style={{
          background: "radial-gradient(circle, #26BF80 0%, transparent 70%)"
        }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none" style={{
          background: "radial-gradient(circle, #7eedc8 0%, transparent 70%)"
        }} />

          <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Text */}
              <motion.div variants={staggerContainer} initial="hidden" animate={heroIn.visible ? "visible" : "hidden"} className="space-y-6 text-white">
                <motion.div variants={staggerItem}>
                  <span className="inline-flex items-center gap-2 bg-white/15 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">Fisioterapia Domiciliar</span>
                </motion.div>

                <motion.h1 variants={staggerItem} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Volte a Viver Sem Dor e com{" "}
                <span style={{
                color: "#a8f0d4"
              }}>Liberdade</span>
                  de Movimento
                </motion.h1>

                <motion.p variants={staggerItem} className="text-lg text-white/80 leading-relaxed max-w-xl">
                  Recupere sua qualidade de vida com atendimento fisioterapêutico
                  humanizado, personalizado e focado em resultados reais.
                </motion.p>

                <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
                    <SiWhatsapp className="h-5 w-5" />
                    Agendar Atendimento
                  </a>
                  <button onClick={() => document.getElementById('especialidades')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/15 transition-all duration-200">
                    Saiba Mais
                  </button>
                </motion.div>

                <motion.div variants={staggerItem} className="flex items-center gap-8 pt-4">
                  {[{
                  n: "500+",
                  label: "Pacientes atendidos"
                }, {
                  n: "5+",
                  label: "Anos de experiência"
                }, {
                  n: "100%",
                  label: "Dedicação"
                }].map(stat => <div key={stat.label} className="text-center">
                      <p className="text-2xl font-bold text-white">{stat.n}</p>
                      <p className="text-xs text-white/60">{stat.label}</p>
                    </div>)}
                </motion.div>
              </motion.div>

              {/* Hero image */}
              <motion.div initial={{
              opacity: 0,
              x: 60
            }} animate={heroIn.visible ? {
              opacity: 1,
              x: 0
            } : {
              opacity: 0,
              x: 60
            }} transition={springPresets.gentle} className="relative flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-md" style={{
                boxShadow: "0 30px 80px -10px rgba(0,95,112,0.55), 0 0 0 1px rgba(38,191,128,0.25)"
              }}>
                  <img src={IMAGES.FISIO_HERO_5} alt="Joselma de Sousa – Fisioterapeuta" className="w-full h-auto object-cover" />
                  {/* Overlay badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 rounded-2xl p-3 flex items-center gap-3 shadow">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Heart className="h-5 w-5 text-primary fill-primary/30" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-foreground">Joselma de Sousa</p>
                      <p className="text-xs text-muted-foreground">Fisioterapeuta</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                    </div>
                  </div>
                </div>

                {/* Floating pill */}
                
              </motion.div>
            </div>
          </div>

          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 80L1440 80L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 80Z" fill="#ffffff" />
            </svg>
          </div>
        </section>


        {/* ── ESPECIALIDADES ── */}
      <section id="especialidades" ref={especIn.ref} className="py-20" style={{
        background: "#f0faf6"
      }}>
          <div className="container mx-auto px-6">
            <motion.div variants={staggerContainer} initial="hidden" animate={especIn.visible ? "visible" : "hidden"} className="space-y-12">
              <motion.div variants={staggerItem} className="text-center space-y-3">
                <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                  Áreas de atuação
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Especialidades
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Atendimento especializado para cada necessidade, com foco total na sua recuperação
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {specialties.map(specialty => {
                const IconComp = specialtyIconMap[specialty.id] ?? Brain;
                return <motion.div key={specialty.id} variants={staggerItem} className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20">
                      {/* Top accent bar */}
                      <div className="h-1.5 bg-gradient-to-r from-primary to-accent w-full" />

                      <div className="p-7 space-y-5">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <IconComp className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                          </div>
                          <h3 className="text-lg font-bold text-foreground">{specialty.title}</h3>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {specialty.description}
                        </p>

                        <ul className="space-y-2">
                          {specialty.benefits.map((b, i) => <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                              {b}
                            </li>)}
                        </ul>
                      </div>
                    </motion.div>;
              })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── FISIOTERAPIA COM EFICIÊNCIA ── */}
        <section id="eficiencia" ref={eficIn.ref} className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              {/* Images collage */}
              <motion.div initial={{
              opacity: 0,
              x: -40
            }} animate={eficIn.visible ? {
              opacity: 1,
              x: 0
            } : {}} transition={springPresets.gentle} className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden h-52 shadow-md">
                      <img src={IMAGES.FISIOTERAPIA_1} alt="Fisioterapia" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden h-36 shadow-md">
                      <img src={IMAGES.FISIO_OMBRO_7} alt="Tratamento ombro" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="rounded-2xl overflow-hidden h-36 shadow-md">
                      <img src={IMAGES.IDOSO_FISIO_2} alt="Idoso fisioterapia" className="w-full h-full object-cover" />
                    </div>
                    <div className="rounded-2xl overflow-hidden h-52 shadow-md">
                      <img src={IMAGES.FISIO_NEURO_6} alt="Fisio neurológica" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Floating CTA */}
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={eficIn.visible ? {
                opacity: 1,
                y: 0
              } : {}} transition={{
                delay: 0.5,
                ...springPresets.gentle
              }} className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-auto">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-full shadow-xl hover:scale-105 hover:bg-primary/90 transition-all duration-200 whitespace-nowrap">
                    <SiWhatsapp className="h-4 w-4" />
                    Agendar Agora
                  </a>
                </motion.div>
              </motion.div>

              {/* Text */}
              <motion.div variants={staggerContainer} initial="hidden" animate={eficIn.visible ? "visible" : "hidden"} className="space-y-6 lg:pl-6">
                <motion.div variants={staggerItem} className="space-y-3">
                  <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                    Sobre Joselma
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Fisioterapia com a{" "}
                    <span className="text-primary">Eficiência Máxima</span>
                  </h2>
                </motion.div>

                <motion.p variants={staggerItem} className="text-muted-foreground leading-relaxed">
                  Com anos de experiência e uma abordagem 100% centrada no paciente, eu acredito que você é único e merece um tratamento personalizado que respeite
                  suas necessidades, limitações e objetivos de vida.
                </motion.p>

                <motion.p variants={staggerItem} className="text-muted-foreground leading-relaxed">
                  Meu compromisso vai além da técnica: é sobre acolher, compreender e caminhar junto
                  com você em direção à sua recuperação. Cada sessão é planejada com cuidado, empatia
                  e dedicação total.
                </motion.p>

                <motion.div variants={staggerItem} className="space-y-3">
                  {differentials.map(d => {
                  const IC = iconMap[d.icon] ?? Heart;
                  return <div key={d.id} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <IC className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{d.title}</p>
                          <p className="text-xs text-muted-foreground">{d.description}</p>
                        </div>
                      </div>;
                })}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── DEPOIMENTOS ── */}
      <section id="depoimentos" ref={depIn.ref} className="py-20" style={{
        background: "#f0faf6"
      }}>
          <div className="container mx-auto px-6">
            <motion.div variants={staggerContainer} initial="hidden" animate={depIn.visible ? "visible" : "hidden"} className="space-y-12">
              <motion.div variants={staggerItem} className="text-center space-y-3">
                <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                  Nossa Avaliação
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  O que meus pacientes dizem
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map(t => <motion.div key={t.id} variants={staggerItem} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-sm shrink-0" style={{
                    background: "linear-gradient(135deg, #005F70, #26BF80)"
                  }}>
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.condition}</p>
                      </div>
                      <div className="ml-auto flex gap-0.5">
                        {Array.from({
                      length: t.rating
                    }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />)}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      "{t.text}"
                    </p>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section id="cta" ref={ctaIn.ref} className="relative py-24 overflow-hidden" style={{
        background: "linear-gradient(135deg, #005F70 0%, #26BF80 100%)"
      }}>
          {/* Decorative circles */}
          <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full opacity-10 pointer-events-none" style={{
          background: "radial-gradient(circle, white 0%, transparent 70%)"
        }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{
          background: "radial-gradient(circle, white 0%, transparent 70%)"
        }} />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div variants={fadeInUp} initial="hidden" animate={ctaIn.visible ? "visible" : "hidden"} className="max-w-2xl mx-auto text-center space-y-8 text-white">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Dê o primeiro passo rumo à sua{" "}
                <span style={{
                color: "#a8f0d4"
              }}>recuperação</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Não deixe a dor controlar a sua vida. Entre em contato agora e dê o primeiro passo
                rumo à sua transformação. Atendimento humanizado, resultados reais.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-200 text-lg">
                  <SiWhatsapp className="h-5 w-5" />
                  Quero começar agora
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      {/* ── FOOTER ── */}
        <footer style={{
        background: "#005F70"
      }} className="border-t border-white/10 py-10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand logo */}
              <div className="flex items-center">
                <img src="/images/Captura de tela9149.png" alt="Joselma de Sousa – Fisioterapeuta" className="h-14 w-auto" />
              </div>

            {/* Links */}
              <nav className="flex gap-6 text-sm text-white/70">
                {navLinks.map(l => <a key={l.href} href={l.href} onClick={(e) => { e.preventDefault(); handleNavClick(l.href); }} className="hover:text-white transition-colors">
                    {l.label}
                  </a>)}
              </nav>

            {/* Contact icons */}
              <div className="flex items-center gap-3">
                <a href="https://wa.me/8694383365" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white text-white hover:text-primary transition-all" aria-label="WhatsApp">
                  <SiWhatsapp className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/joselma.fisioterapeuta/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white text-white hover:text-primary transition-all" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="tel:8694383365" className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center hover:bg-white text-white hover:text-primary transition-all" aria-label="Telefone">
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center space-y-1">
              <p className="text-sm text-white/60">
                © 2026 Joselma de Sousa. Todos os direitos reservados.
              </p>
              <p className="text-xs text-white/40">
                Desenvolvido por Mikaellen Silva
              </p>
            </div>
          </div>
        </footer>

      </div>
    </MotionConfig>;
}