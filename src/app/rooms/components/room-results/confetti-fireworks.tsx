import { getRandomNumber } from '@/utils/get-random-number'
import confetti from 'canvas-confetti'

import { useEffect } from 'react'

export function ConfettiFireworks({ trigger }: { trigger: boolean }) {
  const handleConfetti = () => {
    const duration = 5 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min: number, max: number) =>
      (getRandomNumber() % (max - min)) + min

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: getRandomNumber() - 0.2 },
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: getRandomNumber() - 0.2 },
      })
    }, 250)
  }

  useEffect(() => {
    trigger === true && handleConfetti()
  }, [trigger])

  return <div className="relative" />
}