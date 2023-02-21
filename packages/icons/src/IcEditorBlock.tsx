import * as React from "react";
import { SVGProps } from "react";
const SvgIcEditorBlock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.333 3.333h33.334M3.333 10h33.334M3.333 16.666h33.334M3.333 23.333h33.334M3.333 30h33.334M3.333 36.666H25.55"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcEditorBlock;
