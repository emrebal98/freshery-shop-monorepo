import * as React from "react";
import { SVGProps } from "react";
const SvgIcConstructionHook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M30.1 9.917h-20a3.333 3.333 0 0 0-3.334 3.333v6.667A3.333 3.333 0 0 0 10.1 23.25h20a3.333 3.333 0 0 0 3.333-3.333V13.25A3.333 3.333 0 0 0 30.1 9.917ZM12.017 9.917v-3.25M28.583 9.667v-3M15 28.017V29a4.817 4.817 0 0 0 4.833 4.817v0A4.817 4.817 0 0 0 24.65 29v-.933a4.817 4.817 0 0 0-4.833-4.733H15"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcConstructionHook;
