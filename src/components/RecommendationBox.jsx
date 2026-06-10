export function RecommendationBox({ onUnavailable }) {
  return (
    <section className="recommendation-card">
      <div className="recommendation-copy">
        <p className="eyebrow eyebrow-green">AI Recommendation</p>
        <h3>Option A - Anaerobic Digestion</h3>
        <p>
          This option is the best fit for your community because it balances reliability, organic waste availability,
          by-product value, and local employment potential.
        </p>
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
