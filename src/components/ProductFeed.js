/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Product from './Product';

export default function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:-mt-52 mx-8">
      {products.slice(0, 4).map((product) => (
        <Product key={product.id} product={product} />
      ))}

      {/* Advertise */}
      <img
        src="/images/advert-1.jpg"
        alt="advertise"
        className="md:col-span-full"
      />

      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      {products.slice(5).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
