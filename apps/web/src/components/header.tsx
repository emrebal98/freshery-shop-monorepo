import Link from 'next/link';

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
          <li>
            <Link href="todo" passHref legacyBehavior>
              <a
                className="font-display font-medium text-lg text-gray-900"
                href="replace"
              >
                Bakery
              </a>
            </Link>
          </li>
          <li className="w-[100px] h-[50px] bg-primary-400">SHOP</li>
          <li className="w-[100px] h-[50px] bg-primary-400">ABOUT</li>
          <li className="w-[100px] h-[50px] bg-primary-400">CONTACT</li>
        </ul>
      </nav>
    </header>
  );
}
