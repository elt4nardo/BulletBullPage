"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Crown, Award, Target, Shield, History } from "lucide-react"

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)

  // Spotlight effect that follows mouse movement
  useEffect(() => {
    const container = containerRef.current
    const spotlight = spotlightRef.current

    if (!container || !spotlight) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
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

  const valueBoxes = [
    { text: "EXCLUSIVIDAD", icon: Crown, description: "Productos únicos" },
    { text: "CALIDAD", icon: Award, description: "Materiales premium" },
    { text: "LETAL", icon: Target, description: "Impacto garantizado" },
    { text: "ELITE", icon: Shield, description: "Para los mejores" },
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <History className="w-8 h-8 text-white" strokeWidth={1.5} />
              <h2 className="text-4xl font-bold tracking-tighter text-white">NUESTRA HISTORIA</h2>
            </div>

            <div className="w-16 h-px bg-white mb-8" />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/80 text-lg leading-relaxed mb-10"
            >
              Lo que comenzó como una idea entre amigos, con sueños grandes y muchas charlas, hoy es una realidad.
              Después de meses de esfuerzo, planificación y trabajo constante, en 2025 pudimos hacer realidad nuestro
              proyecto. Creemos en el poder de emprender con pasión y en construir algo propio desde cero. Esta empresa
              no solo representa lo que hacemos, sino también quiénes somos y todo lo que estamos dispuestos a dar para
              crecer. Esto recién empieza, y lo mejor está por venir.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button className="px-8 py-3 bg-white text-black font-medium rounded-none hover:bg-white/90 transition-all duration-300">
                Conoce más
              </button>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {valueBoxes.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="aspect-square border border-white/20 bg-black p-6 flex flex-col items-center justify-center text-center group"
                >
                  <Icon
                    className="w-10 h-10 mb-4 text-white opacity-80 group-hover:opacity-100 transition-opacity"
                    strokeWidth={1.5}
                  />

                  <p className="text-white font-bold text-xl md:text-2xl tracking-tight mb-2">{item.text}</p>

                  <p className="text-white/60 text-sm font-light">{item.description}</p>

                  <div className="h-px w-0 group-hover:w-12 bg-white mt-4 transition-all duration-300" />
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
