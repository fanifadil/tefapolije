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
      <div style={{ height: 44 }}>
        <img src='/images/logo-tefa.png' alt='tefa' />
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
          "transition-all duration-200 items-center fixed inset-0 bg-white pt-24 md:pt-0 md:bg-transparent md:relative md:flex md:opacity-100 md:visible",
          ToggleMenu ? "opacity-100 visible z-20" : "opacity-0 invisible",
        ].join(" ")}>
        <li>
          <Link href='/'>
            <a className='text-black font-medium hover:text-gray-600 text-lg px-6'>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href='/produk'>
            <a className='text-black font-medium hover:text-gray-600 text-lg px-6'>
              Produk
            </a>
          </Link>
        </li>
        <li>
          <Link href='/pelatihan'>
            <a className='text-black font-medium hover:text-gray-600 text-lg px-6'>
              Pelatihan
            </a>
          </Link>
        </li>
        <li>
          <Link href='/tentangkami'>
            <a className='text-black font-medium hover:text-gray-600 text-lg px-6'>
              Tentang Kami
            </a>
          </Link>
        </li>
        <li>
          <Link href='kontak'>
            <a className='text-black font-medium hover:text-gray-600 text-lg px-6'>
              Kontak
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
