import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "src/parts/Header";
import Footer from "src/parts/Footer";
import IlustrasiProduk from "public/images/ilustrasi-produk.svg";
import Check from "public/images/check.svg";
import PaketA from "public/images/paket_A.svg";
import Pembelajaran from "public/images/sharing.svg";

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
                      Pelatihan 2 Hari Dalam Seminggu
                    </h2>
                  </ul>
                  <ul className='flex items-center py-2'>
                    <Check></Check>
                    <h2 className='text-medium ml-2'>Pelatihan B</h2>
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
                  <button className='bg-gray-200 text-black ronded-md px-6 py-3 shadow-inner block w-full'>
                    Pilih
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full md:w-2/6 px-4 py-4'>
              <div className='card h-auto relative transition-all duration-200'>
                <PaketA className='mx-auto block my-4'></PaketA>
                <h4 className='text-center font-light text-lg'>Paket B</h4>
                <h2 className='text-center font-bold text-xl py-4'>
                  Rp 800 rb{" "}
                  <span className='text-sm pl-2 font-light'>/bulan</span>
                </h2>
                <div>
                  <div className='border-t-2 py-4'></div>
                  <ul className='flex items-center py-2'>
                    <Check></Check>
                    <h2 className='text-medium ml-2'>
                      Pelatihan 3 Hari Seminggu
                    </h2>
                  </ul>
                  <ul className='flex items-center py-2'>
                    <Check></Check>
                    <h2 className='text-medium ml-2'>Pelatihan B</h2>
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
                  <button className='bg-gray-200 text-black ronded-md px-6 py-3 shadow-inner block w-full'>
                    Pilih
                  </button>
                </div>
              </div>
            </div>
            <div className='w-full md:w-2/6 px-4 py-4'>
              <div className='card h-auto relative transition-all duration-200'>
                <PaketA className='mx-auto block my-4'></PaketA>
                <h4 className='text-center font-light text-lg'>Paket C</h4>
                <h2 className='text-center font-bold text-xl py-4'>
                  Rp 1 jt{" "}
                  <span className='text-sm pl-2 font-light'>/bulan</span>
                </h2>
                <div>
                  <div className='border-t-2 py-4'></div>
                  <ul className='flex items-center py-2'>
                    <Check></Check>
                    <h2 className='text-medium ml-2'>
                      Pelatihan 5 Hari Dalamn Seminggu
                    </h2>
                  </ul>
                  <ul className='flex items-center py-2'>
                    <Check></Check>
                    <h2 className='text-medium ml-2'>Pelatihan C</h2>
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
                  <button className='bg-gray-200 text-black ronded-md px-6 py-3 shadow-inner block w-full'>
                    Pilih
                  </button>
                </div>
              </div>
            </div>
            <div className='text-center mt-4'>
              <h4 className='font-light'>
                Ingin informasi lebih lanjut ?{" "}
                <span className='text-blue-500 font-medium hover:underline'>
                  <a href=''>Hubungi Admin</a>
                </span>
              </h4>
            </div>
          </div>
        </section>
        <section className='container mx-auto mt-12 px-4'>
          <div className='justify-center text-center'>
            <h2 className='text-2xl font-bold text-yellow-800'>
              Client Testimony
            </h2>
            <p className='mx-8 md:mx-28 mt-12 font-light text-lg'>
              Beberapa client kami yang sudah melakukan pelatihan di TEFA Bakery
              And Coffe Politeknik Negeri Jember
            </p>
          </div>
          <div className='flex flex-wrap justify-center items-center mt-6'>
            <div className='w-full md:w-2/6 px-4 py-4'>
              <div className='card h-auto relative text-center transition-all duration-200'>
                <img
                  src='/images/testimoni1.png'
                  alt='Testimoni'
                  className='block mx-auto'
                />
                <h4 className='text-yellow-500 font-medium mt-4'>
                  Kathryn Murphy
                </h4>
                <h5 className='text-gray-500 font-light italic text-sm mt-2 mb-4'>
                  Siswa SMK
                </h5>
                <p className='font-light'>
                  Pelatihan Dilakukan Oleh Mentor Profesioanal
                </p>
              </div>
            </div>
            <div className='w-full md:w-2/6 px-4 py-4'>
              <div className='card h-auto relative text-center transition-all duration-200'>
                <img
                  src='/images/testimoni2.png'
                  alt='Testimoni'
                  className='block mx-auto'
                />
                <h4 className='text-yellow-500 font-medium mt-4'>
                  Kathryn Murphy
                </h4>
                <h5 className='text-gray-500 font-light italic text-sm mt-2 mb-4'>
                  Mahasiswa
                </h5>
                <p className='font-light'>
                  Pelatihan Nyaman dan Sangan Mudah Dimengerti
                </p>
              </div>
            </div>
            <div className='w-full md:w-2/6 px-4 py-4'>
              <div className='card h-auto relative text-center transition-all duration-200'>
                <img
                  src='/images/testimoni3.png'
                  alt='Testimoni'
                  className='block mx-auto'
                />
                <h4 className='text-yellow-500 font-medium mt-4'>
                  Kathryn Murphy
                </h4>
                <h5 className='text-gray-500 font-light italic text-sm mt-2 mb-4'>
                  Pengusaha
                </h5>
                <p className='font-light'>
                  Penyampaian Materi dalam Pelatihan Dilaksanakan dengan Sangat
                  Baik
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='container mt-12 px-4 mx-auto md:flex items-center'>
          <div className='w-full md:w-2/6'>
            <h2 className='font-bold text-yellow-500 text-4xl leading-normal leading'>
              Kenapa Harus Tefa Politeknik Negeri Jember ?
            </h2>
          </div>
          <div className='w-full md:w-2/6 '>
            <div className='item flex my-6'>
              <Pembelajaran></Pembelajaran>
              <div className='w-5/6 px-2'>
                <h4 className='font-bold text-base mb-2'>
                  Pembelajaran Yang Nyaman
                </h4>
                <p className='font-light text-sm'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.{" "}
                </p>
              </div>
            </div>
            <div className='item flex my-6'>
              <Pembelajaran></Pembelajaran>
              <div className='w-5/6 px-2'>
                <h4 className='font-bold text-base mb-2'>
                  Pembelajaran Yang Nyaman
                </h4>
                <p className='font-light text-sm'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className='w-full md:w-2/6 '>
            <div className='item flex my-6'>
              <Pembelajaran></Pembelajaran>
              <div className='w-5/6 px-2'>
                <h4 className='font-bold text-base mb-2'>
                  Pembelajaran Yang Nyaman
                </h4>
                <p className='font-light text-sm'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.{" "}
                </p>
              </div>
            </div>
            <div className='item flex my-6'>
              <Pembelajaran></Pembelajaran>
              <div className='w-5/6 px-2'>
                <h4 className='font-bold text-base mb-2'>
                  Pembelajaran Yang Nyaman
                </h4>
                <p className='font-light text-sm'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.{" "}
                </p>
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