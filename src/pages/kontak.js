import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "src/parts/Header";
import Footer from "src/parts/Footer";
import IlustrasiHero from "public/images/ilustrasi-kontak.svg";

export default function kontak() {
  return (
    <>
      <Head>
        <title>TEFA Bakery Coffee & Fish Canning</title>
        <link rel='shortcut icon' href='/images/logo-tefa.png' />
      </Head>
      <main>
        <section className='bg-primary-color py-4 px-4 md:px-8'>
          <div className='container relative mx-auto z-50'>
            <Header></Header>
          </div>
        </section>
        <section className='container mx-auto px-4 py-8 md:py-12'>
          <div className='flex flex-wrap justify-center items-center'>
            <div className='w-full md:w-2/3 md:pr-12 md:mt-0'>
              <h3 className='text-lg font-light text-gray-600'>Kontak</h3>
              <h1 className='text-3xl md:text-5xl font-bold leading-relaxed md:leading-normal mt-4 mb-4 md:mb-0'>
                Ada Pertanyaan, Saran dan Masukan ?{" "}
                <span className='font-bold text-yellow-500'>Hubungi Kami</span>
              </h1>

              <p className='font- pt-2 md:pt-6 text-lg md:text-xl leading-normal'>
                Kami menerima saran, masukan dan siap untuk menjawab setiap
                pertanyaan terkait dengan kebutuhan anda. Jangan ragu untuk
                menghubungi kami
              </p>
              <div className='flex flex-wrap justify-center items-center mt-6'>
                <div className='w-full md:w-1/3 md:pr-4 py-4'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.facebook.com/tefa.sip'>
                    <div className='card-socialmedia h-auto relative text-center transition-all duration-200'>
                      <img
                        className='mx-auto block mb-4'
                        src='/images/facebook.png'
                        alt='facebook-tefa'
                      />
                      <p className='font-bold'>Tefa Sip</p>
                    </div>
                  </a>
                </div>
                <div className='w-full md:w-1/3 md:pr-4 py-4'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://api.whatsapp.com/send?phone=6282333497811'>
                    <div className='card-socialmedia h-auto relative text-center transition-all duration-200'>
                      <img
                        className='mx-auto block mb-4'
                        src='/images/whatsapp.png'
                        alt='whatsapp-tefa'
                      />
                      <p className='font-bold'>+6282333497811</p>
                    </div>
                  </a>
                </div>
                <div className='w-full md:w-1/3 md:pr-4 py-4'>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.instagram.com/tefasippolije/'>
                    <div className='card-socialmedia h-auto relative text-center transition-all duration-200'>
                      <img
                        className='mx-auto block mb-4'
                        src='/images/instagram.png'
                        alt='instagram-tefa'
                      />
                      <p className='font-bold'>@tefasippolije</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/3 py-6'>
              <div className='card hover:shadow-xl bg-yellow-100 h-auto relative transition-all duration-200'>
                <h3 className='text-2xl font-bold text-center'>
                  Sampaikan Detailnya
                </h3>
                <input
                  type='text'
                  className='bg-white border-gray-600 px-6 py-3 mt-6 w-full'
                  placeholder='Nama Anda'
                />
                <input
                  type='text'
                  className='bg-white border-gray-600 px-6 py-3 mt-6 w-full'
                  placeholder='Alamat Email Anda'
                />
                <input
                  type='text'
                  className='bg-white border-gray-600 px-6 py-3 mt-6 w-full'
                  placeholder='Nomer Telepon'
                />
                <textarea
                  type='text'
                  className='bg-white border-gray-600 px-6 py-3 mt-6 w-full '
                  placeholder='Pesan Anda'
                />
                <button className='mt-6 w-full bg-yellow-500 rounded-md hover:bg-yellow-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3'>
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className='-mb-8 md:-mb-24'>
          <iframe
            className='w-full'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.4699846917947!2d113.7248563145127!3d-8.155311583954123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd69541b5529c1d%3A0x8a9bf208ba6d4d5e!2sTefa%20CAFE!5e0!3m2!1sen!2sid!4v1615084852039!5m2!1sen!2sid'
            style={{ border: 0, height: 420 }}
            overflow='hidden'
            frameBorder='0'
            allowFullScreen=''
            loading='lazy'></iframe>
        </section>
        <section className='mt-12 md:mt-24 px-4 bg-primary-color py-12'>
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}
