import * as React from "react";
import { SVGProps } from "react";
const SvgIcShoppingSign = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M31.667 10H15a3.333 3.333 0 0 0-3.333 3.333v8.334A3.333 3.333 0 0 0 15 25h16.667A3.333 3.333 0 0 0 35 21.667v-8.334A3.333 3.333 0 0 0 31.667 10Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 36.667v-30a3.333 3.333 0 0 1 3.333-3.333H35M18.333 3.333V10M28.333 3.333V10"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcShoppingSign;
