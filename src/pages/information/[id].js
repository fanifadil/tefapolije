import React from "react";
import Axios from "src/configs/axios";
import Head from "next/head";
import Header from "src/parts/Header";
import Footer from "src/parts/Footer";

function DetailInformasi({ data }) {
  return (
    <>
      <Head>
        <title> TEFA Bakery Coffee and Fish Canning</title>
        <link rel='shortcut icon' href='/images/logo-tefa.png' />
      </Head>
      <main>
        <section className='bg-primary-color py-4 px-4 md:px-8'>
          <div className='container relative mx-auto z-50'>
            <Header></Header>
          </div>
        </section>
        <section className='container mx-auto px-4 py-8 md:py-12'>
          <div className='justify-between flex md:px-36'>
            <h6 className='text-gray-700 font-light text-sm md:text-base'>
              Home {">"} Detail Informasi
            </h6>
            <h6 className='text-gray-700 font-light text-sm md:text-base'>
              {data?.date_created ?? "tanggal publish"}
            </h6>
          </div>
          <div className='justify-center items-center md:px-36'>
            <h1 className='text-xl md:text-5xl font-bold mb-4 md:mb-12 mt-2 md:mt-4 leading-normal md:leading-relaxed'>
              {data?.title ?? "Informasi"}
            </h1>
            <figure>
              <img
                className='block w-full'
                src={data?.information_img ?? "Gambar Informasi"}
                alt='pelatihantefa'
              />
            </figure>

            <p
              dangerouslySetInnerHTML={{
                __html: data?.description ?? "Deskipsi Informasi",
              }}
              className='text-justify my-4 md:my-12'></p>
          </div>
        </section>
        <section className='mt-12 md:mt-24 px-4 bg-primary-color py-12'>
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}

DetailInformasi.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    const data = await Axios.get(`/information/${id}`);
    return { data: data.data };
  } catch (error) {
    return error;
  }
};

export default DetailInformasi;
