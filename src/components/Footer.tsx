import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white text-xl font-bold mb-4 tracking-tighter">BULLET BULL</h3>
            <p className="text-white opacity-70 mb-4">
              Elite streetwear para los que quieran destacar.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/bulletbull.ar/" className="text-white hover:text-gray-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              
            </div>
          </div>
          

          
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Information</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity">Sobre Nosotros</a></li>
              <li><a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity">Sustentabilidad</a></li>
              <li><a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity">Carreras</a></li>
              <li><a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity">Términos y Condiciones</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-white opacity-70"><Mail size={16} className="mr-2" />bulletbull.clth@gmail.com</li>
              <li className="text-white opacity-70">Rosario, Santa Fe</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center md:text-left md:flex md:justify-between md:items-center">
          <p className="text-white opacity-70 text-sm"> <a href='https://www.instagram.com/gonza_bonadeo/'>© By Gonza_Bonadeo. All rights reserved.</a></p>
          <div className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
              <li><a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity text-sm">Shipping Info</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;