import * as React from "react";
import { SVGProps } from "react";
const SvgIcWeatherSunny = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 31.667c6.443 0 11.667-5.224 11.667-11.667S26.443 8.334 20 8.334 8.333 13.556 8.333 20c0 6.444 5.224 11.667 11.667 11.667ZM20 8.334v-5M20 36.667v-5M31.666 20h5M3.333 20h4.284M28.4 28.4l3.383 3.384M8.216 8.217l2.867 2.867M11.6 28.4l-3.384 3.384M31.783 8.217l-3.167 3.166"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcWeatherSunny;
