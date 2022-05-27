import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="131"
      height="131"
      data-name="Logo With BG"
      viewBox="0 0 131 131"
      className="w-16 mx-auto"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#e2e3e7"></stop>
          <stop offset="1" stopColor="#717274"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="0.5"
          x2="0.852"
          y1="0.542"
          y2="0.592"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#172234"></stop>
          <stop offset="1" stopColor="#a48111"></stop>
        </linearGradient>
      </defs>
      <g
        fill="url(#linear-gradient)"
        stroke="#92a4aa"
        strokeWidth="2"
        data-name="Ellipse 2"
      >
        <circle cx="65.5" cy="65.5" r="65.5" stroke="none"></circle>
        <circle cx="65.5" cy="65.5" r="64.5" fill="none"></circle>
      </g>
      <g transform="translate(33.75 28.317)">
        <path
          fill="url(#linear-gradient-2)"
          stroke="rgba(0,0,0,0)"
          strokeMiterlimit="10"
          strokeWidth="1"
          d="M30.273 74.365a29.147 29.147 0 01-12.6-2.637 26.291 26.291 0 01-9.589-7.91 37.128 37.128 0 01-6.064-12.06A53.024 53.024 0 010 36.67a47.994 47.994 0 012.063-14.41 36.849 36.849 0 016.189-11.787 27.1 27.1 0 019.632-7.855A28.622 28.622 0 0130.273 0a39.617 39.617 0 019.915 1.174A28.33 28.33 0 0148.382 4.7a38.026 38.026 0 00-9.424 7.983l-.241.282a20.394 20.394 0 00-8.443-1.634 14.245 14.245 0 00-12.744 6.787c-2.883 4.5-4.345 10.746-4.345 18.554 0 7.453 1.511 13.778 4.492 18.8s7.218 7.567 12.594 7.568a41.548 41.548 0 005.173 11.088 42.207 42.207 0 01-5.171.237zm20.205-6.518h0c-.1-.122-.2-.245-.295-.368A29.126 29.126 0 0144.8 55.635c3-4.566 4.517-10.947 4.517-18.966a47.287 47.287 0 00-1.047-10.492 31.046 31.046 0 012.416-3.69 23.587 23.587 0 017.548-6.625 37.905 37.905 0 013.2 9.437A56.915 56.915 0 0162.5 36.67a52.06 52.06 0 01-3 18.638 28.9 28.9 0 01-9.016 12.539z"
          data-name="Subtraction 1"
        ></path>
      </g>
    </svg>
  );
}

export default React.memo(Icon);
