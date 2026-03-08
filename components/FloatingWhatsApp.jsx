'use client';

import { useEffect, useState } from 'react';

export default function FloatingWhatsApp() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const whatsappNumber = '8801725437438'; // WhatsApp number without +
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Mahir!%20I%27m%20interested%20in%20your%20services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      {/* Animated Background Pulse */}
      <div className="absolute inset-0 bg-green-500/20 rounded-full animate-pulse group-hover:bg-green-500/40 transition"></div>

      {/* Button */}
      <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 cursor-pointer">
        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.364-3.905 6.75-1.896 10.157 1.432 2.329 3.852 3.476 6.287 3.476 2.054 0 3.968-.822 5.31-2.338l.048-.06c2.281-2.768 2.193-6.985-.197-9.778-1.557-1.756-4.196-2.835-6.517-2.835z" />
        </svg>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 bg-gray-950 text-white px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us on WhatsApp
        <div className="absolute top-full right-3 w-2 h-2 bg-gray-950 transform rotate-45"></div>
      </div>
    </a>
  );
}
