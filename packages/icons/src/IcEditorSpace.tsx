import * as React from "react";
import { SVGProps } from "react";
const SvgIcEditorSpace = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M36.667 13.75v12.167a.333.333 0 0 1-.334.333H3.667a.333.333 0 0 1-.334-.333V13.75"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcEditorSpace;
