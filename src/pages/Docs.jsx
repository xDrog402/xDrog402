import Header from '../components/Header'
import Section from '../components/Section'

const Docs = () => {
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
        <div className="flex flex-col gap-4">
          <h1 className="font-inter-display text-4xl md:text-6xl leading-tight" style={{ letterSpacing: '-2px' }}>
            Documentation
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            Everything you need to integrate xDrog402: concepts, protocol reference, and examples.
          </p>
        </div>
      </Section>

      <main className="flex items-start justify-center">
        <div className="w-full px-6 py-10 md:px-16 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-10" style={{ maxWidth: '1600px' }}>
          <aside className="md:col-span-3">
            <div className="sticky top-6">
              <h2 className="text-xl font-inter-display mb-4">On this page</h2>
              <nav className="flex flex-col gap-2 text-gray-700 text-sm">
                <a href="#introduction" className="hover:underline">Introduction</a>
                <a href="#concepts" className="hover:underline">Core concepts</a>
                <a href="#protocol" className="hover:underline">Protocol</a>
                <a href="#schemas" className="hover:underline">Schemas</a>
                <a href="#examples" className="hover:underline">Examples</a>
              </nav>
            </div>
          </aside>

          <article className="md:col-span-9 flex flex-col gap-12">
            <section id="introduction" className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-inter-display">Introduction</h3>
              <p className="text-gray-700 leading-7">
                xDrog402 is an open standard enabling machine-to-machine payments via the HTTP 402 status code. 
                It supports multi-chain, multi-token flows designed for agents, services, and human-facing applications.
              </p>
            </section>

            <section id="concepts" className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-inter-display">Core Concepts</h3>
              <p className="text-gray-700 leading-7">
                The protocol is built on the HTTP 402 Payment Required status code, enabling seamless 
                payment flows for API access, compute resources, and data services.
              </p>
            </section>

            <section id="protocol" className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-inter-display">Protocol</h3>
              <p className="text-gray-700 leading-7">
                Detailed protocol specifications and implementation guidelines.
              </p>
            </section>
          </article>
        </div>
      </main>
    </div>
  )
}

export default Docs

