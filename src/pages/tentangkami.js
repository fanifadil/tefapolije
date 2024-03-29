import React from "react";
import Head from "next/head";
import Header from "src/parts/Header";
import Footer from "src/parts/Footer";
import Axios from "src/configs/axios";

export default function tentangkami({ data }) {
  return (
    <>
      <Head>
        <title> TEFA Bakery Coffee and Fish Canning</title>
        <link rel='shortcut icon' href='/images/logo-tefa.png' />
      </Head>
      <main>
        <section className='px-4 pt-10 overflow-hidden' style={{ height: 700 }}>
          <img
            className='image-wrapper'
            alt='teachingfactory'
            src='/images/bg-tentangkami.png'
          />
          <div
            className='absolute inset-0 z-0 w-full h-full bg-black opacity-75'
            style={{ height: 700 }}></div>
          <div
            className='container mx-auto absolute inset-0 z-0 w-full flex justify-center items-center'
            style={{ height: 700 }}>
            <div className='text-center'>
              <h3 className='text-lg font-light text-gray-300'>Tentang Kami</h3>
              <h2 className='text-3xl md:text-5xl text-white font-semibold mt-4 px-4'>
                Tentang{" "}
                <span className='text-yellow-500'>TEFA Bakery Coffee</span>
                {""} & <span className='text-yellow-500'>Fish Canning</span>
              </h2>
              <p className='mx-8 md:mx-28 py-4 font-light font-white text-md md:text-lg text-white'>
                TEFA Bakery Coffee & Fish Canning merupakan salah satu TEFA dari
                34 TEFA yang ada di Politeknik Negeri Jember. TEFA Bakery Coffee
                & Fish Canning berfokus pada pengolahan dan pengemasan produk
                makanan
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
            {data?.length > 0 ? (
              data.map((item, index) => {
                return (
                  <div className='w-full md:w-1/4 px-4 mb-6' key={index}>
                    <div>
                      <figure>
                        <img
                          className='w-full'
                          src={item?.img ?? ""}
                          alt='Galeri Teaching Factory Backery Coffee & Fish Chaining'
                        />
                      </figure>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className='w-full text-center py-12'>No Item Found</div>
            )}
          </div>
        </section>
        <section className='mt-12 px-4 bg-primary-color py-12'>
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}

tentangkami.getInitialProps = async () => {
  try {
    const data = await Axios.get(`/galery`);
    return { data: data.data };
  } catch (error) {
    return error;
  }
};
