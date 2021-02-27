import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "src/parts/Header";
import Footer from "src/parts/Footer";
import IlustrasiProduk from "public/images/ilustrasi-produk.svg";
import Check from "public/images/check.svg";
import PaketA from "public/images/paket_A.svg";

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
            alt='Pelatihan'
            src='/images/bg-pelatihan.png'
          />
          <div
            className='absolute inset-0 z-0 w-full h-full bg-black opacity-75'
            style={{ height: 660 }}></div>
          <div className='absolute inset-0 object-fill z-0 w-full flex justify-center items-center'>
            <div className='text-center'>
              <h3 className='text-lg text-yellow-500 font-bold'>Pelatihan</h3>
              <h2 className='text-3xl md:text-5xl text-white font-semibold mt-4 md:mt-8'>
                Pilih Paket Pelatihan Anda Sekarang Juga
              </h2>
            </div>
          </div>
          <div className='container relative mx-auto z-50'>
            <Header></Header>
          </div>
        </section>
        <section className='container mx-auto mt-12 px-4'></section>
        <section className='container mx-auto mt-12 px-4'>
          <div className='justify-center text-center'>
            <h2 className='text-2xl font-bold text-yellow-800'>
              Paket Pelatihan
            </h2>
            <p className='mx-8 md:mx-28 mt-12 font-light text-lg'>
              TEFA Coffe and Bakery Politeknik Negeri Jember saat ini membuka
              pelatihan kepada siswa magang atau kepada siapa saja yang ingin
              belajar membuat suatu produk yang telah dihasilkan oleh Tefa
              Bakery and Coffe saat ini. Pelaksanaan pelatihan dilakukan oleh
              mentor yang profesional <br />
              <span className='font-medium mt-6'>
                Tunggu apalagi, pilih paket dan ikuti pelatihan sekarang juga
                !!!
              </span>{" "}
            </p>
          </div>
          <div className='flex flex-wrap justify-center items-center mt-6'>
            <div className='w-full md:w-2/6 px-4 py-4'>
              <div className='card h-auto relative transition-all duration-200'>
                <PaketA className='mx-auto block my-4'></PaketA>
                <h4 className='text-center font-light text-lg'>Paket A</h4>
                <h2 className='text-center font-bold text-xl py-4'>
                  Rp 600 rb{" "}
                  <span className='text-sm pl-2 font-light'>/bulan</span>
                </h2>
                <div>
                  <div className='border-t-2 py-4'></div>
                  <ul className='flex items-center py-2'>
                    <Check></Check>
                    <h2 className='text-medium ml-2'>
                      Pelatihan 5 Hari Seminggu
                    </h2>
                  </ul>
                  <ul className='flex items-center py-2'>
                    <Check></Check>
                    <h2 className='text-medium ml-2'>Pelatihan A</h2>
                  </ul>
                  <ul className='flex items-center py-2'>
                    <Check></Check>
                    <h2 className='text-medium ml-2'>Mentoring</h2>
                  </ul>
                  <ul className='flex items-center py-2'>
                    <Check></Check>
                    <h2 className='text-medium ml-2'>Sertifikat</h2>
                  </ul>
                  <div className='border-b-2 py-4'></div>
                </div>
                <div className='text-center items-center'>
                  <p className='font-light italic my-4'>
                    Cocok untuk siswa SMK, Pelajar dan Pengusaha
                  </p>
                  <button className='bg-gray-200 text-black ronded-md px-6 py-3 shadow-inner transition-all duration-200 block w-full'>
                    Pilih
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full md:w-2/6 px-4 py-4'>
              <div className='card h-auto relative transition-all duration-200'>
                <PaketA className='mx-auto block my-4'></PaketA>
                <h4 className='text-center font-light text-lg'>Paket A</h4>
                <h2 className='text-center font-bold text-xl py-4'>
                  Rp 600 rb{" "}
                  <span className='text-sm pl-2 font-light'>/bulan</span>
                </h2>
                <div>
                  <div className='border-t-2 py-4'></div>
                  <ul className='flex items-center py-2'>
                    <Check></Check>
                    <h2 className='text-medium ml-2'>
                      Pelatihan 5 Hari Seminggu
                    </h2>
                  </ul>
                  <ul className='flex items-center py-2'>
                    <Check></Check>
                    <h2 className='text-medium ml-2'>Pelatihan A</h2>
                  </ul>
                  <ul className='flex items-center py-2'>
                    <Check></Check>
                    <h2 className='text-medium ml-2'>Mentoring</h2>
                  </ul>
                  <ul className='flex items-center py-2'>
                    <Check></Check>
                    <h2 className='text-medium ml-2'>Sertifikat</h2>
                  </ul>
                  <div className='border-b-2 py-4'></div>
                </div>
                <div className='text-center items-center'>
                  <p className='font-light italic my-4'>
                    Cocok untuk siswa SMK, Pelajar dan Pengusaha
                  </p>
                  <button className='bg-gray-200 text-black ronded-md px-6 py-3 shadow-inner transition-all duration-200 block w-full'>
                    Pilih
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full md:w-2/6 px-4 py-4'>
              <div className='card h-auto relative transition-all duration-200'>
                <PaketA className='mx-auto block my-4'></PaketA>
                <h4 className='text-center font-light text-lg'>Paket A</h4>
                <h2 className='text-center font-bold text-xl py-4'>
                  Rp 600 rb{" "}
                  <span className='text-sm pl-2 font-light'>/bulan</span>
                </h2>
                <div>
                  <div className='border-t-2 py-4'></div>
                  <ul className='flex items-center py-2'>
                    <Check></Check>
                    <h2 className='text-medium ml-2'>
                      Pelatihan 5 Hari Seminggu
                    </h2>
                  </ul>
                  <ul className='flex items-center py-2'>
                    <Check></Check>
                    <h2 className='text-medium ml-2'>Pelatihan A</h2>
                  </ul>
                  <ul className='flex items-center py-2'>
                    <Check></Check>
                    <h2 className='text-medium ml-2'>Mentoring</h2>
                  </ul>
                  <ul className='flex items-center py-2'>
                    <Check></Check>
                    <h2 className='text-medium ml-2'>Sertifikat</h2>
                  </ul>
                  <div className='border-b-2 py-4'></div>
                </div>
                <div className='text-center items-center'>
                  <p className='font-light italic my-4'>
                    Cocok untuk siswa SMK, Pelajar dan Pengusaha
                  </p>
                  <button className='bg-gray-200 text-black ronded-md px-6 py-3 shadow-inner transition-all duration-200 block w-full'>
                    Pilih
                  </button>
                </div>
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
