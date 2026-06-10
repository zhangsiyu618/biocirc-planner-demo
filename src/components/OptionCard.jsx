import { Icon } from "./Icon";

function flowIcon(step) {
  const label = step.toLowerCase();

  if (label.includes("waste") || label.includes("residues") || label.includes("rdf")) {
    return "waste";
  }

  if (label.includes("digester") || label.includes("gasifier") || label.includes("boiler")) {
    return "factory";
  }

  if (label.includes("biogas") || label.includes("syngas")) {
    return "sparkles";
  }

  if (label.includes("generator") || label.includes("turbine") || label.includes("chp")) {
    return "gear";
  }

  return "energy";
}

export function OptionCard({ option }) {
  return (
    <article className={`option-card tone-${option.tone} ${option.recommended ? "recommended" : ""}`.trim()}>
      <div className="option-head">
        <div>
          <div className="option-kicker">{option.title}</div>
          <h3>{option.technology}</h3>
          <div className="option-subtitle">{option.subtitle}</div>
        </div>
        {option.recommended ? <span className="recommended-badge">Recommended</span> : null}
      </div>

      <div className="option-visual-strip">
        {option.flow.map((step, index) => (
          <div className="option-visual-step" key={`${step}-visual`}>
            <div className="option-visual-icon">
              <Icon name={flowIcon(step)} />
            </div>
            <span>{step}</span>
            {index < option.flow.length - 1 ? <div className="option-visual-connector" /> : null}
          </div>
        ))}
        <div className="option-side-output">
          <div className="option-side-branch" />
          <div className="option-side-badge">{option.sideOutput}</div>
        </div>
      </div>

      <div className="option-flow">
        {option.flow.map((step, index) => (
          <div className="flow-segment" key={step}>
            <span className="flow-step">{step}</span>
            {index < option.flow.length - 1 ? <span className="flow-arrow">-&gt;</span> : null}
          </div>
        ))}
      </div>

      <div className="metric-grid">
        {option.metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <span className="metric-label">{metric.label}</span>
            <strong className="metric-value">{metric.value}</strong>
          </div>
        ))}
      </div>

      <div className="list-group">
        <div className="list-title">Advantages</div>
        <ul className="feature-list">
          {option.advantages.map((item) => (
            <li key={item}>
              <Icon name="check" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="list-group">
        <div className="list-title">Trade-offs</div>
        <ul className="feature-list feature-list-warn">
          {option.tradeoffs.map((item) => (
            <li key={item}>
              <Icon name="alert" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
