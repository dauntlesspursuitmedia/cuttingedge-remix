import React from 'react'
import type { z } from 'zod'

import type { heroModuleZ } from '~/types/shared'

const HeroModule = ({ image, title, action }: z.infer<typeof heroModuleZ>) => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-8">Discover our products and services.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
      </div>
    </section>
  )
}

export { HeroModule }
