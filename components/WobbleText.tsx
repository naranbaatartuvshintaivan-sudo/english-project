'use client'
import { motion } from 'framer-motion'

interface WobbleTextProps {
  text: string
  className?: string
  delay?: number
}

export default function WobbleText({ text, className = '', delay = 0 }: WobbleTextProps) {
  const letters = text.split('')

  const container = {
    initial: {},
    hover: {
      transition: { staggerChildren: 0.04 },
    },
  }

  const letter = {
    initial: { y: 0, rotate: 0 },
    hover: {
      y: [-0, -8, 0],
      rotate: [-0, -3, 3, 0],
      transition: {
        duration: 0.5,
        ease: 'easeInOut' as const,
        times: [0, 0.5, 1],
      },
    },
  }

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="initial"
      whileHover="hover"
    >
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={letter}
          className="inline-block"
          style={{
            whiteSpace: char === ' ' ? 'pre' : 'normal',
            transformOrigin: 'bottom center',
          }}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
