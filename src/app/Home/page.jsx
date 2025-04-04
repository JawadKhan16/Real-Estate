'use client'

import Hero from '@/components/pages/home/Hero'
import HomeService from '@/components/pages/home/HomeService'
import OurStory from '@/components/pages/home/OurStory'
import Partner from '@/components/pages/home/Partner'
export default function HomePage() {
  return (
    <div>
      
      <Hero/>
      <HomeService/>
      <OurStory/>
      <Partner/>
    </div>
    
  );
}