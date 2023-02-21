interface LinkProps {
  children?: React.ReactNode;
  href: string;
}

export default function Link({ children, href }: LinkProps) {
  return (
    <a
      className="ui-font-display ui-text-lg ui-font-medium ui-text-gray-900 ui-transition-colors hover:ui-text-primary-500"
      href={href}
    >
      {children}
    </a>
  );
}
