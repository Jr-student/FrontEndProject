import * as Yup from "yup";


export const newPasswordSchema= Yup.object({
    password: Yup.string().required("Şifre girmek zorunludur.").min(8,"Şifre en az 8 karakterden oluşmalı"),
    confirmPassword: Yup.string().required("Şifreyi doğrulayın.").oneOf([Yup.ref("password"),null], "Şifreler eşleşmeli."),
}) 