import React from 'react';

const Card = ({
  children,
  className = '',
  hover = false,
  onClick,
  ...props
}) => {
  const hoverClass = hover ? 'hover:shadow-xl hover:border-poe-accent/40 transition-all cursor-pointer' : '';
  
  return (
    <div
      className={`poe-card p-4 ${hoverClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
