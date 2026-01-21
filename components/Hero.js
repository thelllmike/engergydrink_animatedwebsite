'use client'

import Image from 'next/image'
import { useRef } from 'react'

export default function Hero() {
  const videoRef = useRef(null)
  const triggeredRef = useRef(false)

  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (!video || triggeredRef.current) return

    // 🔥 600ms before video ends
    if (video.duration - video.currentTime <= 2.4) {
      triggeredRef.current = true

      document.body.classList.add('video-ending')
      window.dispatchEvent(new Event('heroVideoNearEnd'))
    }
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
            onTimeUpdate={handleTimeUpdate}
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
