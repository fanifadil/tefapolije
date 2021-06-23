import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [ToggleMenu, setToggleMenu] = useState(false);
  return (
    <header
      className={[
        "flex justify-between items-center",
        ToggleMenu ? "fixed w-full -mx-4 px-4" : "",
      ].join(" ")}>
      <div style={{ height: 60, zIndex: 50 }}>
        <img src='/images/logo-tefa.png' style={{ height: 60 }} alt='tefa' />
      </div>
      <div className='flex md:hidden'>
        <button
          onClick={() => setToggleMenu((prev) => !prev)}
          className={["toggle z-50", ToggleMenu ? "active" : ""].join(
            " ",
          )}></button>
      </div>
      <ul
        className={[
          "transition-all duration-200 items-center fixed inset-0 bg-white pt-28 md:pt-0 md:bg-transparent md:relative md:flex md:opacity-100 md:visible",
          ToggleMenu ? "opacity-100 visible z-0" : "opacity-0 invisible",
        ].join(" ")}>
        <li className='px-6 flex md:inline'>
          <Link href='/'>
            <a
              className={[
                "text-lg ",
                ToggleMenu
                  ? "text-black font-medium hover:text-gray-500 my-2"
                  : "text-white font-medium hover:text-yellow-500 ",
              ].join("")}>
              Home
            </a>
          </Link>
        </li>
        <li className='px-6 flex md:inline'>
          <Link href='/produk'>
            <a
              className={[
                "text-lg ",
                ToggleMenu
                  ? "text-black font-medium hover:text-gray-500 my-2"
                  : "text-white font-medium hover:text-yellow-500 ",
              ].join("")}>
              Produk
            </a>
          </Link>
        </li>
        <li className='px-6 flex md:inline'>
          <Link href='/pelatihan'>
            <a
              className={[
                "text-lg ",
                ToggleMenu
                  ? "text-black font-medium hover:text-gray-500 my-2"
                  : "text-white font-medium hover:text-yellow-500 ",
              ].join("")}>
              Pelatihan
            </a>
          </Link>
        </li>
        <li className='px-6 flex md:inline'>
          <Link href='/tentangkami'>
            <a
              className={[
                "text-lg ",
                ToggleMenu
                  ? "text-black font-medium hover:text-gray-500 my-2"
                  : "text-white font-medium hover:text-yellow-500 ",
              ].join("")}>
              Tentang Kami
            </a>
          </Link>
        </li>
        <li className='px-6 flex md:inline'>
          <Link href='/kontak'>
            <a
              className={[
                "text-lg ",
                ToggleMenu
                  ? "text-black font-medium hover:text-gray-500 my-2"
                  : "text-white font-medium hover:text-yellow-500 ",
              ].join("")}>
              Kontak
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
