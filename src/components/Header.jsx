import { navItems } from "../data";
import { Icon } from "./Icon";

const navIconMap = {
  Projects: "folder",
  "Saved Scenarios": "bookmark",
  Help: "help"
};

export function Header({ onUnavailable }) {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-icon">
          <Icon name="recycle" />
        </div>
        <div>
          <div className="brand-title">BioCirc Planner</div>
          <div className="brand-subtitle">LLM-assisted waste-to-energy decision support</div>
        </div>
      </div>
      <nav className="topnav">
        {navItems.map((item) => (
          <button key={item} className="nav-button" type="button" onClick={onUnavailable}>
            <Icon name={navIconMap[item]} />
            <span>{item}</span>
          </button>
        ))}
        <button className="profile-chip" type="button" onClick={onUnavailable}>
          <Icon name="user" />
          <span>Dr. A. Patel | Planner</span>
        </button>
      </nav>
    </header>
  );
}
