import * as React from "react";
import { SVGProps } from "react";
const SvgIcActionsHalfLayout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 3.333v33.334M20 6.667h-8.833A3.333 3.333 0 0 0 7.834 10v20a3.334 3.334 0 0 0 3.333 3.333H20"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.167 33.333H30A3.333 3.333 0 0 0 33.333 30V10A3.333 3.333 0 0 0 30 6.667h-8.833"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="2 4"
    />
  </svg>
);
export default SvgIcActionsHalfLayout;
