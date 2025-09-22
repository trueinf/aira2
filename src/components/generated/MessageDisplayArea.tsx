import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User } from 'lucide-react';
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  mpid?: string;
}
interface MessageDisplayAreaProps {
  messages: Message[];
  isTyping: boolean;
  mpid?: string;
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
  return <SortableContainer dndKitId="4a50b24a-642f-4d68-a730-522663157d8f" containerType="regular" prevTag="div" className="flex-1 overflow-y-auto px-6 py-4 space-y-4" data-magicpath-id="0" data-magicpath-path="MessageDisplayArea.tsx">
      <AnimatePresence data-magicpath-id="1" data-magicpath-path="MessageDisplayArea.tsx">
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
      }} className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`} data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="2" data-magicpath-path="MessageDisplayArea.tsx">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'user' ? 'bg-gradient-to-br from-blue-400 to-blue-600' : 'bg-gradient-to-br from-indigo-400 to-purple-500'}`} data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="3" data-magicpath-path="MessageDisplayArea.tsx">
              {message.sender === 'user' ? <User className="w-4 h-4 text-white" data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="4" data-magicpath-path="MessageDisplayArea.tsx" /> : <Bot className="w-4 h-4 text-white" data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="5" data-magicpath-path="MessageDisplayArea.tsx" />}
            </div>
            <div className={`max-w-[70%] ${message.sender === 'user' ? 'text-right' : 'text-left'}`} data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="6" data-magicpath-path="MessageDisplayArea.tsx">
              <div className={`px-4 py-3 rounded-2xl ${message.sender === 'user' ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-tr-md' : 'bg-white/90 text-slate-800 rounded-tl-md border border-white/30 shadow-sm'}`} data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="7" data-magicpath-path="MessageDisplayArea.tsx">
                <p className="text-sm leading-relaxed" data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-field="text:unknown" data-magicpath-id="8" data-magicpath-path="MessageDisplayArea.tsx">{message.text}</p>
              </div>
              <span className="text-xs text-slate-500 mt-1 block" data-magicpath-uuid={(message as any)["mpid"] ?? "unsafe"} data-magicpath-id="9" data-magicpath-path="MessageDisplayArea.tsx">
                {message.timestamp.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit'
            })}
              </span>
            </div>
          </motion.div>)}
      </AnimatePresence>

      {isTyping && <SortableContainer dndKitId="0419a145-8db3-4574-8906-cedb56320539" containerType="regular" prevTag="motion.div" initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} className="flex gap-3" data-magicpath-id="10" data-magicpath-path="MessageDisplayArea.tsx">
          <SortableContainer dndKitId="fff23cdb-5d2b-466c-8a6f-26d8950ba1ff" containerType="regular" prevTag="div" className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center" data-magicpath-id="11" data-magicpath-path="MessageDisplayArea.tsx">
            <Bot className="w-4 h-4 text-white" data-magicpath-id="12" data-magicpath-path="MessageDisplayArea.tsx" />
          </SortableContainer>
          <SortableContainer dndKitId="a04324dd-4f49-4b8d-b9ee-dea4018f2dd2" containerType="regular" prevTag="div" className="bg-white/90 px-4 py-3 rounded-2xl rounded-tl-md border border-white/30 shadow-sm" data-magicpath-id="13" data-magicpath-path="MessageDisplayArea.tsx">
            <SortableContainer dndKitId="70ef3007-1fba-41ea-95ca-da6ecbc86e48" containerType="regular" prevTag="div" className="flex gap-1" data-magicpath-id="14" data-magicpath-path="MessageDisplayArea.tsx">
              <motion.div data-magicpath-motion-tag="motion.div" className="w-2 h-2 bg-slate-400 rounded-full" animate={{
            scale: [1, 1.2, 1]
          }} transition={{
            duration: 1,
            repeat: Infinity,
            delay: 0
          }} data-magicpath-id="15" data-magicpath-path="MessageDisplayArea.tsx" />
              <motion.div data-magicpath-motion-tag="motion.div" className="w-2 h-2 bg-slate-400 rounded-full" animate={{
            scale: [1, 1.2, 1]
          }} transition={{
            duration: 1,
            repeat: Infinity,
            delay: 0.2
          }} data-magicpath-id="16" data-magicpath-path="MessageDisplayArea.tsx" />
              <motion.div data-magicpath-motion-tag="motion.div" className="w-2 h-2 bg-slate-400 rounded-full" animate={{
            scale: [1, 1.2, 1]
          }} transition={{
            duration: 1,
            repeat: Infinity,
            delay: 0.4
          }} data-magicpath-id="17" data-magicpath-path="MessageDisplayArea.tsx" />
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>}
      <div ref={messagesEndRef} data-magicpath-id="18" data-magicpath-path="MessageDisplayArea.tsx" />
    </SortableContainer>;
};