import React, { useState } from 'react';

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
  const [hasImgError, setHasImgError] = useState(false);

  // Size scales for typography and image sizing
  const sizeMap = {
    sm: { imgClass: 'h-8 w-auto max-w-[120px]', symbolH: 26, text: 'text-sm tracking-wider', gap: 'gap-2' },
    md: { imgClass: 'h-10 w-auto max-w-[150px]', symbolH: 34, text: 'text-lg tracking-widest', gap: 'gap-2.5' },
    lg: { imgClass: 'h-14 w-auto max-w-[200px]', symbolH: 48, text: 'text-2xl tracking-[0.2em]', gap: 'gap-3.5' },
    xl: { imgClass: 'h-20 w-auto max-w-[280px]', symbolH: 72, text: 'text-4xl tracking-[0.25em]', gap: 'gap-4' },
  };

  const currentSize = sizeMap[size];

  // SVG Fallback symbol if image fails to load
  const FallbackSymbol = () => (
    <svg
      viewBox="0 0 200 130"
      height={currentSize.symbolH}
      className="shrink-0 aspect-[200/130]"
      fill={symbolColor}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo ED Etika Digital"
    >
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
      <path
        d="
          M 90 51
          L 65 51
          A 14 14 0 0 0 65 79
          L 90 79
          Z
        "
      />
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

  const LogoImage = () => {
    if (hasImgError) {
      return <FallbackSymbol />;
    }

    return (
      <img
        src="/logo-baru.png"
        alt="Logo Etika Digital"
        onError={() => setHasImgError(true)}
        className={`${currentSize.imgClass} object-contain shrink-0 transition-transform duration-200`}
        loading="eager"
      />
    );
  };

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <LogoImage />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center justify-center ${currentSize.gap} ${className}`}>
        <LogoImage />
        <div className={`font-sans uppercase select-none leading-none ${currentSize.text} ${textColor}`}>
          <span className="font-extrabold tracking-[0.18em]">ETIKA</span>
          <span className="font-light tracking-[0.22em]">DIGITAL</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center ${currentSize.gap} ${className}`}>
      <LogoImage />
      <div className={`font-sans uppercase select-none leading-none ${currentSize.text} ${textColor}`}>
        <span className="font-extrabold tracking-[0.12em]">ETIKA</span>
        <span className="font-light tracking-[0.16em]">DIGITAL</span>
      </div>
    </div>
  );
};
