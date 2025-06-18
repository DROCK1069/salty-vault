import styles from './page.module.css';
import { useState } from 'react';

export default function Home() {
  const [chatVisible, setChatVisible] = useState(false);
  const [chatLog, setChatLog] = useState([{ sender: "Shaniqua", text: "🌴 Aloha! How can I assist you today?" }]);
  const [input, setInput] = useState("");

  const handleChat = () => {
    if (!input.trim()) return;
    setChatLog([...chatLog, { sender: "You", text: input }, { sender: "Shaniqua", text: "🧠 I’m working on that..." }]);
    setInput("");
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>🌊 SaltIQ Client Vault</h1>
      <p className={styles.tagline}>Flowing AI meets beachy vibes. Login to your digital vault.</p>

      <div className={styles.loginBox}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>🔓 Enter Vault</button>
      </div>

      <div>
        <button className={styles.chatToggle} onClick={() => setChatVisible(!chatVisible)}>
          {chatVisible ? "🛑 Close Chat" : "💬 Chat with Shaniqua"}
        </button>
      </div>

      {chatVisible && (
        <div className={styles.chatBox}>
          <div className={styles.chatLog}>
            {chatLog.map((msg, i) => (
              <div key={i}><strong>{msg.sender}:</strong> {msg.text}</div>
            ))}
          </div>
          <input
            className={styles.chatInput}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleChat()}
            placeholder="Type a message..."
          />
        </div>
      )}
    </main>
  );
}
