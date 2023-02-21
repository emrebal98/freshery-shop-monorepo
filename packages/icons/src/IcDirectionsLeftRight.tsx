import * as React from "react";
import { SVGProps } from "react";
const SvgIcDirectionsLeftRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M33.333 10h-6.666a3.333 3.333 0 0 0-3.334 3.333V35"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m30 15 4.833-4.8a.35.35 0 0 0 0-.483L30 5M6.667 10h6.666a3.333 3.333 0 0 1 3.333 3.333V35"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m10 15-4.833-4.8a.35.35 0 0 1 0-.483L10 5"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcDirectionsLeftRight;
