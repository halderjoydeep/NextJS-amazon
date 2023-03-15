import CheckoutProduct from '@/components/CheckoutProduct';
import Header from '@/components/Header';
import {
  itemsSelector,
  totalPriceSelector,
  totalQuantitySelector,
} from '@/store/cartSlice';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';

export default function CheckoutPage() {
  const { data: session } = useSession();

  const items = useSelector(itemsSelector);
  const totalPrice = useSelector(totalPriceSelector);
  const totalQuantity = useSelector(totalQuantitySelector);

  return (
    <>
      <Head>
        <title>Amazon - Checkout</title>
        <meta name="description" content="Checkout page for Amazon clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="max-w-screen-2xl w-[90%] mx-auto lg:flex">
        {/* Left Side */}
        <section className="flex-grow m-5 shadow-sm">
          <Image
            src="/images/Prime-day-banner.png"
            width={900}
            height={200}
            alt="Prime day banner"
            className="object-contain"
          />
          {/* Cart */}
          <div className="flex flex-col space-y-10 p-5 bg-white mt-5 rounded-md shadow-md">
            <h1 className="text-2xl font-semibold border-b pb-4">
              {items.length === 0
                ? 'No items in your cart!'
                : 'Your shopping cart'}
            </h1>
            {items.length !== 0 &&
              items.map((item) => (
                <CheckoutProduct key={item.id} item={item} />
              ))}
          </div>
        </section>

        {/* Right Side */}
        <section className="flex flex-col bg-white p-10 shadow-md m-5 rounded-md">
          <h2 className="whitespace-nowrap text-sm font-medium">
            Subtotal ({totalQuantity} items):{' '}
            <span className="font-bold">${totalPrice.toFixed(2)}</span>
          </h2>
          <button
            disabled={!session}
            className={`button w-full my-4 ${
              !session &&
              'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'
            }`}
          >
            {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
          </button>
        </section>
      </main>
    </>
  );
}
