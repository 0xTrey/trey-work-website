import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Download,
  FileText,
  Github,
  Globe2,
  Linkedin,
  Mail,
  Pause,
  Play,
  Sparkles,
  X as XIcon,
} from 'lucide-react';
import { createLiquidField } from './liquid-field.js';
import './styles.css';
import './bubble-preview.css';

const resumePath = '/resume/Trey-Harnden-Resume-June-2026.pdf';

const metrics = [
  {
    value: '20+',
    label: 'new-logo six-figure deals while at Folloze',
  },
  {
    value: '111%',
    label: 'NRR against 2025 quota of $3.57M TCV',
  },
  {
    value: '27%',
    label: 'H1 2026 inbound demo lift from machine-first content agents',
  },
  {
    value: '$138K',
    label: 'lifetime average contract value at Folloze',
  },
];

const roleTargets = [
  'Enterprise Account Executive',
  'Account Management',
  'Customer Success',
  'Go-to-Market Engineering',
  'Forward-Deployed GTM / Forward-Deployed Engineer',
];

const proofCards = [
  {
    title: 'Enterprise revenue proof',
    body: 'Closed and managed complex enterprise accounts at Folloze, including 20+ six-figure deals, 111% NRR against a $3.57M TCV quota, and 27 of 31 logos renewed with 21 converted to multi-year agreements.',
  },
  {
    title: 'Technical buyer fluency',
    body: 'Regularly works across marketers, RevOps, IT, executives, agencies, and product teams. The job is translating technical capability into business outcomes and customer trust.',
  },
  {
    title: 'AI systems builder',
    body: 'Built & launched agents to automate internal workflows across sales and marketing, as well as sold & launched customer facing agents to streamline customer marketing programs.',
  },
];

const portfolio = [
  {
    number: '1',
    title: 'Folloze Content Engine',
    category: 'AEO / GEO pipeline',
    body: 'A Python publishing system that turns scheduled product-marketing topics into researched, optimized Folloze Insights articles with HTML, JSON-LD, scoring, deployment checks, and social briefs.',
    stack: ['Python', 'LLMs', 'JSON-LD', 'Vercel'],
    href: 'https://github.com/0xTrey/folloze-content-engine',
    linkLabel: 'Public GitHub',
  },
  {
    number: '2',
    title: 'Folloze AEO/GEO Blog Engine',
    category: 'LLM citation surface',
    body: 'A machine-first content pipeline for folloze-abm.com focused on rankings, alternatives, comparisons, glossary, methodology pages, and structured citation surfaces.',
    stack: ['Python', 'Schema', 'Vercel', 'Cloudflare'],
    links: [
      {
        href: 'https://www.folloze-blog.com/',
        label: 'Folloze Blog',
      },
      {
        href: 'https://www.folloze-abm.com/',
        label: 'Folloze ABM',
      },
    ],
  },
  {
    number: '3',
    title: 'Folloze LinkedIn Engine',
    category: 'Executive content system',
    body: 'A downstream adaptation layer that reads Folloze social briefs and turns them into role-specific LinkedIn drafts while preserving source truth, voice, cadence, and feedback history.',
    stack: ['Docs', 'Gmail', 'LLMs', 'Content Ops'],
    href: 'https://github.com/0xTrey/folloze-linkedin-engine',
    linkLabel: 'Public GitHub',
  },
  {
    number: '4',
    title: 'Folloze AI SDR',
    category: 'AI SDR operations',
    body: 'An API-driven outbound loop across Apollo, email reveal, account research, bounded AI personalization, Smartlead enrollment, Salesforce context, Folloze engagement data, and Neon state.',
    stack: ['Apollo', 'Smartlead', 'Salesforce', 'Neon'],
    href: 'https://github.com/0xTrey/folloze-outbound-engine-public',
    linkLabel: 'Public GitHub',
  },
  {
    number: '5',
    title: 'Deal Management Agent',
    category: 'Buyer-safe follow-up',
    body: 'Launched a team wide agent that manages pre-call research, post call notes, follow up emails, Salesforce updates, and automated digital deal room creation & updates.',
    stack: ['Granola', 'Zoom', 'Drive', 'Folloze API'],
    linkLabel: 'Local project',
  },
  {
    number: '6',
    title: 'Automated Demo Environment Builder',
    category: 'Customer demo factory',
    body: 'A repeatable workflow for customer-specific Folloze demo environments with account research, self-contained templates, local QA, save/publish gates, and tracker updates.',
    stack: ['Folloze MCP', 'HTML/CSS/JS', 'QA', 'Sheets'],
    linkLabel: 'Private repo',
  },
];

const career = [
  {
    date: '2026',
    company: 'Folloze',
    title: 'Head of Partnerships & Go To Market Engineering',
    body: 'Leads AI strategy, product roadmap guidance, product marketing support, and forward deployed engineering work. Built tools and agents spanning outbound email, thought leadership, meeting prep, follow-up, demo environments, and digital deal-room creation.',
  },
  {
    date: '2025',
    company: 'Folloze',
    title: 'Enterprise Account Manager & Partnership Manager',
    body: 'Rebuilt the partner program, opened a new SMB agency channel, achieved 111% NRR, renewed 27 of 31 logos, and converted 21 customers to multi-year agreements.',
  },
  {
    date: '2022-2024',
    company: 'Folloze',
    title: 'Enterprise AE & Agency Partnerships Manager',
    body: 'Owned enterprise new-logo and customer management quota while leading agency, OEM, co-sell, and targeted-event motions. Finished as #2 AE in 2023 with 78% self-sourced revenue.',
  },
  {
    date: '2020-2022',
    company: 'Banzai / Demio',
    title: 'Account Executive',
    body: 'Helped move the GTM plan upstream, upgraded 43 clients from monthly to annual contracts, and finished as the #1 AE every quarter with 130% quota attainment in 2021.',
  },
  {
    date: '2020-2022',
    company: 'Modern Stoa',
    title: 'Head of Sales',
    body: 'Owned the podcast advertising business line, closed $1.23M in ad sales in 2021 across 136 deals, grew the line 400% from 2020, and managed a three-person team.',
  },
  {
    date: '2018-2020',
    company: 'demandDrive',
    title: 'SDR, Team Lead & Senior Inside Sales Representative',
    body: 'Grew from SDR into team lead and senior ISR roles in under two years. Helped launch Amazon Key for Business as its first third-party sales partner, led a 5-7 person horizontal SDR team, supported Moltin enterprise GTM work, and earned early recognition including August 2018 MVP, September 2018 company-wide top earner, Presidents Club, and 139% lifetime quota attainment.',
  },
];

const links = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/treyharnden/',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/0xTrey',
    icon: Github,
  },
  {
    label: 'Public journal',
    href: 'https://harnden.notion.site/My-Second-Brain-a2bcac8bd3424b6bbd838c709dc1bb73',
    icon: FileText,
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/Trey_Harnden',
    icon: XIcon,
  },
  {
    label: 'treyharnden.com',
    href: 'https://treyharnden.com',
    icon: Globe2,
  },
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="trey.work home">
        <span>Trey Harnden<span className="brand-domain"> / work</span></span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#roles">The fit</a>
        <a href="#portfolio">The work</a>
        <a href="#career">Experience</a>
        <a href="#links">Links</a>
      </nav>
      <a className="button button-small" href={resumePath} download>
        <Download size={16} aria-hidden="true" />
        Resume
      </a>
    </header>
  );
}

function Hero() {
  const root = useRef(null);
  const canvas = useRef(null);
  const field = useRef(null);
  const [motion, setMotion] = useState('loading');

  useEffect(() => {
    const engine = createLiquidField(root.current, canvas.current, setMotion);
    field.current = engine;
    return () => {
      engine.destroy();
      field.current = null;
    };
  }, []);

  return (
    <section id="top" className="bubble-hero" ref={root} data-liquid-field>
      <div className="hero-field" aria-hidden="true">
        <canvas ref={canvas} className="liquid-canvas" />
        <div className="field-bubble bubble-one" />
        <div className="field-bubble bubble-two" />
        <div className="field-bubble bubble-three" />
        <div className="field-bubble bubble-four" />
        <div className="field-shade" />
      </div>
      <div className="hero-inner section-shell">
        <div className="hero-copy">
          <h1>I close the deal.<br /><span>I build the system.</span></h1>
          <p className="hero-lede">
            Enterprise sales, partnerships, and hands-on AI systems. I turn technical products into revenue and build the workflows behind the work.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#portfolio">
              See what I've built
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button hero-resume" href={resumePath} download>
              Read my résumé
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <a className="hero-contact" href="mailto:harnden.trey@gmail.com">
            <span aria-hidden="true" /> Let's talk about what you're building <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        <figure className="hero-portrait">
          <img src="/images/trey-headshot.jpg" alt="Trey Harnden professional headshot" />
          <figcaption>Trey Harnden<span>Enterprise GTM × AI systems</span></figcaption>
        </figure>
        <div className="hero-bottom">
          <a href="#portfolio" className="hero-explore">Explore the work <ArrowRight size={15} aria-hidden="true" /></a>
          <button className="motion-toggle" onClick={() => field.current?.toggle()}
            aria-pressed={motion !== 'moving'} disabled={motion === 'static' || motion === 'loading'}>
            {motion === 'moving' ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
            {motion === 'loading' ? 'Loading motion' : motion === 'static' ? 'Static background' : motion === 'moving' ? 'Pause motion' : 'Resume motion'}
          </button>
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  return (
    <section className="metric-band" aria-label="Career proof points">
      {metrics.map((metric) => (
        <div className="metric" key={metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </section>
  );
}

function IntroSection() {
  return (
    <section className="section-shell intro-section">
      <div className="intro-media">
        <img src="/images/trey-rainier.jpeg" alt="Trey Harnden on Mount Rainier" />
      </div>
      <div className="intro-copy">
        <h2>Enterprise GTM background with a focus on building AI powered systems.</h2>
        <p>
          I started as an SDR and over the course of 4 years grew to be an enterprise account executive. Then I expanded my breadth of GTM skills by running targeted marketing plays, leading ABM efforts from the sales side, and owning indirect business (partnerships, channel, and OEM). Over the last year I have gone headfirst into AI and now lead the Go To Market Engineering efforts & Forward Deployed Engineering team.
        </p>
      </div>
    </section>
  );
}

function RoleSection() {
  return (
    <section id="roles" className="section-shell role-section">
      <div className="section-heading">
        <h2>A customer-facing role where AI systems, GTM judgment, and revenue ownership meet.</h2>
      </div>
      <div>
        <p>
          The best fit is an AI-native company that needs someone who can earn customer trust, understand technical products, work with revenue teams, and build operating systems that make the motion stronger across sales, customer success, account-based marketing, and digital marketing.
        </p>
        <div className="role-list" aria-label="Target roles">
          {roleTargets.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofSection() {
  return (
    <section className="section-shell proof-section">
      <div className="section-heading proof-heading">
        <h2>Sales proof, customer fluency, and systems-building are the same operating motion.</h2>
      </div>
      <div className="proof-grid">
        {proofCards.map((card) => (
          <article className="proof-card" key={card.title}>
            <Building2 size={22} aria-hidden="true" />
            <h3>{card.title}</h3>
            <p>{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-shell">
        <div className="portfolio-header">
          <div className="section-heading">
            <h2>Systems built to make sales, marketing, and customer work more repeatable.</h2>
          </div>
        </div>
        <div className="portfolio-grid">
          {portfolio.map((item) => (
            <article className="portfolio-card" key={item.title}>
              <div className="portfolio-topline">
                <span>{item.number}</span>
                <small>{item.category}</small>
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div className="stack-list">
                {item.stack.map((stackItem) => (
                  <span key={stackItem}>{stackItem}</span>
                ))}
              </div>
              {item.links ? (
                <div className="portfolio-links">
                  {item.links.map((link) => (
                    <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                      {link.label}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              ) : item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.linkLabel}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ) : (
                <span className="muted-link">{item.linkLabel}</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CareerSection() {
  return (
    <section id="career" className="section-shell career-section">
      <div className="section-heading">
        <h2>From SaaS sales into enterprise GTM engineering.</h2>
      </div>
      <div className="timeline">
        {career.map((item) => (
          <article className="timeline-item" key={`${item.date}-${item.title}`}>
            <div className="timeline-meta">
              <span>{item.date}</span>
              <small>{item.company}</small>
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function LinksSection() {
  return (
    <section id="links" className="links-section">
      <div className="section-shell links-grid">
        <div>
          <h2>Public profiles and writing.</h2>
          <p>
            I've been building and managing my life in public for the last five years. Feel free to take a look at some of my writing or project portfolio by clicking any of the links to the right.
          </p>
        </div>
        <div className="link-list">
          {links.map(({ label, href, icon: Icon }) => (
            <a href={href} target="_blank" rel="noreferrer" key={label}>
              <Icon size={19} aria-hidden="true" />
              <span>{label}</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="closing-section">
      <div className="section-shell closing-grid">
        <div>
          <Sparkles size={24} aria-hidden="true" />
          <h2>Ready to bring GTM expertise into an AI-native team.</h2>
          <p>
            I am looking for a customer-facing role where I can earn trust with buyers, turn technical products into revenue, and build practical AI systems that make the go-to-market motion stronger.
          </p>
        </div>
        <div className="closing-actions">
          <a className="button button-primary" href={resumePath} download>
            <Download size={18} aria-hidden="true" />
            Download Resume
          </a>
          <a className="button" href="mailto:harnden.trey@gmail.com">
            <Mail size={18} aria-hidden="true" />
            Email Trey
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>trey.work</span>
      <span>Resume site for Trey Harnden.</span>
    </footer>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Metrics />
        <IntroSection />
        <RoleSection />
        <ProofSection />
        <PortfolioSection />
        <CareerSection />
        <LinksSection />
        <Closing />
      </main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
