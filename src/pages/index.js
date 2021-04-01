import Head from "next/head";
import Link from "next/link";
import Header from "src/parts/Header";
import Footer from "src/parts/Footer";
export default function Home() {
  function showDetail() {
    document.getElementById("detail").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
  return (
    <>
      <Head>
        <title>TEFA Bakery & Coffe</title>
        <link rel='shortcut icon' href='/images/logo-tefa.png' />
      </Head>
      <main>
        <section
          className='header-clipping pt-10 px-4 min-h-screen md:min-h-0'
          style={{ height: 654 }}>
          <div className='container relative mx-auto'>
            <Header></Header>
            <div className='flex justify-between items-center'>
              <div className='w-full md:w-1/2 mt-8 md:mt-0'>
                <h3 className='text-lg text-yellow-500 font-bold'>Home</h3>
                <h1 className='text-4xl md:text-5xl text-white mb-5 font-bold leading-normal'>
                  Teaching Factory
                  <span className='text-yellow-500'> Bakery Coffe </span> &
                  <span className='text-yellow-500'> Fish Canning</span>
                </h1>
                <p className='text-gray-100 font-light text-lg mb-8'>
                  UPT pengolahan & pengemasan produk pangan{" "}
                  <br className='hidden md:block' /> Politeknik Negeri Jember
                </p>
                <button
                  onClick={showDetail}
                  className='bg-yellow-500 rounded-md hover:bg-yellow-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3'>
                  Baca Lebih Lanjut
                </button>
              </div>
              <div className='hidden w-1/2 md:flex justify-end pt-24 pr-16'>
                <div className='relative' style={{ width: 369, height: 440 }}>
                  <div
                    className='absolute border- border-gray-700 border-2 -mt-6 -mr-2 right-0'
                    style={{ width: 369, height: 440 }}></div>
                  <div className='absolute w-full h-full -mb-8 -ml-8 z-0'>
                    <img src='/images/image-tefa.png' alt='pelatihantefa' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id='detail'
          className='bg-yellow-50 mt-12 md:mt-24 py-8 md:py-12'>
          <div className='w-full text-center'>
            <h1 className='text-yellow-500 text-2xl md:text-3xl font-bold'>
              Teaching Factory
            </h1>
            <p className='mx-8 md:mx-28 mt-6 font-light md:font-medium text-lg'>
              Tefa merupakan keharusan bagi perguruan tinggi vokasi sebagai
              sarana menguatkan ketrampilan dan kompetensi lulusannya. PT vokasi
              mempunyai kekuatan atau keunggulan sebagai pembeda dibanding PT
              Akademik. <br />
              Salah satu Tefa politeknik negeri jember yaitu tefa Bakery & Coffe
              yang mengolah dan pengemasan terhadap produk pangan
            </p>
          </div>
        </section>
        <section className='container mx-auto mt-12 md:mt-24 px-4'>
          <div className='flex justify-between items-center'>
            <div className='w-auto'>
              <h2 className='text-yellow-500 text-2xl md:text-3xl font-bold'>
                Informasi Terbaru
              </h2>
            </div>
            <div className='w-auto'>
              <Link href=''>
                <a className='text-gray-900 hover:underline'>Lihat Lainya</a>
              </Link>
            </div>
          </div>
          <div className='flex flex-wrap justify-start items-center -mx-4 mt-6'>
            <div className='w-full md:w-1/4 px-4 mb-6'>
              <div>
                <figure>
                  <img
                    src='/images/informasi1.png'
                    alt='informasi produk terbaru'
                  />
                </figure>
                <h4 className='py-4 text-lg font-bold'>
                  Produk terbaru dari teaching factory bakery and coffe
                </h4>
                <a
                  href=''
                  className='text-c text-blue-800 hover:text-blue-600 hover:underline'>
                  Baca Selengkapnya
                </a>
              </div>
            </div>
            <div className='w-full md:w-1/4 px-4 mb-6'>
              <div>
                <figure>
                  <img
                    src='/images/informasi2.png'
                    alt='informasi produk terbaru'
                  />
                </figure>
                <h4 className='py-4 text-lg font-bold'>
                  Peraturan terbaru mengenai informasi magang
                </h4>
                <a
                  href=''
                  className='text-c text-blue-800 hover:text-blue-600 hover:underline'>
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className='mt-12 md:mt-24 px-4 bg-primary-color py-12'>
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}
