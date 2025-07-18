import { useEffect, useState } from "react"

type AnimatedNumberProps = {
  target: number
  duration?: number
  className?: string
}

export const AnimatedNumber = ({ target, duration = 1000, className }: AnimatedNumberProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const startTime = performance.now()

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1)
      const value = Math.floor(progress * target)
      setCount(value)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [target, duration])

  return (
    <span className={className}>
      {count.toLocaleString()}
    </span>
  )
}
