import Image from 'next/image';
import AmazonLogo from '../../public/images/amazon_logo.png';

export default function Header() {
  return (
    <header>
      {/* Top Navigation Bar */}
      <div className="flex items-center flex-grow px-4 p-2 bg-amazon_blue">
        {/* Logo */}
        <div className="flex items-center flex-grow sm:flex-grow-0 mt-2 ">
          <Image
            src={AmazonLogo}
            width={97}
            height={30}
            alt="Amazon Logo"
            className="object-contain cursor-pointer"
          />
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div></div>
    </header>
  );
}
