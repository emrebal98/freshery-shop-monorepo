import * as React from "react";
import { SVGProps } from "react";
const SvgIcWeatherSnow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 20h30M20 5v30M20 13.333l-6.667-6.667M20 13.333l6.667-6.667M20 26.666l6.667 6.667M20 26.666l-6.667 6.667M13.333 20l-6.666 6.667M13.333 20l-6.666-6.666M26.667 20l6.666-6.666M26.667 20l6.666 6.667"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcWeatherSnow;
