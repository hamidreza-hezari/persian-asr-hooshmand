export type ServiceOption =
  | "خدمات سئو"
  | "طراحی وب سایت"
  | "اتوماسیون و بازاریابی"
  | "کمپین‌های بازاریابی و تبلیغاتی"
  | "خدمات تولید محتوا";

export type FormState = {
  fullName: string;
  phone: string;
  email: string;
  description: string;
  services: ServiceOption[];
};

export type FormErrors = Partial<Record<keyof FormState, string>>;
