import * as React from "react"
import { SVGProps } from "react"

export const CircleDisk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 49 49"
    {...props}
  >
    <path
      fill="#222"
      fillRule="evenodd"
      d="M24.5 49C38.031 49 49 38.031 49 24.5S38.031 0 24.5 0 0 10.969 0 24.5 10.969 49 24.5 49z"
      clipRule="evenodd"
    />
    <defs>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(24.5 0 0 24.5 24.5 24.5)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.131} stopColor="#151515" />
        <stop offset={0.397} stopColor="#393939" />
        <stop offset={0.632} stopColor="#161616" />
        <stop offset={0.889} stopColor="#393939" />
      </radialGradient>
    </defs>
  </svg>
)
