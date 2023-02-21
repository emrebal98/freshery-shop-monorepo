import * as React from "react";
import { SVGProps } from "react";
const SvgIcLayoutHeader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M33.333 3.333H6.667a3.333 3.333 0 0 0-3.334 3.334v26.666a3.333 3.333 0 0 0 3.334 3.334h26.666a3.333 3.333 0 0 0 3.334-3.334V6.668a3.333 3.333 0 0 0-3.334-3.333ZM3.333 16.667h33.334"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcLayoutHeader;
