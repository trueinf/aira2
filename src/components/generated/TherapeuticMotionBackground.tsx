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
    mpid: "80290b01-8eb4-49c4-a672-db1516a4c71b"
  }, {
    id: 2,
    size: 300,
    delay: 5,
    duration: 30,
    mpid: "e77bed54-67a9-4bc6-844c-619c95b19dd7"
  }, {
    id: 3,
    size: 350,
    delay: 10,
    duration: 28,
    mpid: "6c8ca57e-0629-40e8-a5f6-686df4acc1fc"
  }, {
    id: 4,
    size: 250,
    delay: 15,
    duration: 32,
    mpid: "a5beb117-743f-4672-b9b9-73359979da2c"
  }, {
    id: 5,
    size: 200,
    delay: 8,
    duration: 35,
    mpid: "372a4be3-7124-4bc3-92f8-a2a6ac6ecf66"
  }] as any[];

  // @return
  return <SortableContainer dndKitId="454251d7-de42-4b3f-81af-cbd0ee1b8422" containerType="collection" prevTag="div" className="fixed inset-0 z-0 overflow-hidden" data-magicpath-id="0" data-magicpath-path="TherapeuticMotionBackground.tsx">
      {/* Base gradient layer */}
      <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0" animate={{
      background: ['linear-gradient(45deg, #f0f4ff 0%, #e0f2fe 25%, #f0f9ff 50%, #faf5ff 75%, #f0f4ff 100%)', 'linear-gradient(135deg, #f0f9ff 0%, #faf5ff 25%, #f0f4ff 50%, #e0f2fe 75%, #f0f9ff 100%)', 'linear-gradient(225deg, #faf5ff 0%, #f0f4ff 25%, #e0f2fe 50%, #f0f9ff 75%, #faf5ff 100%)', 'linear-gradient(315deg, #e0f2fe 0%, #f0f9ff 25%, #faf5ff 50%, #f0f4ff 75%, #e0f2fe 100%)']
    }} transition={{
      duration: 40,
      repeat: Infinity,
      ease: "easeInOut"
    }} data-magicpath-id="1" data-magicpath-path="TherapeuticMotionBackground.tsx" />

      {/* Floating gradient orbs */}
      {floatingOrbs.map(orb => <motion.div data-magicpath-motion-tag="motion.div" key={orb.id} className="absolute rounded-full opacity-20 blur-3xl" style={{
      width: orb.size,
      height: orb.size,
      background: `radial-gradient(circle, 
              rgba(139, 92, 246, 0.3) 0%, 
              rgba(59, 130, 246, 0.2) 30%, 
              rgba(16, 185, 129, 0.1) 60%, 
              transparent 100%)`
    }} animate={{
      x: ['-20vw', '120vw', '-20vw'],
      y: ['-20vh', '120vh', '-20vh'],
      scale: [0.8, 1.2, 0.8],
      rotate: [0, 360]
    }} transition={{
      duration: orb.duration,
      delay: orb.delay,
      repeat: Infinity,
      ease: "easeInOut"
    }} data-magicpath-uuid={(orb as any)["mpid"] ?? "unsafe"} data-magicpath-id="2" data-magicpath-path="TherapeuticMotionBackground.tsx" />)}

      {/* Subtle particle waves */}
      <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0" animate={{
      backgroundImage: ['radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 25%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 25%)', 'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 25%), radial-gradient(circle at 20% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 25%)', 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 25%), radial-gradient(circle at 10% 90%, rgba(16, 185, 129, 0.1) 0%, transparent 25%)']
    }} transition={{
      duration: 35,
      repeat: Infinity,
      ease: "easeInOut"
    }} data-magicpath-id="3" data-magicpath-path="TherapeuticMotionBackground.tsx" />

      {/* Flowing wave patterns */}
      <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0 opacity-30" style={{
      background: `conic-gradient(from 0deg at 50% 50%, 
            rgba(139, 92, 246, 0.1) 0deg, 
            rgba(59, 130, 246, 0.1) 90deg, 
            rgba(16, 185, 129, 0.1) 180deg, 
            rgba(168, 85, 247, 0.1) 270deg, 
            rgba(139, 92, 246, 0.1) 360deg)`
    }} animate={{
      rotate: [0, 360]
    }} transition={{
      duration: 60,
      repeat: Infinity,
      ease: "linear"
    }} data-magicpath-id="4" data-magicpath-path="TherapeuticMotionBackground.tsx" />

      {/* Breathing light overlay */}
      <motion.div data-magicpath-motion-tag="motion.div" className="absolute inset-0" animate={{
      opacity: [0.1, 0.3, 0.1],
      background: ['radial-gradient(ellipse at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%)', 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)', 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)']
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }} data-magicpath-id="5" data-magicpath-path="TherapeuticMotionBackground.tsx" />
    </SortableContainer>;
};