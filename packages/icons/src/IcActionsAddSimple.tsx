import * as React from "react";
import { SVGProps } from "react";
const SvgIcActionsAddSimple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M33.333 20H6.667M20 33.333V6.667"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="bevel"
    />
  </svg>
);
export default SvgIcActionsAddSimple;
