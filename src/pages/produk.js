import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "src/parts/Header";
import Footer from "src/parts/Footer";

export default function produk() {
  return (
    <>
      <Head>
        <title>TEFA Bakery & Coffe</title>
        <link rel='shortcut icon' href='/images/logo-tefa.png' />
      </Head>
      <main>
        <section
          className='px-4 pt-10 relative overflow-hidden'
          style={{ height: 660 }}>
          <div className='image-wrapper min-h-full'>
            <img
              src='/images/bg-produk.png'
              alt='informasi produk terbaru'
              style={{ height: 660 }}
            />
          </div>
          <div className='absolute inset-0 z-0 w-full h-full bg-black opacity-75'></div>
          <div className='absolute inset-0 object-fill z-0 w-full flex justify-center items-center'>
            <div className='text-center'>
              <h3 className='text-lg text-white'>Kelas Online: </h3>
              <h4 className='text-3xl md:text-6xl text-teal-500 font-semibold'>
                Test
              </h4>
            </div>
          </div>
          <div className='container relative mx-auto'>
            <Header></Header>
          </div>
        </section>
        <section className='container px-4 mx-auto md:pt-24'>
          <div className='flex justify-between items-center'>
            <div className='w-auto'>
              <h2 className='text-2xl font-medium text-yellow-800'>Roti</h2>
            </div>
            <div className='w-auto'>
              <Link href='#'>
                <a className='text-gray-900 hover:underline'>Lihat Lainya</a>
              </Link>
            </div>
          </div>
          <div className='flex flex-wrap justify-start items-center -mx-4 mt-6'>
            <div className='w-full md:w-1/4 px-4 mb-6'>
              <figure className='relative'>
                <img
                  src='/images/informasi1.jpg'
                  alt='informasi produk terbaru'
                />
              </figure>
              <h4 className='pt-4 pb-2 text-lg text-yellow-800 font-bold'>
                Roti Tawar
              </h4>
              <p className='text-gray-800 font-light'>Rp 15.000</p>
            </div>
            <div className='w-full md:w-1/4 px-4 mb-6'>
              <figure className='relative'>
                <img
                  src='/images/informasi1.jpg'
                  alt='informasi produk terbaru'
                />
              </figure>
              <h4 className='pt-4 pb-2 text-lg text-yellow-800 font-bold'>
                Roti Tawar
              </h4>
              <p className='text-gray-800 font-light'>Rp 15.000</p>
            </div>
            <div className='w-full md:w-1/4 px-4 mb-6'>
              <figure className='relative'>
                <img
                  src='/images/informasi1.jpg'
                  alt='informasi produk terbaru'
                />
              </figure>
              <h4 className='pt-4 pb-2 text-lg text-yellow-800 font-bold'>
                Roti Tawar
              </h4>
              <p className='text-gray-800 font-light'>Rp 15.000</p>
            </div>
            <div className='w-full md:w-1/4 px-4 mb-6'>
              <figure className='relative'>
                <img
                  src='/images/informasi1.jpg'
                  alt='informasi produk terbaru'
                />
              </figure>
              <h4 className='pt-4 pb-2 text-lg text-yellow-800 font-bold'>
                Roti Tawar
              </h4>
              <p className='text-gray-800 font-light'>Rp 15.000</p>
            </div>
            <div className='w-full md:w-1/4 px-4 mb-6'>
              <figure className='relative'>
                <img
                  src='/images/informasi1.jpg'
                  alt='informasi produk terbaru'
                />
              </figure>
              <h4 className='pt-4 pb-2 text-lg text-yellow-800 font-bold'>
                Roti Tawar
              </h4>
              <p className='text-gray-800 font-light'>Rp 15.000</p>
            </div>
          </div>
        </section>
        <section className='container px-4 mx-auto md:pt-12'>
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
              <figure className='relative'>
                <img
                  src='/images/informasi1.jpg'
                  alt='informasi produk terbaru'
                />
              </figure>
              <h4 className='pt-4 pb-2 text-lg text-yellow-800 font-bold'>
                Roti Tawar
              </h4>
              <p className='text-gray-800 font-light'>Rp 15.000</p>
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
