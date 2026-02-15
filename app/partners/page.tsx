'use client';

import { useEffect } from 'react';

export default function PartnersPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#f6f0de] flex items-center justify-center">
      <div className="w-full max-w-7xl h-[90vh] mx-4">
        <div data-tf-live="01JJ33RJP552BFDY99W99SX1B4"></div>
      </div>
    </div>
  );
}
