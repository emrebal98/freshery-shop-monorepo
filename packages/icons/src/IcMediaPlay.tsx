import * as React from "react";
import { SVGProps } from "react";
const SvgIcMediaPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M15.2 12.1v15.8c0 .317.267.533.483.383l12.267-7.9a.501.501 0 0 0 0-.766l-12.267-7.95c-.216-.1-.483.116-.483.433Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 36.667c9.205 0 16.667-7.462 16.667-16.667 0-9.205-7.462-16.666-16.667-16.666-9.205 0-16.667 7.461-16.667 16.666S10.795 36.667 20 36.667Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcMediaPlay;
