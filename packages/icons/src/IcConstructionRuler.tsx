import * as React from "react";
import { SVGProps } from "react";
const SvgIcConstructionRuler = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26.184 6.943 7.328 25.8a3.333 3.333 0 0 0 0 4.715l1.791 1.79a3.333 3.333 0 0 0 4.714 0L32.69 13.45a3.333 3.333 0 0 0 0-4.714l-1.791-1.792a3.333 3.333 0 0 0-4.714 0ZM16.017 30.116l-2.484-2.483M20.984 25.15 18.5 22.667M25.734 20.416l-2.5-2.5M30.384 15.75 27.9 13.267"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcConstructionRuler;
