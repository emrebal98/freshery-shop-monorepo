import * as React from "react";
import { SVGProps } from "react";
const SvgIcPlacesPark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 25c5.523 0 10-4.477 10-10S25.523 5 20 5 10 9.477 10 15s4.477 10 10 10ZM20 11.666V35M15 35h10M20 16.666l-5-5M20 20l5-5"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcPlacesPark;
