import { environmentalImpact } from "../data";
import { Icon } from "./Icon";

export function EnvironmentalImpact() {
  return (
    <section className="widget-card">
      <div className="widget-title-row">
        <h3>Environmental Impact</h3>
        <span className="widget-tag widget-tag-green">Mock outcomes</span>
      </div>
      <div className="impact-list">
        {environmentalImpact.map((item) => (
          <div className="impact-item" key={item.label}>
            <div className="impact-icon">
              <Icon name="leaf" />
            </div>
            <div>
              <div className="impact-label">{item.label}</div>
              <div className="impact-value">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
