import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Section from '../components/Section'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.utils.toArray('.animate-section').forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
    })
  }, [])

  return (
    <div className="bg-white text-gray-800">
      <div className="flex flex-col items-center">
        <Header />
        <Hero />
        
        <Section className="animate-section">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl md:text-6xl font-inter-display" style={{ letterSpacing: '-2px' }}>
              Protocol Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              HTTP 402 is the web-native standard for payments. Our mission is to design a frictionless 
              machine-to-machine protocol that allows agents to pay for APIs, compute resources, and data 
              using simple HTTP requests and native blockchain transactions scaling to billions of sub-cent microtransactions.
            </p>
          </div>
        </Section>

        <Section className="animate-section bg-gray-50">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl md:text-6xl font-inter-display" style={{ letterSpacing: '-2px' }}>
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-2">1. Request</h3>
                <p className="text-gray-600">Make an HTTP request to any API endpoint</p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-2">2. Payment</h3>
                <p className="text-gray-600">Receive HTTP 402 response with payment details</p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-2">3. Access</h3>
                <p className="text-gray-600">Complete payment and access the resource</p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  )
}

export default Home

