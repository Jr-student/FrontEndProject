import React, { useState } from "react";
import Logo from "../ui/Logo";
import { ImUser } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";
import Search from "../ui/Search";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const router = useRouter();

  return (
    <div
      className={`h-[5.5rem] z-50 relative ${
        router.asPath === "/" ? "bg-transparent" : "bg-secondary"
      }`}
    >
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${
            isMenu === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[5px] py-[14px] uppercase hover:text-primary cursor-pointer">
              <Link href="/">Ana Sayfa</Link>
            </li>
            <li className="px-[5px] py-[14px] uppercase hover:text-primary cursor-pointer">
              <Link href="/menu">Menü</Link>
            </li>
            <li className="px-[5px] py-[14px] uppercase hover:text-primary cursor-pointer">
              <Link href="/about">Hakkımızda</Link>
            </li>
          </ul>
          {isMenu && (
            <button
              className="absolute  top-4 right-4 z-50"
              onClick={() => setIsMenu(false)}
            >
              <GiCancel size={20} className=" transition-all" />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <Link href="/auth/login">
            <ImUser className="hover:text-primary transition-all cursor-pointer" />
          </Link>
          <Link href="/cart">
            <FaShoppingCart className="hover:text-primary transition-all cursor-pointer" />
          </Link>
          <button onClick={() => setIsSearch(true)}>
            <HiSearch className="hover:text-primary transition-all cursor-pointer" />
          </button>
          <Link href="#" className="md:inline-block hidden sm">
            <button className="btn-primary">Sipariş ver</button>
          </Link>
          <button
            className="sm:hidden inline-block"
            onClick={() => setIsMenu(true)}
          >
            <GiHamburgerMenu className="text-xl hover:text-primary transition-all" />
          </button>
        </div>
      </div>
      {isSearch && <Search setIsSearch={setIsSearch} />}
    </div>
  );
};

export default Header;
