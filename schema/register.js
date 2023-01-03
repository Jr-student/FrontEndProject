import * as Yup from "yup";


export const registerSchema= Yup.object({
    fullName: Yup.string().required("İsim ve soyisim girmek zorunludur.").min(3,"İsim en az 3 karakterden oluşmalı."),
    email: Yup.string().required("Email girmek zorunludur.").email("Geçersiz email."),
    password: Yup.string().required("Şifre girmek zorunludur.").min(8,"Şifre en az 8 karakterden oluşmalı"),
    confirmPassword: Yup.string().required("Şifreyi doğrulayın.").oneOf([Yup.ref("password"),null], "Şifreler eşleşmeli."),
}) 