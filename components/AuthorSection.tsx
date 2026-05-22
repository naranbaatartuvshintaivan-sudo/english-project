'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import WobbleText from './WobbleText'

const works = [
  { year: '(1726)', title: 'Гулливерийн Аялал' },
  { year: '(1729)', title: 'Даруу Санал' },
  { year: '(1704)', title: 'Торхны Үлгэр' },
  { year: '(1724)', title: 'Дарааллын Захидал' },
]

const badges = ['Ирланд', 'Зохиолч', 'Шашны зүтгэлтэн']

export default function AuthorSection() {
  return (
    <section id="author" className="bg-ink py-32 px-8 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-16 items-start">

        {/* LEFT — portrait */}
        <div className="md:col-span-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-72 h-[400px] border-2 border-cream rounded-xl overflow-hidden"
          >
            <Image
              src="/images/cover-3-vintage.webp"
              fill
              alt="Жонатан Свифтийн хөрөг"
              className="object-cover object-top sepia-[0.4] brightness-75"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-cream/95 py-4 px-5">
              <p className="font-mclaren text-xl text-ink">Jonathan Swift</p>
              <p className="font-lora italic text-sm text-mute">1667 — 1745</p>
            </div>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-3 mt-6 flex-wrap"
          >
            {badges.map((badge) => (
              <motion.span
                key={badge}
                whileHover={{ backgroundColor: 'rgba(245,216,168,0.1)', borderColor: '#F5D8A8' }}
                className="border border-cream/40 text-cream/80 px-4 py-1.5 rounded-full font-dm-sans text-sm cursor-default transition-colors"
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-3">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-dm-sans text-mute-light text-sm tracking-widest uppercase mb-4"
          >
            (Зохиолч)
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mclaren text-7xl text-cream leading-none mb-3"
          >
            <WobbleText text="Жонатан Свифт" />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-lora italic text-2xl text-cream/60 mb-8"
          >
            Английн уран зохиолын хошин шогийн мастер
          </motion.p>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-5 font-lora text-[15px] leading-[1.85] text-cream/75"
          >
            <p>
              Жонатан Свифт (1667–1745) бол Ирландад төрсөн Англи-Ирланд гарвалтай зохиолч,
              хошин шогийн уран бүтээлч, Англиканы шашны зүтгэлтэн юм. Гэорг хааны үеийн
              хамгийн агуу хошин шогчоор тооцогддог.
            </p>
            <p>
              Дублинд төрсөн Свифт хүү байхдаа эцгээ алдсан тул авга ах нь өсгөсөн. Тринити
              коллежид суралцсаны дараа Сэр Уильям Темплийн нарийн бичгийн дарга болон ажилласан.
            </p>
            <p>
              1726 онд хэвлүүлсэн "Гулливерийн Аялал" нь түүний оргил бүтээл болсон ба тэр
              даруйдаа алдаршсан. "Даруу Санал" (1729), "Торхны Үлгэр" (1704) зэрэг бусад хошин
              зохиолуудаараа дэлхийг донсолгосон.
            </p>
            <p>
              1713 онд Гэгээн Патрикийн сүмийн декан болсон. 1745 онд таалал төгсөж,
              өөрийнхөө сүмд оршуулагдсан. Хөрөнгийнхөө ихэнхийг сэтгэцийн өвчтэй хүмүүст
              зориулсан эмнэлэг байгуулахад хандивласан.
            </p>
          </motion.div>

          {/* Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10"
          >
            <p className="font-mclaren text-2xl text-cream mb-6">(Алдарт бүтээлүүд)</p>
            {works.map((work, i) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                whileHover={{ backgroundColor: '#1A1A1A', paddingLeft: '16px', paddingRight: '16px', borderRadius: '8px' }}
                className="py-4 border-b border-ink-soft flex items-center gap-6 transition-all"
              >
                <span className="font-lora italic text-mute-light text-sm w-16 shrink-0">{work.year}</span>
                <span className="font-mclaren text-cream">{work.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
