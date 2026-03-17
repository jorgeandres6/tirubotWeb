"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "@/img/logo.png";
import ods1 from "@/img/ods1.jpg";
import ods12 from "@/img/ods12.jpg";
import ods13 from "@/img/ods13.jpg";
import ods14 from "@/img/ods14.jpg";
import ods17 from "@/img/ods17.jpg";

type Language = "es" | "en";

const copy = {
  es: {
    navLinks: [
      { label: "Inicio", href: "#inicio" },
      { label: "Solucion", href: "#solucion" },
      { label: "Impacto", href: "#impacto" },
      { label: "ODSs", href: "#ods" },
      { label: "Sobre nosotros", href: "#sobre-nosotros" },
      { label: "Premios y convenios", href: "#contacto" },
    ],
    navCta: "Hablar con el equipo",
    stats: [
      { value: "+12K", label: "botellas recuperadas por dia" },
      { value: "0.02 USD", label: "recompensa por botella depositada" },
      { value: "24/7", label: "operacion pensada para espacios publicos" },
    ],
    pillars: [
      {
        title: "Recolectamos con incentivos",
        description:
          "Las personas depositan botellas PET en estaciones inteligentes y reciben una recompensa inmediata por cada accion completada.",
      },
      {
        title: "Trazamos el impacto",
        description:
          "Cada punto de recoleccion genera metricas claras para municipios, universidades, centros comerciales y marcas que quieran activarse.",
      },
      {
        title: "Reinsertamos material",
        description:
          "El PET recuperado entra en una cadena de valorizacion que impulsa reciclaje, reduccion de residuos y una economia circular medible.",
      },
    ],
    audiences: [
      "Municipios que necesitan infraestructura visible de reciclaje.",
      "Marcas que quieren campanas con impacto ambiental demostrable.",
      "Centros comerciales, campus y espacios de alto trafico.",
      "Ciudadanos que responden mejor cuando reciclar es simple y tangible.",
    ],
    aboutItems: [
      {
        title: "Recycledignity",
        description:
          "Nace de la union entre innovacion, justicia social y economia circular. Es una vision compartida entre Tritubot S.A. y UNIPLAST S.A.S. para construir un modelo integrado donde el reciclaje tenga valor economico y dignidad para las personas.",
      },
      {
        title: "Tritubot S.A.",
        description:
          "Empresa ecuatoriana de tecnologia que opera maquinas de retorno (RVM) para habilitar un reciclaje inclusivo. Garantiza pago justo, directo e incondicional por cada botella PET depositada, sin intermediarios ni exclusiones.",
      },
      {
        title: "UNIPLAST S.A.S.",
        description:
          "Especializada en transformar botellas plasticas y residuos polimericos en materiales para construccion, combinando gestion formal de residuos con tecnologia industrial para reducir el impacto ambiental del plastico.",
      },
    ],
    languageLabel: "Idioma",
    heroEyebrow: "Reciclaje PET con incentivo directo",
    heroTitle: "Una red de reciclaje mas visible, mas medible y mucho mas facil de usar.",
    heroLede:
      "Redisenamos la presencia digital de Tritubot para explicar mejor como funciona: recuperar botellas PET, recompensar a las personas y convertir residuos en una operacion circular con datos reales.",
    heroPrimary: "Ver la solucion",
    heroSecondary: "Explorar impacto",
    signalLabel: "Que hace Tritubot",
    signalTitle: "Recolecta, recompensa y reactiva el valor del PET.",
    signalBody:
      "Una experiencia pensada para ciudadanos, aliados y ciudades que necesitan una forma mas convincente de reciclar.",
    videoFallback: "Tu navegador no soporta video HTML5.",
    proposalEyebrow: "La propuesta",
    proposalTitle: "Del contenedor pasivo a una experiencia que genera retorno.",
    proposalParagraphs: [
      "Nuestro negocio central es recolectar la mayor cantidad posible de botellas PET de consumidores y miembros de la sociedad; pagamos directamente 2 centavos a cualquiera que deposite una botella PET en nuestras maquinas de retorno (RVM). TRITUBOT.",
      "Capturamos miles de botellas al dia, pagamos miles de centavos a nuestros usuarios y recuperamos miles de toneladas.",
      "Sumate al cambio y juntos demosle un respiro al planeta.",
    ],
    impactEyebrow: "Donde encaja mejor",
    impactTitle: "Una plataforma fisica y narrativa para campanas con impacto comprobable.",
    narrativeEyebrow: "ODSs",
    narrativeTitle: "Objetivos Estrategicos de Desarrollo (ODS)",
    metrics: [
      "Los Objetivos Estrategicos de Desarrollo (ODS) establecen estandares detallados de reutilizacion y reciclaje de plastico que deben cumplirse en todos los paises del mundo.",
      "Los pilares para alcanzar estos objetivos son la recoleccion de envases, el reciclaje, la reduccion y la reutilizacion.",
      "Realizamos Recoleccion, Reciclaje, Reduccion y Reutilizacion para nuestros clientes, quienes deben cumplir varios KPI exigidos por ley en cuanto a proporciones de materiales nuevos y reciclados. Para lograrlo, necesitan un aliado estrategico con nuestro modelo de negocio.",
      "Ademas de lo anterior, si no existe un captador fuerte de botellas usadas, habra una escasez importante de PET usado y reciclado en el mercado. Actualmente, Ecuador importa esta materia prima para cumplir los estandares requeridos. La tendencia actual apunta a una restriccion de importaciones de esta materia prima; evidentemente, todos los paises necesitan cumplir la AGENDA 2030.",
    ],
    aboutEyebrow: "Sobre nosotros",
    aboutTitle: "Tecnologia, reciclaje y economia circular con impacto social.",
    ctaEyebrow: "Premios y convenios",
    ctaTitle: "Reconocimientos y alianzas institucionales que respaldan el modelo Tritubot.",
    ctaAwardsTitle: "Premios",
    ctaAwards: [
      "Premio General Ruminahui en 2019 y 2020 por buenas practicas ambientales y sociales.",
      "Mencion preferencial en los Premios Latinoamerica Verde (2020).",
      "Reconocimiento internacional de Corresponsables (Barcelona, Espana) por compromiso con la Agenda 2030.",
      "Seleccionada por la Embajada de la Union Europea para representar a Ecuador en la Semana Diplomatica Ambiental Europea 2021.",
    ],
    ctaConventionsTitle: "Convenios",
    ctaConventions: [
      "Convenio de cooperacion con EMGIRS para reducir el envio de botellas PET al relleno sanitario de Quito.",
      "Acuerdo marco tripartito con la Secretaria de Ambiente del DMQ y la Empresa Publica Metropolitana de Transporte de Pasajeros de Quito.",
      "Implementacion de equipos Tritubot en estaciones de alto flujo para impulsar recuperacion y reciclaje urbano.",
    ],
    youtubeLabel: "Ir al canal de YouTube de Tritubot",
    goHomeLabel: "Ir al inicio",
    mainNavLabel: "Navegacion principal",
  },
  en: {
    navLinks: [
      { label: "Home", href: "#inicio" },
      { label: "Solution", href: "#solucion" },
      { label: "Impact", href: "#impacto" },
      { label: "SDOs", href: "#ods" },
      { label: "About us", href: "#sobre-nosotros" },
      { label: "Awards and conventions", href: "#contacto" },
    ],
    navCta: "Talk to the team",
    stats: [
      { value: "+12K", label: "bottles recovered per day" },
      { value: "0.02 USD", label: "reward per deposited bottle" },
      { value: "24/7", label: "operation designed for public spaces" },
    ],
    pillars: [
      {
        title: "We collect with incentives",
        description:
          "People deposit PET bottles in smart stations and receive an immediate reward for every completed action.",
      },
      {
        title: "We track impact",
        description:
          "Each collection point produces clear metrics for municipalities, universities, malls, and brands that want to activate campaigns.",
      },
      {
        title: "We bring material back",
        description:
          "Recovered PET enters a value chain that drives recycling, waste reduction, and a measurable circular economy.",
      },
    ],
    audiences: [
      "Municipalities that need visible recycling infrastructure.",
      "Brands looking for campaigns with provable environmental impact.",
      "Shopping centers, campuses, and high-traffic spaces.",
      "Citizens who engage more when recycling is simple and tangible.",
    ],
    aboutItems: [
      {
        title: "Recycledignity",
        description:
          "Born from the union of innovation, social justice, and circular economy. It is a shared vision between Tritubot S.A. and UNIPLAST S.A.S. to build an integrated model where recycling creates both social dignity and measurable value.",
      },
      {
        title: "Tritubot S.A.",
        description:
          "An Ecuadorian technology company operating Reverse Vending Machines (RVMs) for inclusive recycling. It guarantees fair, direct, and unconditional payment for every PET bottle deposited, with no intermediaries or exclusions.",
      },
      {
        title: "UNIPLAST S.A.S.",
        description:
          "Specialized in transforming plastic bottles and polymer waste into construction materials, combining formal waste management with industrial technology to reduce plastic's environmental footprint.",
      },
    ],
    languageLabel: "Language",
    heroEyebrow: "PET recycling with direct incentives",
    heroTitle: "A recycling network that is more visible, measurable, and easy to use.",
    heroLede:
      "We redesigned Tritubot's digital presence to explain how it works: recover PET bottles, reward people, and turn waste into a circular operation powered by real data.",
    heroPrimary: "See the solution",
    heroSecondary: "Explore impact",
    signalLabel: "What Tritubot does",
    signalTitle: "Collects, rewards, and reactivates PET value.",
    signalBody:
      "An experience designed for citizens, partners, and cities that need a more compelling way to recycle.",
    videoFallback: "Your browser does not support HTML5 video.",
    proposalEyebrow: "The proposal",
    proposalTitle: "From passive bins to an experience that creates return.",
    proposalParagraphs: [
      "Our core business is to collect as many PET bottles as possible from general consumers and members of society; we directly pay 2 cents to anyone who deposits a PET bottle in our Reverse Vending Machines (RVM). TRITUBOT.",
      "We capture thousands of bottles a day, we pay thousands of cents to our users, and we recover thousands of tons.",
      "Join the change and together let's give the planet a break.",
    ],
    impactEyebrow: "Where it fits best",
    impactTitle: "A physical and narrative platform for campaigns with measurable impact.",
    narrativeEyebrow: "SDO Topic",
    narrativeTitle: "Strategic Development Objectives (SDO)",
    metrics: [
      "Strategic Development Objectives (SDO) stablish detailed standards of plastic reutilization and recycling that must be accomplished by all world countries.",
      "The pillars to accomplish these objectives are containers collection, recycling, reducing, and reusing.",
      "We do Collection, Recycling, Reduction and Reuse for our clients, who will need to accomplish several standards KPI required by law in terms of proportions of new and recycled materials. They need a Strategic Partner with our business model.",
      "Besides the before said argument, if there is not a strong waste bottle catcher, there will be an important used and Recycled Plastic Pet shortage in the market. For now, Ecuador Imports this raw material to meet the required standard. The actual trend points to an Imports restriction of this raw material; obviously, all countries need to accomplish the 2030 AGENDA",
    ],
    aboutEyebrow: "About us",
    aboutTitle: "Technology, recycling, and circular economy with social impact.",
    ctaEyebrow: "Awards and conventions",
    ctaTitle: "Recognitions and institutional partnerships that validate Tritubot's model.",
    ctaAwardsTitle: "Awards",
    ctaAwards: [
      "General Ruminahui award in 2019 and 2020 for strong environmental and social practices.",
      "Preferential mention at Green Latin America Awards (2020).",
      "International Corresponsables recognition (Barcelona, Spain) for commitment to the 2030 Agenda.",
      "Selected by the European Union Embassy to represent Ecuador during the 2021 European Environmental Diplomatic Week.",
    ],
    ctaConventionsTitle: "Conventions",
    ctaConventions: [
      "Cooperation agreement with EMGIRS to reduce PET bottles sent to Quito's sanitary landfill.",
      "Tripartite cooperation framework with the Environment Secretariat of DMQ and Quito's Metropolitan Public Passenger Transportation Company.",
      "Deployment of Tritubot equipment in high-traffic stations to strengthen urban recovery and recycling.",
    ],
    youtubeLabel: "Go to Tritubot YouTube channel",
    goHomeLabel: "Go to home",
    mainNavLabel: "Main navigation",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("es");
  const content = copy[language];
  const odsImages = [
    { src: ods1, label: "ODS 1" },
    { src: ods12, label: "ODS 12" },
    { src: ods13, label: "ODS 13" },
    { src: ods14, label: "ODS 14" },
    { src: ods17, label: "ODS 17" },
  ];

  return (
    <main className="page-shell">
      <header className="site-nav">
        <a className="site-nav__brand" href="#inicio" aria-label={content.goHomeLabel}>
          <Image className="site-nav__logo" src={logo} alt="Tritubot" priority />
        </a>
        <nav aria-label={content.mainNavLabel}>
          <ul className="site-nav__menu">
            {content.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-nav__actions">
          <div className="lang-switch" role="group" aria-label={content.languageLabel}>
            <button
              type="button"
              className={language === "es" ? "is-active" : ""}
              onClick={() => setLanguage("es")}
              aria-pressed={language === "es"}
            >
              ES
            </button>
            <button
              type="button"
              className={language === "en" ? "is-active" : ""}
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>
          <a
            className="nav-youtube"
            href="https://www.youtube.com/@tritubot1784"
            target="_blank"
            rel="noreferrer"
            aria-label={content.youtubeLabel}
            title="YouTube"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.6A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c2 .6 9.4.6 9.4.6s7.4 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
            </svg>
          </a>
          <a className="nav-cta" href="mailto:mduran@recycledignity.com">
            {content.navCta}
          </a>
        </div>
      </header>

      <section className="hero" id="inicio">

        <div className="hero__content">
          <div className="hero__copy">
            <p className="eyebrow">{content.heroEyebrow}</p>
            <h1>{content.heroTitle}</h1>
            <p className="hero__lede">
              {content.heroLede}
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#solucion">
                {content.heroPrimary}
              </a>
              <a className="button button--ghost" href="#impacto">
                {content.heroSecondary}
              </a>
            </div>
          </div>

          <div className="hero__panel">
            <div className="signal-card">
              <span className="signal-card__label">{content.signalLabel}</span>
              <strong>{content.signalTitle}</strong>
              <p>{content.signalBody}</p>
              <div className="signal-card__video-wrap">
                <video
                  className="signal-card__video"
                  autoPlay
                  muted
                  loop
                  controls
                  preload="metadata"
                  playsInline
                >
                  <source src="/vid/Recycledignity.mp4" type="video/mp4" />
                  {content.videoFallback}
                </video>
              </div>
            </div>
            <div className="signal-grid">
              {content.stats.map((stat) => (
                <article className="stat-card" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--grid section--solution" id="solucion">
        <div>
          <p className="eyebrow">{content.proposalEyebrow}</p>
          <h2>{content.proposalTitle}</h2>
          <div className="signal-card__video-wrap">
            <video
              className="signal-card__video"
              autoPlay
              muted
              loop
              controls
              preload="metadata"
              playsInline
            >
              <source src="/vid/Tritubot.mp4" type="video/mp4" />
              {content.videoFallback}
            </video>
          </div>
        </div>
        <div className="copy-block">
          {content.proposalParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section cards-section">
        {content.pillars.map((pillar, index) => (
          <article className="feature-card" key={pillar.title}>
            <span className="feature-card__index">0{index + 1}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </article>
        ))}
      </section>

      <section className="section impact" id="impacto">
        <div className="impact__intro">
          <p className="eyebrow">{content.impactEyebrow}</p>
          <h2>{content.impactTitle}</h2>
        </div>
        <div className="impact__list">
          {content.audiences.map((item) => (
            <div className="impact__item" key={item}>
              <span className="impact__bullet" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section faq-section ods-section" id="ods">
        <div>
          <p className="eyebrow">{content.narrativeEyebrow}</p>
          <h2>{content.narrativeTitle}</h2>
        </div>
        <div className="faq-list">
          {content.metrics.map((metric, index) => (
            <article className="faq-item" key={metric}>
              <h3>{String(index + 1).padStart(2, "0")}</h3>
              <p>{metric}</p>
            </article>
          ))}
        </div>
        <div className="about-videos ods-gallery" aria-label={language === "es" ? "Imagenes ODS" : "SDO images"}>
          {odsImages.map((item) => (
            <article className="ods-gallery__item" key={item.label}>
              <Image src={item.src} alt={item.label} sizes="(max-width: 980px) 45vw, 18vw" />
            </article>
          ))}
        </div>
      </section>

      <section className="section faq-section" id="sobre-nosotros">
        <div>
          <p className="eyebrow">{content.aboutEyebrow}</p>
          <h2>{content.aboutTitle}</h2>
        </div>
        <div className="faq-list">
          {content.aboutItems.map((item) => (
            <article className="faq-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <div className="about-videos">
          <div className="signal-card__video-wrap">
            <video
              className="signal-card__video"
              autoPlay
              muted
              loop
              controls
              preload="metadata"
              playsInline
            >
              <source src="/vid/1.mp4" type="video/mp4" />
              {content.videoFallback}
            </video>
          </div>
          <div className="signal-card__video-wrap">
            <video
              className="signal-card__video"
              autoPlay
              muted
              loop
              controls
              preload="metadata"
              playsInline
            >
              <source src="/vid/2.mp4" type="video/mp4" />
              {content.videoFallback}
            </video>
          </div>
        </div>
      </section>

      <section className="section cta-banner" id="contacto">
        <div>
          <p className="eyebrow">{content.ctaEyebrow}</p>
          <h2>{content.ctaTitle}</h2>
        </div>
        <div className="cta-grid">
          <article className="cta-card">
            <h3>{content.ctaAwardsTitle}</h3>
            <ul>
              {content.ctaAwards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="cta-card">
            <h3>{content.ctaConventionsTitle}</h3>
            <ul>
              {content.ctaConventions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}
