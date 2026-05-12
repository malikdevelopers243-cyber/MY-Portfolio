import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function WhatsAppButton() {
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const draggingRef = useRef(false)
  const startPointRef = useRef({ x: 0, y: 0 })
  const startPositionRef = useRef({ top: 0, left: 0 })
  const clickPreventedRef = useRef(false)

  useEffect(() => {
    const savedPosition = window.localStorage.getItem('whatsapp-button-position')
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition))
      return
    }

    const defaultTop = window.innerHeight - 24 - 56
    const defaultLeft = window.innerWidth - 24 - 56
    setPosition({ top: defaultTop, left: defaultLeft })
  }, [])

  const savePosition = (newPosition) => {
    setPosition(newPosition)
    window.localStorage.setItem('whatsapp-button-position', JSON.stringify(newPosition))
  }

  const handlePointerDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    startPointRef.current = { x: event.clientX, y: event.clientY }
    startPositionRef.current = { ...position }
    draggingRef.current = false
    clickPreventedRef.current = false
  }

  const handlePointerMove = (event) => {
    if (!startPointRef.current) return

    const deltaX = event.clientX - startPointRef.current.x
    const deltaY = event.clientY - startPointRef.current.y
    const distance = Math.hypot(deltaX, deltaY)

    if (distance > 6 || draggingRef.current) {
      draggingRef.current = true
      const maxTop = window.innerHeight - 56 - 16
      const maxLeft = window.innerWidth - 56 - 16
      const newTop = Math.min(maxTop, Math.max(16, startPositionRef.current.top + deltaY))
      const newLeft = Math.min(maxLeft, Math.max(16, startPositionRef.current.left + deltaX))
      savePosition({ top: newTop, left: newLeft })
    }
  }

  const handlePointerUp = () => {
    if (draggingRef.current) {
      clickPreventedRef.current = true
      draggingRef.current = false
    }
    startPointRef.current = null
  }

  const handleClick = () => {
    if (clickPreventedRef.current) {
      clickPreventedRef.current = false
      return
    }

    const phoneNumber = '+92 3014166594'
    const message = 'Hello! I found your portfolio and would like to connect with you.'
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s/g, '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      type="button"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onClick={handleClick}
      className="fixed w-14 h-14 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg z-50 cursor-grab active:cursor-grabbing"
      style={{ top: `${position.top}px`, left: `${position.left}px` }}
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl" />
    </button>
  )
}
