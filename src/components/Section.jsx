const Section = ({ children, className = '', id, style }) => {
  return (
    <section 
      id={id}
      className={`min-h-screen flex items-center justify-center ${className}`}
      style={style}
    >
      <div className="w-full px-6 py-10 md:px-16 md:py-12" style={{ maxWidth: '1600px' }}>
        {children}
      </div>
    </section>
  )
}

export default Section

