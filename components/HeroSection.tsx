'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import WobbleText from './WobbleText'

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  }
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-cream flex items-center justify-center px-6 pt-24 pb-16"
    >
      <div className="rounded-[32px] overflow-hidden w-full max-w-5xl bg-cream-pale px-8 py-16 flex flex-col items-center text-center gap-8">

        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0)}
          className="font-dm-sans text-mute text-sm tracking-widest uppercase"
        >
          (Монгол орчуулга)
        </motion.p>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="leading-none"
        >
          <div className="font-mclaren text-ink" style={{ fontSize: 'clamp(72px, 12vw, 160px)', lineHeight: 1 }}>
            <WobbleText text="Гулливерийн" />
          </div>
          <div className="font-mclaren text-ink" style={{ fontSize: 'clamp(72px, 12vw, 160px)', lineHeight: 1 }}>
            <WobbleText text="Аялал" />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p {...fadeUp(0.3)} className="font-lora italic text-mute text-lg">
          (Жонатан Свифт · 1726)
        </motion.p>

        {/* Book cover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="relative"
          style={{ perspective: '1200px' }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ rotateY: -6, scale: 1.03 }}
            style={{ rotateY: -12, rotateX: 4, transformStyle: 'preserve-3d' }}
            className="shadow-2xl rounded-lg overflow-hidden"
          >
            <Image
              src="/images/cover-1-classic.jpg"
              width={220}
              height={310}
              alt="Гулливерийн Аялал номын хавтас"
              className="rounded-lg"
              priority
            />
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.button
          {...fadeUp(0.6)}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => document.querySelector('#chapters')?.scrollIntoView({ behavior: 'smooth' })}
          className="font-mclaren bg-ink text-cream rounded-full px-9 py-4 text-base cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
        >
          Уншиж эхлэх →
        </motion.button>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.75)}
          className="flex items-center gap-6 font-dm-sans"
        >
          <StatItem number="8" label="бүлэг" />
          <div className="w-px h-8 bg-ink/20" />
          <StatItem number="~4ц" label="уншлага" />
          <div className="w-px h-8 bg-ink/20" />
          <StatItem number="1726" label="он" />
        </motion.div>
      </div>
    </section>
  )
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <p className="font-mclaren text-ink text-2xl font-bold leading-none">{number}</p>
      <p className="text-mute text-xs uppercase tracking-wider mt-1">{label}</p>
    </div>
  )
}
