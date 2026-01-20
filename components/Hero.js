'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <>
      {/* Hero Bottle Overlay Wrapper */}
      <div className="hero-bottle-wrapper">
        <Image 
          src="/images/image.png" 
          alt="Crimson Fermentation Bottle"
          className="hero-bottle"
          width={1400}
          height={1800}
          priority
        />
      </div>

      {/* Hero Section with Video Background */}
      <section className="hero vintage-hero">
  <div className="hero-video-wrapper">
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="hero-video"
    >
      <source src="/videos/hero1.mp4" type="video/mp4" />
    </video>
  </div>

  <div className="hero-content">
    {/* Your content goes here */}
  </div>
</section>

    </>
  )
}
