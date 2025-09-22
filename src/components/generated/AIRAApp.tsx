import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';
import { TherapeuticMotionBackground } from './TherapeuticMotionBackground';
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// @component: AIRAApp
export const AIRAApp = () => {
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    text: "Hello, I'm AIRA 2.0. I'm here to provide a safe, supportive space for you to share whatever is on your mind. How are you feeling today?",
    sender: 'bot',
    timestamp: new Date()
  }]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const botResponses = ["I hear you, and I want you to know that your feelings are valid. Can you tell me more about what's troubling you?", "Thank you for sharing that with me. It takes courage to open up about difficult experiences. How has this been affecting you?", "I'm here to listen without judgment. Your experience matters, and you deserve support. What would be most helpful for you right now?", "It sounds like you're going through something really challenging. Remember that you're not alone in this. How can we work through this together?", "I appreciate you trusting me with this. Sometimes just expressing these feelings can be a step toward healing. How are you taking care of yourself?", "Your strength in sharing this is remarkable. It's okay to feel overwhelmed. What support systems do you have around you?"];
  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 2000);
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // @return
  return <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Therapeutic Motion Background */}
      <TherapeuticMotionBackground />

      {/* Main Chat Interface */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.6,
        ease: "easeOut"
      }} className="w-full max-w-4xl h-[90vh] bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-8 py-6 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 border-b border-white/30">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800">AIRA 2.0</h1>
                <p className="text-sm text-slate-600">Your supportive AI companion</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            <AnimatePresence>
              {messages.map(message => <motion.div key={message.id} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: -20
            }} transition={{
              duration: 0.4,
              ease: "easeOut"
            }} className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'user' ? 'bg-gradient-to-br from-blue-400 to-blue-600' : 'bg-gradient-to-br from-indigo-400 to-purple-500'}`}>
                    {message.sender === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                  </div>
                  <div className={`max-w-[70%] ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    <div className={`px-4 py-3 rounded-2xl ${message.sender === 'user' ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-tr-md' : 'bg-white/90 text-slate-800 rounded-tl-md border border-white/30 shadow-sm'}`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                    <span className="text-xs text-slate-500 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                    </span>
                  </div>
                </motion.div>)}
            </AnimatePresence>

            {isTyping && <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white/90 px-4 py-3 rounded-2xl rounded-tl-md border border-white/30 shadow-sm">
                  <div className="flex gap-1">
                    <motion.div className="w-2 h-2 bg-slate-400 rounded-full" animate={{
                  scale: [1, 1.2, 1]
                }} transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0
                }} />
                    <motion.div className="w-2 h-2 bg-slate-400 rounded-full" animate={{
                  scale: [1, 1.2, 1]
                }} transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0.2
                }} />
                    <motion.div className="w-2 h-2 bg-slate-400 rounded-full" animate={{
                  scale: [1, 1.2, 1]
                }} transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0.4
                }} />
                  </div>
                </div>
              </motion.div>}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 bg-gradient-to-r from-indigo-50/30 to-purple-50/30 border-t border-white/30">
            <div className="flex gap-3 items-end">
              <div className="flex-1">
                <textarea value={inputText} onChange={e => setInputText(e.target.value)} onKeyPress={handleKeyPress} placeholder="Share what's on your mind... I'm here to listen." className="w-full px-4 py-3 bg-white/90 border border-white/30 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-400/50 text-slate-800 placeholder-slate-500 shadow-sm" rows={2} disabled={isTyping} />
              </div>
              <motion.button onClick={handleSendMessage} disabled={inputText.trim() === '' || isTyping} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-shadow">
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>;
};