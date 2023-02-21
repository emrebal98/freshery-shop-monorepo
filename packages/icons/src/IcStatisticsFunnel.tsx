import * as React from "react";
import { SVGProps } from "react";
const SvgIcStatisticsFunnel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M33.333 12.917H6.667L3.333 5h33.334l-3.334 7.917Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.333 5h33.334l-3.334 7.917"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M28.333 24.8H11.667l-3.334-7.917h23.334L28.333 24.8ZM23.333 36.667h-6.666l-3.334-7.917h13.334l-3.334 7.917Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcStatisticsFunnel;
