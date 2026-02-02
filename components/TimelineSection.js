'use client'

import dynamic from 'next/dynamic'

// Dynamically import Bottle3D to avoid SSR issues with Three.js
const Bottle3D = dynamic(() => import('./Bottle3D'), {
  ssr: false,
  loading: () => (
    <div className="bottle-loading">
      <div className="bottle-loading-spinner"></div>
    </div>
  )
})

export default function TimelineSection() {
  const timelineData = [
    {
      year: '1984',
      title: 'The First Batch',
      description: 'Our journey began in a wooden barn nestled among oak trees. The first batch was brewed with hand-milled barley and patience.',
      modelType: 'glb',
      modelPath: '/models/bottle1/base_basic_shaded.glb',
      texturePath: null,
      scale: 2
    },
    {
      year: '1989',
      title: 'The Fire Oak Revival',
      description: 'A lightning storm sparked a fire that nearly ended our legacy. But from the ashes, we rebuilt — charred oak barrels, reclaimed tools, and a vow to never compromise the craft.',
      modelType: 'glb',
      modelPath: '/models/bottle2/base_basic_shaded.glb',
      texturePath: null,
      scale: 2
    }
  ]

  return (
    <section className="timeline-section">
      <h2 className="timeline-main-title">Same fire Different flavors</h2>

      {timelineData.map((entry, index) => (
        <div key={index} className="timeline-entry">
          {/* Left Column: Date + 3D Bottle */}
          <div className="timeline-left">
            <div className="timeline-date">{entry.year}</div>
            <div className="timeline-3d-wrapper">
              <Bottle3D
                modelType={entry.modelType}
                modelPath={entry.modelPath}
                texturePath={entry.texturePath}
                scale={entry.scale}
                className="timeline-bottle"
              />
            </div>
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