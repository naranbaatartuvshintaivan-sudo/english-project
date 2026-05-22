'use client'
import { useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { chapters } from '@/app/data/chapters'

export default function ReaderClient() {
  const router = useRouter()
  const params = useSearchParams()
  const chapterParam = Number(params.get('chapter') ?? '1')
  const [activeChapter, setActiveChapter] = useState(
    Math.max(1, Math.min(chapterParam, chapters.length))
  )
  const [progress, setProgress] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setActiveChapter(Math.max(1, Math.min(chapterParam, chapters.length)))
  }, [chapterParam])

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    el.scrollTop = 0
    setProgress(0)

    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el
      const pct = scrollHeight > clientHeight
        ? (scrollTop / (scrollHeight - clientHeight)) * 100
        : 100
      setProgress(Math.min(100, Math.round(pct)))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [activeChapter])

  const chapter = chapters[activeChapter - 1]

  function goTo(n: number) {
    setActiveChapter(n)
    router.replace(`/reader?chapter=${n}`, { scroll: false })
  }

  return (
    <div className="flex h-screen bg-cream overflow-hidden">

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-cream-deep z-50">
        <motion.div
          className="h-full bg-ink"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 shrink-0 bg-cream-soft border-r-2 border-ink overflow-y-auto">
        <div className="p-6 border-b-2 border-ink">
          <button
            onClick={() => router.push('/')}
            className="font-mclaren text-xl text-ink hover:text-accent transition-colors"
          >
            ← ГА
          </button>
          <p className="font-lora italic text-mute text-xs mt-1">Гулливерийн Аялал</p>
        </div>

        <nav className="flex-1 py-4">
          {chapters.map((ch, i) => {
            const isActive = i + 1 === activeChapter
            return (
              <button
                key={ch.num}
                onClick={() => goTo(i + 1)}
                className={`w-full text-left px-5 py-4 transition-all ${
                  isActive
                    ? 'border-l-4 border-ink bg-cream-deep'
                    : 'border-l-4 border-transparent hover:bg-cream-deep/50'
                }`}
              >
                <p className={`font-mclaren text-sm ${isActive ? 'text-ink' : 'text-mute'}`}>
                  {ch.num}. {ch.short}
                </p>
                <p className="font-dm-sans text-xs text-mute mt-0.5">{ch.time}</p>
              </button>
            )
          })}
        </nav>
      </aside>

      {/* Main content */}
      <div ref={contentRef} className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-8 py-16">

          {/* Chapter header */}
          <motion.div
            key={activeChapter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-dm-sans text-mute text-xs uppercase tracking-widest mb-3">
              Бүлэг {chapter.num}
            </p>
            <h1 className="font-mclaren text-4xl text-ink leading-tight mb-2">
              {chapter.short}
            </h1>
            <p className="font-lora italic text-mute mb-10 leading-relaxed">
              {chapter.desc}
            </p>
            <div className="w-16 h-0.5 bg-ink mb-10" />

            {/* Chapter body */}
            <div className="space-y-6 font-lora text-ink text-[17px] leading-[1.9]">
              {chapter.content.map((para, i) => (
                <p key={i} className={i === 0 ? 'first-letter' : ''}>
                  {i === 0 ? (
                    <>
                      <span className="font-mclaren text-ink float-left text-6xl leading-[0.85] mr-3 mt-1">
                        {para[0]}
                      </span>
                      {para.slice(1)}
                    </>
                  ) : (
                    para
                  )}
                </p>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-16 pt-8 border-t-2 border-ink">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => goTo(activeChapter - 1)}
                disabled={activeChapter === 1}
                className="border-2 border-ink text-ink px-6 py-3 rounded-full font-dm-sans text-sm hover:bg-ink hover:text-cream transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← Өмнөх
              </motion.button>

              <span className="font-mclaren text-mute text-sm">
                {activeChapter} / {chapters.length}
              </span>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => goTo(activeChapter + 1)}
                disabled={activeChapter === chapters.length}
                className="border-2 border-ink text-ink px-6 py-3 rounded-full font-dm-sans text-sm hover:bg-ink hover:text-cream transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Дараах →
              </motion.button>
            </div>

            {/* Mobile chapter select */}
            <div className="md:hidden mt-8">
              <select
                value={activeChapter}
                onChange={(e) => goTo(Number(e.target.value))}
                className="w-full bg-cream-soft border-2 border-ink rounded-xl px-4 py-3 font-dm-sans text-ink text-sm"
              >
                {chapters.map((ch, i) => (
                  <option key={ch.num} value={i + 1}>
                    {ch.num}. {ch.short}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
