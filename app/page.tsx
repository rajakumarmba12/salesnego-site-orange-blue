'use client';

import { useState } from 'react';
import HeroCommercialJourney from '@/components/hero-commercial-journey';
import MarketIntelligenceJourney from '@/components/market-intelligence-journey';
import RevOpsAiOperatingSystem from '@/components/revops-ai-operating-system';
import AccountGrowthLifecycle from '@/components/account-growth-lifecycle';

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

const industryExperience = [
  ['01', 'SaaS & Enterprise Software', 'B2B software, enterprise applications and specialized technology platforms.'],
  ['02', 'AI & Digital Products', 'AI-enabled solutions, digital platforms and custom technology products.'],
  ['03', 'Laboratory, Testing & Quality', 'LIMS, laboratory digitization, testing workflows, quality systems and compliance-oriented technology.'],
  ['04', 'Insurance & InsurTech', 'Insurance technology, enterprise platforms, specialist technology requirements and digital transformation.'],
  ['05', 'Energy & Industrial Technology', 'Enterprise applications supporting energy trading, operational workflows and specialized business processes.'],
  ['06', 'Manufacturing & FMCG Technology', 'Quality, batch traceability, operational digitization and business process technology.'],
];

const technologyExperience = [
  'B2B SaaS', 'AI Solutions', 'Custom Software Development', 'Enterprise Applications', 'LIMS', 'InsurTech', 'ETRM / OpenLink', 'Low-Code Solutions', 'Web & Mobile Applications', 'API & Systems Integration', 'IT Services', 'Technology Consulting', 'IT Staff Augmentation', 'Specialist Technology Resources',
];

const commercialExperience = [
  'Market Entry', 'GTM Strategy', 'Demand Generation', 'Account-Based Selling', 'Enterprise Sales', 'Solution Selling', 'Business Development', 'Partnerships', 'RFP & Proposal Management', 'Commercial Negotiation', 'Customer Success', 'Account Expansion',
];

const clientLogos = [
  ['/assets/clients/infocodec.png', 2560, 459, 'Infocodec'],
  ['/assets/clients/mapletax-solutions.jpg', 309, 309, 'Mapletax Solutions'],
  ['/assets/clients/icl-lims.jpg', 386, 181, 'ICL LIMS'],
  ['/assets/clients/kidoye.jpg', 222, 100, 'KidOye'],
] as const;

const faqs = [
  ['Do you only provide lead generation?', 'No. Prospecting and demand generation can form part of an engagement, but SalesNego is designed around a broader commercial lifecycle that includes GTM strategy, Revenue Operations, discovery, qualification, sales execution, closing and account growth.'],
  ['What types of companies do you work with?', 'Our primary focus is B2B SaaS, AI and technology product companies. We selectively work with differentiated technology services companies where the commercial problem requires consultative selling.'],
  ['Can SalesNego work with an existing sales team?', 'Yes. SalesNego can complement founders, sales leaders, account executives, marketing teams and customer success teams by adding commercial structure, execution capacity and founder-level support.'],
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

      <HeroCommercialJourney />

      <section className="proof-strip" aria-label="Trusted clients"><div className="section-shell proof-inner"><div><p className="eyebrow">TRUSTED CLIENTS</p><p>Commercial experience across SaaS, enterprise technology, digital products and technology services.</p></div><div className="client-logos"><div className="client-logo-track">{[false, true].map((duplicate) => <div className="client-logo-set" aria-hidden={duplicate || undefined} key={String(duplicate)}>{clientLogos.map(([src, width, height, alt]) => <figure key={`${duplicate}-${src}`}><img src={src} width={width} height={height} alt={duplicate ? '' : alt} loading="lazy" decoding="async" /></figure>)}</div>)}</div></div></div></section>

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
        <MarketIntelligenceJourney />
      </section>

      <section className="section dark-section" id="ai-revops">
        <div className="section-shell section-heading"><p className="eyebrow light">SERVICE DETAIL</p><h2>See how each discipline moves commercial work forward.</h2></div>
        <div className="section-shell tabs" role="region" aria-label="Service details"><div className="tab-list" role="tablist" aria-label="Services">{serviceTabs.map((tab, index) => <button key={tab.label} role="tab" aria-selected={activeService === index} onClick={() => setActiveService(index)}>{tab.label}</button>)}</div><div className="tab-panel" role="tabpanel"><p className="tab-label">QUESTION WE ANSWER</p><h3>{serviceTabs[activeService].question}</h3><div className="flow-line">{serviceTabs[activeService].flow}</div><p><strong>Outcome:</strong> {serviceTabs[activeService].outcome}</p></div></div>
        <RevOpsAiOperatingSystem />
      </section>

      <section className="section system-section" id="system"><div className="section-shell section-heading centered"><p className="eyebrow">HOW WE WORK</p><h2>The SalesNego Commercial Execution System</h2></div><div className="section-shell system-flow">{systemSteps.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div><div className="section-shell system-foundation"><span>DATA</span><span>REVOPS</span><span>AI</span><span>COMMERCIAL INTELLIGENCE</span></div><p className="section-shell system-note">The tools support the commercial process. They do not replace judgment, discovery or customer relationships.</p></section>

      <section className="section pale-section evidence-section"><div className="section-shell evidence-grid"><div><p className="eyebrow">THE SALESNEGO RESEARCH DISCIPLINE</p><h2>Evidence before assumption.</h2><p>Large contact lists are easy to create. Relevant commercial conversations are harder.</p></div><div className="evidence-stack"><article><span>FACT</span><p>What can we verify about the account?</p></article><b>↓</b><article><span>HYPOTHESIS</span><p>What commercial problem could reasonably exist because of that fact?</p></article><b>↓</b><article><span>DISCOVERY QUESTION</span><p>What should we ask to determine whether the hypothesis is real?</p></article></div></div></section>

      <section className="section ai-section"><div className="section-shell section-heading centered"><p className="eyebrow">AI IN THE COMMERCIAL SYSTEM</p><h2>Automate the workload. Keep commercial judgment human.</h2><p>AI can materially increase the speed of sales execution. It should not replace the judgment required to select markets, understand customers or negotiate complex decisions.</p></div><div className="section-shell contrast-grid"><article><p className="eyebrow">AI &amp; AUTOMATION SUPPORT</p><ul>{['Company and market research','Account enrichment','Trigger monitoring','Personalization preparation','Meeting summaries','CRM data capture','Pipeline alerts'].map((item) => <li key={item}>{item}</li>)}</ul></article><article><p className="eyebrow">HUMAN COMMERCIAL JUDGMENT</p><ul>{['Market selection','Account prioritization','Executive messaging','Discovery','Business-case development','Solution alignment','Negotiation and closure'].map((item) => <li key={item}>{item}</li>)}</ul></article></div></section>

      <section className="section dark-section" id="experience"><div className="section-shell section-heading experience-heading"><p className="eyebrow light">INDUSTRY &amp; TECHNOLOGY EXPERIENCE</p><h2>Commercial Experience Across B2B Technology Markets</h2><p>SalesNego brings commercial experience across SaaS, enterprise technology and specialist industry solutions where selling requires product understanding, consultative discovery and structured commercial execution.</p></div><div className="section-shell experience-grid">{industryExperience.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="section-shell experience-strips"><div className="experience-strip"><p>TECHNOLOGY &amp; SOLUTION EXPERIENCE</p><ul>{technologyExperience.map((item) => <li key={item}>{item}</li>)}</ul></div><div className="experience-strip"><p>COMMERCIAL EXPERIENCE ACROSS THE TECHNOLOGY LIFECYCLE</p><ul>{commercialExperience.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>

      <section className="section why-section" id="why"><div className="section-shell section-heading centered"><p className="eyebrow">OUR OPERATING MODEL</p><h2>Founder-Led. Evidence-Led. Execution-Focused.</h2></div><div className="section-shell why-grid">{[
        ['Founder-Led', 'Important client work receives direct founder-level commercial involvement.'],
        ['Limited Client Portfolio', 'SalesNego deliberately limits simultaneous engagements so commercial context is not lost.'],
        ['Product-First', 'We understand the product, customer problem and buyer before building the commercial motion.'],
        ['Evidence-Led', 'We prioritize verifiable account signals and discovery over generic assumptions.'],
        ['Full-Cycle', 'We can stay involved from market intelligence through closing and account growth.'],
        ['Builds Client Capability', 'CRM structure, playbooks, account intelligence and learning remain usable by the client team.'],
      ].map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="section growth-section" id="account-growth">
        <div className="section-shell growth-copy"><p className="eyebrow">AFTER THE FIRST WIN</p><h2>Customer acquisition is only the beginning.</h2><p>The first contract creates a customer relationship, implementation insight and new commercial intelligence. SalesNego looks for expansion only when a legitimate adjacent problem becomes visible.</p></div>
        <AccountGrowthLifecycle />
      </section>

      <section className="section pale-section engagement-section"><div className="section-shell two-column-intro"><div><p className="eyebrow">WORKING WITH SALESNEGO</p><h2>Commercial alignment without unnecessary complexity.</h2></div><div><p>Engagements are structured around the actual work required. Depending on the scope, commercial models can combine a monthly execution retainer with an agreed performance component.</p><p className="callout">SalesNego does not operate as a pay-per-meeting appointment-setting service.</p></div></div></section>

      <section className="section faq-section" id="faq"><div className="section-shell faq-grid"><div><p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2>Questions about working with SalesNego.</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="section cta-section" id="contact"><div className="section-shell cta-grid"><div><p className="eyebrow light">CONTACT SALESNEGO</p><h2>Where Should Your Next Revenue Opportunity Come From?</h2><p>Tell us what you are selling, where you are trying to grow and what is currently getting in the way. We will determine whether SalesNego is the right commercial partner for the problem.</p><div className="contact-details"><p><strong>Markets Served: North America | UAE | UK &amp; Europe | India.</strong></p><p><span>Send us Email</span><a href="mailto:sales@salesnego.com">sales@salesnego.com</a></p><p><span>Start a Conversation</span><a href="tel:+919884450102">+91-9884450102</a></p></div><a className="button" href="https://calendly.com/meeting-with-salesnego/30min" target="_blank" rel="noopener noreferrer">Discuss Your Growth Priorities</a></div><form className="contact-form" action="https://formspree.io/f/xqpkpera" method="POST"><input type="hidden" name="_subject" value="New SalesNego website enquiry" /><label>Name<input name="name" type="text" autoComplete="name" required /></label><label>Business Email<input name="email" type="email" autoComplete="email" required /></label><label>Company Website<input name="website" type="url" inputMode="url" /></label><label>What are you selling?<input name="offering" type="text" required /></label><label>Target market<input name="market" type="text" /></label><label>What are you trying to achieve?<textarea name="message" rows={4} required /></label><button className="button" type="submit">Send Message</button></form></div></section>

      <footer className="site-footer"><div className="section-shell footer-grid"><div><a className="footer-logo" href="#home" aria-label="SalesNego home"><img src="/assets/salesnego-logo-white.png" width="831" height="255" alt="SalesNego" /></a><p>Commercial execution for B2B SaaS, AI and technology companies.</p></div><div><h3>Capabilities</h3><a href="#what-we-do">GTM Strategy &amp; Market Intelligence</a><a href="#ai-revops">Revenue Operations &amp; AI-Accelerated Sales</a><a href="#system">End-to-End Commercial Execution</a></div><div><h3>Markets Served</h3><p>North America<br />UAE<br />UK &amp; Europe<br />India</p></div><div><h3>Contact</h3><a href="mailto:sales@salesnego.com">sales@salesnego.com</a><a href="tel:+919884450102">+91-9884450102</a></div></div><div className="section-shell footer-bottom"><span>© 2026 SalesNego. All rights reserved.</span><span><a href="#">Privacy Policy</a> <a href="#">Terms</a></span></div></footer>
    </main>
  );
}
