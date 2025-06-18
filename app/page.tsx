'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'Shaniqua', text: "🌺 Hi sugar! Welcome to your digital beach. What can I help with?" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'You', text: input }]);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        sender: 'Shaniqua',
        text: generateReply(input)
      }]);
    }, 600);
    setInput('');
    playClick();
  };

  const generateReply = (text: string) => {
    const t = text.toLowerCase();
    if (t.includes('hello') || t.includes('hi')) return 'Hey hey! How’s the surf treating ya? 🌊';
    if (t.includes('vault')) return 'The SaltIQ Vault is your beach-front bungalow of power 🔐';
    if (t.includes('backup')) return 'Instant restore? You got it, babe 🌀';
    return 'Just soaking up data rays 🌞';
  };

  const playClick = () => {
    new Audio('/click.wav').play();
  };

  return (
    <main className={styles.main}>
      <div className={styles.overlay}>
        <h2>COMING SOON</h2>
        <h1>SALTIQ CLIENT VAULT</h1>
        <p className={styles.tagline}>
          A beachy AI-powered command center – secure, fluid, and always glowing.
        </p>

        <div className={styles.form}>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={playClick}>Login</button>
        </div>

        <div className={styles.features}>
          <h3>🧠 Features</h3>
          <p>🔐 Track spending & view invoices</p>
          <p>📊 Real-time dashboards & reports</p>
          <p>🔄 Restore files instantly</p>
          <p>🧬 Fully encrypted. Vault-grade logic.</p>
        </div>

        <button className={styles.chatToggle} onClick={() => setShowChat(!showChat)}>
          💬 Chat with Shaniqua
        </button>

        {showChat && (
          <div className={styles.chatModal}>
            <div className={styles.chatHeader}>💖 Shaniqua AI</div>
            <div className={styles.chatBody}>
              {messages.map((msg, idx) => (
                <div key={idx}><strong>{msg.sender}:</strong> {msg.text}</div>
              ))}
            </div>
            <input
              type="text"
              placeholder="Type here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
          </div>
        )}
      </div>
    </main>
  );
}
