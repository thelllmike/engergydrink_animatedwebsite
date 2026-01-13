'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileNav = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header style={{ '--border-width': '0' }}>
      <div className="header-inner">
        {/* Logo */}
        <div className="logo">CraftEdge</div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link href="#home">Home</Link>
          <Link href="#features">Features</Link>
          <Link href="#product">Product</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleMobileNav}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'show' : ''}`}>
        <Link href="#home" onClick={toggleMobileNav}>Home</Link>
        <Link href="#features" onClick={toggleMobileNav}>Features</Link>
        <Link href="#product" onClick={toggleMobileNav}>Product</Link>
        <Link href="#contact" onClick={toggleMobileNav}>Contact</Link>
      </div>
    </header>
  )
}