'use client'

import Image from 'next/image'

export default function TimelineSection() {
  const timelineData = [
    {
      year: '1984',
      title: 'The First Batch',
      description: 'Our journey began in a wooden barn nestled among oak trees. The first batch was brewed with hand-milled barley and patience.',
      image: '/images/first-batch.png'
    },
    {
      year: '1989',
      title: 'The Fire Oak Revival',
      description: 'A lightning storm sparked a fire that nearly ended our legacy. But from the ashes, we rebuilt — charred oak barrels, reclaimed tools, and a vow to never compromise the craft.',
      image: '/images/first-batch.png'
    }
  ]

  return (
    <section className="timeline-section">
      <h2 className="timeline-main-title">Same fire Different flavors</h2>

      {timelineData.map((entry, index) => (
        <div key={index} className="timeline-entry">
          {/* Left Column: Date + Image */}
          <div className="timeline-left">
            <div className="timeline-date">{entry.year}</div>
            <Image 
              src={entry.image}
              alt={`${entry.title} - ${entry.year}`}
              className="timeline-img"
              width={240}
              height={320}
            />
          </div>

          {/* Right Column: Story */}
          <div className="timeline-right">
            <h3 className="timeline-title">{entry.title}</h3>
            <p className="timeline-description">{entry.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}