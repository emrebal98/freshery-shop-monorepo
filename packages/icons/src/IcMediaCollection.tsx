import * as React from "react";
import { SVGProps } from "react";
const SvgIcMediaCollection = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M15.733 4.45 5.217 8.333A.333.333 0 0 0 5 8.65v22.866a.3.3 0 0 0 .217.3l10.65 3.734a.333.333 0 0 0 .45-.317l-.134-30.467a.332.332 0 0 0-.29-.335.333.333 0 0 0-.16.019Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.667 8.416V31.75M28.333 8.416V31.75M35 8.416V31.75"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcMediaCollection;
