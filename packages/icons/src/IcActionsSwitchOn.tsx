import * as React from "react";
import { SVGProps } from "react";
const SvgIcActionsSwitchOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26.667 13.333H13.333a6.667 6.667 0 1 0 0 13.334h13.334a6.667 6.667 0 0 0 0-13.334Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.667 26.667a6.667 6.667 0 1 0 0-13.334 6.667 6.667 0 0 0 0 13.334Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcActionsSwitchOn;
