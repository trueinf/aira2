import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';
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
    mpid: "2350362d-5604-4aae-9f9b-7809087358e1"
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
  return <SortableContainer dndKitId="7e0cc52b-33e7-4d2c-a463-87f26f8669c6" containerType="regular" prevTag="div" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" data-magicpath-id="0" data-magicpath-path="AIRAApp.tsx">
      {/* Therapeutic Motion Background */}
      <SortableContainer dndKitId="a3854185-4853-4e3b-a7cc-0c4216514741" containerType="regular" prevTag="div" className="fixed inset-0 z-0" data-magicpath-id="1" data-magicpath-path="AIRAApp.tsx">
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 opacity-30" animate={{
        background: ['radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)', 'radial-gradient(circle at 40% 40%, rgba(120, 219, 226, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)', 'radial-gradient(circle at 60% 20%, rgba(120, 219, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 60%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)']
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }} data-magicpath-id="2" data-magicpath-path="AIRAApp.tsx" />
        <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 opacity-20" animate={{
        background: ['linear-gradient(45deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)', 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)', 'linear-gradient(225deg, rgba(34, 197, 94, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)']
      }} transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }} data-magicpath-id="3" data-magicpath-path="AIRAApp.tsx" />
      </SortableContainer>

      {/* Main Chat Interface */}
      <SortableContainer dndKitId="b7dc549b-cf97-4050-99d2-75bd40df0467" containerType="regular" prevTag="div" className="relative z-10 flex min-h-screen items-center justify-center p-4" data-magicpath-id="4" data-magicpath-path="AIRAApp.tsx">
        <SortableContainer dndKitId="26589b1c-323a-450f-87a6-a55da8aa2652" containerType="regular" prevTag="motion.div" initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.6,
        ease: "easeOut"
      }} className="w-full max-w-4xl h-[90vh] bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 flex flex-col overflow-hidden" data-magicpath-id="5" data-magicpath-path="AIRAApp.tsx">
          {/* Header */}
          <SortableContainer dndKitId="98da48e5-ba7f-48f2-a12a-5029495cc7f7" containerType="regular" prevTag="div" className="px-8 py-6 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 border-b border-white/30" data-magicpath-id="6" data-magicpath-path="AIRAApp.tsx">
            <SortableContainer dndKitId="3153f78b-07c3-4d8f-806b-d4a23b5fab9b" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="7" data-magicpath-path="AIRAApp.tsx">
              <SortableContainer dndKitId="cc8bc558-e9ad-4cbb-8f2b-bde23cccd80a" containerType="regular" prevTag="div" className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center" data-magicpath-id="8" data-magicpath-path="AIRAApp.tsx">
                <Bot className="w-6 h-6 text-white" data-magicpath-id="9" data-magicpath-path="AIRAApp.tsx" />
              </SortableContainer>
              <SortableContainer dndKitId="b3f157bd-ca45-4b30-a900-23183a05a7c6" containerType="regular" prevTag="div" data-magicpath-id="10" data-magicpath-path="AIRAApp.tsx">
                <h1 className="text-2xl font-bold text-slate-800" data-magicpath-id="11" data-magicpath-path="AIRAApp.tsx">AIRA 2.0</h1>
                <p className="text-sm text-slate-600" data-magicpath-id="12" data-magicpath-path="AIRAApp.tsx">Your supportive AI companion</p>
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>

          {/* Messages Area */}
          <SortableContainer dndKitId="c278dfe9-dba6-496d-968a-5ca260097427" containerType="regular" prevTag="div" className="flex-1 overflow-y-auto px-6 py-4 space-y-4" data-magicpath-id="13" data-magicpath-path="AIRAApp.tsx">
            <AnimatePresence data-magicpath-id="14" data-magicpath-path="AIRAApp.tsx">
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
            }} className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`} data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="15" data-magicpath-path="AIRAApp.tsx">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'user' ? 'bg-gradient-to-br from-blue-400 to-blue-600' : 'bg-gradient-to-br from-indigo-400 to-purple-500'}`} data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="16" data-magicpath-path="AIRAApp.tsx">
                    {message.sender === 'user' ? <User className="w-4 h-4 text-white" data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="17" data-magicpath-path="AIRAApp.tsx" /> : <Bot className="w-4 h-4 text-white" data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="18" data-magicpath-path="AIRAApp.tsx" />}
                  </div>
                  <div className={`max-w-[70%] ${message.sender === 'user' ? 'text-right' : 'text-left'}`} data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="19" data-magicpath-path="AIRAApp.tsx">
                    <div className={`px-4 py-3 rounded-2xl ${message.sender === 'user' ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-tr-md' : 'bg-white/90 text-slate-800 rounded-tl-md border border-white/30 shadow-sm'}`} data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="20" data-magicpath-path="AIRAApp.tsx">
                      <p className="text-sm leading-relaxed" data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-field="text:unknown" data-magicpath-id="21" data-magicpath-path="AIRAApp.tsx">{message.text}</p>
                    </div>
                    <span className="text-xs text-slate-500 mt-1 block" data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="22" data-magicpath-path="AIRAApp.tsx">
                      {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                    </span>
                  </div>
                </motion.div>)}
            </AnimatePresence>

            {isTyping && <SortableContainer dndKitId="36de329e-a762-4610-8171-7f039eb9d1e3" containerType="regular" prevTag="motion.div" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="flex gap-3" data-magicpath-id="23" data-magicpath-path="AIRAApp.tsx">
                <SortableContainer dndKitId="d4f45c8d-299d-4b8d-bcce-06f4f697c710" containerType="regular" prevTag="div" className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center" data-magicpath-id="24" data-magicpath-path="AIRAApp.tsx">
                  <Bot className="w-4 h-4 text-white" data-magicpath-id="25" data-magicpath-path="AIRAApp.tsx" />
                </SortableContainer>
                <SortableContainer dndKitId="007e0ec0-0ed7-4c8f-ac19-c4227674a614" containerType="regular" prevTag="div" className="bg-white/90 px-4 py-3 rounded-2xl rounded-tl-md border border-white/30 shadow-sm" data-magicpath-id="26" data-magicpath-path="AIRAApp.tsx">
                  <SortableContainer dndKitId="f5c7272b-7c7d-4bd1-a75b-34451f76a402" containerType="regular" prevTag="div" className="flex gap-1" data-magicpath-id="27" data-magicpath-path="AIRAApp.tsx">
                    <motion.div data-magicpath-motion-tag="motion.div" className="w-2 h-2 bg-slate-400 rounded-full" animate={{
                  scale: [1, 1.2, 1]
                }} transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0
                }} data-magicpath-id="28" data-magicpath-path="AIRAApp.tsx" />
                    <motion.div data-magicpath-motion-tag="motion.div" className="w-2 h-2 bg-slate-400 rounded-full" animate={{
                  scale: [1, 1.2, 1]
                }} transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0.2
                }} data-magicpath-id="29" data-magicpath-path="AIRAApp.tsx" />
                    <motion.div data-magicpath-motion-tag="motion.div" className="w-2 h-2 bg-slate-400 rounded-full" animate={{
                  scale: [1, 1.2, 1]
                }} transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0.4
                }} data-magicpath-id="30" data-magicpath-path="AIRAApp.tsx" />
                  </SortableContainer>
                </SortableContainer>
              </SortableContainer>}
            <div ref={messagesEndRef} data-magicpath-id="31" data-magicpath-path="AIRAApp.tsx" />
          </SortableContainer>

          {/* Input Area */}
          <SortableContainer dndKitId="3555d8c2-d5fa-449c-9871-955499312736" containerType="regular" prevTag="div" className="p-6 bg-gradient-to-r from-indigo-50/30 to-purple-50/30 border-t border-white/30" data-magicpath-id="32" data-magicpath-path="AIRAApp.tsx">
            <SortableContainer dndKitId="3b7df2e6-5c07-42f9-99aa-4e4a84586d33" containerType="regular" prevTag="div" className="flex gap-3 items-end" data-magicpath-id="33" data-magicpath-path="AIRAApp.tsx">
              <SortableContainer dndKitId="590d680c-034d-4532-84eb-e509ba460cb7" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="34" data-magicpath-path="AIRAApp.tsx">
                <textarea value={inputText} onChange={e => setInputText(e.target.value)} onKeyPress={handleKeyPress} placeholder="Share what's on your mind... I'm here to listen." className="w-full px-4 py-3 bg-white/90 border border-white/30 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-400/50 text-slate-800 placeholder-slate-500 shadow-sm" rows={2} disabled={isTyping} data-magicpath-id="35" data-magicpath-path="AIRAApp.tsx" />
              </SortableContainer>
              <SortableContainer dndKitId="917f32d2-99e4-456e-9e82-365d87c2aa7e" containerType="regular" prevTag="motion.button" onClick={handleSendMessage} disabled={inputText.trim() === '' || isTyping} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-shadow" data-magicpath-id="36" data-magicpath-path="AIRAApp.tsx">
                <Send className="w-5 h-5" data-magicpath-id="37" data-magicpath-path="AIRAApp.tsx" />
              </SortableContainer>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};