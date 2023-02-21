import * as React from "react";
import { SVGProps } from "react";
const SvgIcDirectionsRound = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.183 14.167a15 15 0 1 1 0 11.533"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 8.334v6.333a.333.333 0 0 0 .333.333h6.334"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcDirectionsRound;
