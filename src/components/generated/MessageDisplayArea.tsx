import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User } from 'lucide-react';
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}
interface MessageDisplayAreaProps {
  messages: Message[];
  isTyping: boolean;
}

// @component: MessageDisplayArea
export const MessageDisplayArea = ({
  messages,
  isTyping
}: MessageDisplayAreaProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // @return
  return <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
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
    </div>;
};