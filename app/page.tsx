'use client';

import { useState } from 'react';

const heroImage =
  'https://ik.imagekit.io/4rtwqlnkg/Market-to-Growth%20Sales%20Intelligence%20Flow.png?updatedAt=1788228132060';
const marketImage =
  'https://ik.imagekit.io/4rtwqlnkg/Maketering%20INtelligence%20and%20GTM.png?updatedAt=1788228132160';
const revOpsImage =
  'https://ik.imagekit.io/4rtwqlnkg/Revenue%20Operations%20+%20AI.png?updatedAt=1788228131653';
const accountGrowthImage =
  'https://ik.imagekit.io/4rtwqlnkg/Account%20Growth%20Engine.png?updatedAt=1788228132521';

const services = [
  {
    number: '01',
    title: 'GTM Strategy & Market Intelligence',
    subtitle: 'Know where to play, who to pursue and why the market should care.',
    body: 'Before outreach begins, we build the commercial context required to make outreach relevant.',
    items: ['Market and segment analysis', 'ICP definition and segmentation', 'Buyer and buying-committee mapping', 'Competitive intelligence', 'Value proposition development', 'Target-account prioritization'],
  },
  {
    number: '02',
    title: 'Revenue Operations & AI-Accelerated Sales',
    subtitle: 'Build the commercial infrastructure that makes execution visible, disciplined and scalable.',
    body: 'Sales activity becomes more useful when account data, qualification, pipeline management and automation work together.',
    items: ['CRM architecture and governance', 'Pipeline stages and exit criteria', 'Opportunity qualification', 'Account scoring', 'Sales workflow automation', 'AI-assisted account research'],
  },
  {
    number: '03',
    title: 'End-to-End Commercial Execution',
    subtitle: 'Move from the first account signal through customer decision and account growth.',
    body: 'SalesNego is not designed as a meeting-booking service. Where the engagement requires it, we remain involved throughout the commercial lifecycle.',
    items: ['Target-account acquisition', 'Buyer identification and engagement', 'Discovery and qualification', 'Solution alignment and business cases', 'Proposal and negotiation', 'Customer success and account expansion'],
  },
];

const serviceTabs = [
  { label: 'GTM & Market Intelligence', question: 'Where should we focus commercial effort?', flow: 'Market → ICP → Buying Committee → Trigger → Account → Message → Channel', outcome: 'A clear commercial hypothesis that can be tested in the market.' },
  { label: 'RevOps & AI', question: 'How should we structure data, process and automation so sales activity becomes visible and repeatable?', flow: 'CRM → Data → Workflow → Qualification → Pipeline → Automation → Insight', outcome: 'A commercial system with better visibility, consistency and execution speed.' },
  { label: 'Commercial Execution', question: 'How do we move the right opportunity toward a customer decision?', flow: 'Engagement → Discovery → Qualification → Business Case → Solution → Proposal → Negotiation → Close → Expansion', outcome: 'Commercial ownership beyond prospecting.' },
];

const systemSteps = [
  ['01', 'UNDERSTAND', 'Product, market, customers, commercial constraints and growth priorities.'],
  ['02', 'POSITION', 'ICP, buyer problems, value proposition, differentiation and sales narrative.'],
  ['03', 'PRIORITIZE', 'Account fit, verifiable triggers, business pain, buyer access and expansion potential.'],
  ['04', 'ENGAGE', 'Relevant, personalized and coordinated multi-channel engagement.'],
  ['05', 'DIAGNOSE', 'Understand the business problem, current state, impact, urgency and desired outcome.'],
  ['06', 'QUALIFY', 'Validate decision process, stakeholders, business case, critical event and opportunity quality.'],
  ['07', 'CONVERT', 'Align the solution, prove value, navigate procurement, negotiate and close.'],
  ['08', 'EXPAND', 'Support adoption, identify legitimate adjacent problems, retain and grow the account.'],
];

const experience = [
  ['Laboratory & Testing Technology', 'Commercial experience around LIMS, scientific software and specialist laboratory technology.'],
  ['Insurance & Enterprise Technology', 'Commercial experience involving specialist technology resources, enterprise account development and long-term customer relationships.'],
  ['Enterprise Applications & Energy Trading', 'Experience around complex enterprise application requirements, ETRM/OpenLink environments and technical alignment.'],
  ['AI & Digital Products', 'Experience supporting AI-enabled products, digital platforms, custom software and technical solution selling.'],
];

const faqs = [
  ['Do you only provide lead generation?', 'No. Prospecting and demand generation can form part of an engagement, but SalesNego is designed around a broader commercial lifecycle that includes GTM strategy, Revenue Operations, discovery, qualification, sales execution, closing and account growth.'],
  ['What types of companies do you work with?', 'Our primary focus is B2B SaaS, AI and technology product companies. We selectively work with differentiated technology services companies where the commercial problem requires consultative selling.'],
  ['Can SalesNego work with an existing sales team?', 'Yes. SalesNego can complement founders, sales leaders, account executives, marketing teams and customer success teams by adding commercial structure, execution capacity and senior support.'],
  ['How is AI used in your sales process?', 'AI is used to accelerate research, enrichment, account intelligence, personalization preparation, workflow automation, CRM administration, meeting intelligence and pipeline analysis. Strategic account decisions, discovery, negotiation and customer relationships remain human-led.'],
  ['Which sales methodologies do you use?', 'We do not force every opportunity through one methodology. Depending on sales complexity, SalesNego can use principles from SPICED, MEDDPICC, Challenger, SPIN and other qualification approaches.'],
];

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand-logo" href="#home" aria-label="SalesNego home"><img src="/assets/salesnego-logo-dark.png" width="831" height="255" alt="SalesNego" /></a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen((value) => !value)}>
          <span /><span /><span /><span className="sr-only">Toggle navigation</span>
        </button>
        <nav id="site-nav" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
          <a href="#what-we-do" onClick={() => setMenuOpen(false)}>What We Do</a>
          <a href="#system" onClick={() => setMenuOpen(false)}>Our System</a>
          <a href="#ai-revops" onClick={() => setMenuOpen(false)}>AI + RevOps</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#why" onClick={() => setMenuOpen(false)}>Why SalesNego</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        </nav>
        <a className="button button-small header-cta" href="https://calendly.com/meeting-with-salesnego/30min" target="_blank" rel="noopener noreferrer">Discuss Your Growth Priorities</a>
      </header>

      <section className="hero" id="home">
        <div className="signal-grid" aria-hidden="true" />
        <div className="section-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow light">B2B COMMERCIAL EXECUTION</p>
            <h1>From Market Signal to <em>Closed Revenue.</em></h1>
            <p className="hero-lede">SalesNego helps B2B SaaS, AI and technology companies turn market intelligence into qualified pipeline, customer acquisition and account growth.</p>
            <p className="hero-note">Strategy, Revenue Operations and senior-led sales execution — connected in one commercial system.</p>
            <div className="button-row"><a className="button" href="https://calendly.com/meeting-with-salesnego/30min" target="_blank" rel="noopener noreferrer">Discuss Your Growth Priorities</a><a className="text-link light-link" href="#system">Explore How We Execute <span>→</span></a></div>
          </div>
          <figure className="hero-visual"><img src={heroImage} width="1536" height="1024" alt="B2B commercial execution system connecting market intelligence, Revenue Operations and sales execution" fetchPriority="high" /></figure>
        </div>
        <div className="section-shell capability-strip" aria-label="SalesNego capabilities"><span>GTM Strategy &amp; Market Intelligence</span><span>Revenue Operations &amp; AI-Accelerated Sales</span><span>End-to-End Commercial Execution</span></div>
      </section>

      <section className="proof-strip" aria-label="Trusted clients"><div className="section-shell proof-inner"><div><p className="eyebrow">TRUSTED CLIENTS</p><p>Commercial experience across SaaS, enterprise technology, digital products and technology services.</p></div><div className="client-logos"><figure><img src="/assets/clients/infocodec.png" width="2560" height="459" alt="Infocodec" loading="lazy" decoding="async" /></figure><figure><img src="/assets/clients/mapletax-solutions.jpg" width="309" height="309" alt="Mapletax Solutions" loading="lazy" decoding="async" /></figure><figure><img src="/assets/clients/icl-lims.jpg" width="386" height="181" alt="ICL LIMS" loading="lazy" decoding="async" /></figure><figure><img src="/assets/clients/kidoye.jpg" width="222" height="100" alt="KidOye" loading="lazy" decoding="async" /></figure></div></div></section>

      <section className="section why-intro" id="what-we-do">
        <div className="section-shell two-column-intro"><div><p className="eyebrow">WHY SALESNEGO</p><h2>Most revenue problems start before the first sales call.</h2></div><div><p>A strong product does not automatically create a strong commercial motion. Companies often enter the market with an unclear ICP, generic positioning, random account selection, fragmented sales tools, weak qualification and limited visibility into how buyers actually make decisions.</p><p>The result is activity without enough commercial progress.</p></div></div>
        <div className="section-shell discipline-grid"><article><span>01</span><h3>Market Intelligence</h3><p>Know where to compete, who matters and why the customer should care.</p></article><article><span>02</span><h3>Revenue Infrastructure</h3><p>Build the data, process, systems and AI-enabled workflows that support disciplined execution.</p></article><article><span>03</span><h3>Commercial Execution</h3><p>Engage, discover, qualify, negotiate, close and grow the right accounts.</p></article></div>
      </section>

      <section className="section pale-section"><div className="section-shell section-heading centered"><p className="eyebrow">WHO WE WORK WITH</p><h2>Built for complex B2B technology sales.</h2><p>Product and SaaS engagements are our primary focus. Technology services engagements are considered selectively.</p></div><div className="section-shell audience-grid">{[
        ['B2B SaaS & AI Products', 'Companies selling software or AI-enabled products that require consultative discovery, business-case development and structured sales execution.'],
        ['Founder-Led Technology Companies', 'Companies with strong product capability but limited internal commercial bandwidth or an overly founder-dependent sales motion.'],
        ['New Market & Growth Initiatives', 'Technology companies entering a new geography, vertical, buyer segment or enterprise market.'],
        ['Select Technology Services Firms', 'Engineering and specialist technology firms where customer acquisition depends on technical understanding and commercial credibility.'],
      ].map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="section services-section">
        <div className="section-shell section-heading"><p className="eyebrow">WHAT WE DO</p><h2>Three Capabilities. One Commercial Engine.</h2></div>
        <div className="section-shell services-grid">{services.map((service) => <details className="service-card" key={service.number}><summary><span>{service.number}</span><h3>{service.title}</h3><p>{service.subtitle}</p><b>Explore Capability <i>+</i></b></summary><div className="service-detail"><p>{service.body}</p><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul></div></details>)}</div>
        <div className="section-shell image-panel compact-image-panel"><img src={marketImage} width="1484" height="1060" alt="B2B SaaS market intelligence and target account prioritization framework" loading="lazy" decoding="async" /></div>
      </section>

      <section className="section dark-section" id="ai-revops">
        <div className="section-shell section-heading"><p className="eyebrow light">SERVICE DETAIL</p><h2>See how each discipline moves commercial work forward.</h2></div>
        <div className="section-shell tabs" role="region" aria-label="Service details"><div className="tab-list" role="tablist" aria-label="Services">{serviceTabs.map((tab, index) => <button key={tab.label} role="tab" aria-selected={activeService === index} onClick={() => setActiveService(index)}>{tab.label}</button>)}</div><div className="tab-panel" role="tabpanel"><p className="tab-label">QUESTION WE ANSWER</p><h3>{serviceTabs[activeService].question}</h3><div className="flow-line">{serviceTabs[activeService].flow}</div><p><strong>Outcome:</strong> {serviceTabs[activeService].outcome}</p></div></div>
        <div className="section-shell image-panel image-panel-dark compact-image-panel"><img src={revOpsImage} width="1484" height="1060" alt="AI-assisted Revenue Operations workflow for B2B SaaS sales" loading="lazy" decoding="async" /></div>
      </section>

      <section className="section system-section" id="system"><div className="section-shell section-heading centered"><p className="eyebrow">HOW WE WORK</p><h2>The SalesNego Commercial Execution System</h2></div><div className="section-shell system-flow">{systemSteps.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div><div className="section-shell system-foundation"><span>DATA</span><span>REVOPS</span><span>AI</span><span>COMMERCIAL INTELLIGENCE</span></div><p className="section-shell system-note">The tools support the commercial process. They do not replace judgment, discovery or customer relationships.</p></section>

      <section className="section pale-section evidence-section"><div className="section-shell evidence-grid"><div><p className="eyebrow">THE SALESNEGO RESEARCH DISCIPLINE</p><h2>Evidence before assumption.</h2><p>Large contact lists are easy to create. Relevant commercial conversations are harder.</p></div><div className="evidence-stack"><article><span>FACT</span><p>What can we verify about the account?</p></article><b>↓</b><article><span>HYPOTHESIS</span><p>What commercial problem could reasonably exist because of that fact?</p></article><b>↓</b><article><span>DISCOVERY QUESTION</span><p>What should we ask to determine whether the hypothesis is real?</p></article></div></div></section>

      <section className="section ai-section"><div className="section-shell section-heading centered"><p className="eyebrow">AI IN THE COMMERCIAL SYSTEM</p><h2>Automate the workload. Keep commercial judgment human.</h2><p>AI can materially increase the speed of sales execution. It should not replace the judgment required to select markets, understand customers or negotiate complex decisions.</p></div><div className="section-shell contrast-grid"><article><p className="eyebrow">AI &amp; AUTOMATION SUPPORT</p><ul>{['Company and market research','Account enrichment','Trigger monitoring','Personalization preparation','Meeting summaries','CRM data capture','Pipeline alerts'].map((item) => <li key={item}>{item}</li>)}</ul></article><article><p className="eyebrow">HUMAN COMMERCIAL JUDGMENT</p><ul>{['Market selection','Account prioritization','Executive messaging','Discovery','Business-case development','Solution alignment','Negotiation and closure'].map((item) => <li key={item}>{item}</li>)}</ul></article></div></section>

      <section className="section dark-section" id="experience"><div className="section-shell section-heading"><p className="eyebrow light">RELEVANT EXPERIENCE</p><h2>Built around complex B2B technology sales.</h2><p>Commercial experience behind the SalesNego operating model.</p></div><div className="section-shell experience-grid">{experience.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="section why-section" id="why"><div className="section-shell section-heading centered"><p className="eyebrow">OUR OPERATING MODEL</p><h2>Senior-Led. Evidence-Led. Execution-Focused.</h2></div><div className="section-shell why-grid">{[
        ['Senior-Led', 'Important client work receives direct senior commercial involvement.'],
        ['Limited Client Portfolio', 'SalesNego deliberately limits simultaneous engagements so commercial context is not lost.'],
        ['Product-First', 'We understand the product, customer problem and buyer before building the commercial motion.'],
        ['Evidence-Led', 'We prioritize verifiable account signals and discovery over generic assumptions.'],
        ['Full-Cycle', 'We can stay involved from market intelligence through closing and account growth.'],
        ['Builds Client Capability', 'CRM structure, playbooks, account intelligence and learning remain usable by the client team.'],
      ].map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="section growth-section" id="account-growth">
        <div className="section-shell growth-copy"><p className="eyebrow">AFTER THE FIRST WIN</p><h2>Customer acquisition is only the beginning.</h2><p>The first contract creates a customer relationship, implementation insight and new commercial intelligence. SalesNego looks for expansion only when a legitimate adjacent problem becomes visible.</p></div>
        <figure className="section-shell growth-visual-scroll" aria-label="Scrollable Account Growth framework on narrow screens"><div className="growth-visual-inner"><img src={accountGrowthImage} width="1638" height="960" alt="SalesNego Account Growth Engine showing Land, Adopt, Expand, Retain & Grow supported by continuous Customer Success." loading="lazy" decoding="async" /></div></figure>
      </section>

      <section className="section pale-section engagement-section"><div className="section-shell two-column-intro"><div><p className="eyebrow">WORKING WITH SALESNEGO</p><h2>Commercial alignment without unnecessary complexity.</h2></div><div><p>Engagements are structured around the actual work required. Depending on the scope, commercial models can combine a monthly execution retainer with an agreed performance component.</p><p className="callout">SalesNego does not operate as a pay-per-meeting appointment-setting service.</p></div></div></section>

      <section className="section faq-section" id="faq"><div className="section-shell faq-grid"><div><p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2>Questions about working with SalesNego.</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="section cta-section" id="contact"><div className="section-shell cta-grid"><div><p className="eyebrow light">CONTACT SALESNEGO</p><h2>Where Should Your Next Revenue Opportunity Come From?</h2><p>Tell us what you are selling, where you are trying to grow and what is currently getting in the way. We will determine whether SalesNego is the right commercial partner for the problem.</p><div className="contact-details"><p><strong>Markets Served: North America | UAE | UK &amp; Europe | India.</strong></p><p><span>Send us Email</span><a href="mailto:sales@salesnego.com">sales@salesnego.com</a></p><p><span>Start a Conversation</span><a href="tel:+919884450102">+91-9884450102</a></p></div><a className="button" href="https://calendly.com/meeting-with-salesnego/30min" target="_blank" rel="noopener noreferrer">Discuss Your Growth Priorities</a></div><form className="contact-form" action="https://formspree.io/f/xqpkpera" method="POST"><input type="hidden" name="_subject" value="New SalesNego website enquiry" /><label>Name<input name="name" type="text" autoComplete="name" required /></label><label>Business Email<input name="email" type="email" autoComplete="email" required /></label><label>Company Website<input name="website" type="url" inputMode="url" /></label><label>What are you selling?<input name="offering" type="text" required /></label><label>Target market<input name="market" type="text" /></label><label>What are you trying to achieve?<textarea name="message" rows={4} required /></label><button className="button" type="submit">Send Message</button></form></div></section>

      <footer className="site-footer"><div className="section-shell footer-grid"><div><a className="footer-logo" href="#home" aria-label="SalesNego home"><img src="/assets/salesnego-logo-white.png" width="831" height="255" alt="SalesNego" /></a><p>Commercial execution for B2B SaaS, AI and technology companies.</p></div><div><h3>Capabilities</h3><a href="#what-we-do">GTM Strategy &amp; Market Intelligence</a><a href="#ai-revops">Revenue Operations &amp; AI-Accelerated Sales</a><a href="#system">End-to-End Commercial Execution</a></div><div><h3>Markets Served</h3><p>North America<br />UAE<br />UK &amp; Europe<br />India</p></div><div><h3>Contact</h3><a href="mailto:sales@salesnego.com">sales@salesnego.com</a><a href="tel:+919884450102">+91-9884450102</a></div></div><div className="section-shell footer-bottom"><span>© 2026 SalesNego. All rights reserved.</span><span><a href="#">Privacy Policy</a> <a href="#">Terms</a></span></div></footer>
    </main>
  );
}
