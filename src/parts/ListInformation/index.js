import React from "react";
import Link from "next/link";
import RenderItem from "./RenderItem";

export default function index({ data }) {
  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='w-auto'>
          <h2 className='text-yellow-500 text-2xl md:text-3xl font-bold'>
            Informasi Terbaru
          </h2>
        </div>
      </div>
      <div className='flex flex-wrap justify-start -mx-4 mt-6'>
        {data?.length > 0 ? (
          data.map((item, index) => {
            return <RenderItem item={item} key={index}></RenderItem>;
          })
        ) : (
          <div className='w-full text-center py-12'>No Item Found</div>
        )}
      </div>
    </>
  );
}
