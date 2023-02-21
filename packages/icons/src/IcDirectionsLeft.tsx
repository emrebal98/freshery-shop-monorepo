import * as React from "react";
import { SVGProps } from "react";
const SvgIcDirectionsLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 10h16.667A3.333 3.333 0 0 1 30 13.333V35"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m13.333 15-4.767-4.85a.317.317 0 0 1 0-.467L13.333 5"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcDirectionsLeft;
