
import { useState } from "react";

const SkipLink = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <a
      href="#main-content"
      className={`
        fixed top-4 left-4 z-50 transform -translate-y-full transition-transform
        bg-primary text-white px-4 py-2 rounded-md
        focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
        ${isVisible ? 'translate-y-0' : ''}
      `}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
