
import React from 'react';

interface ScrollIndicatorProps {
  visible: boolean;
  theme: 'dark' | 'book';
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ visible, theme }) => {
  return (
    <div 
      className="scroll-signal" 
      style={{ opacity: visible ? (theme === 'book' ? 0.3 : 0.4) : 0 }}
    >
      <span className="scroll-text">scroll to continue</span>
    </div>
  );
};

export default ScrollIndicator;
