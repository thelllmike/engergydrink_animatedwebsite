'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        {/* Logo */}
        <div className="footer-logo">CraftEdge</div>

        {/* Navigation Links */}
        <div className="footer-links">
          <Link href="#about">About</Link>
          <Link href="#careers">Careers</Link>
          <Link href="#terms">Terms</Link>
        </div>

        {/* Contact and Social Links */}
        <div className="footer-contact">
          <Link href="mailto:hello@craftedge.com">hello@craftedge.com</Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}