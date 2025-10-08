import Image from "next/image";
import logo from "@/public/printforge-logo.svg";
import type { ElementType } from "react";

type LinkProps = {
  Link: ElementType;
};

function Header({ Link }: LinkProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4"
        aria-label="Global"
      >
        <div className="-m-1.5 flex items-center gap-2 p-1.5">
          <Link href="/" className="flex items-center gap-2">
            <span className="sr-only">PrintForge</span>
            <Image src={logo} alt="PrintForge Logo" width={50} height={50} />
            <span className="text-2xl font-bold tracking-tight">
              PrintForge
            </span>
          </Link>
        </div>

        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          <Link
            href="/models"
            className="text-sm font-semibold leading-6 text-gray-900 uppercase"
          >
            3D Models
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-gray-900 uppercase cursor-pointer"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
export default Header;
