import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowDown, ArrowRight, Check, ChevronDown, FileText, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { createLiquidField } from './liquid-field';
import './styles.css';

const job = 'https://jobs.ashbyhq.com/Varick-Agents/60b30ec4-fa04-47d6-96e8-7b69ab8d94e7';
const email = 'mailto:harnden.trey@gmail.com?subject=Varick%20%7C%20Forward%20Deployed%20GTM%20Engineer';
const resume = '/resume/Trey-Harnden-Varick-GTM-Engineer.pdf';
const publicOutboundRepo = 'https://github.com/0xTrey/folloze-outbound-engine-public';
const aiAbmWebinar = 'https://engage.folloze.com/ai-live-build';

function External({ href, children, className = '', ...props }) {
  return <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const escape = event => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, []);
  return <header className="header"><div className="shell header-inner">
    <a className="wordmark" href="#top" aria-label="Trey Harnden for Varick, back to top"><span className="monogram">TH</span><span>Trey Harnden <i>/</i> <span className="for-brand">for Varick</span></span></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="page-nav" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X /> : <Menu />}</button>
    <nav id="page-nav" className={open ? 'nav open' : 'nav'} aria-label="Page navigation">
      <a href="#fit" onClick={() => setOpen(false)}>The fit</a><a href="#work" onClick={() => setOpen(false)}>The work</a><a href="#approach" onClick={() => setOpen(false)}>The results</a>
      <External href={email} className="nav-cta" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={17} /></External>
    </nav>
  </div></header>;
}

function Hero() {
  const root = useRef(null), canvas = useRef(null);
  useEffect(() => createLiquidField(root.current, canvas.current), []);
  return <section className="hero" id="top" ref={root} data-liquid-field>
    <div className="hero-field" aria-hidden="true"><canvas ref={canvas} className="liquid-canvas"/><div className="field-bubble bubble-one"/><div className="field-bubble bubble-two"/><div className="field-bubble bubble-three"/><div className="field-light"/></div>
    <div className="shell hero-inner">
    <div className="hero-copy"><h1>I close the deal.<br /><span>I build the<br className="desktop-break" /> system.</span></h1>
      <p>I've won enterprise accounts, grown them, and built the AI systems behind my work. I want to bring all three to Varick.</p>
      <div className="hero-actions"><a href="#work" className="button primary">See how I work <ArrowDown size={18} /></a><External href={resume} className="button quiet">Read my résumé <ArrowUpRight size={18} /></External></div>
      <div className="hero-role"><span className="blue-dot" />Forward Deployed GTM Engineer<External href={job} aria-label="View Varick's Forward Deployed GTM Engineer role"><ArrowUpRight size={15} /></External></div>
    </div><div className="hero-side"><a className="identity-card" href="#about"><img src="/images/trey-headshot.jpg" alt="Trey Harnden" /><div><strong>Trey Harnden</strong><span>Enterprise sales × GTM engineering</span></div><ArrowDown size={19} /></a></div>
    </div>
  </section>;
}

const metrics = [
  { value: '20+', label: 'six-figure new-logo deals', source: 'Folloze · Enterprise sales' },
  { value: '78%', label: 'of revenue self-sourced', source: 'Folloze · 2023' },
  { value: '#1', label: 'AE every quarter', source: 'Banzai / Demio · 2020–2022' },
  { value: '111%', label: 'net revenue retention', source: 'Folloze · 2025 · $3.57M TCV book' },
];

function Proof() {
  return <section className="proof-band" aria-label="Commercial track record"><div className="shell proof-grid">{metrics.map(m => <div className="metric" key={m.value}><strong>{m.value}</strong><span>{m.label}</span><small>{m.source}</small></div>)}</div></section>;
}

const fit = [
  { title: 'Get the right buyers moving.', need: 'Qualify inbound. Build trust fast.', proof: 'Enterprise discovery, customer AI workshops, and live demos. I can find the workflow, the owner, and the reason to act.', link: { label: 'Register for AI for ABM · Oct 15', href: aiAbmWebinar } },
  { title: 'Create demand with my own tools.', need: 'Build outbound to the accounts you want.', proof: 'I built an outbound engine connecting account research, Salesforce, enrichment, personalization, and buyer signals.', link: { label: 'View the public GitHub repo', href: publicOutboundRepo } },
  { title: 'Stay in the deal through signature.', need: 'Own the commercial outcome.', proof: '20+ six-figure new-logo deals at Folloze. I know the work between a good first call and a signed contract.' },
  { title: 'Make the next deal easier.', need: 'Turn client feedback into a stronger system.', proof: 'My work spans partnerships, GTM engineering, product feedback, demos, and customer enablement. The learning comes back into the business.' },
];

function Fit() {
  return <section id="fit" className="section shell fit-section"><div className="section-head"><h2>Your pipeline<br />needs an owner.</h2><div className="section-intro"><p>You need someone who can work the inbound, build the outbound, and stay accountable through signature. That's the intersection I've been working toward.</p></div></div>
    <div className="fit-list">{fit.map((f,i) => <article className="fit-row" key={f.title}><span className="row-number">{i+1}</span><div><h3>{f.title}</h3><span className="fit-need">{f.need}</span></div><p>{f.proof}{f.link && <External href={f.link.href} className="text-link fit-evidence-link">{f.link.label}<ArrowUpRight size={16} /></External>}</p><Check size={22} aria-hidden="true" /></article>)}</div>
  </section>;
}

const projects = [
  { id:'outbound', name:'The outbound engine', type:'Research → relevant outreach → signal memory', copy:'I built the operating loop I wanted as a seller: research the account, understand the person, create a useful touch, and carry what we learn into the next one.', role:'I designed the operating model and built the engine with coding agents. The public reference shows connector boundaries, scoring, orchestration, and send controls.', nodes:['Account + contact','Research + scoring','Approved outreach','Reply + engagement','Next useful touch'], stack:['Python','Postgres','Salesforce','Apollo','Smartlead'], links:[{label:'Inspect the source',href:publicOutboundRepo},{label:'Architecture walkthrough',href:'https://replit.trey.work/assets/folloze-outbound-engine-architecture.html'}], note:'Sanitized public reference. Customer data and production telemetry stay private.' },
  { id:'content', name:'The content engine', type:'Research → useful content → quality checks', copy:'A content program needs a repeatable operation. I built a pipeline that researches, produces structured articles, checks quality, and prepares the release.', role:'I defined the workflow, editorial constraints, and release checks, then built the system with Codex. I operate the calendar and feed results back into product marketing.', nodes:['Topic + sources','Research + draft','Quality + evidence','Release review','Published content'], stack:['Python','LLMs','JSON-LD','Publishing','QA'], links:[{label:'Inspect the source',href:'https://github.com/0xTrey/folloze-content-engine'},{label:'See the publication',href:'https://www.folloze-blog.com/'}], note:'The broader content program contributed to a 27% lift in inbound demo requests in H1 2026.' },
  { id:'enablement', name:'The customer activation path', type:'Connection → useful workflow → adoption', copy:'An integration only matters when a customer can use it. I built the enablement around Folloze MCP so teams can get from setup to a useful, reviewed experience.', role:'I led customer enablement and the cross-functional connector launch: setup guidance, demos, walkthroughs, portable skills, and feedback into the product.', nodes:['Connect tools','Choose a workflow','Build with context','Review the output','Activate the team'], stack:['MCP','Claude','Codex','Customer skills','Enablement'], links:[{label:'Explore the customer skills',href:'https://github.com/0xTrey/folloze-mcp-customer-skills'}], note:'Public enablement and reusable skills. Enterprise deployment details can be discussed in person.' },
];

function Work() {
  const [selected,setSelected] = useState(0);
  const p=projects[selected];
  const tabs=useRef([]);
  function navigate(event, index) {
    const keys={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1};
    let next;
    if (keys[event.key]) next=(index+keys[event.key]+projects.length)%projects.length;
    else if(event.key==='Home') next=0;
    else if(event.key==='End') next=projects.length-1;
    else return;
    event.preventDefault(); setSelected(next); tabs.current[next]?.focus();
  }
  return <section className="work-section" id="work"><div className="shell section"><div className="section-head"><h2>Built for the work<br />between systems.</h2><p className="section-intro">These are systems I built around work I know firsthand. Open the source. Follow the workflow. Ask me about the decisions.</p></div>
    <div className="work-layout"><div className="project-tabs" role="tablist" aria-label="Selected projects" aria-orientation="vertical">{projects.map((project,i)=><button ref={el=>tabs.current[i]=el} role="tab" id={`tab-${project.id}`} aria-selected={i===selected} aria-controls={`panel-${project.id}`} tabIndex={i===selected?0:-1} onKeyDown={event=>navigate(event,i)} onClick={()=>setSelected(i)} key={project.id} className={selected===i?'project-tab selected':'project-tab'}><span className="tab-number">{i+1}</span><span>{project.name}</span><ArrowUpRight size={22} /></button>)}<External href="https://github.com/0xTrey" className="github-link"><Github size={18} /> More of what I've built <ArrowUpRight size={16} /></External></div>
      <article className="project-panel" key={p.id} role="tabpanel" id={`panel-${p.id}`} aria-labelledby={`tab-${p.id}`} tabIndex={0}>
        <div className="workflow" aria-label={p.type}><div className="workflow-head"><span>WORKFLOW / {selected+1}</span><span className="flow-status"><span />Source available</span></div><div className="flow-nodes">{p.nodes.map((node,i)=><React.Fragment key={node}><div className={i===2?'flow-node core':'flow-node'}><span>{i+1}</span>{node}</div>{i<p.nodes.length-1&&<div className="flow-connector" aria-hidden="true"><span /></div>}</React.Fragment>)}</div><div className="workflow-foot">{p.stack.map(s=><span key={s}>{s}</span>)}</div></div>
        <h3>{p.name}</h3><p className="project-copy">{p.copy}</p><details className="project-details"><summary>My role in the build <ChevronDown size={16} /></summary><p>{p.role}</p></details>
        <div className="project-links">{p.links.map(link=><External href={link.href} className="text-link" key={link.href}>{link.label}<ArrowUpRight size={16} /></External>)}</div><p className="project-note">{p.note}</p>
      </article>
    </div>
  </div></section>;
}

const caseHistories = [
  { id:'folloze-revenue', name:'Revenue at Folloze', company:'Folloze', kind:'Enterprise sales + account growth · 2022–2026', status:'Commercial record', context:'I owned enterprise deals from discovery through contract, then took on account growth and rebuilt the partner program.', headline:'Signed business. Renewed accounts.', outcomes:[{value:'20+',label:'six-figure new-logo deals · 2022–2024'},{value:'$337K ARR',label:'from four partner-sourced deals · 2025'},{value:'27 of 31',label:'customers renewed; 21 moved to multiyear agreements · 2025'}], details:['Self-sourced 78% of my 2023 revenue.','Built a new agency channel worth $202K ARR in 2025.','Achieved 111% net revenue retention on a $3.57M TCV book in 2025.'], link:{label:'Read the commercial record',href:resume}, note:'Results from my résumé. Customer contracts remain private.' },
  { id:'trade-ledger', name:'Trade Ledger', company:'Trade Ledger account research', kind:'Custom customer tool · Fall 2024', status:'Working prototype', context:'Their account executives needed useful company context from long SEC filings. I turned their ABM research requirements into a repeatable account-dossier workflow.', headline:'Company filings became sales briefs.', outcomes:[{value:'10-K + 10-Q',label:'company filings as the input'},{value:'Retrieval + prompts',label:'relevant context extracted with chained prompting'},{value:'Account dossier',label:'a repeatable ABM research brief for sellers'}], details:['Built a custom Python application with AI coding assistance.','Used retrieval and chained prompts to extract the information needed for each account dossier.','Delivered a working customer prototype in fall 2024.'], link:{label:'Talk through this build',href:email}, note:'Customer prototype. The implementation stays private.' },
  { id:'try-me-now', name:'Try Me Now', company:'Folloze Try Me Now', kind:'Product direction + build', status:'Working V1', context:'The CEO brief was broad: help buyers experience Folloze’s value quickly. I shaped the requirements, interaction logic, architecture, and QA, then built the first usable version with coding agents.', headline:'A broad brief became a working product.', outcomes:[{value:'Company context',label:'a guided starting point for the buyer'},{value:'Brand research',label:'context for a personalized campaign page'},{value:'Public V1',label:'a build the team and buyers can open and review'}], details:['Translated the initial request into a defined product and interaction flow.','Built the first usable version in roughly ten focused hours.','Continued refining the experience, review requirements, and launch gaps.'], link:{label:'Open Try Me Now',href:'https://folloze-try-me-now.vercel.app'}, note:'Working V1. Production hardening remains part of the work.' },
];

function Results() {
  const [selected,setSelected]=useState(0), [expanded,setExpanded]=useState(false);
  const tabs=useRef([]), c=caseHistories[selected];
  function select(index) { setSelected(index); setExpanded(false); }
  function navigate(event,index) {
    let next;
    if(event.key==='ArrowRight'||event.key==='ArrowDown') next=(index+1)%caseHistories.length;
    else if(event.key==='ArrowLeft'||event.key==='ArrowUp') next=(index-1+caseHistories.length)%caseHistories.length;
    else if(event.key==='Home') next=0;
    else if(event.key==='End') next=caseHistories.length-1;
    else return;
    event.preventDefault(); select(next); tabs.current[next]?.focus();
  }
  return <section className="results-section" id="approach"><div className="shell section"><div className="section-head"><h2>Real deals.<br />Working systems.</h2><p className="section-intro">The deals I've owned and the tools I've built. What I did, what came out of it, and what you can inspect.</p></div>
    <div className="case-picker" role="tablist" aria-label="Real deals and builds">{caseHistories.map((history,i)=><button ref={el=>tabs.current[i]=el} key={history.id} role="tab" id={`case-tab-${history.id}`} aria-selected={selected===i} aria-controls={`case-panel-${history.id}`} tabIndex={selected===i?0:-1} onKeyDown={event=>navigate(event,i)} onClick={()=>select(i)} className={selected===i?'case-choice active':'case-choice'}><span>{i+1}</span>{history.name}<ArrowRight size={17}/></button>)}</div>
    <article className="case-history" key={c.id} role="tabpanel" id={`case-panel-${c.id}`} aria-labelledby={`case-tab-${c.id}`} tabIndex={0}>
      <div className="case-context"><h3>{c.company}</h3><div className="case-meta"><span>{c.kind}</span><span className="case-status">{c.status}</span></div><p>{c.context}</p><External href={c.link.href} className="text-link case-link">{c.link.label}<ArrowUpRight size={16}/></External><p className="case-note">{c.note}</p></div>
      <div className="case-results"><h3>{c.headline}</h3><dl className="case-outcomes">{c.outcomes.map(outcome=><div key={outcome.value}><dt>{outcome.value}</dt><dd>{outcome.label}</dd></div>)}</dl><button className="inspect-button" onClick={()=>setExpanded(!expanded)} aria-expanded={expanded} aria-controls={`case-details-${c.id}`}>{expanded?'Close the details':'My role and the details'}<ChevronDown size={18}/></button><div id={`case-details-${c.id}`} hidden={!expanded} className="case-details"><ul>{c.details.map(detail=><li key={detail}>{detail}</li>)}</ul></div></div>
    </article>
  </div></section>;
}

function Plan() {
  const steps=[{time:'Days 1–7',title:'Understand the real pipeline.',body:'Work the inbound. Review live opportunities with the team. Learn which problems, buyers, and signals turn into signed work.',output:'A shared qualification standard and clear owners for active deals.'},{time:'Days 8–14',title:'Build around the bottleneck.',body:'Ship one useful improvement to intake, research, follow-up, or deal coordination. Build a targeted outbound test from actual buyer evidence.',output:'A working improvement, a defined cohort, and measured reply and meeting rates.'},{time:'Days 15–30',title:'Turn learning into repeatability.',body:'Keep working deals. Tighten the forecast. Feed recurring buyer objections into messaging, demos, and delivery scoping.',output:'A cleaner forecast and a repeatable motion built from real conversations.'}];
  return <section id="plan" className="section shell plan-section"><div className="section-head"><h2>My first 30 days.</h2><p className="section-intro">An initial plan to test with the team. The live pipeline determines the priorities.</p></div><div className="plan-grid">{steps.map((s,i)=><article key={s.time}><h3>{s.title}</h3><p>{s.body}</p><div className="plan-time"><span>{i+1}</span>{s.time}</div><div className="plan-output"><span>What you'd see</span><p>{s.output}</p></div></article>)}</div></section>;
}

function About() {
  return <section className="about-section shell" id="about"><div className="about-portrait"><img src="/images/trey-headshot.jpg" alt="Trey Harnden" loading="lazy" /></div><div className="about-copy"><h2>I got closer<br />to the work.</h2><p>I started in sales. Then I wanted to build the tools, demos, and workflows that made the customer conversation better. Today, my work at Folloze spans enterprise customers, partnerships, and GTM engineering.</p><p>Varick's model makes sense to me: understand how work actually moves, build inside the existing systems, and stay responsible for the outcome.</p><div className="about-links"><External href="https://www.linkedin.com/in/treyharnden/"><Linkedin size={17} />LinkedIn<ArrowUpRight size={15}/></External><External href="https://github.com/0xTrey"><Github size={17}/>GitHub<ArrowUpRight size={15}/></External><External href="https://v2.treyharnden.com/">A little more human<ArrowUpRight size={15}/></External></div></div></section>;
}

function Closing() {
  return <><section className="closing"><div className="shell"><h2>Let's put this<br />to work.</h2><div className="closing-bottom"><p>Give me a workflow, a buyer, and a real constraint.<br />Let's talk through how I'd move it forward.</p><External href={email} className="closing-cta">Talk with Trey <ArrowUpRight size={35}/></External></div></div></section><footer className="shell footer"><span>Trey Harnden / for Varick</span><div><External href={resume}><FileText size={14}/>Résumé</External><External href={email}><Mail size={14}/>Email</External><External href={job}>The role<ArrowUpRight size={14}/></External></div><small>Independent candidate portfolio. No affiliation with Varick Agents.</small></footer></>;
}

function App() {
  return <><a href="#main" className="skip-link">Skip to content</a><Header/><main id="main"><Hero/><Proof/><Fit/><Work/><Results/><Plan/><About/><Closing/></main></>;
}

const appRoot = import.meta.hot?.data.root ?? createRoot(document.getElementById('root'));
if (import.meta.hot) {
  import.meta.hot.data.root = appRoot;
  import.meta.hot.accept();
}
appRoot.render(<App/>);
