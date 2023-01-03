import * as Yup from "yup";


export const reservationSchema= Yup.object({
    fullName: Yup.string().required("İsim ve soyisim girmek zorunludur.").min(3,"İsim en az 3 karakterden oluşmalı."),
    phoneNumber: Yup.string().required("Telefon numarasını girmek zorunludur.").min(10,"Telefon numarası en az 10 rakamdan oluşmalıdır."),
    email: Yup.string().required("Email girmek zorunludur.").email("Geçersiz email."),
    persons: Yup.string().required("Kişi sayısı girmek zorunludur."),
    date: Yup.string().required("Tarih girmek zorunludur.")
})