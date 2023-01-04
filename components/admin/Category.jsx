import axios from "axios";
import React, { useEffect, useState } from "react";
import Input from "../form/Input";
import Title from "../ui/Title";

const Category = () => {
  const [inputText, setInputText] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(`https://localhost:7063/api/Category`);
        setCategories(res?.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);

  const handleCreate = async () => {
    try {
      const res = await axios.post(`https://localhost:7063/api/Category/Add`, {
        categoryName: inputText,
      });
      getCategories();
      setCategories([...categories, res.data.data]);
      setInputText("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      if (confirm("Are you sure you want to delete this category?")) {
        await axios.delete(`https://localhost:7063/api/Category/Delete/${id}`);
        setCategories(categories.filter((cat) => cat.id !== id));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
      <Title addClass="text-[40px]">Kategoriler</Title>
      <div>
        <div className="flex gap-4">
          <Input
            placeholder="Yeni Bir Kategori Ekle"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />

          <button className="btn-primary" onClick={handleCreate}>
            Ekle
          </button>
        </div>
        <div className="mt-10">
          {categories.map((category) => (
            <div className="flex justify-between mt-4" key={category.id}>
              <b className="text-xl">{category.categoryName}</b>
              <button
                className="btn-primary !bg-danger"
                onClick={(e) => handleDelete(e, category.id)}
              >
                Sil
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
