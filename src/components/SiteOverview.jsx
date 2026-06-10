import { Icon } from "./Icon";

export function SiteOverview() {
  return (
    <section className="widget-card">
      <div className="widget-title-row">
        <h3>Site Overview</h3>
        <span className="widget-tag">Concept layout</span>
      </div>
      <div className="site-map">
        <div className="site-map-photo" />
        <div className="site-map-trees tree-a" />
        <div className="site-map-trees tree-b" />
        <div className="site-map-trees tree-c" />
        <div className="site-pad pad-a" />
        <div className="site-pad pad-b" />
        <div className="site-pad pad-c" />
        <div className="site-pad pad-d" />
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
