import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+92 3014166594'
    const message = 'Hello! I found your portfolio and would like to connect with you.'
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg z-50"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl" />
    </button>
  )
}
