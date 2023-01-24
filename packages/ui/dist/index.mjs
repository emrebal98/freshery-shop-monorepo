// src/Button.tsx
import { jsx } from "react/jsx-runtime";
function Button({
  children,
  onClick
}) {
  return /* @__PURE__ */ jsx("button", { type: "button", onClick, children });
}
Button.defaultProps = {
  children: "Button",
  onClick: () => {
  }
};
export {
  Button
};
