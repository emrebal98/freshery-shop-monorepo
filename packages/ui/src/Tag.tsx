import { cva, type VariantProps } from 'class-variance-authority';
import { IcActionsCloseSimple } from 'icons';

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

const iconStyles = cva('ui-h-3 ui-w-3 ui-transition-colors', {
  variants: {
    appearance: {
      primary: 'ui-text-primary-300 hover:ui-text-primary-500',
      secondary: 'ui-text-gray-600 hover:ui-text-gray-900',
      border: 'ui-text-gray-600 hover:ui-text-gray-900',
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
          <IcActionsCloseSimple className={iconStyles({ ...props })} />
        </button>
      )}
    </div>
  );
}
