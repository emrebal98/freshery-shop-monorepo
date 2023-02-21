import * as React from "react";
import { SVGProps } from "react";
const SvgIcWeatherWind = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.667 13.333a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667ZM33.333 20a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667ZM26.667 33.333a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667ZM26.667 26.666H8.333M33.333 20h-30M21.667 13.333H5"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcWeatherWind;
