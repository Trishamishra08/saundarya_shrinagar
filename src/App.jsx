import React from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import OffersBanner from './components/OffersBanner';
import BestSellers from './components/BestSellers';
import WhyChoose from './components/WhyChoose';
import BlogSection from './components/BlogSection';
import Testimonials from './components/Testimonials';
import InstagramGallery from './components/InstagramGallery';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-light">
      <Navbar />
      <main>
        <HeroCarousel />
        <Categories />
        <FeaturedProducts />
        <OffersBanner />
        <BestSellers />
        <WhyChoose />
        <BlogSection />
        <Testimonials />
        <InstagramGallery />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
