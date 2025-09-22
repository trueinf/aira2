import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';
import { TherapeuticMotionBackground } from './TherapeuticMotionBackground';
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  mpid?: string;
}

// @component: AIRAApp
export const AIRAApp = () => {
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    text: "Hello, I'm AIRA 2.0. I'm here to provide a safe, supportive space for you to share whatever is on your mind. How are you feeling today?",
    sender: 'bot',
    timestamp: new Date(),
    mpid: "0a1fa58b-7764-48d8-bdb7-24a7a3c547fd"
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
  return <SortableContainer dndKitId="652247d1-7778-4cbd-90a2-3e5affc0be81" containerType="regular" prevTag="div" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" data-magicpath-id="0" data-magicpath-path="AIRAApp.tsx">
      {/* Therapeutic Motion Background */}
      <TherapeuticMotionBackground data-magicpath-id="1" data-magicpath-path="AIRAApp.tsx" />

      {/* Main Chat Interface */}
      <SortableContainer dndKitId="0695cd20-8c56-4f7d-b294-eb2b5a997d1e" containerType="regular" prevTag="div" className="relative z-10 flex min-h-screen items-center justify-center p-4" data-magicpath-id="2" data-magicpath-path="AIRAApp.tsx">
        <SortableContainer dndKitId="1ad3e76b-996e-49ed-a7dd-5a0b23c896d9" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.6,
        ease: "easeOut"
      }} className="w-full max-w-4xl h-[90vh] bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 flex flex-col overflow-hidden" data-magicpath-id="3" data-magicpath-path="AIRAApp.tsx">
          {/* Header */}
          <SortableContainer dndKitId="3a30db8f-9015-458d-9ade-3f396fd1fc17" containerType="regular" prevTag="div" className="px-8 py-6 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 border-b border-white/30" data-magicpath-id="4" data-magicpath-path="AIRAApp.tsx">
            <SortableContainer dndKitId="c03a9eb9-3734-4f74-bce7-c314a983228b" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="5" data-magicpath-path="AIRAApp.tsx">
              <SortableContainer dndKitId="892ab2e4-9aa0-41c6-b233-bebd3d900118" containerType="regular" prevTag="div" className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center" data-magicpath-id="6" data-magicpath-path="AIRAApp.tsx">
                <Bot className="w-6 h-6 text-white" data-magicpath-id="7" data-magicpath-path="AIRAApp.tsx" />
              </SortableContainer>
              <SortableContainer dndKitId="ee09879f-6ed4-48e2-8b9f-5086e582d1a3" containerType="regular" prevTag="div" data-magicpath-id="8" data-magicpath-path="AIRAApp.tsx">
                <h1 className="text-2xl font-bold text-slate-800" data-magicpath-id="9" data-magicpath-path="AIRAApp.tsx">AIRA 2.0</h1>
                <p className="text-sm text-slate-600" data-magicpath-id="10" data-magicpath-path="AIRAApp.tsx">Your supportive AI companion</p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {/* Messages Area */}
          <SortableContainer dndKitId="295b89d0-eecc-4bed-98d5-8a2b6214dd3a" containerType="regular" prevTag="div" className="flex-1 overflow-y-auto px-6 py-4 space-y-4" data-magicpath-id="11" data-magicpath-path="AIRAApp.tsx">
            <AnimatePresence data-magicpath-id="12" data-magicpath-path="AIRAApp.tsx">
              {messages.map(message => <motion.div data-magicpath-motion-tag="motion.div" key={message.id} initial={{
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
            }} className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`} data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="13" data-magicpath-path="AIRAApp.tsx">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'user' ? 'bg-gradient-to-br from-blue-400 to-blue-600' : 'bg-gradient-to-br from-indigo-400 to-purple-500'}`} data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="14" data-magicpath-path="AIRAApp.tsx">
                    {message.sender === 'user' ? <User className="w-4 h-4 text-white" data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="AIRAApp.tsx" /> : <Bot className="w-4 h-4 text-white" data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="16" data-magicpath-path="AIRAApp.tsx" />}
                  </div>
                  <div className={`max-w-[70%] ${message.sender === 'user' ? 'text-right' : 'text-left'}`} data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="AIRAApp.tsx">
                    <div className={`px-4 py-3 rounded-2xl ${message.sender === 'user' ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-tr-md' : 'bg-white/90 text-slate-800 rounded-tl-md border border-white/30 shadow-sm'}`} data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="AIRAApp.tsx">
                      <p className="text-sm leading-relaxed" data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-field="text:unknown" data-magicpath-id="19" data-magicpath-path="AIRAApp.tsx">{message.text}</p>
                    </div>
                    <span className="text-xs text-slate-500 mt-1 block" data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="AIRAApp.tsx">
                      {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                    </span>
                  </div>
                </motion.div>)}
            </AnimatePresence>

            {isTyping && <SortableContainer dndKitId="7eab694d-e87c-4785-ad7e-d6faf615af17" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="flex gap-3" data-magicpath-id="21" data-magicpath-path="AIRAApp.tsx">
                <SortableContainer dndKitId="c49f1834-f653-4eb2-9de0-d265123d92e1" containerType="regular" prevTag="div" className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center" data-magicpath-id="22" data-magicpath-path="AIRAApp.tsx">
                  <Bot className="w-4 h-4 text-white" data-magicpath-id="23" data-magicpath-path="AIRAApp.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="d1084a65-b00d-4902-b1eb-a1c11aca7eea" containerType="regular" prevTag="div" className="bg-white/90 px-4 py-3 rounded-2xl rounded-tl-md border border-white/30 shadow-sm" data-magicpath-id="24" data-magicpath-path="AIRAApp.tsx">
                  <SortableContainer dndKitId="a8cf4ddf-6242-46cd-aed2-b48a3bad422c" containerType="regular" prevTag="div" className="flex gap-1" data-magicpath-id="25" data-magicpath-path="AIRAApp.tsx">
                    <motion.div data-magicpath-motion-tag="motion.div" className="w-2 h-2 bg-slate-400 rounded-full" animate={{
                  scale: [1, 1.2, 1]
                }} transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0
                }} data-magicpath-id="26" data-magicpath-path="AIRAApp.tsx" />
                    <motion.div data-magicpath-motion-tag="motion.div" className="w-2 h-2 bg-slate-400 rounded-full" animate={{
                  scale: [1, 1.2, 1]
                }} transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0.2
                }} data-magicpath-id="27" data-magicpath-path="AIRAApp.tsx" />
                    <motion.div data-magicpath-motion-tag="motion.div" className="w-2 h-2 bg-slate-400 rounded-full" animate={{
                  scale: [1, 1.2, 1]
                }} transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0.4
                }} data-magicpath-id="28" data-magicpath-path="AIRAApp.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>}
            <div ref={messagesEndRef} data-magicpath-id="29" data-magicpath-path="AIRAApp.tsx" />
          </SortableContainer>

          {/* Input Area */}
          <SortableContainer dndKitId="7074f5ed-1d83-4b17-a5de-1aa92891c38a" containerType="regular" prevTag="div" className="p-6 bg-gradient-to-r from-indigo-50/30 to-purple-50/30 border-t border-white/30" data-magicpath-id="30" data-magicpath-path="AIRAApp.tsx">
            <SortableContainer dndKitId="e3253dd7-8e76-49c2-b74e-fe5851a50c8d" containerType="regular" prevTag="div" className="flex gap-3 items-end" data-magicpath-id="31" data-magicpath-path="AIRAApp.tsx">
              <SortableContainer dndKitId="c191d557-ec68-41cb-9716-fc2b8e366b75" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="32" data-magicpath-path="AIRAApp.tsx">
                <textarea value={inputText} onChange={e => setInputText(e.target.value)} onKeyPress={handleKeyPress} placeholder="Share what's on your mind... I'm here to listen." className="w-full px-4 py-3 bg-white/90 border border-white/30 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-400/50 text-slate-800 placeholder-slate-500 shadow-sm" rows={2} disabled={isTyping} data-magicpath-id="33" data-magicpath-path="AIRAApp.tsx" />
              </SortableContainer>
              <SortableContainer dndKitId="a5533e07-0868-4464-9e80-c61f84853041" containerType="regular" prevTag="motion.button" onClick={handleSendMessage} disabled={inputText.trim() === '' || isTyping} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-shadow" data-magicpath-id="34" data-magicpath-path="AIRAApp.tsx">
                <Send className="w-5 h-5" data-magicpath-id="35" data-magicpath-path="AIRAApp.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};