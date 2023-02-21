import * as React from "react";
import { SVGProps } from "react";
const SvgIcActionsLayout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M30 6.667H10A3.333 3.333 0 0 0 6.667 10v20A3.333 3.333 0 0 0 10 33.333h20A3.333 3.333 0 0 0 33.333 30V10A3.333 3.333 0 0 0 30 6.667Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="2 4"
    />
  </svg>
);
export default SvgIcActionsLayout;
