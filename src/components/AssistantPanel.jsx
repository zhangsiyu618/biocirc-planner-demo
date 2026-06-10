import { useState } from "react";
import { ConversationAvatar } from "./DashboardIllustrations";
import { Icon } from "./Icon";

function MessageBubble({ message }) {
  const identity = message.role === "assistant" ? "BioCirc AI" : "User";
  const meta = message.role === "assistant" ? "LLM planning assistant" : "Planner";

  return (
    <article className={`message message-${message.role}`}>
      <ConversationAvatar role={message.role} />
      <div className="message-content">
        <div className="message-meta">
          <div className="message-identity">{identity}</div>
          <div className="message-role-label">{meta}</div>
        </div>
        <div className="message-body">
          {message.content.split("\n").map((line, index) => (
            <p key={`${message.role}-${index}`}>{line || "\u00A0"}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

export function AssistantPanel({ messages, onSendMessage, onUnavailable }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = inputValue.trim();

    if (!trimmed) {
      onUnavailable();
      return;
    }

    onSendMessage(trimmed);
    setInputValue("");
  };

  return (
    <section className="panel panel-assistant">
      <div className="panel-header">
        <div>
          <p className="eyebrow eyebrow-blue">LLM workspace</p>
          <h2>AI Assistant</h2>
        </div>
        <span className="panel-pill panel-pill-blue">LLM Analysis</span>
      </div>

      <div className="assistant-summary">
        <div className="summary-item">
          <span>Community type</span>
          <strong>Remote mixed-use settlement</strong>
        </div>
        <div className="summary-item">
          <span>Primary goal</span>
          <strong>Reliable low-cost energy</strong>
        </div>
        <div className="summary-item">
          <span>Waste stream</span>
          <strong>High organics availability</strong>
        </div>
      </div>

      <div className="assistant-visual-band">
        <div className="assistant-visual-copy">
          <strong>AI planning workspace</strong>
          <span>Upload needs. Review options. Export direction.</span>
        </div>
        <div className="assistant-visual-art" aria-hidden="true">
          <div className="assistant-node assistant-node-user">
            <ConversationAvatar role="user" />
          </div>
          <div className="assistant-node assistant-node-ai">
            <ConversationAvatar role="assistant" />
          </div>
          <div className="assistant-visual-link assistant-link-a" />
          <div className="assistant-visual-link assistant-link-b" />
          <div className="assistant-pulse" />
        </div>
      </div>

      <div className="chat-feed">
        {messages.map((message, index) => (
          <MessageBubble key={`${message.role}-${index}`} message={message} />
        ))}
      </div>

      <form className="chat-form" onSubmit={handleSubmit}>
        <label className="chat-input-wrap" htmlFor="chat-input">
          <input
            autoComplete="off"
            id="chat-input"
            maxLength={240}
            name="message"
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Ask a follow-up question..."
            type="text"
            value={inputValue}
          />
        </label>
        <button aria-label="Send message" className="send-button" type="submit">
          <Icon name="send" />
        </button>
      </form>
    </section>
  );
}
