import * as React from "react";
import { SVGProps } from "react";
const SvgIcDirectionsTwoPoints = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.667 5v8.333A8.333 8.333 0 0 0 20 21.667v0a8.333 8.333 0 0 0 8.333-8.334V5"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.667 8.333 11.433 3.5a.317.317 0 0 1 .467 0l4.767 4.833M23.333 8.333 28.1 3.5a.317.317 0 0 1 .467 0l4.766 4.833M20 21.6v15"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcDirectionsTwoPoints;
