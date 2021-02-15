import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className='flex justify-between items-center'>
      <div style={{ height: 44 }}>
        <img src='/images/logo-tefa.png' alt='tefa' />
      </div>
      <ul className='flex'>
        <li>
          <Link href=''>
            <a className='text-black font-medium hover:text-gray-600 text-lg px-6'>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a className='text-black font-medium hover:text-gray-600 text-lg px-6'>
              Produk
            </a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a className='text-black font-medium hover:text-gray-600 text-lg px-6'>
              Pelatihan
            </a>
          </Link>
        </li>
        <li>
          <Link href=''>
            <a className='text-black font-medium hover:text-gray-600 text-lg px-6'>
              Tentang Kami
            </a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a className='text-black font-medium hover:text-gray-600 text-lg px-6'>
              Kontak
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
