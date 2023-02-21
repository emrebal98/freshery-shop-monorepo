import * as React from "react";
import { SVGProps } from "react";
const SvgIcEditorColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.333 5 30 21.667M15 6.667 4.016 17.65a3.333 3.333 0 0 0 0 4.7l8.7 8.7a3.333 3.333 0 0 0 4.634 0l11.383-10.717M3.333 20h25M10 20v8.333M15 20v11.667M20 20v8.333"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32.1 37.35h.9a4.234 4.234 0 0 0 3.15-6.25l-3.134-5.833a.534.534 0 0 0-.916 0L28.95 31.1a4.233 4.233 0 0 0 3.15 6.25v0Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="bevel"
    />
  </svg>
);
export default SvgIcEditorColor;
