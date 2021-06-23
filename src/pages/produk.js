import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "src/parts/Header";
import Footer from "src/parts/Footer";
import IlustrasiProduk from "public/images/ilustrasi-produk.svg";
import ListBakery from "src/parts/ListBakery";
import ListCoffee from "src/parts/ListCoffee";
import Axios from "src/configs/axios";

export default function produk({ dataBakery, dataCoffee }) {
  return (
    <>
      <Head>
        <title>TEFA Bakery & Coffe</title>
        <link rel='shortcut icon' href='/images/logo-tefa.png' />
      </Head>
      <main>
        <section className='px-4 pt-10 overflow-hidden' style={{ height: 700 }}>
          <img
            className='image-wrapper'
            alt='Produk'
            src='/images/bg-produk.png'
          />
          <div
            className='absolute inset-0 z-0 w-full h-full bg-black opacity-75'
            style={{ height: 700 }}></div>
          <div
            className='container mx-auto absolute inset-0 z-0 w-full flex justify-center items-center'
            style={{ height: 700 }}>
            <div className='text-center'>
              <h3 className='text-lg font-light text-gray-300'>Produk</h3>
              <h2 className='text-3xl md:text-4xl text-white font-semibold mt-4 px-4'>
                Produk <span className='text-yellow-500'>Unggulan</span> TEFA
                Bakery & Coffee
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
          <ListBakery dataBakery={dataBakery}></ListBakery>
        </section>
        <section className='container mx-auto px-4'>
          <ListCoffee dataCoffee={dataCoffee}></ListCoffee>
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
          <div className='container mx-auto'>
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

produk.getInitialProps = async () => {
  try {
    const data = await Axios.get(`/limitproduct`);
    return { dataBakery: data.Bakery, dataCoffee: data.Coffee };
  } catch (error) {
    return error;
  }
};
