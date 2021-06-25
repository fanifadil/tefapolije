import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "src/parts/Header";
import Footer from "src/parts/Footer";
import IlustrasiProduk from "public/images/ilustrasi-produk.svg";
import ListBakery from "src/parts/ListBakery";
import ListCoffee from "src/parts/ListCoffee";
import Axios from "src/configs/axios";

export default function index({ dataBakery, dataCoffee }) {
  return (
    <>
      <Head>
        <title>TEFA Bakery & Coffe</title>
        <link rel='shortcut icon' href='/images/logo-tefa.png' />
      </Head>
      <main>
        <section className='px-4 pt-10 overflow-hidden' style={{ height: 400 }}>
          <img
            className='absolute inset-0 z-0 min-w-full object-cover'
            style={{ height: 400 }}
            alt='Produk'
            src='/images/bg-produk.png'
          />
          <div
            className='absolute inset-0 z-0 w-full h-full bg-black opacity-75'
            style={{ height: 400 }}></div>
          <div
            className='container mx-auto absolute inset-0 z-0 w-full flex justify-start items-center'
            style={{ height: 400 }}>
            <div className='w-full md:w-1/2'>
              <h2 className='text-2xl md:text-3xl text-white font-light mt-4 md:mt-8 px-4'>
                Produk {"> "}
                <span className='text-yellow-500 font-semibold'>
                  Produk Roti
                </span>
              </h2>
              <p className='font-light mt-4 md:mt-8 px-4 font-white text-md md:text-lg text-white'>
                Aneka Roti SIP POLIJE yang menjadi icon produk dari TEFA Bakery
                Coffee and Fish Canning yang telah diolah dari bahan yang
                berkualitas, dan menjadikan Roti SIP POLIJE sebagai produk
                unggulan
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
        <section className='mt-12 px-4 bg-primary-color py-12'>
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}

index.getInitialProps = async () => {
  try {
    const data = await Axios.get(`/allproduct`);
    return { dataBakery: data.Bakery, dataCoffee: data.Coffee };
  } catch (error) {
    return error;
  }
};
