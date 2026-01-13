'use client'

import Link from 'next/link'

export default function SocialSidebar() {
  return (
    <aside className="social-sidebar" style={{ '--border-height': '0' }}>
      <nav>
        {/* Instagram */}
        <Link href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm.5 1.5h7.5a4.25 4.25 0 0 1 4.25 4.25v7.5a4.25 4.25 0 0 1-4.25 4.25h-7.5a4.25 4.25 0 0 1-4.25-4.25v-7.5a4.25 4.25 0 0 1 4.25-4.25Zm8.5 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm-5.25 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" />
          </svg>
        </Link>

        {/* LinkedIn */}
        <Link href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-3.75 7.25h-.08a2.11 2.11 0 0 0-1.92 1.18V10.5h-2.5v6.75h2.5v-3.43c0-.87.65-1.57 1.45-1.57s1.3.7 1.3 1.57v3.43H18.5v-3.87c0-1.88-1.16-2.81-2.25-2.81ZM7.5 10.5H10V17.25H7.5V10.5Zm1.25-3a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z" />
          </svg>
        </Link>

        {/* Twitter */}
        <Link href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 5.92a8.18 8.18 0 0 1-2.36.65 4.12 4.12 0 0 0 1.8-2.27 8.21 8.21 0 0 1-2.6.99 4.1 4.1 0 0 0-7 3.73 11.65 11.65 0 0 1-8.46-4.3 4.1 4.1 0 0 0 1.27 5.48 4.07 4.07 0 0 1-1.86-.52v.05a4.1 4.1 0 0 0 3.29 4.02 4.07 4.07 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.24 8.24 0 0 1 2 19.53a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68v-.53a8.36 8.36 0 0 0 2.06-2.13Z" />
          </svg>
        </Link>
      </nav>
    </aside>
  )
}