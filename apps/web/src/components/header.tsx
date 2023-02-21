import NextLink from './next-link';

const links = [
  { href: '/bakery', label: 'Bakery' },
  { href: '/fruit-and-vegetables', label: 'Fruit and vegetables' },
  { href: '/meat-and-fish', label: 'Meat and fish' },
  { href: '/drinks', label: 'Drinks' },
  { href: '/kitchen', label: 'Kitchen' },
  { href: '/special-nutrition', label: 'Special nutrition' },
  { href: '/baby', label: 'Baby' },
  { href: '/pharmacy', label: 'Pharmacy' },
];

export default function Header() {
  return (
    <header>
      <div className="flex px-12 py-10 items-center justify-between">
        <div className="w-[177px] h-[50px] bg-primary-400">LOGO</div>
        <div className="w-[500px] h-[42px] bg-red-500">SEARCH</div>
        <div className="w-[88px] h-[31px} bg-gray-800">2 ICON</div>
      </div>
      <nav className="flex py-4 px-11 bg-gray-300">
        <ul className="flex gap-10 items-center">
          {links.map((link) => (
            <li key={link.href}>
              <NextLink href={link.href}>{link.label}</NextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
