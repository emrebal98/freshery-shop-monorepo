import * as React from "react";
import { SVGProps } from "react";
const SvgIcActionsView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M36.667 20.2 32.333 25a16.667 16.667 0 0 1-24.666 0l-4.334-4.8L7.2 15.567a16.666 16.666 0 0 1 25.6 0l3.867 4.633Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.15 23.766c2.393 0 4.333-1.865 4.333-4.166s-1.94-4.167-4.333-4.167c-2.393 0-4.333 1.866-4.333 4.167 0 2.301 1.94 4.166 4.333 4.166Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="bevel"
    />
  </svg>
);
export default SvgIcActionsView;
