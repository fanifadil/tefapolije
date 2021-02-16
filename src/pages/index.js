import Head from "next/head";
import Link from "next/link";
import Header from "src/parts/Header";
import Footer from "src/parts/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>TEFA Bakery & Coffe</title>
        <link rel='shortcut icon' href='/images/logo-tefa.png' />
      </Head>
      <main>
        <section className='pt-10 px-4' style={{ height: 654 }}>
          <div className='container relative mx-auto'>
            <Header></Header>
            <div className='flex justify-between items-center'>
              <div className='w-1/2'>
                <h1 className='text-5xl mb-5 font-bold leading-normal'>
                  Teaching Factory
                  <span className='text-yellow-800'> Bakery Coffe </span> &
                  <span className='text-yellow-800'> Fish Canning</span>
                </h1>
                <p className='text-gray-500 font-light text-lg mb-8'>
                  UPT pengolahan & pengemasan produk pangan <br /> Politeknik
                  Negeri Jember
                </p>
                <button className='bg-yellow-900 rounded-md hover:bg-yellow-800 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3'>
                  Baca Lebih Lanjut
                </button>
              </div>
              <div className='w-1/2 flex justify-end pt-24 pr-16'>
                <div className='relative' style={{ width: 369, height: 440 }}>
                  <div
                    className='absolute border- border-gray-700 border-2 -mt-6 -mr-2 right-0'
                    style={{ width: 369, height: 440 }}></div>
                  <div className='absolute w-full h-full -mb-8 -ml-8'>
                    <img src='/images/image-tefa.png' alt='pelatihantefa' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='bg-yellow-900 mt-24 py-12 px-36'>
          <div className='w-full text-center font-medium'>
            <h1 className='text-white text-3xl'>Teaching Factory</h1>
            <p className='m-12 text-white font-light'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </p>
          </div>
        </section>
        <section className='mt-24 px-4'>
          <div className='flex justify-between items-center px-4'>
            <div className='w-auto'>
              <h2 className='text-2xl font-medium text-yellow-800'>
                Informasi Terbaru
              </h2>
            </div>
            <div className='w-auto'>
              <Link href='#'>
                <a className='text-gray-900 hover:underline'>Lihat Lainya</a>
              </Link>
            </div>
          </div>
          <div className='flex flex-wrap justify-start items-center px-4 mt-6'>
            <div className='w-1/4 py-6'>
              <figure>
                <img
                  src='/images/informasi1.jpg'
                  alt='informasi produk terbaru'
                />
              </figure>
              <h4 className='py-4 text-lg text-yellow-800 font-bold'>
                Produk terbaru dari teaching factory bakery and coffe
              </h4>
              <a
                href=''
                className='text-c text-blue-800 hover:text-blue-600 hover:underline'>
                Baca Selengkapnya
              </a>
            </div>
            <div className='w-1/4 py-6'>
              <figure>
                <img
                  src='/images/informasi2.jpg'
                  alt='informasi produk terbaru'
                />
              </figure>
              <h4 className='py-4 text-lg text-yellow-800 font-bold'>
                Peraturan terbaru mengenai informasi magang
              </h4>
              <a
                href=''
                className='text-c text-blue-800 hover:text-blue-600 hover:underline'>
                Baca Selengkapnya
              </a>
            </div>
          </div>
        </section>
        <section className='mt-24 px-4 bg-yellow-900 py-12'>
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}
