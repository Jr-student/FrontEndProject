import React from 'react'
import Title from '../ui/Title'
import Image from 'next/image'

const Order = () => {
  return (
    <div>
        <div className="lg:p-8 lg:mt-0 mt-2 flex-1">
            <Title addClass="text-[40px]">Şifre</Title>
        <div className="overflow-x-auto w-full mt-5">
            <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
                <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                    <tr>
                      <th scope="col" className="py-3 px-6 ">Id</th>
                      <th scope="col" className="py-3 px-6 ">Adres</th>
                      <th scope="col" className="py-3 px-6 ">Tarih</th>
                      <th scope="col" className="py-3 px-6 ">Toplam</th>
                      <th scope="col" className="py-3 px-6 ">Sipariş Durumu</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary">
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-2 justify-center">
                          <Image src="/images/f1.png" alt="" width={40} height={40}/>
                          <span>4324321412</span>
                      </td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                        <span>antep</span>
                      </td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">01-09-2023</td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">18$</td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">preparing</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}

export default Order