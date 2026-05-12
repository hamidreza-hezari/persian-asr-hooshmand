"use client";

import { type ChangeEvent, type SubmitEvent, useCallback, useReducer, useState } from "react";
import { ServiceOption } from "@/app/constants/form.constants";

export type FormState = {
  fullName: string;
  phone: string;
  email: string;
  description: string;
  services: ServiceOption[];
};

export type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  description: "",
  services: [],
};

type Action =
  | {
      type: "SET_FIELD";
      field: keyof Omit<FormState, "services">;
      value: string;
    }
  | {
      type: "TOGGLE_SERVICE";
      value: ServiceOption;
    }
  | {
      type: "RESET";
    };

function formReducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "TOGGLE_SERVICE": {
      const exists = state.services.includes(action.value);

      return {
        ...state,
        services: exists
          ? state.services.filter((item) => item !== action.value)
          : [...state.services, action.value],
      };
    }

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export function useConsultationForm() {
  const [form, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setField =
    (field: keyof Omit<FormState, "services">) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      dispatch({
        type: "SET_FIELD",
        field,
        value: e.target.value,
      });

      // optimistic error cleanup
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: "",
        }));
      }
    };

  const toggleService = useCallback((service: ServiceOption) => {
    dispatch({
      type: "TOGGLE_SERVICE",
      value: service,
    });
  }, []);

  const validate = useCallback((): boolean => {
    const nextErrors: FormErrors = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "نام و نام خانوادگی الزامی است.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "شماره تماس الزامی است.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "ایمیل الزامی است.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = "فرمت ایمیل معتبر نیست.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }, [form]);

  const submit = useCallback(
    async (e: SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();

      const isValid = validate();

      if (!isValid) return;

      try {
        setIsSubmitting(true);

        await new Promise((resolve) => {
          setTimeout(resolve, 2000);
        });

        console.log("فرم ارسال شد");
      } finally {
        setIsSubmitting(false);
      }
    },
    [validate],
  );

  return {
    form,
    errors,
    isSubmitting,
    setField,
    toggleService,
    submit,
  };
}
