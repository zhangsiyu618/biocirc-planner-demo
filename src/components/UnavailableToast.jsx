import { useEffect, useState } from "react";

export function UnavailableToast({ message }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!message) {
      return undefined;
    }

    setVisible(true);
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 2400);

    return () => {
      window.clearTimeout(timer);
    };
  }, [message]);

  return (
    <div className={`toast ${visible ? "toast-visible" : ""}`.trim()} role="status" aria-live="polite">
      {message}
    </div>
  );
}
