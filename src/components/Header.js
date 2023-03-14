import Image from 'next/image';
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import AmazonLogo from '../../public/images/amazon_logo.png';

export default function Header() {
  return (
    <header>
      {/* Top Navigation Bar */}
      <div className="flex items-center flex-1 px-4 py-2 bg-amazon_blue">
        {/* Logo */}
        <div className="flex items-center flex-grow sm:flex-grow-0 mt-2 mr-6">
          <Image
            src={AmazonLogo}
            width={97}
            height={30}
            alt="Amazon Logo"
            className="object-contain cursor-pointer"
          />
        </div>

        {/* Search Field */}
        <div className="hidden sm:flex items-center flex-1 h-10 rounded-md overflow-hidden mr-6">
          <input
            type="text"
            className="h-full flex-1 px-4 py-2 focus:outline-none "
            placeholder="Search Amazon"
          />
          <MagnifyingGlassIcon className="h-full p-2 bg-amber-400 hover:bg-amber-600 cursor-pointer" />
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-between space-x-8 text-white whitespace-nowrap">
          {/* Accounts & Lists */}
          <div className="link">
            <p className="text-gray-100 text-xs font-medium">Hello, Joydeep!</p>
            <p className="font-bold text-sm">Account & Lists</p>
          </div>
          {/* Returns & Orders */}
          <div className="link">
            <p className="text-gray-100 text-xs font-medium">Returns</p>
            <p className="font-bold text-sm">& Orders</p>
          </div>
          {/* Basket */}
          <div className="relative flex items-center link">
            <ShoppingCartIcon className="h-8" />
            <p className="hidden md:block font-bold text-sm mt-2">Cart</p>
            <span className="absolute -top-1 left-5 flex items-center justify-center w-4 h-4 p-1 text-xs text-black font-bold bg-amber-500 rounded-full">
              0
            </span>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div></div>
      </div>
    </header>
  );
}
