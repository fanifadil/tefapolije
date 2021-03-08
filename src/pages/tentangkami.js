import React from "react";
import Head from "next/head";
import Header from "src/parts/Header";
import Footer from "src/parts/Footer";

export default function tentangkami() {
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
            alt='teachingfactory'
            src='/images/bg-tentangkami.png'
          />
          <div
            className='absolute inset-0 z-0 w-full h-full bg-black opacity-75'
            style={{ height: 660 }}></div>
          <div className='absolute inset-0 object-fill z-0 w-full flex justify-center items-center'>
            <div className='text-center'>
              <h3 className='text-lg text-yellow-500 font-bold'>
                Tentang Kami
              </h3>
              <h2 className='text-3xl md:text-5xl text-white font-semibold mt-4 md:mt-8'>
                Teaching Factory Bakery & Coffe
              </h2>
              <p className='mx-8 md:mx-28 py-4 font-light font-white text-md md:text-lg text-white'>
                TEFA Coffe and Bakery merupakan salah satu TEFA dari 34 TEFA
                yang ada di Politeknik Negeri Jember. Tefa Bakery & Coffe
                berfokus pada pengolahan dan pengemasan produk makanan
                <br />
              </p>
            </div>
          </div>
          <div className='container relative mx-auto z-50'>
            <Header></Header>
          </div>
        </section>
        <section className='container mx-auto mt-6 px-4 py-8 md:py-12'>
          <div className='flex justify-between items-center'>
            <div className='w-auto'>
              <h2 className='text-yellow-500 font-bold text-2xl md:text-3xl'>
                Galeri
              </h2>
            </div>
          </div>
          <div className='flex flex-wrap justify-start items-center -mx-4 mt-6'>
            <div className='w-full md:w-1/4 px-4 mb-6'>
              <div>
                <figure>
                  <img
                    src='/images/informasi2.png'
                    alt='informasi produk terbaru'
                  />
                </figure>
              </div>
            </div>
            <div className='w-full md:w-1/4 px-4 mb-6'>
              <div>
                <figure>
                  <img
                    src='/images/informasi2.png'
                    alt='informasi produk terbaru'
                  />
                </figure>
              </div>
            </div>
            <div className='w-full md:w-1/4 px-4 mb-6'>
              <div>
                <figure>
                  <img
                    src='/images/informasi2.png'
                    alt='informasi produk terbaru'
                  />
                </figure>
              </div>
            </div>
            <div className='w-full md:w-1/4 px-4 mb-6'>
              <div>
                <figure>
                  <img
                    src='/images/informasi2.png'
                    alt='informasi produk terbaru'
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section className='mt-12 px-4 bg-primary-color py-12'>
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}
