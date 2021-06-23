import React from "react";
import Link from "next/link";
import RenderItem from "src/parts/ListCoffee/RenderItem";
import { useRouter } from "next/router";

export default function index({ dataCoffee }) {
  const router = useRouter();

  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='w-auto'>
          <h2 className='text-yellow-500 font-bold text-2xl md:text-3xl'>
            Kopi Kekinian
          </h2>
        </div>
        {router.pathname === "/coffee" ? (
          <></>
        ) : (
          <div className='w-auto'>
            <Link href='coffee'>
              <a className='text-gray-900 text-sm hover:underline'>
                Lihat Lainya
              </a>
            </Link>
          </div>
        )}
      </div>
      <div className='flex flex-wrap justify-start -mx-4 mt-6'>
        {dataCoffee?.length > 0 ? (
          dataCoffee.map((item, index) => {
            return <RenderItem item={item} key={index}></RenderItem>;
          })
        ) : (
          <div className='w-full text-center py-12'>No Item Found</div>
        )}
      </div>
    </>
  );
}
