import * as React from "react"
import { SVGProps } from "react"

export const Comments = (props: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 48 48"
      {...props}
    >
      <g opacity={0.9} filter="url(#a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38.494 35.313C42.6 31.2 45 26.916 45 21.928 45 11.806 35.733 3.6 24.3 3.6S3.6 11.806 3.6 21.928C3.6 32.051 13.167 39 24.6 39v3.357c0 1.063 1.103 1.748 2.038 1.241 2.922-1.583 8.336-4.759 11.856-8.285Zm-24.25-15.857c1.635 0 2.96 1.315 2.96 2.935a2.948 2.948 0 0 1-2.96 2.938 2.947 2.947 0 0 1-2.955-2.938c0-1.62 1.324-2.935 2.956-2.935Zm13.013 2.935c0-1.62-1.324-2.935-2.957-2.935-1.633 0-2.957 1.315-2.957 2.935A2.947 2.947 0 0 0 24.3 25.33a2.947 2.947 0 0 0 2.957-2.938Zm7.098-2.935c1.634 0 2.956 1.315 2.956 2.935a2.946 2.946 0 0 1-2.956 2.938 2.948 2.948 0 0 1-2.958-2.938c0-1.62 1.324-2.935 2.958-2.935Z"
        />
      </g>
      <path
        opacity={0.1}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.6 39s11.467-.886 16.26-7.024c-4.793 6.752-9.586 10.434-13.78 11.662C22.886 44.865 24.6 39 24.6 39Z"
      />
      <defs>
        <linearGradient
          id="b"
          x1={20.41}
          y1={37.67}
          x2={22.308}
          y2={43.633}
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset={1} stopOpacity={0.01} />
        </linearGradient>
        <filter
          id="a"
          x={1.2}
          y={2.4}
          width={46.2}
          height={44.969}
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