import { useEffect, useState } from "react";
import { ArrowUpRight, Code, EnvelopeSimple, GithubLogo } from "@phosphor-icons/react";
import { CONTACT_EMAIL, GITHUB_URL, NATIVUNE, SHOWREEL, SKILLS, WEB_TOOLS } from "./content.js";
import { THEMES, applyTheme, readTheme } from "./theme.js";
import Showreel from "./Showreel.jsx";
import UpdateNotice from "./UpdateNotice.jsx";

const [FEATURED, ...PAIR] = WEB_TOOLS;

function Shot({ image, className = "", loading = "lazy" }) {
  return (
    <img
      className={`shot ${className}`}
      src={image.src}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading={loading}
      decoding="async"
    />
  );
}

function ExternalLink({ href, children, variant = "secondary", icon: Icon = ArrowUpRight }) {
  return (
    <a className={`button button-${variant}`} href={href} target="_blank" rel="noopener noreferrer">
      <span>{children}</span>
      <Icon aria-hidden="true" weight="bold" />
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  );
}

function TechList({ items, label }) {
  return (
    <ul className="tech" aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ThemeSwitcher() {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <fieldset className="theme-switch">
      <legend className="visually-hidden">Theme</legend>
      {THEMES.map((option) => (
        <label key={option.id} title={option.description}>
          <input
            type="radio"
            name="theme"
            value={option.id}
            checked={theme === option.id}
            onChange={() => setTheme(option.id)}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </fieldset>
  );
}

function Header() {
  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">HR</span>
          <span className="brand-text">Hantu-Raya</span>
        </a>
        <nav aria-label="Sections" className="site-nav">
          <a href="#work">Work</a>
          <a href="#nativune">Nativune</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">Hantu-Raya</h1>
        <p className="lede">
          Frontend developer building practical web tools with HTML, CSS and JavaScript.
        </p>
        <div className="actions">
          <a className="button button-primary" href="#work">
            View work
          </a>
          <ExternalLink href={GITHUB_URL} icon={GithubLogo}>
            GitHub
          </ExternalLink>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <Shot image={FEATURED.image} className="hero-shot-main" loading="eager" />
        <Shot image={PAIR[0].image} className="hero-shot-side" loading="eager" />
      </div>
    </section>
  );
}

function ToolDetails({ tool }) {
  return (
    <div className="tool-details">
      <h3 id={`${tool.id}-title`} className="tool-name">
        {tool.name}
      </h3>
      <p>{tool.summary}</p>
      <h4 className="detail-label">My part</h4>
      <p>{tool.contribution}</p>
      <TechList items={tool.tech} label={`${tool.name} technologies`} />
      <div className="actions">
        <ExternalLink href={tool.demo} variant="primary">
          Live demo
        </ExternalLink>
        <ExternalLink href={tool.source} icon={Code}>
          Source
        </ExternalLink>
      </div>
    </div>
  );
}

function WebTools() {
  return (
    <section id="work" className="section container" aria-labelledby="work-title">
      <div className="section-head">
        <h2 id="work-title">Web tools</h2>
        <p>
          Three browser tools from my{" "}
          <a href="https://github.com/Hantu-Raya/Web-tools" target="_blank" rel="noopener noreferrer">
            Web-tools<span className="visually-hidden"> (opens in a new tab)</span>
          </a>{" "}
          project. Files are processed on your device and are not uploaded.
        </p>
      </div>

      <Showreel reel={SHOWREEL} />

      <article className="tool tool-featured" aria-labelledby={`${FEATURED.id}-title`}>
        <div className="frame">
          <Shot image={FEATURED.image} />
        </div>
        <ToolDetails tool={FEATURED} />
      </article>

      <div className="tool-pair">
        {PAIR.map((tool) => (
          <article key={tool.id} className="tool" aria-labelledby={`${tool.id}-title`}>
            <div className="frame">
              <Shot image={tool.image} />
            </div>
            <ToolDetails tool={tool} />
          </article>
        ))}
      </div>
    </section>
  );
}

function Nativune() {
  return (
    <section id="nativune" className="section section-band" aria-labelledby="nativune-title">
      <div className="container nativune">
        <div className="nativune-copy">
          <h2 id="nativune-title">{NATIVUNE.name}</h2>
          <p className="lede-small">{NATIVUNE.summary}</p>
          <ul className="points">
            {NATIVUNE.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <TechList items={NATIVUNE.tech} label="Nativune technologies" />
          <div className="actions">
            <ExternalLink href={NATIVUNE.source} icon={GithubLogo}>
              Source
            </ExternalLink>
          </div>
        </div>
        <div className="nativune-visual">
          <div className="frame">
            <Shot image={NATIVUNE.image} />
          </div>
          <div className="frame frame-compact">
            <Shot image={NATIVUNE.compact} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section container" aria-labelledby="skills-title">
      <h2 id="skills-title">Skills</h2>
      <dl className="skills">
        {SKILLS.map((skill) => (
          <div key={skill.group} className="skill-row">
            <dt>{skill.group}</dt>
            <dd>
              <TechList items={skill.items} label={skill.group} />
              <p>{skill.note}</p>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section container" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div>
          <h2 id="contact-title">Contact</h2>
          <p className="lede">Open to part-time remote and project-based frontend work.</p>
          <p>CV available on request{CONTACT_EMAIL ? " by email" : ""}.</p>
        </div>
        <div className="actions">
          {CONTACT_EMAIL && (
            <a className="button button-primary button-email" href={`mailto:${CONTACT_EMAIL}`}>
              <span>{CONTACT_EMAIL}</span>
              <EnvelopeSimple aria-hidden="true" weight="bold" />
            </a>
          )}
          <ExternalLink href={GITHUB_URL} variant={CONTACT_EMAIL ? "secondary" : "primary"} icon={GithubLogo}>
            GitHub
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <WebTools />
        <Nativune />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>© 2026 Hantu-Raya. Built with React and Vite.</p>
        </div>
      </footer>
      <UpdateNotice />
    </>
  );
}
