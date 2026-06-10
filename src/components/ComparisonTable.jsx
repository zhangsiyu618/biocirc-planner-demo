import { comparisonRows } from "../data";

export function ComparisonTable() {
  return (
    <section className="comparison-card">
      <div className="widget-title-row">
        <div>
          <h3>Compare Solutions</h3>
          <p className="widget-copy">Side-by-side comparison to support your decision.</p>
        </div>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Criteria</th>
              <th className="highlight-cell">Option A</th>
              <th>Option B</th>
              <th>Option C</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row[0]}>
                <th>{row[0]}</th>
                <td className="highlight-cell">{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
