import Head from "next/head";
import Axios from "src/configs/axios";
import Header from "src/parts/Header";
import ListInformation from "src/parts/ListInformation";
import Footer from "src/parts/Footer";
import Smart from "public/images/smart.svg";
import Innovative from "public/images/innovative.svg";
import Profesional from "public/images/profesional.svg";

export default function Home({ data }) {
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
        <title>TEFA Bakery Coffee & Fish Canning</title>
        <link rel='shortcut icon' href='/images/logo-tefa.png' />
      </Head>
      <main>
        <section className='overflow-hidden'>
          <section className='container mx-auto'>
            <div className='container mx-auto items-center w-full absolute pt-10 px-4 z-50'>
              <Header></Header>
              <div className='flex md:flex-nowrap justify-between items-center'>
                <div className='w-full md:w-1/2 mt-8 md:mt-0'>
                  <h3 className='text-lg font-light text-gray-300'>Home</h3>
                  <h1 className='text-3xl md:text-5xl text-white mb-5 font-bold leading-normal md:leading-relaxed'>
                    Teaching Factory
                    <span className='text-yellow-500'> Bakery Coffee </span> &
                    <span className='text-yellow-500'> Fish Canning</span>
                  </h1>
                  <p className='text-gray-100 font-light text-lg mb-8'>
                    UPT pengolahan & pengemasan produk pangan{" "}
                    <br className='hidden md:block' /> Politeknik Negeri Jember
                  </p>
                  <div className='flex mb-8'>
                    <div className='w-full md:w-1/3 mr-4'>
                      <Smart className=' fill-green-500'></Smart>
                      <h1 className='text-white font-medium mt-2'>Smart</h1>
                    </div>
                    <div className='w-full md:w-1/3 mr-4'>
                      <Innovative className=' fill-green-500'></Innovative>
                      <h1 className='text-white font-medium mt-2'>
                        Innovative
                      </h1>
                    </div>
                    <div className='w-full md:w-1/3'>
                      <Profesional className=' fill-green-500'></Profesional>
                      <h1 className='text-white font-medium mt-2'>
                        Profesional
                      </h1>
                    </div>
                  </div>
                  <button
                    onClick={showDetail}
                    className='bg-yellow-500 rounded-md hover:bg-yellow-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3'>
                    Baca Lebih Lanjut
                  </button>
                </div>
                <div className='hidden w-1/2 md:flex justify-end pt-24 pr-16'>
                  <div className='relative' style={{ width: 369, height: 440 }}>
                    <div
                      className='absolute border-gray-400 border-2 -mt-4 right-0'
                      style={{ width: 369, height: 440 }}></div>
                    <div className='absolute w-full h-full -mb-8 -ml-8 z-0'>
                      <img
                        src='/images/image-tefa.png'
                        alt='tefa bakery coffee'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div>
            <div className='relative mx-auto flex items-center justify-center h-screen mb-12 overflow-hidden'>
              <video
                autoPlay
                loop
                muted
                playsInline
                className='absolute z-10 w-auto min-w-full min-h-full max-w-none'
                src='/video/tefa_video.mp4'></video>
              <div className='absolute inset-0 -mt-14 z-10 min-w-full min-h-full bg-black opacity-75'></div>
            </div>
          </div>
        </section>
        <section id='detail' className='bg-yellow-50 py-8 md:py-12'>
          <div className='container mx-auto w-full text-center'>
            <h1 className='text-yellow-500 text-2xl md:text-3xl font-bold'>
              Teaching Factory
            </h1>
            <p className='mx-8 md:mx-28 mt-6 font-light md:font-medium text-lg'>
              Tefa merupakan keharusan bagi perguruan tinggi vokasi sebagai
              sarana menguatkan ketrampilan dan kompetensi lulusannya. PT vokasi
              mempunyai kekuatan atau keunggulan sebagai pembeda dibanding PT
              Akademik. <br />
              Salah satu TEFA Politeknik Negeri Jember yaitu Teaching Factory
              Bakery Coffee & Fish Canning yang dioperasikan oleh Unit Produksi
              Terpadu Pengolahan dan Pengemasan Produk Pangan
            </p>
          </div>
        </section>
        <section className='container mx-auto mt-12 md:mt-24 px-4'>
          <ListInformation data={data}></ListInformation>
        </section>
        <section className='mt-12 md:mt-24 mx-auto px-4 bg-primary-color py-12'>
          <Footer></Footer>
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await Axios.get(`/information`);
    return { data: data.data };
  } catch (error) {
    return error;
  }
};
