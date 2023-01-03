import Image from 'next/image';
import React, { useState } from 'react';
import {FaHome,FaKey,FaMotorcycle} from "react-icons/fa";
import {ImExit} from "react-icons/im"
import Account from '../../components/profile/account';
import Order from '../../components/profile/order';
import Password from '../../components/profile/password';

const Profile = () => {

    const [tabs, setTabs] = useState(0);

    
  return (
    <div className="flex px-10 min-h-[calc(100vh_-_388px)] lg:flex-row flex-col lg:mb-0 mb-10">
        <div className="lg:w-80 w-100 flex-shrink-0">
            <div className="relative flex flex-col items-center px-10 py-5 border border-b-0">
                <Image src="/images/client-1.jpg" alt="" width={100} height={100} className="rounded-full"/>
                <b className="text-2xl mt-1">Ali Şahin</b>
            </div>
            <ul className="font-bold">
              <li className={`border w-full p-3 flex cursor-pointer hover:bg-primary hover:text-white transition-all justify-center ${tabs === 0 && "bg-primary text-white"}`} onClick={() => setTabs(0)}>
                <FaHome className="my-1"/>
                <button className="mx-2">Hesap</button>
              </li>
              <li className={`border w-full p-3 flex cursor-pointer hover:bg-primary hover:text-white transition-all justify-center ${tabs === 1 && "bg-primary text-white"}`} onClick={() => setTabs(1)}>
                <FaKey className="my-1"/>
                <button className="mx-2">Şifre</button>
              </li>
              <li className={`border w-full p-3 flex cursor-pointer hover:bg-primary hover:text-white transition-all justify-center ${tabs === 2 && "bg-primary text-white"}`} onClick={() => setTabs(2)}>
                <FaMotorcycle className="my-1"/>
                <button className="mx-2">Siparişlerim</button>
              </li>
              <li className={`border w-full p-3 flex cursor-pointer hover:bg-primary hover:text-white transition-all justify-center ${tabs === 3 && "bg-primary text-white"}`} onClick={() => setTabs(3)}>
                <ImExit className="my-1"/>
                <button className="mx-2">Çıkış</button>
              </li>
            </ul>
        </div>
        {tabs === 0 && <Account/>}
        {tabs === 1 && <Password/>}
        {tabs === 2 && <Order/>}
    </div>
  )
}

export default Profile