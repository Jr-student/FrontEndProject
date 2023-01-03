import React from "react";
import Title from "../ui/Title";
import {BsFacebook,BsTwitter,BsInstagram,BsPinterest} from "react-icons/bs"

const Footer = () => {
  return (
  <div className="bg-secondary text-white text-center">
    <div className="container mx-auto pt-14 pb-6">
      <div>
          <Title addClass="text-[30px] font-family-dancing">Feane</Title>

          <p className="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae praesentium quisquam. Quia aspernatur mollitia inventore doloremque voluptas! Voluptatum quis totam rem fugiat pariatur laborum quas amet dolor temporibus cupiditate.
          </p>
            <nav className="flex justify-center mt-6 gap-x-6">
              <a href="#facebook">
                <BsFacebook/>
              </a>
              <a href="#twitter">
                <BsTwitter/>
              </a>
              <a href="#instagram">
                <BsInstagram/>
              </a>
              <a href="#pinterest">
                <BsPinterest/>
              </a>
            </nav>
          

      <div className="col-md-12 mt-10">
        <p> Tüm hakları saklıdır </p>
      </div>
    </div>
  </div>
  </div>
)};

export default Footer;
