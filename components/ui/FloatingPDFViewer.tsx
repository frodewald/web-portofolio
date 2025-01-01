'use client'

import React, { useEffect } from 'react';

export default function FloatingPDFViewer({
  isVisible,
  onVisibilityChange
}: {
  isVisible: boolean;
  onVisibilityChange: (isVisible: boolean) => void;
}) {

  useEffect(() => {
    if (!isVisible) return;
  }, [isVisible]);

  const toggleVisibility = () => {
    onVisibilityChange(!isVisible);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-4/6 h-5/6 p-4 rounded-lg shadow-lg relative">
            <button 
                onClick={toggleVisibility} 
                className="absolute -top-4 -right-10 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                ✕
            </button>
            <iframe 
              src="/cv.pdf" 
              className="w-full h-full" 
              title="PDF Viewer"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}