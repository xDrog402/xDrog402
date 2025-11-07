import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import ContractAddress from './ContractAddress'
import Button from './Button'

gsap.registerPlugin(SplitText)

const Hero = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    if (titleRef.current) {
      const split = new SplitText(titleRef.current, { type: 'lines, words' })
      
      gsap.from(split.words, {
        opacity: 0,
        y: 100,
        rotationX: 10,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.25,
      })
    }

    if (subtitleRef.current) {
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.7,
      })
    }
  }, [])

  return (
    <section 
      className="top-section flex justify-between flex-col items-center bg-bottom bg-no-repeat bg-white md:bg-fixed min-h-screen"
      style={{
        backgroundImage: "url('/images/top.svg')",
        backgroundPosition: '100% 100%',
        backgroundSize: '100% auto'
      }}
    >
      <div className="flex flex-col justify-end items-start text-left bg-cover w-full p-6 pt-32 md:p-16 md:pt-32" style={{ maxWidth: '1600px' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-4">
          <ContractAddress />
          <Button
            href="https://pump.fun/coin/FeaD1yAXo3j9fjiJQ35ofE9Pjy1JcRJ62bjYSfxVpump"
            variant="primary"
          >
            Buy on pump.fun
          </Button>
        </div>
        <h1 
          ref={titleRef}
          className="mb-10 font-inter-display top-title"
          style={{ fontSize: '140px', letterSpacing: '-4px', lineHeight: '140px' }}
        >
          The open standard for blockchain payments
        </h1>
        <p ref={subtitleRef} className="top-scroll-down">
          Scroll to Protocol ↓
        </p>
      </div>
    </section>
  )
}

export default Hero

