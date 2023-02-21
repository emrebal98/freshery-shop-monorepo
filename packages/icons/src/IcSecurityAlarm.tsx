import * as React from "react";
import { SVGProps } from "react";
const SvgIcSecurityAlarm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 30V20a10 10 0 0 1 10-10v0a10 10 0 0 1 10 10v10M20 3.333v3.334M8.817 5.483l2.367 2.367M31.184 5.483 28.817 7.85M3.467 12.667 6.533 14M36.55 12.717l-3.1 1.233"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M36.233 36.667H3.767a.334.334 0 0 1-.334-.417l.3-1.25a6.667 6.667 0 0 1 6.467-5h19.6a6.667 6.667 0 0 1 6.467 5l.3 1.2a.333.333 0 0 1-.334.467Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcSecurityAlarm;
