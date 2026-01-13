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
          width={400}
          height={800}
          priority
        />
      </div>

      {/* Hero Section */}
      <section className="hero vintage-hero">
        <div className="hero-content">
          {/* Decorative Stamp */}
          <Image 
            src="/images/stamp.png" 
            alt="Crimson Fermentation Stamp"
            className="hero-stamp"
            width={150}
            height={150}
            priority
          />

          {/* Main Heading */}
          <h1>
            <span className="line">Crimson</span>
            <span className="line highlight">Fermentation</span>
          </h1>
        </div>
      </section>
    </>
  )
}