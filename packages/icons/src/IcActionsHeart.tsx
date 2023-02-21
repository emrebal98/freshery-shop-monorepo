import * as React from "react";
import { SVGProps } from "react";
const SvgIcActionsHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M22.183 8.15a8.485 8.485 0 0 1 12 12L32 22.333l-12 12-12-12-2.183-2.183a8.485 8.485 0 0 1 12-12L20 10.333l2.183-2.183Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcActionsHeart;
