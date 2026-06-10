import { Icon } from "./Icon";

export function SiteOverview() {
  return (
    <section className="widget-card">
      <div className="widget-title-row">
        <h3>Site Overview</h3>
        <span className="widget-tag">Concept layout</span>
      </div>
      <p className="widget-copy">Illustrative footprint for the recommended anaerobic digestion pathway.</p>
      <div className="site-map">
        <div className="site-road">
          <Icon name="road" />
          <span>Access road</span>
        </div>
        <div className="site-node node-feedstock">
          <Icon name="storage" />
          <strong>Feedstock yard</strong>
        </div>
        <div className="site-node node-digester">
          <Icon name="factory" />
          <strong>Digester / reactor</strong>
        </div>
        <div className="site-node node-chp">
          <Icon name="energy" />
          <strong>CHP / power house</strong>
        </div>
        <div className="site-node node-storage">
          <Icon name="pin" />
          <strong>Storage</strong>
        </div>
        <div className="site-link link-a" />
        <div className="site-link link-b" />
        <div className="site-link link-c" />
      </div>
    </section>
  );
}
