import About from '@/components/Home/About/About'
import Contact from '@/components/Home/Contact/Contact'
import Features from '@/components/Home/Features/Features'
import Hero from '@/components/Home/Hero/Hero'
import Info from '@/components/Home/Info/Info'
import React from 'react'



const page = () => {
  return (
    <>
    <Hero/>
    <Info/>
    <Features/>
    <About/>
    <Contact/>
    </>
  )
}

export default page