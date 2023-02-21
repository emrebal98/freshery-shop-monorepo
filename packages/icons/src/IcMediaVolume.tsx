import * as React from "react";
import { SVGProps } from "react";
const SvgIcMediaVolume = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M21.933 8.834 16.767 14a.333.333 0 0 1-.234.1H7.5a3.333 3.333 0 0 0-3.333 3.334v5.9A3.333 3.333 0 0 0 7.5 26.667h8.217a.267.267 0 0 1 .2 0l6.05 4.533a.335.335 0 0 0 .533-.266V9.067a.333.333 0 0 0-.567-.233v0Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.667 11.667A8.333 8.333 0 0 1 35 20v0a8.333 8.333 0 0 1-8.333 8.334"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcMediaVolume;
