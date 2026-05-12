"use client";

import {
  ChangeEvent,
  SubmitEvent,
  useCallback,
  useReducer,
  useState,
} from "react";

import { ServiceOption } from "@/app/constants/form.constants";

import {
  consultationFormReducer,
  FormErrors,
  FormState,
  initialState,
} from "./consultation-form.reducer";

import { validateConsultationForm } from "./consultation-form.validation";

type FormField = keyof Omit<FormState, "services">;

export function useConsultationForm() {
  const [form, dispatch] = useReducer(consultationFormReducer, initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setField = useCallback((field: FormField, value: string) => {
    dispatch({
      type: "SET_FIELD",
      field,
      value,
    });

    setErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }

      return {
        ...prev,
        [field]: "",
      };
    });
  }, []);

  const handleFieldChange = useCallback(
    (field: FormField) =>
      (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setField(field, e.target.value);
      },
    [setField],
  );

  const toggleService = useCallback((service: ServiceOption) => {
    dispatch({
      type: "TOGGLE_SERVICE",
      value: service,
    });
  }, []);

  const validate = useCallback(() => {
    const nextErrors = validateConsultationForm(form);

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }, [form]);

  const submit = useCallback(
    async (e: SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();

      const isValid = validate();

      if (!isValid) {
        return;
      }

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
    handleFieldChange,
    toggleService,
    submit,
  };
}
