'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { whatsappUrl, WHATSAPP_MESSAGES } from '@/lib/constants'

const messages = [
  'Posso te ajudar?',
  'Falar com a Dra.',
  'Tirar dúvidas',
]

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [messageIndex, setMessageIndex] = useState(0)
  const [showTooltip, setShowTooltip] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      setIsVisible(scrollPercentage > 25)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useEffect(() => {
    if (!isVisible || isDismissed) return
    
    // Mostra tooltip após 3 segundos
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
    }, 3000)
    
    // Rotaciona mensagens
    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length)
    }, 4000)
    
    return () => {
      clearTimeout(tooltipTimer)
      clearInterval(messageTimer)
    }
  }, [isVisible, isDismissed])
  
  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowTooltip(false)
    setIsDismissed(true)
  }
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && !isDismissed && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="relative bg-card shadow-lg rounded-2xl px-4 py-3 flex items-center gap-2"
              >
                <span className="text-sm text-graphite whitespace-nowrap">
                  {messages[messageIndex]}
                </span>
                <button
                  onClick={handleDismiss}
                  className="text-muted-foreground hover:text-graphite transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-4 h-4" />
                </button>
                {/* Seta */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-card" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Botão principal */}
          <a
            href={whatsappUrl(WHATSAPP_MESSAGES.consulta)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            {/* Pulse animation */}
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
            
            <div className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
