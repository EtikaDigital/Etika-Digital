import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'stacked';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  textColor?: string;
  symbolColor?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  textColor = 'text-neutral-900',
  symbolColor = 'currentColor',
}) => {
  // Size scales
  const sizeMap = {
    sm: { symbolH: 26, text: 'text-sm tracking-wider', gap: 'gap-2' },
    md: { symbolH: 34, text: 'text-lg tracking-widest', gap: 'gap-2.5' },
    lg: { symbolH: 48, text: 'text-2xl tracking-[0.2em]', gap: 'gap-3.5' },
    xl: { symbolH: 72, text: 'text-4xl tracking-[0.25em]', gap: 'gap-4' },
  };

  const currentSize = sizeMap[size];

  // SVG Symbol geometry matching IMG_7556.png
  const Symbol = () => (
    <svg
      viewBox="0 0 200 130"
      height={currentSize.symbolH}
      className="shrink-0 aspect-[200/130]"
      fill={symbolColor}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo ED Etika Digital"
    >
      {/* Letter E */}
      {/* Outer stadium arc on left, flat right cut */}
      <path
        d="
          M 90 0
          L 65 0
          A 65 65 0 0 0 65 130
          L 90 130
          L 90 102
          L 65 102
          A 37 37 0 0 1 65 28
          L 90 28
          Z
        "
      />
      {/* Letter E middle bar: rounded left, flat right */}
      <path
        d="
          M 90 51
          L 65 51
          A 14 14 0 0 0 65 79
          L 90 79
          Z
        "
      />

      {/* Letter D */}
      {/* Straight vertical bar on left, outer arc on right, inner counter cutout */}
      <path
        fillRule="evenodd"
        d="
          M 105 0
          L 135 0
          A 65 65 0 0 1 135 130
          L 105 130
          Z
          M 133 28
          L 135 28
          A 37 37 0 0 1 135 102
          L 133 102
          Z
        "
      />
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <Symbol />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center justify-center ${currentSize.gap} ${className}`}>
        <Symbol />
        <div className={`font-sans uppercase select-none leading-none ${currentSize.text} ${textColor}`}>
          <span className="font-extrabold tracking-[0.18em]">ETIKA</span>
          <span className="font-light tracking-[0.22em]">DIGITAL</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center ${currentSize.gap} ${className}`}>
      <Symbol />
      <div className={`font-sans uppercase select-none leading-none ${currentSize.text} ${textColor}`}>
        <span className="font-extrabold tracking-[0.12em]">ETIKA</span>
        <span className="font-light tracking-[0.16em]">DIGITAL</span>
      </div>
    </div>
  );
};
