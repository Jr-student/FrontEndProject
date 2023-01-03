import React from "react";
import Input from "./form/Input";
import Title from "./ui/Title";
import { useFormik } from 'formik';
import { resolve } from "styled-jsx/css";
import { reservationSchema } from "../schema/reservation";

const Reservation = () => {

  const onSubmit = async (values,actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  }

  const {values, errors,touched, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues:{
      fullName:"",
      phoneNumber:"",
      email:"",
      persons:"",
      date:"",
    },
    onSubmit,
    validationSchema:reservationSchema,
  });
  
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
      name: "persons",
      type: "number",
      placeholder: "Kaç kişi gelicek?",
      value:values.persons,
      errorMessage: errors.persons,
      touched: touched.persons,
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      value:values.date,
      errorMessage: errors.date,
      touched: touched.date,
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <Title addClass="text-[40px] mb-10">Rezervasyon</Title>
      <div className="flex justify-between flex-wrap-reverse gap-10">
        <form className="lg:flex-1 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-3">
            {inputs.map((input) => (
              <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur} />
            ))}
          </div>
          <button className="btn-primary mt-4" type="submit">BOOK NOW</button>
        </form>
        <div className="lg:flex-1 !h-[384px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.8854384459984!2d36.278588642786886!3d41.33512688746732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408877e97607d663%3A0xb939cc265fdeb52!2sSamsun!5e0!3m2!1str!2str!4v1671043566906!5m2!1str!2str"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
