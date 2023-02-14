import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const buttonStyles = cva(
  'ui-flex ui-items-center ui-gap-1.5 ui-text-lg ui-font-bold ui-font-display ui-text-white ui-border-2 ui-rounded-xl',
  {
    variants: {
      appearance: {
        primary: 'ui-bg-primary-500 ui-border-primary-600',
        outlined: 'ui-border-primary-400 ui-text-gray-900',
        bright: 'ui-bg-gray-400 ui-text-gray-900 ui-border-transparent',
        simple: 'ui-bg-white ui-text-gray-900 ui-border-transparent',
      },
      size: {
        sm: 'ui-p-3 ui-max-h-9',
        md: 'ui-px-4 ui-py-3 ui-max-h-12',
        lg: 'ui-px-12 ui-py-3 ui-max-h-14',
      },
    },
    defaultVariants: {
      appearance: 'primary',
      size: 'sm',
    },
  }
);

const iconStyles = cva('', {
  variants: {
    appearance: {
      primary: 'ui-text-white',
      outlined: 'ui-text-primary-500',
      bright: 'ui-text-gray-900',
      simple: 'ui-text-primary-500',
    },
    defaultVariants: {
      appearance: 'primary',
    },
  },
});

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  children?: React.ReactNode;
  icon?: {
    direction: 'left' | 'right';
    element: React.ReactNode;
  };
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// Add classname to icon
const StyledIcon = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) =>
  React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        className: `w-4 h-4 ${className}`,
      } as React.HTMLAttributes<unknown>);
    }
    return child;
  });

export default function Button({
  children,
  icon,
  onClick,
  ...props
}: ButtonProps) {
  const isIcon = (dir: 'left' | 'right') => {
    if (!icon || !icon.element) return false;
    return icon.direction === dir;
  };

  return (
    <button
      className={buttonStyles({ ...props })}
      type="button"
      onClick={onClick}
    >
      <>
        {isIcon('left') &&
          StyledIcon({
            children: icon?.element,
            className: iconStyles({ appearance: props.appearance }),
          })}
        {children}
        {isIcon('right') &&
          StyledIcon({
            children: icon?.element,
            className: iconStyles({ appearance: props.appearance }),
          })}
      </>
    </button>
  );
}
