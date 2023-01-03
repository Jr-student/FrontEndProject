import React from 'react';
import Title from '../ui/Title';

const Order = () => {
  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
        <Title addClass="text-[40px]">Ürünler</Title>
        <div className="overflow-x-auto w-full mt-5">
            <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
                <thead className="text-xs text-gray-400 uppercase bg-gray-700">
                    <tr>
                      <th scope="col" className="py-3 px-6 ">Ürün No</th>
                      <th scope="col" className="py-3 px-6 ">Müşteri</th>
                      <th scope="col" className="py-3 px-6 ">Toplam</th>
                      <th scope="col" className="py-3 px-6 ">Ödeme Şekli</th>
                      <th scope="col" className="py-3 px-6 ">Sipariş Durumu</th>
                      <th scope="col" className="py-3 px-6 ">Eylem</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary">
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">123132131</td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">arda ogan</td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">20$</td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">kredi kartı</td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">yolda</td>
                      <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                        <button className="btn-primary !bg-succes">Sonraki Adım</button>
                      </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Order