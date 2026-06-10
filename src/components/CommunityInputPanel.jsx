import { inputSections, priorities } from "../data";
import { CommunityScene } from "./DashboardIllustrations";
import { Icon } from "./Icon";

export function CommunityInputPanel({ onUnavailable }) {
  return (
    <section className="panel panel-input">
      <div className="panel-header">
        <div>
          <p className="eyebrow">Community context</p>
          <h1>Enter Community Data</h1>
        </div>
        <span className="panel-pill panel-pill-green">Live demo</span>
      </div>
      <p className="panel-copy">
        Provide local context for a personalised design.
      </p>

      <CommunityScene />

      <div className="input-stack">
        {inputSections.map((section, index) => (
          <label className="input-block" htmlFor={`field-${index}`} key={section.label}>
            <span className="input-label-row">
              <Icon name={section.icon} />
              <span className="input-label-text">{section.label}</span>
            </span>
            <select className="select-input" id={`field-${index}`} defaultValue={section.options[section.defaultIndex ?? 0]}>
              {section.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <span className="input-note">{section.note}</span>
          </label>
        ))}
      </div>

      <div className="chip-section">
        <div className="section-mini-title">Local Priorities</div>
        <div className="chip-row">
          {priorities.map((priority, index) => (
            <button
              className={`priority-chip ${index === 0 ? "priority-chip-active" : ""}`}
              key={priority}
              onClick={onUnavailable}
              type="button"
            >
              {priority}
            </button>
          ))}
        </div>
      </div>

      <div className="left-footer-card">
        <div className="mini-stat">
          <span className="mini-stat-label">Scenario readiness</span>
          <strong>6/6 inputs complete</strong>
        </div>
        <div className="mini-stat">
          <span className="mini-stat-label">Community fit signal</span>
          <strong>Organic waste-led pathway</strong>
        </div>
      </div>

      <button className="primary-button" onClick={onUnavailable} type="button">
        <Icon name="sparkles" />
        <span>Analyze & Generate Options</span>
      </button>
    </section>
  );
}
