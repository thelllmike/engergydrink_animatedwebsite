'use client'

import Link from 'next/link'

export default function IntroSection() {
  const ingredients = [
    {
      qty: '500ml',
      name: 'Spring Water',
      description: 'Pure glacier-sourced for clarity and smoothness.'
    },
    {
      qty: '250g',
      name: 'Organic Barley',
      description: 'Locally malted for a rich, golden body.'
    },
    {
      qty: '100g',
      name: 'Wild Hops',
      description: 'Foraged from mountain slopes, slow-dried.'
    },
    {
      qty: '50g',
      name: 'Roasted Oak',
      description: 'Infused for warmth and oaky aroma.'
    },
    {
      qty: '1%',
      name: 'Natural Yeast',
      description: 'Wild fermented, slow-aged for balance.'
    }
  ]

  return (
    <section className="section-intro">
      <div className="intro-grid">
        {/* Left Side: Headings and Description */}
        <div className="intro-left">
          <p className="small-title">Our Selection</p>
          <h2 className="main-heading">The Heritage Line</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            suscipit soluta tenetur voluptatibus libero dolorum.
          </p>
          <Link href="#explore" className="cta-box">
            Explore All
          </Link>
        </div>

        {/* Right Side: Ingredients List */}
        <div className="intro-right">
          <div className="ingredients-log">
            <h3 className="ingredients-title">Brewed With</h3>

            {/* Each Ingredient */}
            {ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient-item">
                <div className="ingredient-qty">{ingredient.qty}</div>
                <div className="ingredient-text">
                  <strong>{ingredient.name}</strong>
                  <p>{ingredient.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}