import * as React from "react";
import { SVGProps } from "react";
const SvgIcConstructionMeter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M35.833 24.617V28.9M30.733 33.817V20.95a13.65 13.65 0 0 0-12.4-13.767A13.334 13.334 0 0 0 4.116 20.517v11.666a1.667 1.667 0 0 0 1.667 1.667h31.334"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.5 19.334a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="bevel"
    />
  </svg>
);
export default SvgIcConstructionMeter;
