export function RecommendationBox({ onUnavailable }) {
  return (
    <section className="recommendation-card">
      <div className="recommendation-copy">
        <p className="eyebrow eyebrow-green">AI Recommendation</p>
        <h3>Option A - Anaerobic Digestion</h3>
        <p>Best fit for high-organic remote communities.</p>
      </div>
      <div className="recommendation-actions">
        <button className="primary-button primary-button-compact" onClick={onUnavailable} type="button">
          <span>View Full Report</span>
        </button>
        <button className="text-button" onClick={onUnavailable} type="button">
          <span>Export Comparison PDF</span>
        </button>
      </div>
    </section>
  );
}
