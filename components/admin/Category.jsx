import React, { useState } from 'react'
import Input from '../form/Input'
import Title from '../ui/Title'

const Category = () => {

    const [inputText, setInputText] = useState("");
    const [categories, setCategories] = useState(["pizza"]);

  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5">
        <Title addClass="text-[40px]">Kategoriler</Title>
        <div>
            <div className="flex gap-4">
                <Input placeholder="Yeni Bir Kategori Ekle" onChange={((e) => setInputText(e.target.value))}
                value={inputText}
                />
                
                <button className="btn-primary" onClick={()=>{
                    setCategories([...categories,inputText])
                    setInputText("");
                }}>Ekle</button>
                
            </div>
            <div className='mt-10'>
                {categories.map((category, index) => (
                    <div className='flex justify-between mt-4' key = {index}>

                <b className='text-xl'>{category}</b>

                <button className='btn-primary !bg-danger' 
                onClick={()=>{setCategories(categories.filter((cat) => cat !==category));
                }}>Sil</button>
              </div>
                )) }
            </div>
        </div>
    </div>
  )
}

export default Category