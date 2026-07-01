import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Download,
  FileText,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  RadioTower,
  Sparkles,
  SquareArrowOutUpRight,
  Workflow,
} from 'lucide-react';
import './styles.css';

const resumePath = '/resume/Trey-Harnden-Resume-June-2026.pdf';

const metrics = [
  {
    value: '20+',
    label: 'six-figure Folloze deals',
  },
  {
    value: '111%',
    label: 'NRR against a $3.57M TCV quota',
  },
  {
    value: '27%',
    label: 'H1 inbound demo lift from machine-first content agents',
  },
  {
    value: '2 cities',
    label: 'ready to relocate for Seattle or San Francisco',
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
    body: 'Builds practical agents and tools across outbound, thought leadership, meeting prep, follow-up, demo environments, deal rooms, CRM hygiene, and customer research.',
  },
];

const portfolio = [
  {
    number: '01',
    title: 'Folloze Content Engine',
    category: 'AEO / GEO pipeline',
    body: 'A Python publishing system that turns scheduled product-marketing topics into researched, optimized Folloze Insights articles with HTML, JSON-LD, scoring, deployment checks, and social briefs.',
    stack: ['Python', 'LLMs', 'JSON-LD', 'Vercel'],
    href: 'https://github.com/0xTrey/folloze-content-engine',
    linkLabel: 'Public GitHub',
  },
  {
    number: '02',
    title: 'Folloze AEO/GEO Blog Engine',
    category: 'LLM citation surface',
    body: 'A machine-first content pipeline for folloze-abm.com focused on rankings, alternatives, comparisons, glossary, methodology pages, and structured citation surfaces.',
    stack: ['Python', 'Schema', 'Vercel', 'Cloudflare'],
    linkLabel: 'Internal project',
  },
  {
    number: '03',
    title: 'Folloze LinkedIn Engine',
    category: 'Executive content system',
    body: 'A downstream adaptation layer that reads Folloze social briefs and turns them into role-specific LinkedIn drafts while preserving source truth, voice, cadence, and feedback history.',
    stack: ['Docs', 'Gmail', 'LLMs', 'Content Ops'],
    href: 'https://github.com/0xTrey/folloze-linkedin-engine',
    linkLabel: 'Public GitHub',
  },
  {
    number: '04',
    title: 'Folloze Outbound Engine',
    category: 'AI SDR operations',
    body: 'An API-driven outbound loop across Apollo, email reveal, account research, bounded AI personalization, Smartlead enrollment, Salesforce context, Folloze engagement data, and Neon state.',
    stack: ['Apollo', 'Smartlead', 'Salesforce', 'Neon'],
    href: 'https://github.com/0xTrey/folloze-outbound-engine-public',
    linkLabel: 'Public GitHub',
  },
  {
    number: '05',
    title: 'Post-Call Deal Room Autopilot',
    category: 'Buyer-safe follow-up',
    body: 'A seller-reviewed package generator that turns Granola, Zoom, CRM, Gmail, account context, and approved assets into a deal brief, follow-up draft, buyer-safe deal-room plan, and approval checklist.',
    stack: ['Granola', 'Zoom', 'Drive', 'Folloze API'],
    linkLabel: 'Local project',
  },
  {
    number: '06',
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
    title: 'Head of Partnerships & Go To Market Engineering, Folloze',
    body: 'Leads AI strategy, product roadmap guidance, product marketing support, and forward deployed engineering work. Built tools and agents spanning outbound email, thought leadership, meeting prep, follow-up, demo environments, and digital deal-room creation.',
  },
  {
    date: '2025',
    title: 'Enterprise Account Manager & Partnership Manager, Folloze',
    body: 'Rebuilt the partner program, opened a new SMB agency channel, achieved 111% NRR, renewed 27 of 31 logos, and converted 21 customers to multi-year agreements.',
  },
  {
    date: '2022-2024',
    title: 'Enterprise AE & Agency Partnerships Manager, Folloze',
    body: 'Owned enterprise new-logo and customer management quota while leading agency, OEM, co-sell, and targeted-event motions. Finished as #2 AE in 2023 with 78% self-sourced revenue.',
  },
  {
    date: '2020-2022',
    title: 'Account Executive, Banzai / Demio',
    body: 'Helped move the GTM plan upstream, upgraded 43 clients from monthly to annual contracts, and finished as the #1 AE every quarter with 130% quota attainment in 2021.',
  },
  {
    date: '2020-2022',
    title: 'Head of Sales, Modern Stoa',
    body: 'Owned the podcast advertising business line, closed $1.23M in ad sales in 2021 across 136 deals, grew the line 400% from 2020, and managed a three-person team.',
  },
];

const applicationSites = [
  {
    title: 'Zapier application site',
    status: 'Live',
    href: 'https://zapier.trey.work/',
    body: 'Enterprise AE proof, AI automation thesis, role-fit matrix, and proof-of-work narrative.',
  },
  {
    title: 'Replit application site',
    status: 'Live',
    href: 'https://replit.trey.work/#/personal',
    body: 'Personal story, professional summary, operating-principles response, and resume download flow.',
  },
  {
    title: 'Anthropic application site',
    status: 'Planned subdomain',
    body: 'Scaled customer success and AI systems framing. The local build exists, but the public subdomain is not live yet.',
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
    icon: RadioTower,
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
        <span>trey.work</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#roles">Roles</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#applications">Sites</a>
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
  return (
    <section id="top" className="hero section-shell">
      <div className="hero-copy">
        <h1>Customer-facing GTM operator for AI-native companies.</h1>
        <p className="hero-lede">
          I combine enterprise sales, account management, customer success instincts, and hands-on AI systems building. I am looking for a role where I can help an AI-native company turn technical products into revenue, adoption, customer trust, and repeatable go-to-market infrastructure.
        </p>
        <div className="location-row">
          <MapPin size={18} aria-hidden="true" />
          <span>Milwaukee today. Ready to relocate to Seattle or San Francisco for the right role.</span>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href={resumePath} download>
            <Download size={18} aria-hidden="true" />
            Download Resume
          </a>
          <a className="button" href="https://github.com/0xTrey" target="_blank" rel="noreferrer">
            <Github size={18} aria-hidden="true" />
            View GitHub
          </a>
          <a className="button" href="https://www.linkedin.com/in/treyharnden/" target="_blank" rel="noreferrer">
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>
      <div className="hero-media" aria-label="Trey Harnden">
        <img src="/images/trey-headshot.jpg" alt="Trey Harnden professional headshot" />
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
        <span className="section-label">Brief introduction</span>
        <h2>Enterprise GTM background, builder habits, and a bias toward useful AI systems.</h2>
        <p>
          I started in SaaS sales, moved upstream into enterprise revenue work, and kept pulling more of the operating system into my own hands. My strongest lane is the overlap between customer-facing GTM, account-based marketing, digital marketing, technical product fluency, and practical AI workflows that make a team sharper.
        </p>
        <div className="intro-points">
          <div>
            <BriefcaseBusiness size={19} aria-hidden="true" />
            <span>Enterprise sales and account ownership</span>
          </div>
          <div>
            <Workflow size={19} aria-hidden="true" />
            <span>AI-assisted GTM systems and forward-deployed work</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoleSection() {
  return (
    <section id="roles" className="section-shell two-column-section">
      <div className="section-heading">
        <span className="section-label">What I am looking for</span>
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
      <div className="section-heading centered">
        <span className="section-label">Why me</span>
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
            <span className="section-label">GTM engineering portfolio</span>
            <h2>Systems built to make sales, marketing, and customer work more repeatable.</h2>
          </div>
          <p>
            These projects are the technical proof behind the resume. The pattern is consistent: source ledgers, QA gates, approval boundaries, customer-safe outputs, and deployable artifacts.
          </p>
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
              {item.href ? (
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
    <section className="section-shell career-section">
      <div className="section-heading">
        <span className="section-label">Career narrative</span>
        <h2>From SaaS sales into enterprise GTM engineering.</h2>
      </div>
      <div className="timeline">
        {career.map((item) => (
          <article className="timeline-item" key={`${item.date}-${item.title}`}>
            <span>{item.date}</span>
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

function ApplicationSites() {
  return (
    <section id="applications" className="section-shell application-section">
      <div className="section-heading">
        <span className="section-label">Application-site network</span>
        <h2>The root site for custom role-specific subdomains.</h2>
      </div>
      <div className="application-grid">
        {applicationSites.map((site) => (
          <article className="application-card" key={site.title}>
            <span className="status">{site.status}</span>
            <h3>{site.title}</h3>
            <p>{site.body}</p>
            {site.href ? (
              <a href={site.href} target="_blank" rel="noreferrer">
                Open site
                <SquareArrowOutUpRight size={15} aria-hidden="true" />
              </a>
            ) : (
              <span className="muted-link">Subdomain not live yet</span>
            )}
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
          <span className="section-label">Links</span>
          <h2>Public profiles and writing.</h2>
          <p>
            This site is the baseline. The links below point to the deeper evidence: public repositories, journal notes, LinkedIn history, and the broader personal site.
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
          <h2>I want my next role to combine customers, revenue, and AI systems.</h2>
          <p>
            I am looking for the company where my enterprise GTM background and hands-on AI systems work compound into the most useful shape.
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
      <span>Resume site and application-site index for Trey Harnden.</span>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <IntroSection />
        <RoleSection />
        <ProofSection />
        <PortfolioSection />
        <CareerSection />
        <ApplicationSites />
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
