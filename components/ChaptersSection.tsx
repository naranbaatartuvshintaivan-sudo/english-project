'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import WobbleText from './WobbleText'

const chapterData = [
  { num: 'I', short: 'Аялалын эхлэл', desc: 'Гулливер анх далайд гарч, хөлөг нь сүйрч, Лилипут орны эрэгт олзлогдсон нь.', time: '18 мин' },
  { num: 'II', short: 'Лилипутын нутагт', desc: 'Эзэн хаан болон нийт хүрээ Гулливерийг хүлээн авч, нийслэл рүү зөөсөн нь.', time: '16 мин' },
  { num: 'III', short: 'Хааны ордон', desc: 'Гулливер наадам тэмцээн үзэж, чөлөөгөө олж авах тангараг өргөсөн нь.', time: '20 мин' },
  { num: 'IV', short: 'Нийслэл Милдэндог', desc: 'Нийслэл хотоор тойрч, хааны ордонд зочилж, нарийн бичгийн даргатай уулзсан нь.', time: '15 мин' },
  { num: 'V', short: 'Флотыг булааж авсан нь', desc: 'Гулливер Блефускугийн бүх усан цэргийн хөлгийг ганцаараа булаан авсан нь.', time: '14 мин' },
  { num: 'VI', short: 'Иргэд ба хууль', desc: 'Лилипутын иргэдийн зан заншил, хууль дүрэм, хүүхэд хүмүүжүүлэх ёс.', time: '22 мин' },
  { num: 'VII', short: 'Блефускуд зугтсан нь', desc: 'Хуйвалдааныг мэдсэн Гулливер урвалтаар буруутгагдан, Блефускуд зугтсан нь.', time: '19 мин' },
  { num: 'VIII', short: 'Эх орондоо буцсан нь', desc: 'Завь олж, далайг туулан, Английн хөлөгт таарч, эх орондоо эргэн ирсэн нь.', time: '17 мин' },
]

export default function ChaptersSection() {
  const router = useRouter()

  return (
    <section id="chapters" className="bg-cream-soft py-32 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-64 rounded-3xl overflow-hidden mb-16"
        >
          <Image
            src="/images/cover-2-walking.webp"
            fill
            alt="Бүлгүүдийн баннер"
            className="object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink/60" />
          <div className="absolute bottom-8 left-10">
            <p className="font-dm-sans text-cream/70 text-sm tracking-widest uppercase mb-2">
              (Найман бүлэг)
            </p>
            <p className="font-mclaren text-5xl text-cream leading-none">Бүлгүүд</p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {chapterData.map((ch, i) => (
            <ChapterCard
              key={ch.num}
              chapter={ch}
              index={i}
              onClick={() => router.push(`/reader?chapter=${i + 1}`)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ChapterCard({
  chapter,
  index,
  onClick,
}: {
  chapter: (typeof chapterData)[0]
  index: number
  onClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -6, backgroundColor: '#FAE4BE', borderColor: '#8B3A2A' }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className="bg-cream border-2 border-ink rounded-2xl p-7 cursor-pointer flex flex-col"
    >
      <p className="font-mclaren text-6xl text-ink/20 leading-none">{chapter.num}</p>

      <div className="mt-4 mb-2">
        <WobbleText
          text={chapter.short}
          className="font-mclaren text-lg text-ink leading-snug"
        />
      </div>

      <p className="font-lora text-sm text-mute leading-relaxed flex-1">{chapter.desc}</p>

      <div className="mt-6 flex items-center justify-between">
        <span className="font-dm-sans text-xs text-mute">~{chapter.time}</span>
        <motion.span
          className="text-ink text-lg"
          whileHover={{ color: '#8B3A2A' }}
        >
          →
        </motion.span>
      </div>
    </motion.div>
  )
}
