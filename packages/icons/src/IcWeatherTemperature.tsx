import * as React from "react";
import { SVGProps } from "react";
const SvgIcWeatherTemperature = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M25 21.667V8.333a5 5 0 0 0-10 0v13.334a8.333 8.333 0 1 0 10 0v0Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 31.667A3.333 3.333 0 1 0 20 25a3.333 3.333 0 0 0 0 6.667ZM20 15v10"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcWeatherTemperature;
