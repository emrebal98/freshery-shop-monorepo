import * as React from "react";
import { SVGProps } from "react";
const SvgIcWeatherBolt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="m19.167 5-10 16.667H17.5L9.167 35 32.5 16.667H19.167L30.833 5H19.167Z"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcWeatherBolt;
