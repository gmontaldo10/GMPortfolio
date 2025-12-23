
import React from 'react';

interface NavDotsProps {
  activeId: string;
}

const NavDots: React.FC<NavDotsProps> = ({ activeId }) => {
  const items = [
    { id: 'v1', label: 'The Void' },
    { id: 'v2', label: 'Galaxy & Time' },
    { id: 'v3', label: 'Akira Industrial' },
    { id: 'v4', label: 'Satoshi Kon Dream' },
    { id: 'v5', label: 'Tesseract Library' },
  ];

  return (
    <div className="nav-dots">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`dot ${activeId === item.id ? 'active' : ''}`}
          title={item.label}
        />
      ))}
    </div>
  );
};

export default NavDots;
