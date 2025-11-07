import { useState } from 'react'

const ContractAddress = ({ address = 'FeaD1yAXo3j9fjiJQ35ofE9Pjy1JcRJ62bjYSfxVpump' }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="flex items-center gap-2 text-sm md:text-base px-3 py-2 rounded-full border" 
         style={{ borderColor: 'rgba(230, 234, 241, 1)', background: 'white', color: 'rgba(19, 19, 22, 1)' }}>
      <span>Contract:</span>
      <span className="font-mono">{address}</span>
      <button 
        onClick={handleCopy}
        className="text-xs px-2 py-1 rounded-full border hover:bg-gray-50 transition-colors"
        style={{ borderColor: 'rgba(230, 234, 241, 1)' }}
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  )
}

export default ContractAddress

