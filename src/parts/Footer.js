import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='container mx-auto'>
      <div className='flex justify-between'>
        <div className='w-2/6'>
          <div className='flex items-center'>
            <img src='/images/logo-tefa.png' alt='' />
            <h6 className='text-white font-medium pl-4'>
              Teaching Factory Polije
            </h6>
          </div>
          <p className='mt-4 text-white font-light'>
            Jl. Mastrip Kotak Pos 164 <br />
            Jember – Jawa Timur – Indonesia <br />
            Telp 7262123 | WA +62817218271
          </p>
        </div>
        <div className='w-1/6'>
          <h6 className='text-white font-medium'>Temukan Kami</h6>
          <ul className='mt-4'>
            <li className='mt-2'>
              <Link href=''>
                <a className='text-white font-light hover:text-gray-200 hover:underline'>
                  Instagram
                </a>
              </Link>
            </li>
            <li className='mt-2'>
              <Link href=''>
                <a className='text-white font-light hover:text-gray-200 hover:underline'>
                  Facebook
                </a>
              </Link>
            </li>
            <li className='mt-2'>
              <Link href=''>
                <a className='text-white font-light hover:text-gray-200 hover:underline'>
                  Twitter
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='w-1/6'>
          <h6 className='text-white font-medium'>TEFA</h6>
          <ul className='mt-4'>
            <li className='mt-2'>
              <Link href='/index'>
                <a className='text-white font-light hover:text-gray-200 hover:underline'>
                  Home
                </a>
              </Link>
            </li>
            <li className='mt-2'>
              <Link href='/produk'>
                <a className='text-white font-light hover:text-gray-200 hover:underline'>
                  Produk
                </a>
              </Link>
            </li>
            <li className='mt-2'>
              <Link href='/pelatihan'>
                <a className='text-white font-light hover:text-gray-200 hover:underline'>
                  Pelatihan
                </a>
              </Link>
            </li>
            <li className='mt-2'>
              <Link href='/tentangkami'>
                <a className='text-white font-light hover:text-gray-200 hover:underline'>
                  Tentang Kami
                </a>
              </Link>
            </li>
            <li className='mt-2'>
              <Link href='/kontak'>
                <a className='text-white font-light hover:text-gray-200 hover:underline'>
                  Kontak
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='w-1/6'>
          <h6 className='text-white font-medium'>Link Eksternal</h6>
          <ul className='mt-4'>
            <li className='mt-2'>
              <a
                href='https://www.polije.ac.id'
                className='text-white font-light hover:text-gray-200 hover:underline'>
                Politeknik Negeri Jember
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='border-t pt-8 mt-8 border-gray-600 text-center'>
        <p className='text-white'>
          2021 Copyright Teaching Factory Bakery & Coffe
        </p>
      </div>
    </footer>
  );
}
