import React from 'react';
import Image from 'next/image';
import Title from '../ui/Title';

const Products = () => {
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
        <Title addClass="text-[40px]">Ürünler</Title>
        <div className="overflow-x-auto w-full mt-5">
            <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
                <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                    <tr>
                      <th scope="col" className="py-3 px-6 ">Resim</th>
                      <th scope="col" className="py-3 px-6 ">No</th>
                      <th scope="col" className="py-3 px-6 ">Başlık</th>
                      <th scope="col" className="py-3 px-6 ">Ücret</th>
                      <th scope="col" className="py-3 px-6 ">Eylem</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary">
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-2 justify-center">
                          <Image src="/images/f1.png" alt="" width={50} height={50}/>
                      </td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                        <span>23123231</span>
                      </td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">pizza</td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">18$</td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                        <button className="btn-primary !bg-danger">Sil</button>
                      </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Products