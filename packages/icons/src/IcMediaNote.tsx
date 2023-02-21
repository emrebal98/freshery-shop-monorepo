import * as React from "react";
import { SVGProps } from "react";
const SvgIcMediaNote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.333 31.567a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667ZM26.667 28.234a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.667 28.233V15.1a.35.35 0 0 1 .183-.3l12.667-6.333a.334.334 0 0 1 .483.3V24.9"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcMediaNote;
