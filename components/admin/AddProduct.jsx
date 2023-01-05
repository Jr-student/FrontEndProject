import React, { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { GiCancel } from "react-icons/gi";
import Title from "../ui/Title";
import axios from "axios";
import { toast } from "react-toastify";


const AddProduct = ({ setIsProductModal }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(`https://localhost:7063/api/Category`);
        setCategories(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);

  const changePrice = (e) => {
    let currentPrice = price;
    currentPrice = e.target.value;
    setPrice(currentPrice);
  };

  // const newProduct = {
  //   name,
  //   description,
  //   category: category.toLowerCase(),
  //   price,
  // };

  const handleCreate = async () => {
    try {
      const newProduct = {
        name,
        description,
        category,
        price,
      };

      var bodyFormData = new FormData();
      bodyFormData.append("Name", newProduct.name);
      bodyFormData.append("Description", newProduct.description);
      bodyFormData.append("Category", newProduct.category);
      bodyFormData.append("Price", newProduct.price);

      await axios.post(`https://localhost:7063/api/Product`, bodyFormData);
      setIsProductModal(false);
      toast.success("Product created successfully!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center">
      <OutsideClickHandler onOutsideClick={() => setIsProductModal(false)}>
        <div className="w-full h-full grid place-content-center relative">
          <div className="relative z-50 md:w-[600px] w-[370px]  bg-white border-2 p-10 rounded-3xl">
            <Title addClass="text-[40px] text-center">
              Yeni Bir Ürün Ekleme
            </Title>

            <div className="flex flex-col text-sm mt-6">
              <span className="font-semibold mb-1">Ürün Resmi Seçiniz</span>
              <input type="file" />
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Ürün adı</span>
              <input
                type="text"
                className="border-2 p-1 text-sm px-1 outline-none"
                placeholder="Ürün adı giriniz..."
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">Ürün Açıklaması</span>
              <textarea
                className="border-2 p-1 text-sm px-1 outline-none"
                placeholder="Ürün açıklaması giriniz..."
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="flex flex-col text-sm mt-4">
              <span className="font-semibold mb-[2px]">kategori Seçiniz</span>
              <select
                className="border-2 p-1 text-sm px-1 outline-none"
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option
                    value={category.categoryName.toLowerCase()}
                    key={category.id}
                  >
                    {category.categoryName}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col text-sm mt-4 w-full">
              <span className="font-semibold mb-[2px]">Ürünün Fiyatı</span>
              <div className="flex justify-between gap-6 w-full md:flex-nowrap flex-wrap">
                <input
                  type="number"
                  className="border-b-2 p-1 pl-0 text-sm px-1 outline-none w-36"
                  placeholder="fiyat giriniz"
                  onChange={(e) => changePrice(e)}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="btn-primary !bg-succes mt-2"
                onClick={handleCreate}
              >
                Ürünü Oluştur
              </button>
            </div>
            <button
              className="absolute  top-4 right-4"
              onClick={() => setIsProductModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default AddProduct;
