import * as Yup from "yup";


export const profileSchema= Yup.object({
    fullName: Yup.string().required("İsim ve soyisim girmek zorunludur.").min(3,"İsim en az 3 karakterden oluşmalı."),
    phoneNumber: Yup.string().required("Telefon numarasını girmek zorunludur.").min(10,"Telefon numarası en az 10 rakamdan oluşmalıdır."),
    email: Yup.string().required("Email girmek zorunludur.").email("Geçersiz email."),
    address: Yup.string().required("Adres girmek zorunludur."),
})