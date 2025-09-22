import { SortableContainer } from "@/dnd-kit/SortableContainer";
import React from 'react';
import { motion } from 'framer-motion';

// @component: TherapeuticMotionBackground
export const TherapeuticMotionBackground = () => {
  const floatingOrbs = [{
    id: 1,
    size: 400,
    delay: 0,
    duration: 25,
    mpid: "c5a782d0-10d7-4db3-9ec3-b0644b3f707c"
  }, {
    id: 2,
    size: 300,
    delay: 5,
    duration: 30,
    mpid: "5effc60d-7bb3-44ad-aadf-9d14e7fc3348"
  }, {
    id: 3,
    size: 350,
    delay: 10,
    duration: 28,
    mpid: "aec8b5ec-4cc5-45bc-86ab-6ae27e82f4af"
  }, {
    id: 4,
    size: 250,
    delay: 15,
    duration: 32,
    mpid: "94ca35d5-d6ac-4e1b-a9c5-85b646b81b43"
  }, {
    id: 5,
    size: 200,
    delay: 8,
    duration: 35,
    mpid: "191f3eb3-eeef-4e5c-8995-db369a2e09fe"
  }] as any[];

  // @return
  return <SortableContainer dndKitId="9fc3e43a-8712-45d3-8ef4-fa5fcc7eb623" containerType="collection" prevTag="div" className="fixed inset-0 z-0 overflow-hidden" data-magicpath-id="0" data-magicpath-path="TherapeuticMotionBackground.tsx">
      {/* Base gradient layer */}
      <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0" animate={{
      background: ['linear-gradient(45deg, #e6eeff 0%, #d7f0ff 25%, #e9f6ff 50%, #f3e8ff 75%, #e6eeff 100%)', 'linear-gradient(135deg, #e9f6ff 0%, #f3e8ff 25%, #e6eeff 50%, #d7f0ff 75%, #e9f6ff 100%)', 'linear-gradient(225deg, #f3e8ff 0%, #e6eeff 25%, #d7f0ff 50%, #e9f6ff 75%, #f3e8ff 100%)', 'linear-gradient(315deg, #d7f0ff 0%, #e9f6ff 25%, #f3e8ff 50%, #e6eeff 75%, #d7f0ff 100%)']
    }} transition={{
      duration: 30,
      repeat: Infinity,
      ease: "easeInOut"
    }} data-magicpath-id="1" data-magicpath-path="TherapeuticMotionBackground.tsx" />

      {/* Floating gradient orbs */}
      {floatingOrbs.map(orb => <motion.div data-magicpath-motion-tag="motion.div" key={orb.id} className="absolute rounded-full opacity-60 blur-2xl" style={{
      width: orb.size * 1.25,
      height: orb.size * 1.25,
      filter: 'saturate(1.4) contrast(1.1) drop-shadow(0 20px 60px rgba(88, 28, 135, 0.35))',
      background: `radial-gradient(circle, 
              rgba(139, 92, 246, 0.55) 0%, 
              rgba(59, 130, 246, 0.45) 30%, 
              rgba(16, 185, 129, 0.3) 60%, 
              rgba(255,255,255,0) 100%)`
    }} animate={{
      x: ['-25vw', '125vw', '-25vw'],
      y: ['-25vh', '125vh', '-25vh'],
      scale: [0.9, 1.3, 0.9],
      rotate: [0, 360]
    }} transition={{
      duration: Math.max(18, orb.duration - 6),
      delay: orb.delay,
      repeat: Infinity,
      ease: "easeInOut"
    }} data-magicpath-uuid={(orb as any)["mpid"] ?? "unsafe"} data-magicpath-id="2" data-magicpath-path="TherapeuticMotionBackground.tsx" />)}

      {/* Subtle particle waves */}
      <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0" animate={{
      backgroundImage: ['radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.22) 0%, transparent 28%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.22) 0%, transparent 28%)', 'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.22) 0%, transparent 28%), radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.22) 0%, transparent 28%)', 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.22) 0%, transparent 28%), radial-gradient(circle at 10% 90%, rgba(16, 185, 129, 0.22) 0%, transparent 28%)']
    }} transition={{
      duration: 28,
      repeat: Infinity,
      ease: "easeInOut"
    }} data-magicpath-id="3" data-magicpath-path="TherapeuticMotionBackground.tsx" />

      {/* Flowing wave patterns */}
      <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 opacity-60" style={{
      filter: 'blur(12px) saturate(1.2)',
      background: `conic-gradient(from 0deg at 50% 50%, 
            rgba(139, 92, 246, 0.22) 0deg, 
            rgba(59, 130, 246, 0.2) 90deg, 
            rgba(16, 185, 129, 0.18) 180deg, 
            rgba(168, 85, 247, 0.2) 270deg, 
            rgba(139, 92, 246, 0.22) 360deg)`
    }} animate={{
      rotate: [0, 360]
    }} transition={{
      duration: 45,
      repeat: Infinity,
      ease: "linear"
    }} data-magicpath-id="4" data-magicpath-path="TherapeuticMotionBackground.tsx" />

      {/* Breathing light overlay */}
      <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0" animate={{
      opacity: [0.18, 0.45, 0.18],
      background: ['radial-gradient(ellipse at center, rgba(255, 255, 255, 0.35) 0%, transparent 72%)', 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.25) 0%, transparent 72%)', 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.25) 0%, transparent 72%)']
    }} transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }} data-magicpath-id="5" data-magicpath-path="TherapeuticMotionBackground.tsx" />
    </SortableContainer>;
};