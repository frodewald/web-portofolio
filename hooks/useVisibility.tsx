import { useState, useCallback } from 'react';

const useVisibility = () => {
  const [visibleItems, setVisibleItems] = useState({});

  const observe = useCallback((elements: any) => {
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const updatedVisibility = { ...visibleItems };

        entries.forEach((entry) => {
          const id = entry.target.id;

          // Jika elemen terlihat untuk pertama kali, set ke true
          if (entry.isIntersecting && !updatedVisibility[id]) {
            updatedVisibility[id] = true;
          }
        });

        setVisibleItems(updatedVisibility);
      },
      {
        threshold: 0.5, // Mulai terpicu jika 10% elemen masuk viewport
      }
    );

    elements.forEach((el: any) => observer.observe(el));

    return () => {
      elements.forEach((el: any) => observer.unobserve(el));
    };
  }, [visibleItems]);

  return { visibleItems, observe };
};

export default useVisibility;