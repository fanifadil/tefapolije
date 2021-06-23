import React from "react";
import Link from "next/link";

export default function RenderItem({ item }) {
  return (
    <>
      <div className='w-full md:w-1/4 px-4 mb-6'>
        <div>
          <figure>
            <img src={item?.information_img ?? ""} alt={item?.name ?? ""} />
          </figure>
          <h4 className='py-4 text-lg font-bold'>
            {item?.title ?? "Judul Informasi"}
          </h4>
          <Link
            href='/information/[id]'
            as={`/information/${item.information_id}`}>
            <a className='text-blue-800 hover:text-blue-600 hover:underline'>
              Baca Selengkapnya
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
