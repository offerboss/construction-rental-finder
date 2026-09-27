import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/construction-rental-finder-logo.png";

type LogoProps = {
  className?: string;
};

/*
 * The logo PNG has transparent padding around the artwork
 * (artwork bounds: x 57–1615, y 142–823 of 1672×940). The wrapper uses the
 * artwork's aspect ratio and the image is scaled/offset so the padding is
 * clipped, letting the visible logo size be set by width alone.
 */
export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`relative block aspect-[1558/681] shrink-0 overflow-hidden ${className}`}
    >
      <Image
        src={logo}
        alt="Construction Rental Finder"
        preload
        sizes="(min-width: 1024px) 180px, 150px"
        className="absolute top-[-20.85%] left-[-3.66%] h-auto w-[107.32%] max-w-none"
      />
    </Link>
  );
}
