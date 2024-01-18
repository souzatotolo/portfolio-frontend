import { useState, useEffect } from 'react';
import { GoChevronUp } from 'react-icons/go';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showThreshold = 400;

    if (scrollY > showThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-8 flex items-center justify-center right-8 bg-[#9b77ff] text-zinc-50 p-3 rounded-full cursor-pointer"
          onClick={scrollToTop}
        >
          <GoChevronUp size={30} className="text-bold z-50" />
        </button>
      )}
    </>
  );
};

export default GoToTop;
