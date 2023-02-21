import * as React from "react";
import { SVGProps } from "react";
const SvgIcPlacesCarousel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 10a3.333 3.333 0 1 0 0-6.667A3.333 3.333 0 0 0 20 10ZM31.667 16.667a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667ZM31.667 30a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667ZM8.333 30a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667ZM8.333 16.667a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 30c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.333 36.667 20 20l6.667 16.667"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcPlacesCarousel;
