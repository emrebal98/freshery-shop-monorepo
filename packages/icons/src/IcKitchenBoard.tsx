import * as React from "react";
import { SVGProps } from "react";
const SvgIcKitchenBoard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M28.333 2.5H11.667a3.333 3.333 0 0 0-3.334 3.333v23.334a3.333 3.333 0 0 0 3.334 3.333h16.666a3.333 3.333 0 0 0 3.334-3.333V5.833A3.333 3.333 0 0 0 28.333 2.5Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 32.5a5 5 0 1 0 10 0"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcKitchenBoard;
