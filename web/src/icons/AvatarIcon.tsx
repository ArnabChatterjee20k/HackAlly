import React from "react";
export default function AvatarIcon({
  className,
}: React.SVGProps<HTMLOrSVGElement>) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask
        id=":r1ho:"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="36"
        height="36"
      >
        <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
      </mask>
      <g mask="url(#:r1ho:)">
        <rect width="36" height="36" fill="#dc8051"></rect>
        <rect
          x="0"
          y="0"
          width="36"
          height="36"
          transform="translate(-1 -1) rotate(5 18 18) scale(1.2)"
          stroke="white"
          strokeWidth={2}
          fill="#18378d"
          rx="36"
        ></rect>
        <g transform="translate(-5 -2) rotate(-5 18 18)">
          <path
            d="M15 21c2 1 4 1 6 0"
            stroke="white"
            fill="none"
            stroke-linecap="round"
          ></path>
          <rect
            x="14"
            y="14"
            width="1.5"
            height="2"
            rx="1"
            stroke="none"
            fill="white"
          ></rect>
          <rect
            x="20"
            y="14"
            width="1.5"
            height="2"
            rx="1"
            stroke="none"
            fill="white"
          ></rect>
        </g>
      </g>
    </svg>
  );
}
