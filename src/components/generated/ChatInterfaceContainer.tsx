import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';
interface ChatInterfaceContainerProps {
  children: ReactNode;
  mpid?: string;
}

// @component: ChatInterfaceContainer
export const ChatInterfaceContainer = ({
  children
}: ChatInterfaceContainerProps) => {
  // @return
  return <SortableContainer dndKitId="13a43077-8d2b-4253-aaab-2c0243c37767" containerType="regular" prevTag="div" className="relative z-10 flex min-h-screen items-center justify-center p-4" data-magicpath-id="0" data-magicpath-path="ChatInterfaceContainer.tsx">
      <SortableContainer dndKitId="ee06150b-75cd-4a42-b2a1-e9a0c2c115a3" containerType="regular" prevTag="motion.div" initial={{
      opacity: 0,
      scale: 0.95
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 0.6,
      ease: "easeOut"
    }} className="w-full max-w-4xl h-[90vh] bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 flex flex-col overflow-hidden" data-magicpath-id="1" data-magicpath-path="ChatInterfaceContainer.tsx">
        {/* Header */}
        <SortableContainer dndKitId="d18bf3a3-f00d-429b-bfca-dafd537c281e" containerType="regular" prevTag="div" className="px-8 py-6 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 border-b border-white/30" data-magicpath-id="2" data-magicpath-path="ChatInterfaceContainer.tsx">
          <SortableContainer dndKitId="56ef325a-1db0-405a-aaec-cf28758bfea3" containerType="regular" prevTag="div" className="flex items-center gap-3" data-magicpath-id="3" data-magicpath-path="ChatInterfaceContainer.tsx">
            <SortableContainer dndKitId="0f43f6eb-f43c-4faf-942e-211b0a9733e2" containerType="regular" prevTag="div" className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center" data-magicpath-id="4" data-magicpath-path="ChatInterfaceContainer.tsx">
              <Bot className="w-6 h-6 text-white" data-magicpath-id="5" data-magicpath-path="ChatInterfaceContainer.tsx" />
            </SortableContainer>
            <SortableContainer dndKitId="fe418982-9d2a-46fb-a3bb-26d7e0f6c8e1" containerType="regular" prevTag="div" data-magicpath-id="6" data-magicpath-path="ChatInterfaceContainer.tsx">
              <h1 className="text-2xl font-bold text-slate-800" data-magicpath-id="7" data-magicpath-path="ChatInterfaceContainer.tsx">AIRA 2.0</h1>
              <p className="text-sm text-slate-600" data-magicpath-id="8" data-magicpath-path="ChatInterfaceContainer.tsx">Your supportive AI companion</p>
            </SortableContainer>
          </SortableContainer>
        </SortableContainer>

        {children}
      </SortableContainer>
    </SortableContainer>;
};