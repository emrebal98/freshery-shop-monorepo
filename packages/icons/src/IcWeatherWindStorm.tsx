import * as React from "react";
import { SVGProps } from "react";
const SvgIcWeatherWindStorm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m22.5 20-5 8.333h5L19.167 35"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.667 28.333a9.617 9.617 0 0 0 10-9.166 9.366 9.366 0 0 0-7.617-8.9A10.116 10.116 0 0 0 20 5a10.117 10.117 0 0 0-9.05 5.267 9.367 9.367 0 0 0-7.617 8.9 9.617 9.617 0 0 0 10 9.166"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcWeatherWindStorm;
