import * as React from "react";
import { SVGProps } from "react";
const SvgIcPlacesBridge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.333 25h33.334M6.667 30V10a15.65 15.65 0 0 0 26.666 0v20M13.333 16.666V25M26.666 16.666V25M20 18.334V25"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcPlacesBridge;
