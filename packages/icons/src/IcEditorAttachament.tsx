import * as React from "react";
import { SVGProps } from "react";
const SvgIcEditorAttachament = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.667 14.167v10a3.334 3.334 0 0 0 6.666 0V10.833a6.666 6.666 0 1 0-13.333 0v15a10 10 0 0 0 10 10v0a10 10 0 0 0 10-10v-15"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcEditorAttachament;
