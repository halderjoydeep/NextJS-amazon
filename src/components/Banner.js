/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Banner() {
  return (
    <div className="relative">
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="/images/banner-image-1.jpg" alt="Banner-1" />
        </div>

        <div>
          <img loading="lazy" src="/images/banner-image-2.jpg" alt="Banner-2" />
        </div>

        <div>
          <img loading="lazy" src="/images/banner-image-3.jpg" alt="Banner-3" />
        </div>
      </Carousel>
    </div>
  );
}
