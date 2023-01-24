import * as React from 'react';

export default function Button({
  children,
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: 'Button',
  onClick: () => {},
};
