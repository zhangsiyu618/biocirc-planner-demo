import { useState } from "react";
import { AssistantPanel } from "./components/AssistantPanel";
import { CommunityInputPanel } from "./components/CommunityInputPanel";
import { GeneratedOptionsPanel } from "./components/GeneratedOptionsPanel";
import { Header } from "./components/Header";
import { UnavailableToast } from "./components/UnavailableToast";
import { starterMessages, unavailableMessage } from "./data";

export default function App() {
  const [messages, setMessages] = useState(starterMessages);
  const [toastMessage, setToastMessage] = useState("");
  const [toastKey, setToastKey] = useState(0);

  const showUnavailable = () => {
    setToastMessage(unavailableMessage);
    setToastKey((value) => value + 1);
  };

  const handleSendMessage = (message) => {
    setMessages((current) => [...current, { role: "assistant", content: unavailableMessage }]);
    showUnavailable();
  };

  return (
    <div className="page-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <Header onUnavailable={showUnavailable} />
      <main className="dashboard">
        <CommunityInputPanel onUnavailable={showUnavailable} />
        <AssistantPanel
          messages={messages}
          onSendMessage={handleSendMessage}
          onUnavailable={showUnavailable}
        />
        <GeneratedOptionsPanel onUnavailable={showUnavailable} />
      </main>
      <UnavailableToast key={toastKey} message={toastMessage} />
    </div>
  );
}
