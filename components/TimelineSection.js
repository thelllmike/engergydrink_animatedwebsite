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
      
      title: 'Sugar Free',
      description: 'Stay energized without the sugar! The Spinner Energy Drink - Sugar Free offers a refreshing, low-calorie boost with a delicious mixed fruit & berry flavor. Perfect for those who want to stay alert and active without the sugar or added calories. Packed with key vitamins like B2, B3, B6, and B12, as well as 400mg of taurine and 30mg of caffeine, this drink is designed to fuel your day and keep you going..',
      modelType: 'glb',
      modelPath: '/models/bottle1/base_basic_shaded.glb',
      texturePath: null,
      scale: 2
    },
    {
     
      title: 'WATERMELON',
      description: 'Experience the refreshing and energizing taste of Spinner Energy Drink – Watermelon, a perfect blend of carbonated water and watermelon flavoring. Infused with caffeine, taurine, and essential B vitamins, this fizzy drink provides a quick boost of energy to keep you active and focused.Ingredients: Carbonated water, caffeine, taurine, sugar, tri-sodium citrate (INS311III), nature-identical flavoring substances ',
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