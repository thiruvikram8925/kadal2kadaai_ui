/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "h-12 w-12" }: LogoProps) {
  return (
    <div className={`${className} bg-white rounded-full p-2 flex items-center justify-center border border-slate-100 shadow-sm shrink-0 overflow-hidden`}>
      <img
        src="/logo.png"
        alt="Kadal 2 Kadaai Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
