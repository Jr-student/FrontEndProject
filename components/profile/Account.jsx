import React from 'react'
import Title from '../ui/Title';
import Input from '../form/Input';
import { useFormik } from 'formik';
import { profileSchema } from "../../schema/profile";

const Account = () => {
    const onSubmit = async (values,actions) => {
        await new Promise((resolve) => setTimeout(resolve, 4000));
        actions.resetForm();
      }
    
      const {values, errors,touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues:{
          fullName:"",
          phoneNumber:"",
          email:"",
          address:"",
        },
        onSubmit,
        validationSchema:profileSchema,
      })

    const inputs = [
        {
          id: 1,
          name: "fullName",
          type: "text",
          placeholder: "İsim ve Soyisim",
          value: values.fullName,
          errorMessage: errors.fullName,
          touched: touched.fullName,
        },
        {
          id: 2,
          name: "phoneNumber",
          type: "number",
          placeholder: "Telefon Numarası",
          value: values.phoneNumber,
          errorMessage: errors.phoneNumber,
          touched: touched.phoneNumber,
        },
        {
          id: 3,
          name: "email",
          type: "email",
          placeholder: "Email",
          value:values.email,
          errorMessage: errors.email,
          touched: touched.email,
        },
        {
          id: 4,
          name: "address",
          type: "text",
          placeholder: "Adres",
          value:values.address,
          errorMessage: errors.address,
          touched: touched.address,
        },
      ]
  return (
    <form className="lg:p-8 lg:mt-0 mt-2 flex-1 ">
            <Title addClass="text-[40px]">Hesap Ayarları</Title>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
                {inputs.map((input)=>(<Input key={input.id} {...input} onBlur={handleBlur} onChange={handleChange}/>))}
            </div>
            <button className="btn-primary w-36 text-center lg:mt-6 mb-6 mt-4">Güncelle</button>
        </form>
  )
}

export default Account