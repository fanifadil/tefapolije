import React from "react";
import Link from "next/link";

export default function RenderItem({ item }) {
  return (
    <>
      <div className='w-full md:w-1/4 px-4 mb-6'>
        <div className='card-information border-gray-300 hover:border-yellow-200 hover:shadow-xl pb-4 h-auto relative transition-all duration-200'>
          <div>
            <figure>
              <img src={item?.information_img ?? ""} alt={item?.name ?? ""} />
            </figure>
            <div className='px-4'>
              <h4 className=' mt-4 text-md font-bold'>
                {item?.title ?? "Judul Informasi"}
              </h4>
              <h6 className='py-4 text-sm font-light '>
                {item?.date_created ?? "Tanggal Publikasi"}
              </h6>
              <Link
                href='/information/[id]'
                as={`/information/${item.information_id}`}>
                <a className='text-blue-800 hover:text-blue-600 text-right hover:underline'>
                  Baca Selengkapnya
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
