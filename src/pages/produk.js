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
            alt='Produk'
            src='/images/bg-produk.png'
          />
          <div
            className='absolute inset-0 z-0 w-full h-full bg-black opacity-75'
            style={{ height: 660 }}></div>
          <div
            className='absolute inset-0 z-0 w-full flex justify-center items-center'
            style={{ height: 660 }}>
            <div className='text-center'>
              <h3 className='text-lg text-yellow-500 font-bold'>Produk</h3>
              <h2 className='text-3xl md:text-5xl text-white font-semibold mt-4 md:mt-8 px-4'>
                Nikmati produk yang sudah dihasilkan
              </h2>
              <p className='mx-4 md:mx-28 py-4 font-light font-white text-md md:text-lg text-white'>
                TEFA Coffe and Bakery Politeknik Negeri Jember telah
                menghasilkan beberapa produk berupa aneka roti, aneka kopi,
                aneka kue dan kami juga menerima kue pesanan untuk ulang tahun,
                acara keluarga dan lain lain
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
                Aneka Roti
              </h2>
            </div>
            <div className='w-auto'>
              <Link href='#'>
                <a className='text-gray-900 text-sm hover:underline'>
                  Lihat Lainya
                </a>
              </Link>
            </div>
          </div>
          <div className='flex flex-wrap justify-start -mx-4 mt-6'>
            <div className='w-full md:w-1/4 px-4 mb-12'>
              <div>
                <figure>
                  <img src='/images/rotikasur.png' alt='roti kasur' />
                </figure>
                <h3 className='text-xl font-bold py-2'>Roti Sip Kasur</h3>
                <h4 className='text-gray-500 font-light text-base mb-2'>
                  Roti isi coklat keju
                </h4>
                <h5 className='text-lg text-gray-900'>Rp 17.500</h5>
              </div>
            </div>
            <div className='w-full md:w-1/4 px-4 mb-12'>
              <div>
                <figure>
                  <img src='/images/rotisobek.png' alt='roti sobek' />
                </figure>
                <h3 className='text-xl font-bold py-2'>Roti Sobek</h3>
                <h4 className='text-gray-500 font-light text-base mb-2'>
                  Roti dengan taburan keju dan gula
                </h4>
                <h5 className='text-lg text-gray-900'>Rp 17.500</h5>
              </div>
            </div>
            <div className='w-full md:w-1/4 px-4 mb-12'>
              <div>
                <figure>
                  <img src='/images/rotitawar.png' alt='roti tawar' />
                </figure>
                <h3 className='text-xl font-bold py-2'>Roti Tawar</h3>

                <h5 className='text-lg text-gray-900'>Rp 15.000</h5>
              </div>
            </div>
            <div className='w-full md:w-1/4 px-4 mb-12'>
              <div>
                <figure>
                  <img src='/images/rotikenong.png' alt='roti kenong' />
                </figure>
                <h3 className='text-xl font-bold py-2'>Roti Kenong</h3>
                <h4 className='text-gray-500 font-light text-base mb-2'>
                  Roti berisi coklat dan aneka keju
                </h4>
                <h5 className='text-lg text-gray-900'>Rp 15.000</h5>
              </div>
            </div>
          </div>
        </section>
        <section className='container mx-auto px-4'>
          <div className='flex justify-between items-center'>
            <div className='w-auto'>
              <h2 className='text-yellow-500 font-bold text-2xl md:text-3xl'>
                Kopi Kekinian
              </h2>
            </div>
            <div className='w-auto'>
              <Link href='#'>
                <a className='text-gray-900 text-sm hover:underline'>
                  Lihat Lainya
                </a>
              </Link>
            </div>
          </div>
          <div className='flex flex-wrap justify-start -mx-4 mt-6'>
            <div className='w-full md:w-1/4 px-4 mb-12'>
              <div>
                <figure>
                  <img src='/images/coklat.png' alt='roti kenong' />
                </figure>
                <h3 className='text-xl font-bold py-2'>Es Coklat</h3>
                <h5 className='text-lg text-gray-900'>Rp 10.000</h5>
              </div>
            </div>
            <div className='w-full md:w-1/4 px-4 mb-12'>
              <div>
                <figure>
                  <img src='/images/escappucino.png' alt='es cappucino' />
                </figure>
                <h3 className='text-xl font-bold py-2'>Es Cappucino</h3>
                <h4 className='text-gray-500 font-light text-base mb-2'>
                  Gula Aren / Gula Tebu
                </h4>
                <h5 className='text-lg text-gray-900'>Rp 15.000</h5>
              </div>
            </div>
            <div className='w-full md:w-1/4 px-4 mb-12'>
              <div>
                <figure>
                  <img src='/images/hotcappucino.png' alt='Hot Cappucino' />
                </figure>
                <h3 className='text-xl font-bold py-2'>Hot Cappucino</h3>
                <h5 className='text-lg text-gray-900'>Rp 10.000</h5>
              </div>
            </div>
            <div className='w-full md:w-1/4 px-4 mb-12'>
              <div>
                <figure>
                  <img src='/images/kopitubruk.png' alt='Kopi Tubruk' />
                </figure>
                <h3 className='text-xl font-bold py-2'>Kopi Tubruk</h3>
                <h4 className='text-gray-500 font-light text-base mb-2'>
                  Arabica atau Robusta
                </h4>
                <h5 className='text-lg text-gray-900'>Rp 10.000</h5>
              </div>
            </div>
          </div>
        </section>
        {/* <section className='container mx-auto px-4 py-8 md:py-12'>
          <h2 className='text-yellow-500 font-bold text-2xl md:text-3xl'>
            Produk Lainya
          </h2>
          <div className='flex flex-wrap justify-start items-center mt-6'>
            <div className='w-full md:w-1/5 px-4 py-4'>
              <div className='card-socialmedia h-auto transition-all duration-200'>
                <img
                  className='mb-4'
                  src='/images/facebook.png'
                  alt='facebook-tefa'
                />
                <p className='font-bold'>Aneka Kue</p>
              </div>
            </div>
          </div>
        </section> */}
        <section className='bg-yellow-50 mx-auto px-4 py-8 md:py-12'>
          <div className='flex justify-center text-center'>
            <h2 className='text-yellow-500 font-bold text-2xl md:text-3xl'>
              Pesan dan Coba Produk di Atas ? <br /> Temukan Kami Di
            </h2>
          </div>
          <div className='flex flex-wrap justify-center items-center mt-6'>
            <div className='w-full md:w-2/6 px-4 py-4'>
              <div className='card h-auto md:h-72 relative text-center transition-all duration-200'>
                <img
                  className='mx-auto block py-2'
                  src='/images/maps.png'
                  alt='logo-maps'
                />
                <h4 className='font-light text-2xl'>Lokasi</h4>
                <p className='font-bold my-4'>
                  Jl. Mastrip Kotak Pos 164 - Pintu Belakang POLIJE. Jember –
                  Jawa Timur
                </p>
                <p className='text-gray-500 font-light italic'>
                  Buka Mulai 08.00 - 17.00 WIB
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
                <p className='font-bold my-4'>TefaSipPolije</p>
                <p className='text-gray-500 font-light italic'>
                  Buka Mulai 08.00 - 17.00 WIB
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='container px-4 mx-auto py-8 md:py-12'>
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
                  <button className='bg-yellow-500 rounded-md hover:bg-yellow-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3'>
                    Ikuti Pelatihan
                  </button>
                </Link>
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
