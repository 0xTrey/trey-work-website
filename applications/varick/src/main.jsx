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
      <a href="#fit" onClick={() => setOpen(false)}>The fit</a><a href="#work" onClick={() => setOpen(false)}>The work</a><a href="#approach" onClick={() => setOpen(false)}>The approach</a>
      <External href={email} className="nav-cta" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={17} /></External>
    </nav>
  </div></header>;
}

function LiquidOrb() {
  const root = useRef(null), canvas = useRef(null), toggle = useRef(null);
  useEffect(() => createLiquidField(root.current, canvas.current, toggle.current), []);
  return <div className="hero-art">
    <div className="orb-axis axis-x" aria-hidden="true" /><div className="orb-axis axis-y" aria-hidden="true" />
    <div className="orb-ring ring-outer" aria-hidden="true" /><div className="orb-ring ring-inner" aria-hidden="true" />
    <div className="liquid-orb" ref={root} data-liquid-field>
      <canvas ref={canvas} className="liquid-canvas" aria-hidden="true" />
      <div className="orb-light" aria-hidden="true" /><div className="orb-bubble bubble-one" aria-hidden="true" /><div className="orb-bubble bubble-two" aria-hidden="true" />
    </div>
    <span className="orbit-label label-sales">Commercial instinct</span><span className="orbit-label label-build">Technical execution</span>
    <div className="art-caption"><span className="blue-dot" />Move through the field.</div>
    <button ref={toggle} className="motion-toggle" data-liquid-toggle type="button" aria-pressed="false"><span aria-hidden="true" />Pause field</button>
    <a className="identity-card" href="#about"><img src="/images/trey-headshot.jpg" alt="Trey Harnden" /><div><strong>Trey Harnden</strong><span>Enterprise sales × GTM engineering</span></div><ArrowDown size={19} /></a>
  </div>;
}

function Hero() {
  return <section className="hero shell" id="top">
    <div className="hero-copy"><h1>I close the deal.<br /><span>I build the<br className="desktop-break" /> system.</span></h1>
      <p>I've won enterprise accounts, grown them, and built the AI systems behind my work. I want to bring all three to Varick.</p>
      <div className="hero-actions"><a href="#work" className="button primary">See how I work <ArrowDown size={18} /></a><External href={resume} className="button quiet">Read my résumé <ArrowUpRight size={18} /></External></div>
      <div className="hero-role"><span className="blue-dot" />Forward Deployed GTM Engineer<External href={job} aria-label="View Varick's Forward Deployed GTM Engineer role"><ArrowUpRight size={15} /></External></div>
    </div><LiquidOrb />
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

const scenarios = [
  { name:'Inbound with real urgency', company:'Northstar Manufacturing', kind:'Operations leader · Inbound', stage:'Discovery', signal:'The COO owns the problem. AP exceptions are delaying month-end close. The team uses SAP and is asking about a scoped pilot.', action:'Get the owner into a working session.', why:'There is a specific operational problem and an accountable sponsor. Validate the baseline, systems, access, and success criteria before proposing scope.', questions:['How many exceptions reach people each week?','Who owns the budget and deployment decision?','What must the pilot demonstrate to move forward?'], output:'Working session with the COO, AP lead, and technical owner. Document the current cost, a bounded pilot, and a dated decision.' },
  { name:'Interest without an owner', company:'Meridian Financial', kind:'Innovation team · Newsletter reply', stage:'Qualification', signal:'A team wants an AI demo. No workflow, sponsor, or budget owner is named. Their request is “show us what agents can do.”', action:'Find a concrete workflow before a broad demo.', why:'Curiosity is useful, but it does not establish a qualified opportunity. Give them a relevant example, then ask for the process and accountable owner.', questions:['Which recurring workflow is slowing the business?','Who is accountable for its outcome today?','Can that person join the next conversation?'], output:'Short, relevant example plus an introduction to the workflow owner. Keep the contact warm; do not forecast a close date yet.' },
  { name:'A deal stuck in review', company:'Atlas Distribution', kind:'VP Operations · Active opportunity', stage:'Commercial review', signal:'The sponsor wants to move. Security needs answers, procurement has not confirmed timing, and the forecast still says this month.', action:'Make the approval path explicit.', why:'The next step is an owner and a date for each unresolved dependency. Buyer intent alone does not make an opportunity commit-ready.', questions:['Who owns the outstanding security decision?','What does procurement need to start its review?','Does the buyer agree to the close plan and dates?'], output:'Mutual action plan with named review owners and agreed dates. Update the forecast from verified milestones, then coordinate the delivery handoff.' },
];

function Approach() {
  const [selected,setSelected]=useState(0), [expanded,setExpanded]=useState(false);
  const s=scenarios[selected];
  return <section className="approach-section" id="approach"><div className="shell section"><div className="section-head"><h2>Good tools.<br />Better judgment.</h2><div className="section-intro"><p>Speed comes from knowing what should happen next. Here's how I'd work three different opportunities.</p><span className="sample-label">Interactive work sample · Fictional accounts</span></div></div>
    <div className="scenario-picker" aria-label="Choose an opportunity">{scenarios.map((scenario,i)=><button key={scenario.name} aria-pressed={selected===i} onClick={()=>{setSelected(i);setExpanded(false);}} className={selected===i?'scenario-choice active':'scenario-choice'}><span>{i+1}</span>{scenario.name}<ArrowRight size={17}/></button>)}</div>
    <div className="opportunity"><div className="opportunity-context"><h3>{s.company}</h3><div className="opportunity-meta"><span>{s.kind}</span><span className="stage">{s.stage}</span></div><p>{s.signal}</p><div className="signal-lines" aria-hidden="true"><span/><span/><span/></div><span className="sample-small">Illustrative decision logic. No live CRM or AI calls.</span></div><div className="opportunity-decision" aria-live="polite"><h3>{s.action}</h3><p>{s.why}</p><button className="inspect-button" onClick={()=>setExpanded(!expanded)} aria-expanded={expanded} aria-controls="discovery-output">{expanded?'Close discovery notes':'Open discovery notes'}<ChevronDown size={18} /></button><div id="discovery-output" hidden={!expanded} className="discovery-output"><ul>{s.questions.map(q=><li key={q}>{q}</li>)}</ul><p><strong>The output:</strong> {s.output}</p></div></div></div>
  </div></section>;
}

function Plan() {
  const steps=[{time:'Days 1–10',title:'Understand the real pipeline.',body:'Work the inbound. Review live opportunities with the team. Learn which problems, buyers, and signals turn into signed work.',output:'A shared qualification standard and clear owners for active deals.'},{time:'Days 11–30',title:'Build around the bottleneck.',body:'Ship one useful improvement to intake, research, follow-up, or deal coordination. Build a targeted outbound test from actual buyer evidence.',output:'A working improvement, a defined cohort, and measured reply and meeting rates.'},{time:'Days 31–60',title:'Turn learning into repeatability.',body:'Keep working deals. Tighten the forecast. Feed recurring buyer objections into messaging, demos, and delivery scoping.',output:'A cleaner forecast and a repeatable motion built from real conversations.'}];
  return <section className="section shell plan-section"><div className="section-head"><h2>My first 60 days.</h2><p className="section-intro">An initial plan to test with the team. The live pipeline determines the priorities.</p></div><div className="plan-grid">{steps.map((s,i)=><article key={s.time}><h3>{s.title}</h3><p>{s.body}</p><div className="plan-time"><span>{i+1}</span>{s.time}</div><div className="plan-output"><span>What you'd see</span><p>{s.output}</p></div></article>)}</div></section>;
}

function About() {
  return <section className="about-section shell" id="about"><div className="about-portrait"><img src="/images/trey-headshot.jpg" alt="Trey Harnden" loading="lazy" /></div><div className="about-copy"><h2>I got closer<br />to the work.</h2><p>I started in sales. Then I wanted to build the tools, demos, and workflows that made the customer conversation better. Today, my work at Folloze spans enterprise customers, partnerships, and GTM engineering.</p><p>Varick's model makes sense to me: understand how work actually moves, build inside the existing systems, and stay responsible for the outcome.</p><div className="about-links"><External href="https://www.linkedin.com/in/treyharnden/"><Linkedin size={17} />LinkedIn<ArrowUpRight size={15}/></External><External href="https://github.com/0xTrey"><Github size={17}/>GitHub<ArrowUpRight size={15}/></External><External href="https://v2.treyharnden.com/">A little more human<ArrowUpRight size={15}/></External></div></div></section>;
}

function Closing() {
  return <><section className="closing"><div className="shell"><h2>Let's put this<br />to work.</h2><div className="closing-bottom"><p>Give me a workflow, a buyer, and a real constraint.<br />Let's talk through how I'd move it forward.</p><External href={email} className="closing-cta">Talk with Trey <ArrowUpRight size={35}/></External></div></div></section><footer className="shell footer"><span>Trey Harnden / for Varick</span><div><External href={resume}><FileText size={14}/>Résumé</External><External href={email}><Mail size={14}/>Email</External><External href={job}>The role<ArrowUpRight size={14}/></External></div><small>Independent candidate portfolio. No affiliation with Varick Agents.</small></footer></>;
}

function App() {
  return <><a href="#main" className="skip-link">Skip to content</a><Header/><main id="main"><Hero/><Proof/><Fit/><Work/><Approach/><Plan/><About/><Closing/></main></>;
}

const appRoot = import.meta.hot?.data.root ?? createRoot(document.getElementById('root'));
if (import.meta.hot) {
  import.meta.hot.data.root = appRoot;
  import.meta.hot.accept();
}
appRoot.render(<App/>);
