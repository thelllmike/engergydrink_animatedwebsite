'use client'

import Image from 'next/image'
import { useRef } from 'react'

export default function Hero() {
  const videoRef = useRef(null)

  const handleVideoEnd = () => {
    document.body.classList.add('video-ended')
    window.dispatchEvent(new Event('heroVideoEnded'))
  }

  return (
    <>
      {/* Hero Bottle Overlay Wrapper */}
      <div className="hero-bottle-wrapper bottle-hidden">
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
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="hero-video"
            onEnded={handleVideoEnd}
          >
            <source src="/videos/hero1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hero-content">
          {/* hero text */}
        </div>
      </section>
    </>
  )
}
