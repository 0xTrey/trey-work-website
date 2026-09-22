import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Route,
  X,
} from 'lucide-react';
import './styles.css';

const enterpriseRole = 'https://jobs.ashbyhq.com/openrouter/34db850d-579f-4b4c-9827-76bc712b1a41';
const githubProfile = 'https://github.com/0xTrey';
const resume = '/resume/Trey-Harnden-OpenRouter-Enterprise-AE.pdf';

const proof = [
  { value: '20+', label: 'six-figure new-logo deals at Folloze' },
  { value: '78%', label: 'of 2023 revenue self-sourced' },
  { value: '111%', label: 'net revenue retention in 2025 on a $3.57M TCV book' },
  { value: '2,515', label: 'GitHub contributions in the year ending Sept. 22, 2026' },
];

const milestones = [
  { date: 'June 2020', dateTime: '2020-06', title: 'Read the GPT-3 paper', detail: 'Started following what large language models could make possible for real work.' },
  { date: 'November 2020', dateTime: '2020-11', title: 'Started my Second Brain', detail: 'Began organizing my own data, notes, and ideas into a personal knowledge repository.' },
  { date: 'Nov 30, 2022', dateTime: '2022-11-30', title: 'Joined ChatGPT on launch day', detail: 'Moved from reading about language models to using one directly.' },
  { date: '2023', dateTime: '2023', title: 'Started building with AI', detail: 'Began using AI to create tools and workflows for my own work.' },
  { date: 'September 2024', dateTime: '2024-09', title: 'Started coding with Replit Agent', detail: 'Picked it up the day it launched and began building software through natural-language iteration.' },
  { date: 'Fall 2024', title: 'Built a Trade Ledger research tool', detail: 'Used retrieval and chained prompts to turn 10-K and 10-Q filings into repeatable account dossiers.' },
  { date: 'Feb to Mar 2026', title: 'Built my own LLM gateway and router', detail: 'First committed it in February, then used it under my harness in March to choose models and track token use.' },
  { date: 'Today', title: 'Building across sales and AI', detail: 'Use these systems in customer work, content operations, AgentTape, and my own agent harness.' },
];

const projects = [
  {
    number: '1',
    name: 'AgentTape',
    type: 'Independent product',
    description: 'A Mac app for capturing screen and voice, extracting local context, and handing useful evidence to an agent. I built it because agents need more than a chat transcript to understand real work.',
    tags: ['macOS', 'Local processing', 'Agent context'],
    href: 'https://agenttape.app/',
    link: 'Explore the product',
  },
  {
    number: '2',
    name: 'Personal LLM gateway',
    type: 'Private infrastructure',
    description: 'An OpenAI-compatible client with profiles for local and cloud models, provider fallback choices, and usage tracking. I first committed it in February 2026 and put it to work as the routing layer for my harness that March.',
    tags: ['Model routing', 'OpenAI-compatible', 'Usage telemetry'],
    note: 'Private implementation. Architecture available in conversation.',
  },
  {
    number: '3',
    name: 'Folloze outbound engine',
    type: 'Public repository',
    description: 'A source-aware outbound system that connects account research, enrichment, personalization, CRM context, and enrollment through multiple APIs. Built for a sales workflow I know firsthand.',
    tags: ['Salesforce', 'APIs', 'AI-assisted GTM'],
    href: 'https://github.com/0xTrey/folloze-outbound-engine-public',
    link: 'View repository',
  },
  {
    number: '4',
    name: 'Folloze content engine',
    type: 'Public repository',
    description: 'A researched publishing pipeline with structured data, quality checks, and deployment review. It turns an ongoing content operation into a repeatable system.',
    tags: ['Python', 'Publishing', 'Quality gates'],
    href: 'https://github.com/0xTrey/folloze-content-engine',
    link: 'View repository',
  },
];

const fallbackRepos = [
  { name: 'folloze-outbound-engine-public', description: 'API-driven sales research and outbound workflows', html_url: 'https://github.com/0xTrey/folloze-outbound-engine-public', language: 'Python' },
  { name: 'folloze-content-engine', description: 'AI-assisted content production system', html_url: 'https://github.com/0xTrey/folloze-content-engine', language: 'Python' },
  { name: 'customer-owned-content-engine', description: 'A forkable content engine starter kit', html_url: 'https://github.com/0xTrey/customer-owned-content-engine', language: 'Python' },
  { name: 'Folloze-Skills', description: 'Reusable Folloze-oriented Codex skills', html_url: 'https://github.com/0xTrey/Folloze-Skills', language: null },
];

function External({ href, children, className = '' }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="or-header">
      <div className="or-header-inner">
        <a className="or-wordmark" href="#top" aria-label="Trey Harnden for OpenRouter, back to top">
          <span className="or-mark" aria-hidden="true"><span /></span>
          <span>Trey</span><b>/</b><img className="or-brand-logo" src="/openrouter/brand/openrouter-dark.svg" alt="OpenRouter" />
        </a>
        <button className="or-menu-button" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={open ? 'or-nav is-open' : 'or-nav'} aria-label="Page navigation">
          <a href="#fit" onClick={() => setOpen(false)}>Why this fit</a>
          <a href="#work" onClick={() => setOpen(false)}>Selected work</a>
          <a href="#github" onClick={() => setOpen(false)}>GitHub</a>
          <a href="#perspective" onClick={() => setOpen(false)}>Perspective</a>
          <a className="or-nav-contact" href="mailto:harnden.trey@gmail.com?subject=OpenRouter%20Enterprise%20AE" onClick={() => setOpen(false)}>Contact Trey <ArrowUpRight size={15} /></a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="or-hero or-shell" id="top">
      <div className="or-hero-copy">
        <h1>I know what it takes to make AI infrastructure an <em>enterprise decision.</em></h1>
        <p className="or-hero-lede">I've sold and expanded complex B2B accounts, led partnerships, worked across customer success, and now lead solution engineering and go-to-market engineering (GTME). I also build the AI systems behind my work, and want to bring that combination to OpenRouter as an Enterprise Account Executive.</p>
        <div className="or-hero-actions">
          <a className="or-button or-button-primary" href="#fit">See the case <ArrowDown size={17} /></a>
          <External className="or-button or-button-quiet" href={enterpriseRole}>The Enterprise AE role <ArrowUpRight size={17} /></External>
        </div>
        <div className="or-hero-foot">
          <span><span className="or-status-dot" /> Application by Trey Harnden</span>
          <span>Milwaukee, Wisconsin · Open to remote US</span>
        </div>
      </div>
      <div className="or-hero-visual" aria-label="Trey Harnden portrait and enterprise AI routing illustration">
        <div className="or-orbit orbit-one" /><div className="or-orbit orbit-two" />
        <div className="or-portrait-wrap"><img src="/images/trey-headshot.jpg" alt="Trey Harnden" /></div>
        <div className="or-floating-card or-floating-top"><Route size={19} /><span>GTM judgment<br /><strong>+ builder fluency</strong></span></div>
        <div className="or-floating-card or-floating-bottom"><span className="or-mini-line" /><span>AI builder<br /><strong>since 2023</strong></span></div>
      </div>
    </section>
  );
}

function Proof() {
  return <section className="or-proof" aria-label="Career proof">
    <div className="or-shell or-proof-grid">
      {proof.map(({ value, label }) => <div className="or-proof-item" key={value}><strong>{value}</strong><span>{label}</span></div>)}
    </div>
  </section>;
}

function Fit() {
  return <section className="or-section or-shell" id="fit">
    <div className="or-section-head"><h2>The enterprise sale is where my two tracks meet.</h2><p>OpenRouter needs sellers who can handle long, multistakeholder cycles and explain a technical platform to both builders and executives. I have done the commercial work and built with the underlying tools.</p></div>
    <div className="or-fit-grid">
      <article className="or-fit-card"><BriefcaseBusiness size={23} /><h3>Own the deal</h3><p>At Folloze, I closed 20+ six-figure new-logo deals, became the #2 AE in 2023, and self-sourced 78% of that year's revenue. I know how to create a path from discovery through procurement and signature.</p></article>
      <article className="or-fit-card"><Layers3 size={23} /><h3>Grow the account</h3><p>In 2025, as an enterprise account manager, I managed a $3.57M TCV book to 111% net revenue retention. I renewed 27 of 31 customers and converted 21 to multiyear agreements by staying close to adoption and executive value.</p></article>
      <article className="or-fit-card"><Code2 size={23} /><h3>Speak the buyer's language</h3><p>I've been building software with AI since 2023, before Karpathy coined "vibe coding." I used what is now OpenClaw when it was still called Clawdbot, and built my own LLM gateway and router in March 2026 to route work across models and use tokens more efficiently.</p></article>
    </div>
  </section>;
}

function Thesis() {
  return <section className="or-thesis" id="perspective"><div className="or-shell or-thesis-grid">
    <div className="or-thesis-copy"><h2>Every serious AI team will need a routing layer.</h2><p>My bet is that companies will use a third-party harness or own their harness. Either way, they will need a way to choose models, manage providers, control cost, and set policy underneath it. I built a small version of that for myself. OpenRouter is building the infrastructure for everyone else.</p><p>That makes the sales conversation concrete for me. I can start with the customer's workload and buying process, then connect technical choices to speed, resilience, governance, and ROI.</p><External href="https://openrouter.ai/enterprise" className="or-text-link">OpenRouter for enterprise <ArrowUpRight size={17} /></External></div>
    <div className="or-route-panel" aria-label="Illustration: teams and agents connect through a routing layer to multiple model providers">
      <div className="or-route-panel-head"><span className="or-terminal-dots"><i/><i/><i/></span><span>one workload, many models</span><Route size={17}/></div>
      <div className="or-route-track"><div className="or-route-node"><span>1</span><strong>Teams & agents</strong><small>real workloads</small></div><div className="or-route-connector"><i/></div><div className="or-route-node active"><span>2</span><strong>Routing layer</strong><small>choice · policy · cost</small></div><div className="or-route-connector"><i/></div><div className="or-route-node"><span>3</span><strong>Model providers</strong><small>many options</small></div></div>
      <div className="or-route-caption"><span>Built this pattern locally.</span><span>Want to sell it at enterprise scale.</span></div>
    </div>
  </div></section>;
}

function Origins() {
  return <section className="or-origins or-shell" id="journey" aria-labelledby="or-origins-title">
    <div className="or-section-head"><h2 id="or-origins-title">I've been building toward this for years.</h2><p>From reading GPT-3 to building my own gateway, I've kept turning new AI capabilities into useful tools.</p></div>
    <ol className="or-timeline">
      {milestones.map(milestone => <li className="or-timeline-item" key={milestone.date}>
        {milestone.dateTime ? <time className="or-timeline-date" dateTime={milestone.dateTime}>{milestone.date}</time> : <span className="or-timeline-date">{milestone.date}</span>}
        <span className="or-timeline-track" aria-hidden="true" />
        <div className="or-timeline-content"><h3>{milestone.title}</h3><p>{milestone.detail}</p></div>
      </li>)}
    </ol>
  </section>;
}

function Work() {
  return <section className="or-section or-shell" id="work"><div className="or-section-head"><h2>I build the systems I wish I had as a seller.</h2><p>These projects show the same working style I would bring to OpenRouter: understand the workflow, make the technical path real, and keep the result useful to the people responsible for it.</p></div>
    <div className="or-project-grid">{projects.map(project => <article className="or-project" key={project.name}>
      <div className="or-project-top"><span className="or-project-number">{project.number}</span><span className="or-project-type">{project.type}</span></div>
      <h3>{project.name}</h3><p>{project.description}</p><div className="or-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      {project.href ? <External href={project.href} className="or-project-link">{project.link} <ArrowUpRight size={17}/></External> : <span className="or-project-private">{project.note}</span>}
    </article>)}</div>
    <div className="or-work-ribbon"><span>More of the operating system</span><p>A large Obsidian knowledge vault, a daily task manager, screenshot context capture, customer demo builders, and agents that support content and account workflows. I keep private work private while showing how the pieces fit together.</p></div>
  </section>;
}

function GitHubShowcase() {
  const [repos, setRepos] = useState(null);
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch('https://api.github.com/users/0xTrey/repos?per_page=100&sort=updated', { signal: controller.signal, headers: { Accept: 'application/vnd.github+json' } })
      .then(response => { if (!response.ok) throw new Error('GitHub unavailable'); return response.json(); })
      .then(data => setRepos(Array.isArray(data) ? data.filter(repo => !repo.fork) : fallbackRepos))
      .catch(error => { if (error.name !== 'AbortError') setRepos(fallbackRepos); });
    return () => controller.abort();
  }, []);

  const filtered = useMemo(() => (repos || fallbackRepos).filter(repo => `${repo.name} ${repo.description || ''} ${repo.language || ''}`.toLowerCase().includes(query.toLowerCase())), [repos, query]);
  const visible = expanded || query ? filtered : filtered.slice(0, 6);

  return <section className="or-github" id="github"><div className="or-shell">
    <div className="or-github-head"><div><h2>See the work, then the full picture.</h2><p>My public GitHub is the most direct view into what I have been building. Some customer systems and my personal harness are private; the public repositories are live here.</p></div><External href={githubProfile} className="or-button or-button-outline"><Github size={18}/> Open full GitHub profile <ArrowUpRight size={17}/></External></div>
    <div className="or-contrib"><div className="or-contrib-copy"><strong>2,515 contributions</strong><span>in the preceding year, captured September 22, 2026</span></div><img src="/openrouter/proof/github-contributions-2026-09-22.png" alt="GitHub contribution chart screenshot showing 2,515 contributions in the preceding year as captured on September 22, 2026" /></div>
    <div className="or-repo-browser"><div className="or-repo-toolbar"><div><Github size={20}/><span>Public repositories</span><small>{repos ? `${repos.length} loaded` : 'Loading live list'}</small></div><label><span className="sr-only">Search repositories</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search the work" /></label></div>
      <div className="or-repo-list">{visible.length ? visible.map(repo => <External href={repo.html_url} className="or-repo-row" key={repo.html_url}><span className="or-repo-icon"><Code2 size={17}/></span><span className="or-repo-name"><strong>{repo.name}</strong><small>{repo.description || 'Explore the source and recent changes on GitHub'}</small></span><span className="or-repo-language">{repo.language || 'Repository'}</span><ArrowUpRight size={17}/></External>) : <p className="or-empty">No repositories match that search.</p>}</div>
      {!query && filtered.length > 6 && <button className="or-repo-more" type="button" onClick={() => setExpanded(!expanded)}>{expanded ? 'Show fewer repositories' : `Show all ${filtered.length} loaded repositories`} <ChevronDown className={expanded ? 'is-up' : ''} size={16}/></button>}
    </div>
  </div></section>;
}

function Closing() {
  return <section className="or-closing"><div className="or-shell or-closing-grid"><div><h2>Let's build the enterprise motion for the model layer.</h2><p>I would like to talk about the Enterprise Account Executive role, the customers OpenRouter wants to win, and what a seller who builds could help unlock.</p><div className="or-closing-actions"><a className="or-button or-button-primary" href="mailto:harnden.trey@gmail.com?subject=OpenRouter%20Enterprise%20AE"><Mail size={17}/> Email Trey</a><External href={resume} className="or-button or-button-quiet">View OpenRouter résumé <ArrowUpRight size={17}/></External></div></div><div className="or-closing-links" aria-label="More about Trey"><External href="https://treyharnden.com"><Globe2 size={19}/><span>Personal Website</span><ArrowUpRight size={14}/></External><External href="https://www.linkedin.com/in/treyharnden/"><Linkedin size={19}/><span>LinkedIn</span><ArrowUpRight size={14}/></External><External href="https://x.com/Trey_Harnden"><span className="or-x-icon" aria-hidden="true">𝕏</span><span>X</span><ArrowUpRight size={14}/></External><External href="https://harnden.notion.site/My-Second-Brain-a2bcac8bd3424b6bbd838c709dc1bb73"><BookOpen size={19}/><span>Second Brain</span><ArrowUpRight size={14}/></External></div></div></section>;
}

function App() {
  return <div className="or-app"><a className="or-skip" href="#main">Skip to content</a><Header/><main id="main"><Hero/><Proof/><Fit/><Thesis/><Origins/><Work/><GitHubShowcase/><Closing/></main><footer className="or-footer"><div className="or-shell"><span>Built by Trey Harnden for an OpenRouter application.</span><span>Independent candidate site. OpenRouter brand assets belong to OpenRouter.</span></div></footer></div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
