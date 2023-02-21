import { cva, type VariantProps } from 'class-variance-authority';

const tagStyles = cva(
  'ui-inline-flex ui-items-center ui-rounded-xl ui-border ui-gap-1',
  {
    variants: {
      appearance: {
        primary: 'ui-bg-primary-200 ui-text-primary-500',
        secondary: 'ui-bg-gray-400 ui-text-gray-900',
        border: 'ui-bg-white ui-text-gray-900 ui-border-gray-500',
      },
      size: {
        sm: 'ui-px-2',
        lg: 'ui-px-2.5 ui-py-1',
      },
    },
    defaultVariants: {
      appearance: 'primary',
      size: 'sm',
    },
  }
);

const iconStyles = cva('ui-h-3 ui-w-3', {
  variants: {
    appearance: {
      primary: 'ui-stroke-primary-300',
      secondary: 'ui-stroke-gray-600',
      border: 'ui-stroke-gray-600',
    },
    defaultVariants: {
      appearance: 'primary',
    },
  },
});

interface TagProps extends VariantProps<typeof tagStyles> {
  text: string;
  isCloseable?: boolean;
  className?: string;
}

export default function Tag({
  text,
  isCloseable,
  className,
  ...props
}: TagProps) {
  return (
    <div className={tagStyles({ className, ...props })}>
      <p className="ui-font-display ui-text-sm ui-font-semibold">{text}</p>
      {isCloseable && (
        <button className="ui-flex ui-items-center">
          <svg
            className={iconStyles({ ...props })}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.17995 9.18007L2.81995 2.82007"
              stroke="inherit"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="bevel"
            />
            <path
              d="M9.17995 2.82007L2.81995 9.18007"
              stroke="inherit"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="bevel"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
