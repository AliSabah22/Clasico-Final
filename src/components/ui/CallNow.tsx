"use client";

import React from "react";
import { callBarbershop } from '../../utils/cojilio';

interface CallNowProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showIcon?: boolean;
  children?: React.ReactNode;
}

export default function CallNow({ 
  variant = 'outline', 
  size = 'md', 
  className = '',
  showIcon = true,
  children 
}: CallNowProps) {
  const baseClasses = "font-medium transition-all duration-300 shadow-lg hover:shadow-xl touch-manipulation";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const variantClasses = {
    primary: "bg-gold text-black hover:bg-gold/80",
    secondary: "bg-black text-white hover:bg-gray-800",
    outline: "bg-white/20 backdrop-blur-sm text-black border-2 border-black/20 hover:bg-white/30"
  };
  
  const icon = showIcon ? "📞 " : "";
  const buttonText = children || "Call Now";
  
  return (
    <button 
      onClick={callBarbershop}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {icon}{buttonText}
    </button>
  );
} 