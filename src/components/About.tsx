import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter text-white mb-6">NUESTRA HISTORIA</h2>
            <p className="text-white opacity-80 mb-6">
            Lo que comenzó como una idea entre amigos, con sueños grandes y muchas charlas, hoy es una realidad. Después de meses de esfuerzo, planificación y trabajo constante, en 2025 pudimos hacer realidad nuestro proyecto. Creemos en el poder de emprender con pasión y en construir algo propio desde cero. Esta empresa no solo representa lo que hacemos, sino también quiénes somos y todo lo que estamos dispuestos a dar para crecer. Esto recién empieza, y lo mejor está por venir.
            </p>
            
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-gray-900 p-6 flex items-center justify-center">
              <p className="text-white font-bold text-3xl tracking-tight">EXCLUSIVIDAD</p>
            </div>
            <div className="aspect-square bg-gray-900 p-6 flex items-center justify-center">
              <p className="text-white font-bold text-3xl tracking-tight">CALIDAD</p>
            </div>
            <div className="aspect-square bg-gray-900 p-6 flex items-center justify-center">
              <p className="text-white font-bold text-3xl tracking-tight">LETAL</p>
            </div>
            <div className="aspect-square bg-gray-900 p-6 flex items-center justify-center">
              <p className="text-white font-bold text-3xl tracking-tight">ELITE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;