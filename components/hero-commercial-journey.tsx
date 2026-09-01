'use client';

import { useEffect, useState, type CSSProperties } from 'react';

const stages = [
  { number: '01', label: 'MARKET INTELLIGENCE', phrase: 'Find where the real opportunity is.', context: 'UNDERSTAND THE MARKET' },
  { number: '02', label: 'REVOPS + AI', phrase: 'Turn data into an operating system.', context: 'BUILD THE ENGINE' },
  { number: '03', label: 'COMMERCIAL EXECUTION', phrase: 'Move the right opportunity toward a decision.', context: 'CONVERT OPPORTUNITIES' },
  { number: '04', label: 'CUSTOMER GROWTH', phrase: 'Grow the relationship after the first win.', context: 'GROW ACCOUNTS' },
] as const;

function MarketIntelligence() {
  return <div className="market-system" aria-hidden="true">
    <div className="signal-sources"><span>Market signals</span><span>Company data</span><span>Buyer activity</span><span>Trigger events</span></div>
    <div className="account-field">{Array.from({ length: 16 }, (_, index) => <i className={index > 11 ? 'priority-node' : ''} key={index} />)}</div>
    <div className="intelligence-path"><span>ICP FILTER</span><b>→</b><span>ACCOUNT INTELLIGENCE</span><b>→</b><span className="path-output">PRIORITIZED ACCOUNTS</span></div>
  </div>;
}

function RevOpsSystem() {
  return <div className="revops-system" aria-hidden="true">
    <div className="data-input"><i /><i /><i /><span>PRIORITIZED ACCOUNT DATA</span></div>
    <div className="orchestration-core"><small>CONNECTED INTELLIGENCE</small><strong>COMMERCIAL<br />ORCHESTRATION</strong><em /></div>
    <div className="system-modules">{['CRM', 'ENRICHMENT', 'SCORING', 'TRIGGERS', 'AUTOMATION', 'QUALIFICATION'].map((item) => <span key={item}>{item}</span>)}</div>
    <div className="opportunity-output"><i /> OPPORTUNITY PATH</div>
  </div>;
}

function CommercialExecution() {
  return <div className="execution-system" aria-hidden="true">
    <div className="buyer-nodes"><span>BUYER</span><span>DECISION TEAM</span></div>
    <div className="execution-path">{['ENGAGE', 'DISCOVER', 'QUALIFY', 'SOLUTION', 'PROPOSAL', 'NEGOTIATE', 'CLOSE'].map((item, index) => <div className="execution-step" style={{ '--step': index } as CSSProperties} key={item}><i>{index + 1}</i><span>{item}</span></div>)}</div>
    <div className="customer-result"><i /> CUSTOMER RELATIONSHIP</div>
  </div>;
}

function CustomerGrowth() {
  return <div className="growth-system" aria-hidden="true">
    <div className="growth-core"><span>CUSTOMER</span><i /></div>
    <div className="growth-path">{['LAND', 'ADOPT', 'EXPAND', 'RETAIN'].map((item, index) => <span style={{ '--growth-step': index } as CSSProperties} key={item}>{item}</span>)}</div>
    <div className="growth-network"><span>TEAM 02</span><span>WORKFLOW</span><span>USE CASE</span><span>TEAM 03</span><span>RENEWAL</span></div>
  </div>;
}

const visuals = [<MarketIntelligence key="market" />, <RevOpsSystem key="revops" />, <CommercialExecution key="execution" />, <CustomerGrowth key="growth" />];

export default function HeroCommercialJourney() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReduceMotion(motionQuery.matches);
    const updateVisibility = () => setIsPaused(document.hidden);
    updateMotion();
    updateVisibility();
    motionQuery.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      motionQuery.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion || isPaused) return;
    const rotation = window.setTimeout(() => setActiveStage((stage) => (stage + 1) % stages.length), 5000);
    return () => window.clearTimeout(rotation);
  }, [activeStage, isPaused, reduceMotion]);

  const stage = stages[activeStage];

  return <section className="hero" id="home">
    <div className="signal-grid" aria-hidden="true" />
    <div className="section-shell hero-grid">
      <div className="hero-copy">
        <p className="eyebrow light">B2B COMMERCIAL EXECUTION</p>
        <h1>From Market Signal to <em>Closed Revenue.</em></h1>
        <p className="hero-lede">SalesNego helps B2B SaaS, AI and technology companies turn market intelligence into qualified pipeline, customer acquisition and account growth.</p>
        <p className="hero-note">Strategy, Revenue Operations and founder-led sales execution — connected in one commercial system.</p>
        <p className="hero-context" aria-live="polite" key={stage.number}><span>{stage.number}</span>{stage.context}</p>
        <div className="button-row"><a className="button" href="https://calendly.com/meeting-with-salesnego/30min" target="_blank" rel="noopener noreferrer">Discuss Your Growth Priorities</a><a className="text-link light-link" href="#system">Explore How We Execute <span>→</span></a></div>
      </div>
      <div className="commercial-journey" aria-label="SalesNego commercial journey">
        <div className="journey-heading"><div><span>{stage.number} / {stage.label}</span><p>{stage.phrase}</p></div><b aria-hidden="true">SALESNEGO SYSTEM</b></div>
        <div className="journey-canvas">{visuals.map((visual, index) => <div className={`journey-stage${activeStage === index ? ' is-active' : ''}`} aria-hidden={activeStage !== index} key={stages[index].label}>{visual}</div>)}</div>
        <div className="stage-navigation" aria-label="Choose commercial journey stage">{stages.map((item, index) => <button type="button" aria-label={`Show stage ${item.number}: ${item.label}`} aria-pressed={activeStage === index} onClick={() => setActiveStage(index)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setActiveStage(index); } }} key={item.number}><span>{item.number}</span><i /></button>)}</div>
      </div>
    </div>
    <div className="section-shell capability-strip" aria-label="SalesNego capabilities"><span>GTM Strategy &amp; Market Intelligence</span><span>Revenue Operations &amp; AI-Accelerated Sales</span><span>End-to-End Commercial Execution</span></div>
  </section>;
}
