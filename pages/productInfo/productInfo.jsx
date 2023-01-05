import Image from "next/image";
import { useState } from "react";
import Title from "../../components/ui/Title";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Index = ({ food }) => {
  const [prices, setPrices] = useState([10, 20, 30]);
  const [price, setPrice] = useState(prices[0]);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProduct({ ...food, price, quantity: 1 }));
  };

  return (
    <div className="flex items-center md:h-[calc(100vh_-_88px)] gap-5 py-20 flex-wrap ">
      <div className="relative md:flex-1 md:w-[80%] md:h-[80%] w-36 h-36 mx-auto">
        <Image src="/images/f1.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title addClass="text-6xl">Good Pizza</Title>
        <span className="text-primary text-2xl font-bold underline underline-offset-1 my-4 inline-block">
          ${price}
        </span>
        <p className="text-sm my-4 md:pr-24">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          fugit corporis ex laboriosam tenetur at ad aspernatur eius numquam
          molestiae.</p>
        <button className="btn-primary" onClick={handleClick}>
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export const getProductDetails = async ({ params }) => {
  const res = await axios.get(
    `https://localhost:7063/api/Product/detail/${id}`
  );
  return {
    props: {
      food: res.data ? res.data : null,
    },
  };
};

export default Index;
