import Image from 'next/image';
import React, { useState } from 'react';
import {FaMotorcycle} from "react-icons/fa";
import {ImExit} from "react-icons/im";
import {BiCategory} from "react-icons/bi";
import {MdFastfood} from "react-icons/md";
import Products from '../../components/admin/Products';
import Order from '../../components/admin/Order';
import Password from '../../components/profile/Password';
import Category from '../../components/admin/Category';
import AddProduct from '../../components/admin/AddProduct';

const Profile = () => {

    const [tabs, setTabs] = useState(0);
    const [isProductModal, setIsProductModal] = useState(false);

    
  return (
    <div className="flex px-10 min-h-[calc(100vh_-_388px)] lg:flex-row flex-col lg:mb-0 mb-10">
        <div className="lg:w-80 w-100 flex-shrink-0">
            <div className="relative flex flex-col items-center px-10 py-5 border border-b-0">
                <Image src="/images/admin.png" alt="" width={100} height={100} className="rounded-full"/>
                <b className="text-2xl mt-1">Admin</b>
            </div>
            <ul className="font-bold">

              <li className={`border w-full p-3 flex cursor-pointer hover:bg-primary hover:text-white transition-all justify-center ${tabs === 0 && "bg-primary text-white"}`} onClick={() => setTabs(0)}>
                <MdFastfood className="my-1"/>
                <button className="mx-2">Ürünler</button>
              </li>

              <li className={`border w-full p-3 flex cursor-pointer hover:bg-primary hover:text-white transition-all justify-center ${tabs === 1 && "bg-primary text-white"}`} onClick={() => setTabs(1)}>
                <FaMotorcycle className="my-1"/>
                <button className="mx-2">Siparişler</button>
              </li>

              <li className={`border w-full p-3 flex cursor-pointer hover:bg-primary hover:text-white transition-all justify-center ${tabs === 2 && "bg-primary text-white"}`} onClick={() => setTabs(2)}>
                <BiCategory className="my-1"/>
                <button className="mx-2">Kategoriler</button>
              </li>
              
              <li className={`border w-full p-3 flex cursor-pointer hover:bg-primary hover:text-white transition-all justify-center ${tabs === 3 && "bg-primary text-white"}`} onClick={() => setTabs(3)}>
                <ImExit className="my-1"/>
                <button className="mx-2">Çıkış</button>
              </li>

            </ul>
        </div>
        {tabs === 0 && <Products/>}
        {tabs === 1 && <Order/>}
        {tabs === 2 && <Category/>}
        {isProductModal && <AddProduct setIsProductModal={setIsProductModal} />}
      <button
        className="btn-primary !w-12 !h-12 !p-0 absolute bottom-14 right-10 text-4xl"
        onClick={() => setIsProductModal(true)}
      >
        +
      </button>
    </div>
  )
}

export default Profile