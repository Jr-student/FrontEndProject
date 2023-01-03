import * as Yup from "yup";


export const loginSchema= Yup.object({
    email: Yup.string().required("Email girmek zorunludur.").email("Geçersiz email."),
    password: Yup.string().required("Şifre girmek zorunludur.").min(8,"Şifre en az 8 karakterden oluşmalı"),
})