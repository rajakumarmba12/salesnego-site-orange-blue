'use client';

import { useEffect, useState, type CSSProperties } from 'react';

const stages = [
  { number: '01', label: 'MARKET UNIVERSE', phrase: 'Start broad. Understand the landscape.' },
  { number: '02', label: 'FIT & SIGNALS', phrase: 'Filter for relevance, not volume.' },
  { number: '03', label: 'BUYER & TRIGGER INTELLIGENCE', phrase: 'Understand why the account may matter now.' },
  { number: '04', label: 'ACCOUNT PRIORITIZATION', phrase: 'Focus commercial effort where evidence is strongest.' },
] as const;

const signalLabels = ['FIT', 'INDUSTRY', 'GEOGRAPHY', 'TECH', 'CHANGE', 'PROFILE'];
const buyerRoles = ['ECONOMIC', 'OPERATIONAL', 'TECHNICAL', 'CHAMPION'];
const priorityCriteria = ['FIT', 'TRIGGER', 'PAIN', 'ACCESS', 'EXPANSION'];

function MarketUniverse() {
  return <div className="mi-universe" aria-hidden="true">
    <div className="mi-cluster-labels"><span>SEGMENTS</span><span>GEOGRAPHIES</span><span>TECHNOLOGIES</span></div>
    <div className="mi-node-field">{Array.from({ length: 28 }, (_, index) => <i style={{ '--node': index } as CSSProperties} key={index} />)}</div>
    <div className="mi-landscape-line"><span>MARKET LANDSCAPE</span><b>CONNECTED ACCOUNT UNIVERSE</b></div>
  </div>;
}

function FitSignals() {
  return <div className="mi-fit-signals" aria-hidden="true">
    <div className="mi-signal-chips">{signalLabels.map((item) => <span key={item}>{item}</span>)}</div>
    <div className="mi-filter-flow"><div><small>MARKET</small>{Array.from({ length: 18 }, (_, index) => <i key={index} />)}</div><b>→</b><div className="mi-filter-plane"><span>ICP FILTER</span><i /><i /><i /></div><b>→</b><div className="mi-relevant-accounts"><small>RELEVANT ACCOUNTS</small>{Array.from({ length: 7 }, (_, index) => <i className={index > 4 ? 'mi-strong-fit' : ''} key={index} />)}</div></div>
  </div>;
}

function BuyerTriggers() {
  return <div className="mi-buyers" aria-hidden="true">
    <div className="mi-shortlist">{[0, 1, 2, 3].map((account) => <article className={account === 3 ? 'mi-account-muted' : ''} key={account}><strong>ACCOUNT {String.fromCharCode(65 + account)}</strong><div className="mi-buyer-network">{buyerRoles.map((role, index) => <span title={role} key={role}><i>{index + 1}</i>{role}</span>)}</div><div className="mi-triggers"><span>CHANGE</span><span>EXPANSION</span><span>INITIATIVE</span></div></article>)}</div>
  </div>;
}

function PriorityAccounts() {
  return <div className="mi-priority" aria-hidden="true">
    <div className="mi-priority-list">{[0, 1, 2, 3].map((account) => <article className={account < 2 ? 'is-priority' : ''} key={account}><div><span>PRIORITY ACCOUNT</span><strong>{String.fromCharCode(65 + account)}</strong></div><div className="mi-criteria">{priorityCriteria.map((criterion, index) => <i className={index <= 3 - account ? 'is-supported' : ''} title={criterion} key={criterion}><small>{criterion}</small></i>)}</div></article>)}</div>
    <div className="mi-engage">EVIDENCE-BACKED PRIORITY <span>→</span> <b>ENGAGE</b></div>
  </div>;
}

const stageVisuals = [<MarketUniverse key="universe" />, <FitSignals key="signals" />, <BuyerTriggers key="buyers" />, <PriorityAccounts key="priority" />];

export default function MarketIntelligenceJourney() {
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
    const rotation = window.setTimeout(() => setActiveStage((stage) => (stage + 1) % stages.length), 4000);
    return () => window.clearTimeout(rotation);
  }, [activeStage, isPaused, reduceMotion]);

  const stage = stages[activeStage];

  return <div className="section-shell market-intelligence-journey" aria-label="Market intelligence account prioritization journey">
    <div className="mi-intro"><p className="eyebrow">GTM STRATEGY &amp; MARKET INTELLIGENCE</p><h3>From a broad market to the accounts that deserve commercial attention.</h3><p>Evidence, fit and buyer context narrow the market before outreach begins.</p><div className="mi-method"><span>FACT</span><b>→</b><span>HYPOTHESIS</span><b>→</b><span>DISCOVERY QUESTION</span></div><small>Evidence earns priority. Discovery earns qualification.</small></div>
    <div className="mi-visual"><div className="mi-visual-heading"><div><span>{stage.number} / {stage.label}</span><p>{stage.phrase}</p></div><b>INTELLIGENCE SYSTEM</b></div><div className="mi-canvas">{stageVisuals.map((visual, index) => <div className={`mi-stage${activeStage === index ? ' is-active' : ''}`} aria-hidden={activeStage !== index} key={stages[index].label}>{visual}</div>)}</div><div className="mi-stage-controls" aria-label="Choose market intelligence stage">{stages.map((item, index) => <button type="button" aria-label={`Show stage ${item.number}: ${item.label}`} aria-pressed={activeStage === index} onClick={() => setActiveStage(index)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setActiveStage(index); } }} key={item.number}><span>{item.number}</span><i /></button>)}</div><div className="mi-mobile-flow" aria-hidden="true">{stages.map((item, index) => <span className={index === activeStage ? 'is-active' : ''} key={item.number}>{item.label}</span>)}</div></div>
  </div>;
}
