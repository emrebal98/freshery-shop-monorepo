import { IcActionsUser, IcEcommerceBasket } from 'icons';
import Link from 'next/link';
import { InputSearch } from 'ui';
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

const basketProducts = [
  {
    id: 1,
    name: 'Product 1',
    price: 10,
    quantity: 1,
    image: 'https://picsum.photos/200',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 20,
    quantity: 2,
    image: 'https://picsum.photos/200',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 30,
    quantity: 3,
    image: 'https://picsum.photos/200',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 40,
    quantity: 4,
    image: 'https://picsum.photos/200',
  },
];
// px-12 py-10
export default function Header() {
  return (
    <header>
      <div className="flex flex-wrap items-center justify-between gap-4 p-2 sm:px-6 sm:py-4 md:px-12 md:py-10">
        {/* TODO:Change logo to SVG or PNG */}
        <Link
          className="cursor-pointer font-display text-5xl font-bold"
          href="/"
        >
          Freshery
        </Link>
        <div className="order-1 w-full md:order-none md:w-1/2">
          <InputSearch />
        </div>
        <div className="flex gap-10">
          <div className="cursor-pointer">
            <IcActionsUser className="h-6 w-6 text-gray-900" />
          </div>
          <div className="relative cursor-pointer">
            <IcEcommerceBasket className="h-6 w-6 text-gray-900" />
            <p className="absolute -bottom-1 -left-1 flex h-4 w-4 select-none items-center justify-center rounded-full bg-red-500 p-1 font-display text-sm font-semibold text-white">
              {basketProducts.length}
            </p>
          </div>
        </div>
      </div>
      {/* TODO: responsive navbar, remove overflow-auto */}
      <nav className="flex overflow-auto bg-gray-300 py-4 px-11">
        <ul className="flex items-center gap-10">
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
