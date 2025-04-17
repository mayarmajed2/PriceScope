'use client';

import { motion } from 'framer-motion';

export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Blurry animated background blobs with updated palette */}

      {/* Dark Purple Blob */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#3a3153] rounded-full blur-3xl opacity-40"
        animate={{ x: [0, 100, -100, 0], y: [0, 80, -60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Purple-Pink Blob */}
      <motion.div
        className="absolute bottom-[-20%] right-[-15%] w-[500px] h-[500px] bg-[#5f43b2] rounded-full blur-3xl opacity-30"
        animate={{ x: [0, -120, 100, 0], y: [0, -100, 120, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Indigo Blob */}
      <motion.div
        className="absolute top-[10%] right-[30%] w-[350px] h-[350px] bg-[#4d55cc] rounded-full blur-3xl opacity-30"
        animate={{ x: [0, -80, 60, 0], y: [0, 100, -80, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Navy to Grey Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#211c84] via-[#3a3153] to-[#b1aebb] opacity-40 blur-2xl mix-blend-screen" />
    </div>
  );
}
