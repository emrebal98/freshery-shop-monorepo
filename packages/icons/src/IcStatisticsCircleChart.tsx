import * as React from "react";
import { SVGProps } from "react";
const SvgIcStatisticsCircleChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M20 3.333A16.667 16.667 0 1 0 36.667 20H20V3.334Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M25 15h10.9A16.667 16.667 0 0 0 25 4.1V15Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcStatisticsCircleChart;
