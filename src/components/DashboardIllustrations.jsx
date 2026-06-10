import { Icon } from "./Icon";

export function CommunityScene() {
  return (
    <div className="illustration-card community-scene" aria-hidden="true">
      <div className="scene-sky" />
      <div className="scene-sun" />
      <div className="scene-hill hill-back" />
      <div className="scene-hill hill-front" />
      <div className="scene-panel scene-home">
        <Icon name="community" />
      </div>
      <div className="scene-panel scene-solar">
        <Icon name="energy" />
      </div>
      <div className="scene-panel scene-bio">
        <Icon name="factory" />
      </div>
      <div className="scene-panel scene-roadmark">
        <Icon name="road" />
      </div>
      <div className="scene-caption">
        <strong>Remote community snapshot</strong>
        <span>Context map</span>
      </div>
    </div>
  );
}

export function ResultsHero() {
  return (
    <section className="results-hero">
      <div className="results-hero-copy">
        <p className="eyebrow eyebrow-green">Planning canvas</p>
        <h3>Visual technology shortlist</h3>
      </div>
      <div className="results-hero-art" aria-hidden="true">
        <div className="hero-orbit hero-orbit-a" />
        <div className="hero-orbit hero-orbit-b" />
        <div className="hero-card hero-card-feed">
          <span>Feedstock</span>
          <strong>1.2 t/day organics</strong>
        </div>
        <div className="hero-card hero-card-process">
          <span>Preferred route</span>
          <strong>Anaerobic digestion</strong>
        </div>
        <div className="hero-card hero-card-output">
          <span>Energy output</span>
          <strong>180 kWh/day</strong>
        </div>
        <div className="hero-center">
          <Icon name="recycle" />
        </div>
      </div>
    </section>
  );
}

export function ConversationAvatar({ role }) {
  const isAssistant = role === "assistant";

  return (
    <div className={`conversation-avatar ${isAssistant ? "conversation-avatar-ai" : "conversation-avatar-user"}`}>
      {isAssistant ? <Icon name="sparkles" /> : <Icon name="user" />}
    </div>
  );
}
