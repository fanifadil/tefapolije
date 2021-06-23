import React from "react";

export default function RenderItem({ item }) {
  return (
    <>
      <div className='w-full md:w-1/4 px-4 mb-12'>
        <div>
          <figure>
            <img src={item?.product_img ?? ""} alt={item?.product_img ?? ""} />
          </figure>
          <h3 className='text-xl font-bold py-2'>
            {item?.product_name ?? "Nama Kopi"}
          </h3>
          <h4 className='text-gray-500 font-light text-base mb-2'>
            {item?.product_explain ?? "Deskripsi Kopi"}
          </h4>
          <h5 className='text-lg text-gray-900'>
            {item?.price ?? "Harga Kopi"}
          </h5>
        </div>
      </div>
    </>
  );
}
