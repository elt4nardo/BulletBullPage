"use client"

import { useRef, useEffect, useState } from "react"

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Spotlight effect that follows mouse movement
  useEffect(() => {
    const container = containerRef.current
    const spotlight = spotlightRef.current

    if (!container || !spotlight) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top } = container.getBoundingClientRect()
      const x = e.clientX - left
      const y = e.clientY - top

      // Update spotlight position with black and white gradient
      spotlight.style.background = `radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255, 255, 255, 0.12) 0%,
        rgba(255, 255, 255, 0.05) 15%,
        transparent 50%
      )`
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  const valueBoxes = [
    {
      text: "EXCLUSIVIDAD",
      description: "Productos únicos",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
        </svg>
      ),
    },
    {
      text: "CALIDAD",
      description: "Materiales premium",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
    },
    {
      text: "LETAL",
      description: "Impacto garantizado",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      text: "ELITE",
      description: "Para los mejores",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
      ),
    },
  ]

  return (
    <section
      id="about"
      className="relative py-24 md:py-40 border-t border-white/10 overflow-hidden bg-black"
      ref={containerRef}
    >
      {/* Spotlight effect overlay */}
      <div ref={spotlightRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-8"}`}
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <h2 className="text-4xl font-bold tracking-tighter text-white">NUESTRA HISTORIA</h2>
            </div>

            <div className="w-16 h-px bg-white mb-8" />

            <p
              className={`text-white/80 text-lg leading-relaxed mb-10 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              Lo que comenzó como una idea entre amigos, con sueños grandes y muchas charlas, hoy es una realidad.
              Después de meses de esfuerzo, planificación y trabajo constante, en 2025 pudimos hacer realidad nuestro
              proyecto. Creemos en el poder de emprender con pasión y en construir algo propio desde cero. Esta empresa
              no solo representa lo que hacemos, sino también quiénes somos y todo lo que estamos dispuestos a dar para
              crecer. Esto recién empieza, y lo mejor está por venir.
            </p>

            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <button className="px-8 py-3 bg-white text-black font-medium rounded-none hover:bg-white/90 transition-all duration-300">
                Conoce más
              </button>
            </div>
          </div>

<div className="grid grid-cols-2 gap-6">
  {valueBoxes.map((item, index) => (
    <div
      key={item.text}
      className={`h-52 md:h-60 border border-white/20 bg-black p-6 flex flex-col justify-between text-center group hover:scale-[1.03] transition-all duration-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      style={{ transitionDelay: `${index * 100 + 400}ms` }}
    >

                <div className="w-10 h-10 mb-4 text-white opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>

                <p className="text-white font-bold text-sm sm:text-base md:text-lg tracking-tight mb-2 text-center break-words">
  {item.text}
</p>



                <p className="text-white/60 text-sm font-light">{item.description}</p>

                <div className="h-px w-0 group-hover:w-12 bg-white mt-4 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
