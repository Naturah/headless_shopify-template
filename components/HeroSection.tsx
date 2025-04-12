import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="w-full min-h-[90vh] relative flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-naturah-green/20 z-10" />
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Watercolor paintbrushes and paint"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-white">
            Discover the Beauty of <span className="text-naturah-beige">Natural Watercolors</span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Handcrafted watercolor kits made with natural pigments and sustainable practices,
            inspiring artists to create with the colors of nature.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/products" 
              className="bg-naturah-green text-white px-8 py-3 rounded-md font-medium hover:bg-naturah-green/90 transition-colors text-center"
            >
              Shop Our Collection
            </Link>
            <Link 
              href="#featured" 
              className="bg-white/90 text-naturah-green px-8 py-3 rounded-md font-medium hover:bg-white transition-colors text-center"
            >
              View Featured Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}