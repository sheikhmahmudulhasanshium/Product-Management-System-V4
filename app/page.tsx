import HomePageFooter from '@/components/home-page/Footer'
import HomePageHeader from '@/components/home-page/Header'
import HomePageHero from '@/components/home-page/Hero'
import HompageNavbar from '@/components/home-page/Navbar'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomePageHeader/>
      <HompageNavbar/>
      <HomePageHero/>
      <HomePageFooter/>
    </main>
  )
}
