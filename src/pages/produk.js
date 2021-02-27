import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "src/parts/Header";
import Footer from "src/parts/Footer";
import IlustrasiProduk from "public/images/ilustrasi-produk.svg";

export default function produk() {
  return (
    <>
      <Head>
        <title>TEFA Bakery & Coffe</title>
        <link rel='shortcut icon' href='/images/logo-tefa.png' />
      </Head>
      <main>
        <section className='px-4 pt-10 overflow-hidden' style={{ height: 660 }}>
          <img
            className='image-wrapper'
            alt='Mountains'
            src='/images/bg-produk.png'
          />
          <div
            className='absolute inset-0 z-0 w-full h-full bg-black opacity-75'
            style={{ height: 660 }}></div>
          <div className='absolute inset-0 object-fill z-0 w-full flex justify-center items-center'>
            <div className='text-center'>
              <h3 className='text-lg text-yellow-500 font-bold'>Produk</h3>
              <h2 className='text-3xl md:text-5xl text-white font-semibold mt-4 md:mt-8'>
                Nikmati produk yang sudah dihasilkan
              </h2>
            </div>
          </div>
          <div className='container relative mx-auto z-50'>
            <Header></Header>
          </div>
        </section>
        <section className='container mx-auto mt-24 px-4'>
          <div className='flex justify-between items-center'>
            <div className='w-auto'>
              <h2 className='text-2xl font-medium text-yellow-800'>Bakery</h2>
            </div>
            <div className='w-auto'>
              <Link href='#'>
                <a className='text-gray-900 hover:underline'>Lihat Lainya</a>
              </Link>
            </div>
          </div>
          <div className='flex flex-wrap justify-start items-center -mx-4 mt-6'>
            <div className='w-full md:w-1/4 px-4 mb-6'>
              <div>
                <figure>
                  <img
                    src='/images/informasi1.png'
                    alt='informasi produk terbaru'
                  />
                </figure>
                <h4 className='py-2 text-lg text-yellow-800 font-bold'>
                  Roti Enak
                </h4>
                <h6 className='text-lg text-gray-900'>Rp 12.000</h6>
              </div>
            </div>
            <div className='w-full md:w-1/4 px-4 mb-6'>
              <div>
                <figure>
                  <img
                    src='/images/informasi1.png'
                    alt='informasi produk terbaru'
                  />
                </figure>
                <h4 className='py-2 text-lg text-yellow-800 font-bold'>
                  Roti Enak
                </h4>
                <h6 className='text-lg text-gray-900'>Rp 12.000</h6>
              </div>
            </div>
            <div className='w-full md:w-1/4 px-4 mb-6'>
              <div>
                <figure>
                  <img
                    src='/images/informasi1.png'
                    alt='informasi produk terbaru'
                  />
                </figure>
                <h4 className='py-2 text-lg text-yellow-800 font-bold'>
                  Roti Enak
                </h4>
                <h6 className='text-lg text-gray-900'>Rp 12.000</h6>
              </div>
            </div>
            <div className='w-full md:w-1/4 px-4 mb-6'>
              <div>
                <figure>
                  <img
                    src='/images/informasi1.png'
                    alt='informasi produk terbaru'
                  />
                </figure>
                <h4 className='py-2 text-lg text-yellow-800 font-bold'>
                  Roti Enak
                </h4>
                <h6 className='text-lg text-gray-900'>Rp 12.000</h6>
              </div>
            </div>
          </div>
        </section>
        <section className='container mx-auto mt-12 px-4'>
          <div className='flex justify-between items-center'>
            <div className='w-auto'>
              <h2 className='text-2xl font-medium text-yellow-800'>Coffe</h2>
            </div>
            <div className='w-auto'>
              <Link href='#'>
                <a className='text-gray-900 hover:underline'>Lihat Lainya</a>
              </Link>
            </div>
          </div>
          <div className='flex flex-wrap justify-start items-center -mx-4 mt-6'>
            <div className='w-full md:w-1/4 px-4 mb-6'>
              <div>
                <figure>
                  <img
                    src='/images/informasi1.png'
                    alt='informasi produk terbaru'
                  />
                </figure>
                <h4 className='py-2 text-lg text-yellow-800 font-bold'>
                  Kopi Enak
                </h4>
                <h6 className='text-lg text-gray-900'>Rp 12.000</h6>
              </div>
            </div>
            <div className='w-full md:w-1/4 px-4 mb-6'>
              <div>
                <figure>
                  <img
                    src='/images/informasi1.png'
                    alt='informasi produk terbaru'
                  />
                </figure>
                <h4 className='py-2 text-lg text-yellow-800 font-bold'>
                  Kopi Enak
                </h4>
                <h6 className='text-lg text-gray-900'>Rp 12.000</h6>
              </div>
            </div>
          </div>
        </section>
        <section className='container mx-auto mt-12 px-4'>
          <div className='flex justify-center text-center'>
            <h2 className='text-2xl font-medium text-yellow-800'>
              Pesan dan Coba Produk di Atas ? <br /> Temukan Kami Di
            </h2>
          </div>
          <div className='flex flex-wrap justify-center items-center mt-6'>
            <div className='w-full md:w-2/6 px-4 py-4'>
              <div className='card h-72 relative text-center transition-all duration-200'>
                <img
                  className='mx-auto block py-2'
                  src='/images/maps.png'
                  alt='logo-maps'
                />
                <h4 className='font-light text-2xl'>Lokasi</h4>
                <p className='font-bold mt-4'>
                  Jl. Mastrip Kotak Pos 164 - Pintu Belakang POLIJE. Jember –
                  Jawa Timur
                </p>
              </div>
            </div>
            <div className='w-full md:w-2/6 px-4 py-4'>
              <div className='card h-72 relative text-center transition-all duration-200'>
                <img
                  className='mx-auto block py-2'
                  src='/images/gojek.png'
                  alt='logo-gojek'
                />
                <h4 className='font-light text-2xl'>Via Gojek</h4>
                <p className='font-bold mt-4'>TefaSipPolije</p>
              </div>
            </div>
          </div>
        </section>
        <section className='container mt-12 px-4 mx-auto'>
          <div className='flex flex-wrap items-center justify-center'>
            <div className='w-full md:w-1/2'>
              <IlustrasiProduk />
            </div>
            <div className='w-full md:w-1/2'>
              <div className='text-center px-0 md:px-6'>
                <h2 className='text-2xl text-primary-color font-bold'>
                  Ingin belajar dan menghasilkan produk seperti di atas ?
                </h2>
                <p className='font-light py-6'>
                  Ikuti pelatihan untuk mendapatkan pengalaman dan keahlian
                  berwirausaha yang baik dan benar
                </p>
                <Link href='/pelatihan'>
                  <button className='bg-yellow-600 hover:bg-yellow-500 text-white px-6 py-4 transition-all duration-200'>
                    Ikuti Pelatihan
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className='mt-24 px-4 bg-primary-color py-12'>
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}
