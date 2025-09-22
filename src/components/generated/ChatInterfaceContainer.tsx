import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';
interface ChatInterfaceContainerProps {
  children: ReactNode;
}

// @component: ChatInterfaceContainer
export const ChatInterfaceContainer = ({
  children
}: ChatInterfaceContainerProps) => {
  // @return
  return <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
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

        {children}
      </motion.div>
    </div>;
};