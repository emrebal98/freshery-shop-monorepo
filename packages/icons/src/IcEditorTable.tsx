import * as React from "react";
import { SVGProps } from "react";
const SvgIcEditorTable = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M36.333 3.333H3.667a.333.333 0 0 0-.334.334v32.666c0 .184.15.334.334.334h32.666c.184 0 .334-.15.334-.334V3.667a.333.333 0 0 0-.334-.334ZM25 3.333v33.334M3.333 26.666h33.334M36.667 15H3.333"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcEditorTable;
