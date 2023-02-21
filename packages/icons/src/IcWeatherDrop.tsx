import * as React from "react";
import { SVGProps } from "react";
const SvgIcWeatherDrop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M31.217 17.7h.9c2.883-.316 4.55-4.033 3.15-6.933l-3.15-6.483a.483.483 0 0 0-.9 0l-3.15 6.483c-1.4 2.9.267 6.617 3.15 6.933ZM7.884 17.7h.9c2.883-.316 4.55-4.033 3.15-6.933l-3.15-6.483a.483.483 0 0 0-.9 0l-3.15 6.483c-1.4 2.9.266 6.617 3.15 6.933ZM18.988 36.657h1.216c4.017-.433 6.2-5.5 4.284-9.45l-4.267-8.8a.684.684 0 0 0-1.25 0l-4.267 8.8c-1.917 3.95.267 9.017 4.284 9.45Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="bevel"
    />
  </svg>
);
export default SvgIcWeatherDrop;
