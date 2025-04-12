import { HeroSection } from '@/components/HeroSection'
import { FeaturedProducts } from '@/components/FeaturedProducts'
import { NewsletterSignup } from '@/components/NewsletterSignup'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <HeroSection />
      <FeaturedProducts />
      <section className="w-full py-16 bg-naturah-light">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-naturah-green mb-6">
            Inspired by Nature, Created for Artists
          </h2>
          <p className="text-lg md:text-xl text-naturah-brown max-w-3xl mx-auto mb-8">
            Our watercolor kits are crafted using natural pigments and sustainable practices, 
            bringing the beauty of nature to your artistic creations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-naturah-green mb-3">Natural Ingredients</h3>
              <p className="text-naturah-brown">
                Pigments derived from organic materials for vibrant, true-to-nature colors.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-naturah-green mb-3">Eco-Friendly</h3>
              <p className="text-naturah-brown">
                Sustainable packaging and environmentally conscious production methods.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-naturah-green mb-3">Artist Quality</h3>
              <p className="text-naturah-brown">
                Professional-grade watercolors that inspire creativity and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <NewsletterSignup />
    </div>
  )
}