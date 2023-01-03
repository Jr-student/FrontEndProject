import React from "react";
import Image from "next/image";
import Title from "../../components/ui/Title";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="min-h-[calc(100vh_-_389px)]">
      <div className="flex justify-between items-center md:flex-row flex-col">
        <div className="md:min-h-[calc(100vh_-_389px)] flex items-center flex-1 p-10 overflow-x-auto w-full">
          <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="py-3 px-6 ">
                  Ürünler
                </th>
                <th scope="col" className="py-3 px-6 ">
                  Ekstralar
                </th>
                <th scope="col" className="py-3 px-6 ">
                  Fiyat
                </th>
                <th scope="col" className="py-3 px-6 ">
                  Miktar
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((product) => (
                <tr
                  className="transition-all bg-secondary border-gray-700 hover:bg-primary"
                  key={product.id}
                >
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                    <Image src="/images/f1.png" alt="" width={50} height={50} />
                    <span>{product.name}</span>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {product.extras.map((item) => (
                      <span key={item.id}>{item.name}, </span>
                    ))}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    ${product.price}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                    {product.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-secondary min-h-[calc(100vh_-_389px)] flex flex-col justify-center text-white p-12 md:w-auto w-full md:text-start !text-center">
          <Title addClass="text-[40px]">Sepet Toplam</Title>
          <div className="mt-6">
            <b>Toplam: </b>${cart.total} <br />
          </div>
          <div>
            <button
              className="btn-primary mt-4 md:w-auto w-52"
              onClick={() => dispatch(reset())}
            >
              Siparişi Onayla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
