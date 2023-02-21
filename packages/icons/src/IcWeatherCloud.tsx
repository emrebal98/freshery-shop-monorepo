import * as React from "react";
import { SVGProps } from "react";
const SvgIcWeatherCloud = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M29.05 13.6A10.117 10.117 0 0 0 20 8.333a10.117 10.117 0 0 0-9.05 5.267 9.367 9.367 0 0 0-7.617 8.9 9.617 9.617 0 0 0 10 9.167 10.802 10.802 0 0 0 3.767-.684 6.5 6.5 0 0 0 5.8 0c1.205.45 2.48.682 3.767.684a9.617 9.617 0 0 0 10-9.167 9.366 9.366 0 0 0-7.617-8.9v0Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcWeatherCloud;
