'use client';

import { useEffect, useState, type CSSProperties } from 'react';

const stages = [
  { number: '01', short: 'LAND', label: 'LAND', phrase: 'Win the right initial problem.' },
  { number: '02', short: 'ADOPT', label: 'ADOPT', phrase: 'Turn the first win into customer value.' },
  { number: '03', short: 'EXPAND', label: 'EXPAND', phrase: 'Expand only where another real problem becomes visible.' },
  { number: '04', short: 'RETAIN', label: 'RETAIN & GROW', phrase: 'Protect the relationship and compound customer value.' },
] as const;

const tooltips: Record<string, string> = {
  'CUSTOMER FIT': 'Is this the right account and problem?',
  'VALUE REALIZATION': 'Is the customer achieving the intended outcome?',
  'ADJACENT NEED': 'Has another legitimate business problem become visible?',
  'ACCOUNT INTELLIGENCE': 'What has the relationship taught us?',
};

function GrowthBlock({ children, className = '', index = 0 }: { children: string; className?: string; index?: number }) {
  return <div className={`ag-block ${className}`} data-tip={tooltips[children]} style={{ '--block': index } as CSSProperties}><i aria-hidden="true" /><span>{children}</span></div>;
}

function LandStage() {
  const signals = ['CUSTOMER FIT', 'BUSINESS PROBLEM', 'BUYER ALIGNMENT', 'SOLUTION FIT'];
  return <div className="ag-land" aria-hidden="true"><div className="ag-context-signals">{signals.map((item, index) => <GrowthBlock index={index} key={item}>{item}</GrowthBlock>)}</div><div className="ag-customer-card"><small>CUSTOMER ACCOUNT</small><strong>INITIAL RELATIONSHIP</strong><span>VALIDATED</span></div><div className="ag-solution-card"><i />INITIAL SOLUTION</div><div className="ag-connection-line"><span>ACTIVE RELATIONSHIP</span></div></div>;
}

function AdoptStage() {
  const adoption = [['ONBOARD', 'CONNECTED'], ['IMPLEMENT', 'ACTIVE'], ['USE', 'ACTIVE'], ['VALUE', 'ADOPTED']];
  return <div className="ag-adopt" aria-hidden="true"><div className="ag-persistent-customer">CUSTOMER</div><div className="ag-adoption-path">{adoption.map(([item, status], index) => <div style={{ '--adopt': index } as CSSProperties} key={item}><span>{item}</span><b>{status}</b></div>)}</div><div className="ag-success-layer"><span>CUSTOMER SUCCESS</span><GrowthBlock>VALUE REALIZATION</GrowthBlock></div></div>;
}

function ExpandStage() {
  const adjacent = ['TEAM A', 'TEAM B', 'WORKFLOW', 'USE CASE', 'BUSINESS UNIT', 'ADJACENT NEED'];
  return <div className="ag-expand" aria-hidden="true"><div className="ag-expand-customer">CUSTOMER<small>RELATIONSHIP INTELLIGENCE</small></div><div className="ag-adjacent-grid">{adjacent.map((item, index) => <GrowthBlock className={index === 2 || index === 5 ? 'is-validated' : 'is-potential'} index={index} key={item}>{item}</GrowthBlock>)}</div><div className="ag-expansion-discipline"><span>OBSERVED NEED</span><b>→</b><span>VALIDATED PROBLEM</span><b>→</b><span>EXPANSION OPPORTUNITY</span></div></div>;
}

function RetainStage() {
  const ecosystem = ['INITIAL SOLUTION', 'ADDITIONAL USE CASE', 'CUSTOMER SUCCESS', 'RELATIONSHIP', 'RENEWAL', 'ACCOUNT INTELLIGENCE'];
  return <div className="ag-retain" aria-hidden="true"><div className="ag-retention-ring"><span>CUSTOMER</span><small>STABLE ECOSYSTEM</small></div><div className="ag-ecosystem-grid">{ecosystem.map((item, index) => <GrowthBlock className={index === 1 || index === 4 ? 'is-growth-block' : ''} index={index} key={item}>{item}</GrowthBlock>)}</div><div className="ag-outcome-line"><span>ONE CUSTOMER</span><b>→</b><span>DEEPER VALUE</span><b>→</b><span>STRONGER RELATIONSHIP</span></div></div>;
}

const stageVisuals = [<LandStage key="land" />, <AdoptStage key="adopt" />, <ExpandStage key="expand" />, <RetainStage key="retain" />];
const successBlocks = ['Onboarding', 'Value Realization', 'Customer Engagement', 'Account Intelligence', 'Risk Signals', 'Renewal & Expansion'];

export default function AccountGrowthLifecycle() {
  const [activeStage, setActiveStage] = useState(0);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [hiddenPaused, setHiddenPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => {
      setReduceMotion(motionQuery.matches);
      if (motionQuery.matches) setActiveStage(3);
    };
    const updateVisibility = () => setHiddenPaused(document.hidden);
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
    if (reduceMotion || hoverPaused || hiddenPaused) return;
    const rotation = window.setTimeout(() => setActiveStage((stage) => (stage + 1) % stages.length), 2800);
    return () => window.clearTimeout(rotation);
  }, [activeStage, hiddenPaused, hoverPaused, reduceMotion]);

  const stage = stages[activeStage];

  return <div className={`section-shell account-growth-lifecycle${hoverPaused ? ' is-paused' : ''}`} aria-label="SalesNego customer account growth lifecycle">
    <div className="ag-interactive-area" onMouseEnter={() => setHoverPaused(true)} onMouseLeave={() => setHoverPaused(false)}>
      <div className="ag-heading"><div><span>{stage.number} / {stage.label}</span><p>{stage.phrase}</p></div><b>ACCOUNT GROWTH ENGINE</b></div>
      <div className="ag-canvas">{stageVisuals.map((visual, index) => <div className={`ag-stage${activeStage === index ? ' is-active' : ''}`} aria-hidden={activeStage !== index} key={stages[index].label}>{visual}</div>)}</div>
      <div className="ag-stage-controls" aria-label="Choose account growth stage">{stages.map((item, index) => <button type="button" aria-label={`Show stage ${item.number}: ${item.label}`} aria-pressed={activeStage === index} onClick={() => setActiveStage(index)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setActiveStage(index); } }} key={item.number}><span>{item.number}</span><b>{item.short}</b></button>)}</div>
      <div className="ag-mobile-flow" aria-hidden="true">{stages.map((item, index) => <span className={activeStage === index ? 'is-active' : ''} key={item.number}>{item.label}</span>)}</div>
    </div>
    <div className="ag-success-foundation"><strong>CONTINUOUS CUSTOMER SUCCESS</strong><div>{successBlocks.map((item) => <span key={item}>{item}</span>)}</div></div>
  </div>;
}
