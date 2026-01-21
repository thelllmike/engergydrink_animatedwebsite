'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Top content */}
      <div className="footer-top">
        {/* Left */}
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            We're a team of passionate designers and developers dedicated to
            crafting exceptional digital experiences that make a lasting impact.
          </p>

          <div className="footer-social">
            <span>x</span>
            <span>in</span>
            <span>o</span>
            <span>f</span>
          </div>
        </div>

        {/* Right */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Portfolio</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>

      {/* Bottom big text */}
      <h1 className="footer-big-text">Crazy Footer</h1>
    </footer>
  )
}
