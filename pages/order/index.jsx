import React from 'react'
import Image from 'next/image';

const Order = () => {
  return (
    <div className="overflow-x-auto">
    <div className=" min-h-[calc(100vh_-_388px)] flex justify-center items-center flex-col p-10 min-w-[1000px]">
    <div className="flex items-center flex-1 w-full ">
        <table className="w-full text-sm text-center text-gray-500">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                <tr>
                  <th scope="col" className="py-3 px-6 ">Ürün No</th>
                  <th scope="col" className="py-3 px-6 ">Müşteri</th>
                  <th scope="col" className="py-3 px-6 ">Adres</th>
                  <th scope="col" className="py-3 px-6 ">Toplam</th>
                </tr>
            </thead>
            <tbody>
                <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary">
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-2 justify-center">
                      42156361253
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    Erme demir
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">Antep</td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">20$</td>
                </tr>
            </tbody>
        </table>
    </div> 
    <div className="flex justify-between w-full p-10 bg-primary mt-10 ">
        <div className="relative flex flex-col items-center">
            <Image src="/images/paid.png" alt="" width={40} height={40}/>
            <span>Ödeme</span>
        </div>
        <div className="relative flex flex-col items-center">
            <Image src="/images/bake.png" alt="" width={40} height={40}/>
            <span>Hazırlanıyor</span>
        </div>
        <div className="relative flex flex-col items-center">
            <Image src="/images/bike.png" alt="" width={40} height={40}/>
            <span>Yolda</span>
        </div>
        <div className="relative flex flex-col items-center">
            <Image src="/images/delivered.png" alt="" width={40} height={40}/>
            <span>Teslim Edildi</span>
        </div>
    </div>
  </div>
  </div>
      
  )
}

export default Order