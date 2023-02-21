import * as React from "react";
import { SVGProps } from "react";
const SvgIcKitchenPlate = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 37.5c9.665 0 17.5-7.835 17.5-17.5S29.665 2.5 20 2.5 2.5 10.335 2.5 20 10.335 37.5 20 37.5Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 26.667a6.667 6.667 0 1 0 0-13.333 6.667 6.667 0 0 0 0 13.333Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcKitchenPlate;
