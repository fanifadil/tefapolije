import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='container mx-auto'>
      <div className='flex flex-wrap justify-between'>
        <div className='w-full md:w-2/6 mb-8 md:mb-0'>
          <div className='flex items-center'>
            <img src='/images/logo-tefa.png' alt='' />
            <h6 className='text-white font-bold text-xl md:text-2xl pl-4'>
              TEFA Bakery & Coffe POLIJE
            </h6>
          </div>
          <p className='mt-4 text-white font-light'>
            Jl. Mastrip Kotak Pos 164 <br />
            Jember – Jawa Timur – Indonesia <br />
            WA +6282333497811
          </p>
        </div>
        <div className='w-full md:w-1/6 mb-8 md:mb-0'>
          <h6 className='text-white font-bold text-xl md:text-2xl'>Menu</h6>
          <ul className='mt-4'>
            <li className='mt-2'>
              <Link href='/'>
                <a className='text-gray-300 font-light hover:text-gray-200 hover:underline'>
                  Home
                </a>
              </Link>
            </li>
            <li className='mt-2'>
              <Link href='/produk'>
                <a className='text-gray-300 font-light hover:text-gray-200 hover:underline'>
                  Produk
                </a>
              </Link>
            </li>
            <li className='mt-2'>
              <Link href='/pelatihan'>
                <a className='text-gray-300 font-light hover:text-gray-200 hover:underline'>
                  Pelatihan
                </a>
              </Link>
            </li>
            <li className='mt-2'>
              <Link href='/tentangkami'>
                <a className='text-gray-300 font-light hover:text-gray-200 hover:underline'>
                  Tentang Kami
                </a>
              </Link>
            </li>
            <li className='mt-2'>
              <Link href='/kontak'>
                <a className='text-gray-300 font-light hover:text-gray-200 hover:underline'>
                  Kontak
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='w-full md:w-1/6 mb-8 md:mb-0'>
          <h6 className='text-white font-bold text-xl md:text-2xl'>
            Temukan Kami
          </h6>
          <ul className='mt-4'>
            <li className='mt-2'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.instagram.com/tefasippolije/'
                className='text-gray-300 font-light hover:text-gray-100 hover:underline'>
                Instagram
              </a>
            </li>
            <li className='mt-2'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.facebook.com/tefa.sip'
                className='text-gray-300 font-light hover:text-gray-100 hover:underline'>
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className='w-full md:w-1/6 mb-8 md:mb-0'>
          <h6 className='text-white font-bold text-xl md:text-2xl'>
            Link Eksternal
          </h6>
          <ul className='mt-4'>
            <li className='mt-2'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.polije.ac.id'
                className='text-gray-300 font-light hover:text-gray-200 hover:underline'>
                Politeknik Negeri Jember
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='border-t pt-8 mt-8 border-gray-200 border-opacity-20 text-center'>
        <p className='text-gray-300'>
          2021 Copyright Teaching Factory Bakery & Coffe
        </p>
      </div>
    </footer>
  );
}
