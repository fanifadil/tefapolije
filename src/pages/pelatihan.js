import React from "react";
import Head from "next/head";
import Header from "src/parts/Header";
import Footer from "src/parts/Footer";
import Check from "public/images/check.svg";
import PaketA from "public/images/PaketAicon.svg";
import PaketB from "public/images/PaketBicon.svg";
import PaketC from "public/images/PaketCicon.svg";
import Study from "public/images/study.svg";
import Cost from "public/images/cost.svg";
import Modern from "public/images/modern.svg";
import Profesional from "public/images/profesional2.svg";

export default function produk() {
  return (
    <>
      <Head>
        <title>TEFA Bakery Coffee & Fish Canning</title>
        <link rel='shortcut icon' href='/images/logo-tefa.png' />
      </Head>
      <main>
        <section className='px-4 pt-10 overflow-hidden' style={{ height: 700 }}>
          <img
            className='image-wrapper'
            alt='Pelatihan'
            src='/images/bg-pelatihan.png'
          />
          <div
            className='absolute inset-0 z-0 w-full h-full bg-black opacity-75'
            style={{ height: 700 }}></div>
          <div
            className='container mx-auto absolute inset-0 z-0 w-full flex justify-center items-center'
            style={{ height: 700 }}>
            <div className='text-center '>
              <h3 className='text-lg font-light text-gray-300'>Pelatihan</h3>
              <h2 className='text-3xl md:text-5xl text-white font-semibold mt-4 px-4'>
                Pilih <span className='text-yellow-500'>Paket Pelatihan</span>{" "}
                Anda <span className='text-yellow-500'>Sekarang Juga</span>
              </h2>
              <p className='mx-4 md:mx-28 py-4 font-light font-white text-md md:text-lg text-white'>
                TEFA Bakery Coffee and Fish Canning Politeknik Negeri Jember
                saat ini membuka pelatihan kepada siswa magang atau kepada siapa
                saja yang ingin belajar membuat suatu produk yang telah
                dihasilkan oleh TEFA Bakery Coffee & Fish Canning saat ini.
                Pelaksanaan pelatihan dilakukan oleh mentor yang profesional{" "}
                <br />
              </p>
            </div>
          </div>
          <div className='container relative mx-auto z-50'>
            <Header></Header>
          </div>
        </section>
        <section className='container mx-auto mt-6 px-4 py-8 md:py-12'>
          <div className='justify-center text-center'>
            <h2 className='text-yellow-500 font-bold text-2xl md:text-3xl'>
              Paket Pelatihan
            </h2>
            <p className='mx-4 md:mx-28 mt-4 font-light text-lg'>
              Tunggu apalagi, pilih paket dan ikuti pelatihan sekarang juga !!!
            </p>
          </div>
          <div className='flex flex-wrap justify-center items-center mt-4'>
            <div className='w-full md:w-2/6 px-4 py-4'>
              <div className='card hover:shadow-xl hover:bg-indigo-50 border-indigo-500 h-auto relative transition-all duration-200'>
                <PaketA className='mx-auto block my-4 fill-indigo-500'></PaketA>
                <h4 className='text-center font-light text-lg'>Paket A</h4>
                <h2 className='text-center font-bold text-xl py-4'>
                  Rp 400 rb{" "}
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
                    Cocok untuk siswa, mahasiswa ataupun pengusaha
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full md:w-2/6 px-4 py-4'>
              <div className='card hover:shadow-xl hover:bg-green-50 border-green-500 h-auto relative transition-all duration-200'>
                <PaketB className='mx-auto block my-4 fill-green-500'></PaketB>
                <h4 className='text-center font-light text-lg'>Paket B</h4>
                <h2 className='text-center font-bold text-xl py-4'>
                  Rp 600 rb{" "}
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
                    Cocok untuk siswa, mahasiswa ataupun pengusaha
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full md:w-2/6 px-4 py-4'>
              <div className='card hover:shadow-xl hover:bg-purple-50 border-purple-500 h-auto relative transition-all duration-200'>
                <PaketC className='mx-auto block my-4 fill-purple-500'></PaketC>
                <h4 className='text-center font-light text-lg'>Paket C</h4>
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
                    Cocok untuk siswa, mahasiswa ataupun pengusaha
                  </p>
                </div>
              </div>
            </div>
            <div className='text-center mt-4'>
              <h4 className='font-light'>
                Ingin informasi lebih lanjut ?{" "}
                <span className='text-blue-500 font-medium hover:underline'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://api.whatsapp.com/send?phone=6282333497811'>
                    Hubungi Admin
                  </a>
                </span>
              </h4>
            </div>
          </div>
        </section>
        <section className='container mx-auto mt-6 px-4 py-8 md:py-12'>
          <div className='justify-center text-center'>
            <h2 className='text-yellow-500 font-bold text-2xl md:text-3xl'>
              Client Testimony
            </h2>
            <p className='mx-4 md:mx-28 mt-4 font-light text-lg'>
              Beberapa client kami yang sudah melakukan pelatihan di TEFA Bakery
              Coffee and Fish Canning Politeknik Negeri Jember
            </p>
          </div>
          <div className='flex flex-wrap justify-center items-center mt-4'>
            <div className='w-full md:w-2/6 px-4 py-4'>
              <div className='h-auto relative text-center transition-all duration-200'>
                <img
                  src='/images/testimoni1.png'
                  alt='Testimoni'
                  className='block mx-auto'
                />
                <h4 className='text-yellow-500 font-medium mt-4'>
                  Yusuf Tri Wibowo
                </h4>
                <h5 className='text-gray-500 font-light italic text-sm mt-2 mb-4'>
                  Siswa
                </h5>
                <p className='font-light'>
                  Pelatihan Dilakukan Oleh Mentor Profesioanal
                </p>
              </div>
            </div>
            <div className='w-full md:w-2/6 px-4 py-4'>
              <div className='h-auto relative text-center transition-all duration-200'>
                <img
                  src='/images/testimoni2.png'
                  alt='Testimoni'
                  className='block mx-auto'
                />
                <h4 className='text-yellow-500 font-medium mt-4'>
                  Ridwan Hananto
                </h4>
                <h5 className='text-gray-500 font-light italic text-sm mt-2 mb-4'>
                  Mahasiswa
                </h5>
                <p className='font-light'>
                  Pelatihan Nyaman dan Mudah Dimengerti
                </p>
              </div>
            </div>
            <div className='w-full md:w-2/6 px-4 py-4'>
              <div className='h-auto relative text-center transition-all duration-200'>
                <img
                  src='/images/testimoni3.png'
                  alt='Testimoni'
                  className='block mx-auto'
                />
                <h4 className='text-yellow-500 font-medium mt-4'>
                  David Bristi
                </h4>
                <h5 className='text-gray-500 font-light italic text-sm mt-2 mb-4'>
                  Mahasiswa
                </h5>
                <p className='font-light'>
                  Penyampaian Materi dalam Pelatihan Dilaksanakan dengan Sangat
                  Baik
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='container px-4 mx-auto md:flex items-center py-8 md:py-12'>
          <div className='w-full md:w-2/6'>
            <h2 className='font-bold text-yellow-500 text-4xl leading-normal leading'>
              Kenapa Harus Tefa Politeknik Negeri Jember ?
            </h2>
          </div>
          <div className='w-full md:w-2/6 '>
            <div className='item flex my-6'>
              <Study />
              <div className='w-5/6 px-2'>
                <h4 className='font-bold text-base mb-2'>
                  Lingkungan Belajar yang Kondusif
                </h4>
                <p className='font-light text-sm'>
                  Kami selalu memberikan pembelajaran yang nyaman dan
                  menyenangkan
                </p>
              </div>
            </div>
            <div className='item flex mt-12'>
              <Profesional />
              <div className='w-5/6 px-2'>
                <h4 className='font-bold text-base mb-2'>
                  Tenaga Pengajar yang Profesional
                </h4>
                <p className='font-light text-sm'>
                  Tenaga pengajar kami yang sudah berpengalaman dan
                  bersetifikasi
                </p>
              </div>
            </div>
          </div>
          <div className='w-full md:w-2/6 mt-12 md:mt-0'>
            <div className='item flex my-6'>
              <Modern />
              <div className='w-5/6 px-2'>
                <h4 className='font-bold text-base mb-2'>
                  Mesin Produksi yang Moderen
                </h4>
                <p className='font-light text-sm'>
                  Mesin produk yang modern untuk menghasilkan produk yang baik
                </p>
              </div>
            </div>
            <div className='item flex mt-12'>
              <Cost />
              <div className='w-5/6 px-2'>
                <h4 className='font-bold text-base mb-2'>
                  Biaya yang Terjangkau
                </h4>
                <p className='font-light text-sm'>
                  Dengan Biaya yang Terjangkau untuk Meningkatkan Skill dan
                  Pengalaman Anda
                </p>
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
