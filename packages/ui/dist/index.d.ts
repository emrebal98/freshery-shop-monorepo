import * as React from 'react';

declare function Button({ children, onClick, }: {
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}): JSX.Element;
declare namespace Button {
    var defaultProps: {
        children: string;
        onClick: () => void;
    };
}

export { Button };
