import * as Yup from "yup";


export const adminSchema= Yup.object({
    username: Yup.string().required("Kullanıcı adı girmek zorunludur.").min(3,"Kullanıcı adı en az 3 karakterden oluşmalıdır."),
    password: Yup.string().required("Şifre girmek zorunludur.").min(8,"Şifre en az 8 karakterden oluşmalı"),
})