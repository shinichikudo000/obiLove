import { Control, FieldValues } from "react-hook-form";
import { FormItemBase } from "./form";

export interface TextInputItem<T extends FieldValues> extends FormItemBase<T> {
  type: "text" | "email";
}

export interface TextInputProps<T extends FieldValues> {
  formItem: TextInputItem<T>;
  control: Control<T>;
}