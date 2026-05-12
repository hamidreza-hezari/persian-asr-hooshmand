import { FormErrors, FormState } from "./consultation-form.reducer";

export function validateConsultationForm(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.fullName.trim()) {
    errors.fullName = "نام و نام خانوادگی الزامی است.";
  }

  if (!form.phone.trim() || !/^\d{9,15}$/.test(form.phone)) {
    errors.phone = "شماره تماس ۹ رقمی الزامی است.";
  }

  if (!form.email.trim()) {
    errors.email = "ایمیل الزامی است.";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "فرمت ایمیل معتبر نیست.";
  }

  return errors;
}
