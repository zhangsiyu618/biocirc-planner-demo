import { options } from "../data";
import { ComparisonTable } from "./ComparisonTable";
import { EnvironmentalImpact } from "./EnvironmentalImpact";
import { OptionCard } from "./OptionCard";
import { QuickInsights } from "./QuickInsights";
import { RecommendationBox } from "./RecommendationBox";
import { SiteOverview } from "./SiteOverview";

export function GeneratedOptionsPanel({ onUnavailable }) {
  return (
    <section className="panel panel-results">
      <div className="panel-header panel-header-results">
        <div>
          <p className="eyebrow eyebrow-green">Generated solutions</p>
          <h2>Generated Waste-to-Energy Options</h2>
          <p className="results-copy">AI-generated solutions tailored to your community.</p>
        </div>
        <button className="secondary-button" onClick={onUnavailable} type="button">
          <span>View Assumptions</span>
        </button>
      </div>

      <div className="options-grid">
        {options.map((option) => (
          <OptionCard key={option.id} option={option} />
        ))}
      </div>

      <div className="results-widgets">
        <SiteOverview />
        <QuickInsights />
        <EnvironmentalImpact />
      </div>

      <ComparisonTable />
      <RecommendationBox onUnavailable={onUnavailable} />
    </section>
  );
}
