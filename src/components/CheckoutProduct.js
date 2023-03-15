/* eslint-disable @next/next/no-img-element */
import { addToCart, removeFromCart } from '@/store/cartSlice';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';

export default function CheckoutProduct({ item }) {
  const dispatch = useDispatch();
  const { id, image, title, description, price, rating } = item;
  const roundedRating = Math.round(rating.rate);

  let isPrime = false;
  if (roundedRating >= 4) {
    isPrime = true;
  }

  function addToCartHandler() {
    dispatch(addToCart(item));
  }

  function removeFromCartHandler() {
    dispatch(removeFromCart(id));
  }

  return (
    <div className="grid sm:grid-cols-5 gap-5">
      {/* Image */}
      <div className="flex items-center justify-center">
        <div className="relative w-[150px] h-[150px]">
          <Image
            src={image}
            fill
            alt={title}
            className="object-contain w-auto h-auto"
          />
        </div>
      </div>

      {/* Item Details */}
      <div className="sm:col-span-3">
        <h4 className="mb-2 line-clamp-1 font-semibold">{title}</h4>

        <div className="flex">
          {Array(roundedRating - 1)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-amber-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-2">{description}</p>

        <p className="mb-2">$ {price.toFixed(2)}</p>
        {isPrime && (
          <div className="flex items-center space-x-2">
            <img src="/images/prime.png" alt="prime" className="w-12" />
            <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-2 justify-center">
        <button className="button" onClick={addToCartHandler}>
          Add to Cart
        </button>
        <button className="button" onClick={removeFromCartHandler}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}
