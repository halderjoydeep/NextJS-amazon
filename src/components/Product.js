/* eslint-disable @next/next/no-img-element */
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';
import { addToCart } from '@/store/cartSlice';
import { useDispatch } from 'react-redux';

export default function Product({ product }) {
  const dispatch = useDispatch();
  const { category, image, title, rating, description, price } = product;

  const roundedRating = Math.round(rating.rate);

  let isPrime = false;
  if (roundedRating >= 4) {
    isPrime = true;
  }

  function addToCartHandler() {
    dispatch(addToCart({ ...product, quantity: 1 }));
  }

  return (
    <div className="relative flex flex-col p-6 bg-white z-30 shadow-md rounded-md">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

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

      <h4 className="my-3 line-clamp-1 font-semibold">{title}</h4>

      <div className="flex">
        {Array(roundedRating - 1)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-amber-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <p className="mb-3">$ {price.toFixed(2)}</p>
      {isPrime && (
        <div className="flex items-center space-x-2">
          <img src="/images/prime.png" alt="prime" className="w-12" />
          <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
        </div>
      )}
      <button className="mt-auto button" onClick={addToCartHandler}>
        Add to Cart
      </button>
    </div>
  );
}
