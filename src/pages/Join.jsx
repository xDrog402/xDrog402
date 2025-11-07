import Header from '../components/Header'
import Section from '../components/Section'

const Join = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <Section 
        className="bg-bottom bg-no-repeat bg-white md:bg-fixed"
        style={{
          backgroundImage: "url('/images/top.svg')",
          backgroundPosition: '100% 100%',
          backgroundSize: '100% auto'
        }}
      >
        <div className="flex flex-col gap-4 max-w-3xl">
          <h1 className="font-inter-display text-4xl md:text-6xl leading-tight" style={{ letterSpacing: '-2px' }}>
            Join the Coalition
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Be part of the future of machine-to-machine payments. Join developers, businesses, and innovators 
            working together to build the HTTP 402 payment standard.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto">
          <form className="flex flex-col gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tell us about yourself and why you want to join..."
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white rounded-full hover:opacity-90 transition-opacity"
            >
              Submit
            </button>
          </form>
        </div>
      </Section>
    </div>
  )
}

export default Join

