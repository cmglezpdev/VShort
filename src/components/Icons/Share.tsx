import * as React from "react"
import { SVGProps } from "react"

export const Share = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 48 48"
    {...props}
  >
    <g opacity={0.9} filter="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.8 10.309c0-1.267 1.516-1.916 2.433-1.043l13.952 13.286a2.88 2.88 0 0 1-.093 4.256L28.187 38.94c-.932.813-2.387.152-2.387-1.085v-5.498s-14.93-2.69-19.72 6.101c-.446.82-2.187 1.107-1.833-2.983C5.727 27.95 8.75 16.2 25.8 16.2v-5.891Z"
      />
    </g>
    <path
      opacity={0.03}
      fillRule="evenodd"
      clipRule="evenodd"
      d="m36.096 16.8 2.768 5.536a2.4 2.4 0 0 1-.572 2.885L25.896 36s-.6 3 1.2 3c1.8 0 16.2-13.2 16.2-13.2s.6-1.8-1.2-3.6c-1.8-1.8-6-5.4-6-5.4Z"
    />
    <path
      opacity={0.09}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.8 16.839v15.6s-14.289-2.014-18.764 4.8c-4.306 6.556-3.91-7.404 2.572-14.356S25.8 16.839 25.8 16.839Z"
    />
    <defs>
      <radialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(-113.046 27.23 12.569) scale(19.0955 18.771)"
      >
        <stop />
        <stop offset={0.995} stopOpacity={0.01} />
        <stop offset={1} stopOpacity={0.01} />
      </radialGradient>
      <filter
        id="a"
        x={1.8}
        y={7.666}
        width={43.679}
        height={35.233}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1.2} />
        <feGaussianBlur stdDeviation={1.2} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
)