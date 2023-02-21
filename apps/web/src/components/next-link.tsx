import NextL from 'next/link';
import { Link } from 'ui';

interface NextLinkProps {
  children?: React.ReactNode;
  href: string;
}

export default function NextLink({ href, children }: NextLinkProps) {
  return (
    <NextL href={href} passHref legacyBehavior>
      <Link href="replace">{children}</Link>
    </NextL>
  );
}

NextLink.defaultProps = {
  children: null,
};
