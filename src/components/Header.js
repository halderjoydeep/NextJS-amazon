import { useRouter } from 'next/router';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';

import { useSelector } from 'react-redux';
import { totalQuantitySelector } from '@/store/cartSlice';

import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';
import AmazonLogo from '../../public/images/amazon_logo.png';

export default function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const totalQuantity = useSelector(totalQuantitySelector);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* Top Navigation Bar */}
      <div className="flex items-center flex-grow px-4 py-2 bg-amazon_blue">
        {/* Logo */}
        <div className="flex items-center flex-grow sm:flex-grow-0 mt-2 mr-6">
          <Image
            src={AmazonLogo}
            width={97}
            height={30}
            alt="Amazon Logo"
            className="object-contain cursor-pointer"
            onClick={() => router.push('/')}
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
          <div className="link" onClick={!session ? signIn : signOut}>
            <p className="text-gray-100 text-xs font-medium">
              Hello, {session ? session?.user.name.split(' ')[0] : 'Sign In'}
            </p>
            <p className="font-bold text-sm">Account & Lists</p>
          </div>
          {/* Returns & Orders */}
          <div className="link">
            <p className="text-gray-100 text-xs font-medium">Returns</p>
            <p className="font-bold text-sm">& Orders</p>
          </div>
          {/* Basket */}
          <div
            className="relative flex items-center link"
            onClick={() => router.push('/checkout')}
          >
            <ShoppingCartIcon className="h-8" />
            <p className="hidden md:block font-bold text-sm mt-2">Cart</p>
            <span className="absolute -top-1 left-5 flex items-center justify-center w-4 h-4 p-1 text-xs text-black font-bold bg-amber-500 rounded-full">
              {totalQuantity}
            </span>
          </div>
        </div>
      </div>
      {/* Bottom Navigation Bar */}
      <div className="flex items-center space-x-4 px-6 py-2 bg-amazon_blue-light text-white text-sm font-semibold">
        <p className="flex items-center gap-1 link">
          <Bars3Icon className="h-6" />
          All
        </p>
        <p className="link hidden lg:inline-flex">Sell</p>
        <p className="link hidden 2xl:inline-flex">Amazon miniTV</p>
        <p className="link hidden xl:inline-flex">Best Sellers</p>
        <p className="link">Mobiles</p>
        <p className="link hidden 2xl:inline-flex">Customer Service</p>
        <p className="link">Today{"'"}s Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link">Prime</p>
        <p className="link">Amazon Pay</p>
        <p className="link hidden xl:inline-flex">New Releases</p>
        <p className="link hidden lg:inline-flex">Home & Kitchen</p>
        <p className="link hidden lg:inline-flex">Fashion</p>
        <p className="link hidden lg:inline-flex">Beauty & Personal Care</p>
        <p className="link hidden lg:inline-flex">Computers</p>
        <p className="link hidden lg:inline-flex">Books</p>
      </div>
    </header>
  );
}
