import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const primaryButtonVariants = cva(
  "inline-flex items-center justify-center rounded-lg px-6 py-2 text-white font-bold shadow-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700",
        secondary: "bg-gray-600 hover:bg-gray-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof primaryButtonVariants> {}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ className, variant, children, ...props }) => {
  return (
    <button
      className={cn(primaryButtonVariants({ variant, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton; 