'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import WobbleText from './WobbleText'

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true as const },
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  }
}

export default function AboutSection() {
  return (
    <section id="about" className="bg-cream-soft py-32 px-8 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-16 items-start">

        {/* LEFT */}
        <div className="md:col-span-2">
          <motion.p {...fadeUp(0)} className="font-dm-sans text-mute text-sm tracking-widest uppercase mb-4">
            (Сурагчийн төсөл)
          </motion.p>

          <motion.h2
            {...fadeUp(0.1)}
            className="font-mclaren text-5xl text-ink leading-tight mb-4"
          >
            <WobbleText text="Энэ сайтын тухай" />
          </motion.h2>

          <motion.p {...fadeUp(0.2)} className="font-lora italic text-mute leading-relaxed">
            10-р ангийн сурагчийн орчуулга ба веб дизайны төсөл
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-8">
            <Image
              src="/images/cover-3-vintage.webp"
              width={280}
              height={380}
              alt="Анхны хэвлэлийн зураг"
              className="border-2 border-ink rounded-lg sepia-[0.2] w-full max-w-[280px]"
            />
            <p className="font-lora italic text-mute text-sm mt-3">
              Анхны хэвлэлийн зураг · 1726
            </p>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-3">
          <motion.div {...fadeUp(0.15)} className="space-y-5 font-lora text-[15px] leading-relaxed text-ink-soft">
            <p>
              Энэхүү жижиг ebook вэб сайт бол 10-р ангийн сурагчийн хэдэн сарын турш бие даан
              гүйцэтгэсэн орчуулга, дизайн, кодлолын иж бүрэн төсөл юм. Жонатан Свифтийн алдарт
              сонгодог &lsquo;Гулливерийн Аялал&rsquo; романы эхний 8 бүлгийг эх англи хэлнээс монгол хэл рүү
              үг үгээр нь бус, утга агуулгыг нь хадгалан уран сайхны хэлбэрээр буулгахыг чин
              сэтгэлээр зорьсон билээ.
            </p>
            <p>
              Орчуулгын үйл явц нь зөвхөн үгсийг сольж буулгаснаар зогсохгүй, 18-р зууны Английн
              уран зохиолын хэв маяг, далайчдын амьдрал ахуй, тэр үеийн нийгмийн зан заншлыг монгол
              уншигчдын ойлгож хүлээж авах хэлбэрт оруулах шаардлагатай болсон. Эртний хэлзүйн
              онцлог, өвөрмөц үг хэллэгийг алдагдуулалгүйгээр харин монгол хэлний уянгалаг өнгийг
              хадгалан үлдээхийг хичээсэн.
            </p>
            <p>
              Энэ ном бол Жонатан Свифтийн хошин шогийн оргил бүтээл бөгөөд гадаад талдаа далайч
              Лемюэл Гулливерийн гайхамшигт аялалуудыг өгүүлэх адал явдалт түүх мэт харагддаг.
              Гэвч номын гүнд тухайн үеийн Англи орны улс төр, шашин, нийгмийн ёс заншил,
              эрх мэдэлтнүүдийн тэнэг байдал, хүн төрөлхтний зан чанарын сул талыг шоолж
              шүүмжилсэн гүн ухааны бүтээл оршдог.
            </p>
            <p>
              Вэб сайт нь Next.js 14, TypeScript, Tailwind CSS, Framer Motion зэрэг орчин үеийн вэб
              технологиудыг ашиглан бүтээгдсэн. Дизайны хувьд ном уншихад тааламжтай, нүдийг
              чилээдэггүй өнгөний хослол, уншигчдад зориулсан тохиромжтой үсгийн загвар,
              бүлэг тус бүрд зориулсан тусгай хуудас, унших явцын хэмжүүр зэрэг функцуудыг тусгасан.
            </p>
          </motion.div>

          {/* Stat cards */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { num: '8', label: 'БҮЛЭГ ОРЧУУЛСАН' },
              { num: '~50,000', label: 'ҮГ БИЧСЭН' },
              { num: '100%', label: 'ГАРААР БИЧСЭН' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-cream border-2 border-ink rounded-xl p-5 text-center cursor-default"
              >
                <p className="font-mclaren text-4xl text-ink leading-none">{stat.num}</p>
                <p className="font-dm-sans text-xs uppercase tracking-wider text-mute mt-2 leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
