import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
interface ChatInputAreaProps {
  inputText: string;
  setInputText: (text: string) => void;
  onSendMessage: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  isTyping: boolean;
  mpid?: string;
}

// @component: ChatInputArea
export const ChatInputArea = ({
  inputText,
  setInputText,
  onSendMessage,
  onKeyPress,
  isTyping
}: ChatInputAreaProps) => {
  // @return
  return <SortableContainer dndKitId="d78a48bb-13a2-42e1-85b6-9a619b939e52" containerType="regular" prevTag="div" className="p-6 bg-gradient-to-r from-indigo-50/30 to-purple-50/30 border-t border-white/30" data-magicpath-id="0" data-magicpath-path="ChatInputArea.tsx">
      <SortableContainer dndKitId="dc3a9698-f010-4970-a846-0d017396a0ba" containerType="regular" prevTag="div" className="flex gap-3 items-end" data-magicpath-id="1" data-magicpath-path="ChatInputArea.tsx">
        <SortableContainer dndKitId="d7db7510-ee33-47af-a3c8-9e4d1953e34e" containerType="regular" prevTag="div" className="flex-1" data-magicpath-id="2" data-magicpath-path="ChatInputArea.tsx">
          <textarea value={inputText} onChange={e => setInputText(e.target.value)} onKeyPress={onKeyPress} placeholder="Share what's on your mind... I'm here to listen." className="w-full px-4 py-3 bg-white/90 border border-white/30 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-400/50 text-slate-800 placeholder-slate-500 shadow-sm transition-all duration-200" rows={2} disabled={isTyping} aria-label="Type your message" data-magicpath-id="3" data-magicpath-path="ChatInputArea.tsx" />
        </SortableContainer>
        <SortableContainer dndKitId="f071ba86-e6b5-4c84-9478-37d72a06c9a8" containerType="regular" prevTag="motion.button" onClick={onSendMessage} disabled={inputText.trim() === '' || isTyping} whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-shadow duration-200" aria-label="Send message" data-magicpath-id="4" data-magicpath-path="ChatInputArea.tsx">
          <Send className="w-5 h-5" data-magicpath-id="5" data-magicpath-path="ChatInputArea.tsx" />
        </SortableContainer>
      </SortableContainer>
    </SortableContainer>;
};