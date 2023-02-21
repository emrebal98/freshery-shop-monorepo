import * as React from "react";
import { SVGProps } from "react";
const SvgIcPlacesBeacon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="m15 9.6-1.667 27.066h13.334L25 9.6a3.333 3.333 0 0 0-.967-2.167l-3.8-3.867a.318.318 0 0 0-.466 0L15.9 7.433A3.334 3.334 0 0 0 15 9.6v0Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.666 15h16.667M3.333 11.666l3.1 3.1a.317.317 0 0 1 0 .467l-3.1 3.1M36.533 18.333l-3.1-3.1a.319.319 0 0 1-.076-.36.318.318 0 0 1 .076-.106l3.1-3.1"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcPlacesBeacon;
