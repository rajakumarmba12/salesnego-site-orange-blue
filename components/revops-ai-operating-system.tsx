'use client';

import { type CSSProperties } from 'react';
import { useStageRotation } from './use-stage-rotation';

const stages = [
  { number: '01', short: 'DATA', label: 'CONNECT THE DATA', phrase: 'Bring commercial signals into one operating layer.' },
  { number: '02', short: 'ORCHESTRATE', label: 'ORCHESTRATE THE WORK', phrase: 'Turn raw data into coordinated commercial action.' },
  { number: '03', short: 'EXECUTE', label: 'MOVE COMMERCIAL WORK FORWARD', phrase: 'Connect engagement activity to opportunity progression.' },
  { number: '04', short: 'VISIBILITY', label: 'SEE WHAT MATTERS', phrase: 'Create visibility across the commercial system.' },
] as const;

const tooltips: Record<string, string> = {
  'Account Intelligence': 'Context for why this account matters.',
  'Workflow Automation': 'Moves routine work without losing control.',
  Pipeline: 'Shows where opportunities are progressing or stalling.',
};

function Module({ children, className = '', index = 0 }: { children: string; className?: string; index?: number }) {
  return <div className={`ro-module ${className}`} data-tip={tooltips[children]} style={{ '--module': index } as CSSProperties}><i aria-hidden="true" /><span>{children}</span></div>;
}

function ConnectData() {
  const inputs = ['CRM', 'Website Activity', 'Email Engagement', 'Market Signals', 'Customer Data', 'Third-Party Data'];
  return <div className="ro-data-scene" aria-hidden="true"><div className="ro-input-grid">{inputs.map((item, index) => <Module index={index} key={item}>{item}</Module>)}</div><div className="ro-merge-lines"><i /><i /><i /></div><div className="ro-data-layer"><small>COMMERCIAL DATA LAYER</small><strong>Connected. Structured. Actionable.</strong><span>READY</span></div></div>;
}

function OrchestrateWork() {
  const modules = ['Account Intelligence', 'Prospect Enrichment', 'Trigger Monitoring', 'Workflow Automation', 'Qualification Logic'];
  return <div className="ro-orchestration-scene" aria-hidden="true"><div className="ro-ai-strip"><span>AI-ASSISTED ORCHESTRATION</span><small>ROUTING · PRIORITIZATION · WORKFLOW SUPPORT</small></div><div className="ro-orchestration-grid">{modules.map((item, index) => <Module index={index} className={index === 4 ? 'ro-qualified-module' : ''} key={item}>{item}</Module>)}</div><div className="ro-status-row"><span>READY</span><span>MATCH</span><span>TRIGGER</span><span>QUALIFIED</span></div></div>;
}

function MoveWorkForward() {
  const workflow = ['Research', 'Personalization', 'Sequence', 'Meeting', 'Follow-Up', 'Pipeline'];
  return <div className="ro-execution-scene" aria-hidden="true"><div className="ro-workflow-lane">{workflow.map((item, index) => <Module index={index} className={index === 5 ? 'ro-pipeline-module' : ''} key={item}>{item}</Module>)}<i className="ro-opportunity-token" /></div><div className="ro-status-progress">{['SIGNAL', 'ENGAGED', 'DISCOVERY', 'QUALIFIED', 'ACTIVE OPPORTUNITY'].map((item, index) => <span style={{ '--status': index } as CSSProperties} key={item}>{item}</span>)}</div></div>;
}

function VisibilityControl() {
  const summaries = [['Pipeline Health', 'STABLE'], ['Stage Progression', 'PROGRESSING'], ['Follow-Up Risk', 'ATTENTION'], ['Account Activity', 'ACTIVE'], ['Forecast Discipline', 'STRUCTURED'], ['Win/Loss Signals', 'REVIEW']];
  return <div className="ro-visibility-scene" aria-hidden="true"><div className="ro-summary-grid">{summaries.map(([title, status], index) => <div className={status === 'ATTENTION' ? 'needs-attention' : ''} style={{ '--summary': index } as CSSProperties} key={title}><span>{title}</span><b><i />{status}</b></div>)}</div><div className="ro-foundation-strip"><span>DATA</span><span>PROCESS</span><span>AUTOMATION</span><span>INSIGHT</span></div><p>One connected operating system for commercial execution.</p></div>;
}

const stageVisuals = [<ConnectData key="data" />, <OrchestrateWork key="orchestrate" />, <MoveWorkForward key="execute" />, <VisibilityControl key="visibility" />];

export default function RevOpsAiOperatingSystem() {
  const { activeStage, hoverPaused, pauseOnPointer, resumeOnPointer, selectStage } = useStageRotation({ stageCount: stages.length, cycleDuration: 3200, reducedMotionStage: 3 });

  const stage = stages[activeStage];

  return <div className="section-shell revops-operating-system" aria-label="Revenue Operations and AI commercial operating system">
    <div className="ro-intro"><p className="eyebrow">REVENUE OPERATIONS &amp; AI-ACCELERATED SALES</p><h3>One connected operating layer for commercial execution.</h3><p>SalesNego connects data, intelligence, automation and pipeline discipline so commercial work moves forward with visibility and control.</p><div className="ro-system-line"><span>CRM</span><b>→</b><span>DATA</span><b>→</b><span>INTELLIGENCE</span><b>→</b><span>PIPELINE</span></div></div>
    <div className={`ro-board${hoverPaused ? ' is-paused' : ''}`} onPointerEnter={pauseOnPointer} onPointerLeave={resumeOnPointer}><div className="ro-board-heading"><div><span>{stage.number} / {stage.label}</span><p>{stage.phrase}</p></div><b>COMMERCIAL OPERATING SYSTEM</b></div><div className="ro-canvas">{stageVisuals.map((visual, index) => <div className={`ro-stage${activeStage === index ? ' is-active' : ''}`} aria-hidden={activeStage !== index} key={stages[index].label}>{visual}</div>)}</div><div className="ro-stage-controls" aria-label="Choose Revenue Operations stage">{stages.map((item, index) => <button type="button" aria-label={`Show stage ${item.number}: ${item.label}`} aria-pressed={activeStage === index} onClick={() => selectStage(index)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); selectStage(index); } }} key={item.number}><span>{item.number}</span><b>{item.short}</b></button>)}</div><div className="ro-mobile-flow" aria-hidden="true"><span>DATA SOURCES</span><span>DATA LAYER</span><span>INTELLIGENCE + AUTOMATION</span><span>ENGAGEMENT + PIPELINE</span><span>VISIBILITY</span></div></div>
  </div>;
}
