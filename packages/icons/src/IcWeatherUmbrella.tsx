import * as React from "react";
import { SVGProps } from "react";
const SvgIcWeatherUmbrella = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.667 3.333h.666a16.333 16.333 0 0 1 16.334 16.334v0a.333.333 0 0 1-.334.333H3.667a.333.333 0 0 1-.334-.333A16.333 16.333 0 0 1 19.667 3.333v0Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 20v13.333a3.334 3.334 0 0 1-6.667 0v-1.666"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcWeatherUmbrella;
