import { useState } from 'react'
import Header from '../components/Header'
import Section from '../components/Section'

const Live = () => {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleRequest = async () => {
    setLoading(true)
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1000))
      setResponse({
        status: 402,
        message: 'Payment Required',
        paymentUrl: 'https://api.xdrog402.xyz/pay',
      })
    } catch (error) {
      setResponse({ error: error.message })
    } finally {
      setLoading(false)
    }
  }

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
            Live Example
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            See HTTP 402 in action. Try making a request to see how the payment flow works.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Try It Out</h2>
            <button
              onClick={handleRequest}
              disabled={loading}
              className="px-6 py-3 bg-primary text-white rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Make Request'}
            </button>
          </div>

          {response && (
            <div className="bg-gray-900 text-green-400 rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <pre>{JSON.stringify(response, null, 2)}</pre>
            </div>
          )}
        </div>
      </Section>
    </div>
  )
}

export default Live

