import { quickInsights } from "../data";
import { Icon } from "./Icon";

export function QuickInsights() {
  return (
    <section className="widget-card">
      <div className="widget-title-row">
        <h3>Quick Insights</h3>
        <span className="widget-tag widget-tag-blue">Planner cues</span>
      </div>
      <ul className="insight-list">
        {quickInsights.map((item) => (
          <li key={item}>
            <Icon name="chart" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
