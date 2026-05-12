import { ServiceOption } from "@/app/constants/form.constants";

export type FormState = {
  fullName: string;
  phone: string;
  email: string;
  description: string;
  services: ServiceOption[];
};

export type FormErrors = Partial<Record<keyof FormState, string>>;

export const initialState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  description: "",
  services: [],
};

export type Action =
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

export function consultationFormReducer(
  state: FormState,
  action: Action,
): FormState {
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
