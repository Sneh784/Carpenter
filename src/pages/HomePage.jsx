import React from 'react'
import Hero from '../components/home/hero/Hero'
import CardComponent from '../components/home/hero/card/CardComponent'
import ProductGrid from '../components/home/product/ProductGrid'
import Blog from '../components/home/blog/Blog'

function HomePage() {
  return (
    <div>
      <Hero/>
      <CardComponent/>
      <ProductGrid/>
      <Blog/>
    </div>
  )
}

export default HomePage
