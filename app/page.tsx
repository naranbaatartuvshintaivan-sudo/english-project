import Nav from '@/components/Nav'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import CoverGallery from '@/components/CoverGallery'
import ChaptersSection from '@/components/ChaptersSection'
import AuthorSection from '@/components/AuthorSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <HeroSection />
      <AboutSection />
      <CoverGallery />
      <ChaptersSection />
      <AuthorSection />
      <Footer />
    </main>
  )
}
