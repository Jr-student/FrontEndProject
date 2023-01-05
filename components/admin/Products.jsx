import React from "react";
import Image from "next/image";
import Title from "../ui/Title";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Products = () => {
  const [products, setProducts] = useState([]);

  const handleDelete = async (id) => {
    try {
      if (confirm("Are you sure you want to delete this product?")) {
        const res = await axios.delete(
          `https://localhost:7063/api/Product/Delete/${id}`,
        );
        toast.success("Product Deleted!");
        getProducts();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getProducts = async (pageNumberParam = 1, pageSizeParam = 10) => {
    try {
      const res = await axios.get(
        `https://localhost:7063/api/Product/Details?PageNumber=${pageNumberParam}&PageSize=${pageSizeParam}`,
      );
      setProducts(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Ürünler</Title>
      <div className="overflow-x-auto w-full mt-5">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6 ">
                Resim
              </th>
              <th scope="col" className="py-3 px-6 ">
                Ürün İd
              </th>
              <th scope="col" className="py-3 px-6 ">
                Başlık
              </th>
              <th scope="col" className="py-3 px-6 ">
                Ücret
              </th>
              <th scope="col" className="py-3 px-6 ">
                Eylem
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                className="transition-all bg-secondary border-gray-700 hover:bg-primary"
                key={product.id}
              >
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-2 justify-center">
                  <Image src="/images/f1.png" alt="" width={50} height={50} />
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <span>{product.id}</span>
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  {product.productName}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  ${product.price}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                  <button
                    className="btn-primary !bg-danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
