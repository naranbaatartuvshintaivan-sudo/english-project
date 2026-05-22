'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import WobbleText from './WobbleText'

const covers = [
  { src: '/images/cover-1-classic.jpg', era: 'Орчин үе', style: 'Silhouette стиль' },
  { src: '/images/cover-2-walking.webp', era: 'Уран зургийн', style: 'Сонгодог хэвлэл' },
  { src: '/images/cover-3-vintage.webp', era: '1726', style: 'Анхны хэвлэл' },
  { src: '/images/cover-4-illustrated.webp', era: 'Хүүхдийн', style: 'Зурагт хувилбар' },
  { src: '/images/cover-5-poster.webp', era: '1977', style: 'Кино постер' },
]

export default function CoverGallery() {
  return (
    <section id="gallery" className="bg-cream py-32 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-dm-sans text-mute text-sm tracking-widest uppercase mb-4"
          >
            (Хавтсын түүх)
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mclaren text-6xl text-ink leading-none mb-4"
          >
            <WobbleText text="Олон үе, олон харагдац" />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-lora italic text-mute"
          >
            Гулливерийн Аялалын хавтасны 300 жилийн түүх
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {covers.map((cover, i) => (
            <motion.div
              key={cover.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              className="bg-cream-soft border-2 border-ink rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="relative w-full aspect-[3/4] border-b-2 border-ink">
                <Image
                  src={cover.src}
                  fill
                  alt={`${cover.era} хавтас`}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="font-mclaren text-ink text-sm">{cover.era}</p>
                <p className="font-lora italic text-mute text-xs mt-1">{cover.style}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
