import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Mic, 
  MicOff, 
  Sparkles, 
  Bot,
  MessageSquare
} from 'lucide-react';

export default function GramAIDrawer({ isOpen, onClose, onOpen, lang }) {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: lang === 'hi' 
        ? "नमस्ते! मैं आपका डिजिटल व्यापार सहायक हूँ। आप अपने गाँव के व्यापार, लोन पात्रता, या मुनाफे के नए मौकों के बारे में कुछ भी पूछ सकते हैं।"
        : "Namaste! I am your rural business AI assistant. Ask me anything about village demand, competitor density, or safe borrowing."
    }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = { sender: 'user', text: query };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      let reply = "";
      const lower = query.toLowerCase();

      if (lower.includes("loan") || lower.includes("कर्ज") || lower.includes("पैसा") || lower.includes("afford") || lower.includes("लोन")) {
        reply = "आपकी ₹1 लाख पूँजी पर PMEGP/मुद्रा में 9 लाख का लोन मिल सकता है, लेकिन सलाह है कि लोन ₹7,20,000 तक ही रखें ताकि मासिक किस्त ₹12,320 से कम रहे और गर्मी में दूध घटने पर भी आप पर कोई दबाव न आए।";
      } else if (lower.includes("opportunity") || lower.includes("gap") || lower.includes("अवसर") || lower.includes("मौका")) {
        reply = "गाँव में सबसे बड़ा मौका: घर-घर सुबह पैक दूध पहुँचाना + ताज़ा पनीर व दही। यहाँ 15 दूध वाले हैं पर कोई भी शिक्षकों और कर्मचारियों के घरों तक सुबह डिलीवरी नहीं करता!";
      } else if (lower.includes("compare") || lower.includes("तुलना")) {
        reply = "डेयरी में रोजाना नकद आमदनी (स्कोर 82/100) होती है, जबकि सिलाई में कम पूँजी लगती है पर लगन और त्योहारों में ही बिक्री बढ़ती है। ₹1 लाख बजट में डेयरी सबसे बढ़िया है।";
      } else if (lower.includes("simulate") || lower.includes("risk") || lower.includes("जोखिम") || lower.includes("घट")) {
        reply = "अगर गर्मी में दूध बिक्री 20% घट जाए, तो भी आपकी शुद्ध मासिक बचत ₹19,600 बचेगी और ₹12,320 की किस्त आसानी से निकल जाएगी!";
      } else {
        reply = "आपके गाँव में डेयरी व्यवसाय का स्कोर 78/100 (सुरक्षित) है। सूखे चारे के लिए कम से कम 2 किसानों से समझौता रखें और हाईवे के ढाबों को दूध सप्लाई करें!";
      }

      setMessages(prev => [...prev, { sender: 'ai', text: reply }]);
      
      if ('speechSynthesis' in window) {
        try {
          const utterance = new SpeechSynthesisUtterance(reply);
          utterance.rate = 1.0;
          window.speechSynthesis.speak(utterance);
        } catch(e) {}
      }
    }, 450);
  };

  const toggleMic = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert("Speech recognition is simulated. Asking sample query...");
      handleSend("गाँव में सबसे ज़्यादा मुनाफे का क्या मौका है?");
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';

    if (!isListening) {
      setIsListening(true);
      recognition.start();
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setIsListening(false);
        handleSend(transcript);
      };
      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);
    } else {
      setIsListening(false);
      recognition.stop();
    }
  };

  return (
    <>
      {/* Floating AI Chatbot Icon Trigger at Bottom Right (Text removed, sleek bot icon) */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="animate-pulse-glow"
          style={{
            position: 'fixed',
            bottom: '26px',
            right: '26px',
            width: '58px',
            height: '58px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #15803d, #166534)',
            color: '#ffffff',
            border: '2px solid rgba(255, 255, 255, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(21, 128, 61, 0.45)',
            zIndex: 999,
            transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          title={lang === 'hi' ? 'AI चैटबॉट से पूछें' : 'Ask AI Chatbot'}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
        >
          <Bot size={28} color="#ffffff" />
          
          {/* Active green status dot */}
          <div style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#22c55e',
            border: '2px solid #ffffff'
          }} />
        </button>
      )}

      {/* Floating Chat Drawer Fixed at Bottom Right */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '26px',
          right: '26px',
          width: '380px',
          height: '540px',
          background: '#ffffff',
          borderRadius: '22px',
          boxShadow: '0 16px 45px rgba(0,0,0,0.22)',
          border: '1px solid #e2e8f0',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1000,
          overflow: 'hidden'
        }} className="animate-fade-in">
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #15803d, #14532d)',
            padding: '14px 18px',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={20} color="#ffffff" />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.94rem' }}>AI व्यापार सहायक</h4>
                <span style={{ fontSize: '0.68rem', color: '#bbf7d0' }}>ऑनलाइन • बोलकर या लिखकर पूछें</span>
              </div>
            </div>
            <button 
              onClick={onClose} 
              style={{ background: 'transparent', border: 'none', color: '#ffffff', cursor: 'pointer', padding: '4px' }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick Prompts Bar */}
          <div style={{ padding: '8px 12px', background: '#f8fafc', borderBottom: '1px solid #e2e8f0', display: 'flex', gap: '6px', overflowX: 'auto' }}>
            {[
              { label: "सुरक्षित लोन कितना?", prompt: "मेरे लिए सुरक्षित लोन कितना है?" },
              { label: "मुनाफे का मौका", prompt: "गाँव में सबसे ज़्यादा मुनाफे का क्या मौका है?" },
              { label: "बिक्री घट जाए तो?", prompt: "अगर बिक्री 20% घट जाए तो क्या होगा?" },
              { label: "डेयरी vs सिलाई", prompt: "डेयरी और सिलाई में कौन बेहतर है?" }
            ].map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p.prompt)}
                style={{
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  padding: '4px 8px',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  color: '#334155',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Messages Scroll Area */}
          <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((m, idx) => {
              const isAi = m.sender === 'ai';
              return (
                <div 
                  key={idx}
                  style={{
                    alignSelf: isAi ? 'flex-start' : 'flex-end',
                    maxWidth: '85%',
                    background: isAi ? '#f0fdf4' : '#15803d',
                    color: isAi ? '#14532d' : '#ffffff',
                    border: isAi ? '1px solid #bbf7d0' : 'none',
                    borderRadius: '14px',
                    padding: '10px 14px',
                    fontSize: '0.82rem',
                    lineHeight: 1.45,
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
                  }}
                >
                  {m.text}
                </div>
              );
            })}
          </div>

          {/* Input Box */}
          <div style={{ padding: '12px', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '8px', background: '#ffffff' }}>
            <button
              onClick={toggleMic}
              style={{
                background: isListening ? '#ef4444' : '#f1f5f9',
                color: isListening ? '#ffffff' : '#15803d',
                border: 'none',
                borderRadius: '50%',
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title={isListening ? "Listening..." : "बोलकर पूछें"}
            >
              {isListening ? <MicOff size={16} /> : <Mic size={16} />}
            </button>

            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={lang === 'hi' ? "गाँव या व्यापार के बारे में पूछें..." : "Ask AI about demand, loan or gaps..."}
              style={{
                flex: 1,
                padding: '8px 12px',
                borderRadius: '10px',
                border: '1px solid #cbd5e1',
                fontSize: '0.82rem',
                outline: 'none'
              }}
            />

            <button
              onClick={() => handleSend()}
              style={{
                background: '#15803d',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
