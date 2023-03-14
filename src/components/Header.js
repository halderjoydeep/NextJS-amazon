import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import AmazonLogo from '../../public/images/amazon_logo.png';

export default function Header() {
  return (
    <header>
      {/* Top Navigation Bar */}
      <div className="flex items-center gap-4 px-4 py-2 bg-amazon_blue">
        {/* Logo */}
        <div className="flex items-center flex-grow sm:flex-grow-0 mt-2">
          <Image
            src={AmazonLogo}
            width={97}
            height={30}
            alt="Amazon Logo"
            className="object-contain cursor-pointer"
          />
        </div>

        {/* Search Field */}
        <div className="hidden sm:flex items-center flex-1 h-10 rounded-md overflow-hidden">
          <input
            type="text"
            className="h-full flex-1 px-4 py-2 focus:outline-none "
            placeholder="Search Amazon"
          />
          <MagnifyingGlassIcon className="h-full p-2 bg-amber-400 hover:bg-amber-600 cursor-pointer" />
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div></div>
    </header>
  );
}
