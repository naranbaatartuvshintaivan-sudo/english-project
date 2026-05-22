'use client'
import Image from 'next/image'
import WobbleText from './WobbleText'

const footerLinks = ['Тухай', 'Бүлгүүд', 'Зохиолч', 'Унших']

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

const linkMap: Record<string, string> = {
  Тухай: '#about',
  Бүлгүүд: '#chapters',
  Зохиолч: '#author',
  Унших: '#chapters',
}

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-ink-soft py-16 px-8 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Col 1 */}
        <div>
          <WobbleText
            text="Student Ebook"
            className="font-mclaren text-3xl text-cream"
          />
          <p className="font-mclaren text-xl text-cream mt-2">Гулливерийн Аялал · Орчуулга төсөл</p>
          <p className="font-dm-sans text-mute text-sm mt-3">(© 2026 Сурагчийн төсөл)</p>

          <div className="flex items-center gap-3 mt-6">
            <Image
              src="/images/cover-4-illustrated.webp"
              width={50}
              height={68}
              alt="Гулливерийн Аялал хавтас"
              className="rounded border border-ink-soft object-cover"
            />
            <div>
              <p className="font-dm-sans text-xs text-cream">Gulliver&apos;s Travels</p>
              <p className="font-dm-sans text-xs text-mute">Jonathan Swift · 1726</p>
            </div>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <p className="font-mclaren text-cream text-lg mb-4">(Холбоосууд)</p>
          <div className="space-y-2">
            {footerLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(linkMap[link])}
                className="block font-dm-sans text-mute text-sm hover:text-cream transition-colors cursor-pointer"
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        {/* Col 3 */}
        <div>
          <p className="font-mclaren text-cream text-lg mb-4">(Эх сурвалж)</p>
          <p className="font-dm-sans text-sm text-mute">Gulliver&apos;s Travels</p>
          <p className="font-dm-sans text-sm text-mute">by Jonathan Swift, 1726</p>
          <p className="font-dm-sans text-xs text-mute/60 mt-1">Public Domain</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-ink-soft text-center">
        <p className="font-dm-sans text-xs text-mute">
          Орчуулсан · дизайн хийсэн: 10-р ангийн сурагч · 2026
        </p>
      </div>
    </footer>
  )
}
