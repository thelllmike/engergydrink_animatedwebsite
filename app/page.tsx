'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import IntroSection from '@/components/IntroSection'
import TimelineSection from '@/components/TimelineSection'
import SocialSidebar from '@/components/SocialSidebar'
import Footer from '@/components/Footer'
import { initializeAnimations } from '@/lib/animations'

export default function Home() {
  useEffect(() => {
    // Initialize GSAP animations after component mounts
    initializeAnimations()
  }, [])

  return (
    <>
      <Header />
      
      <main id="smooth-content">
  <Hero />
  <IntroSection />
  <TimelineSection />
  <SocialSidebar />
</main>



      
      <Footer />
    </>
  )
}