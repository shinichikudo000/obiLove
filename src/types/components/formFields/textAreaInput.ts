import { Control, FieldValues } from "react-hook-form";
import { FormItemBase } from "./form";

export interface TextAreaInputItem<T extends FieldValues> extends FormItemBase<T> {
    type: "text-area";
    placeholder: string;
}

export interface TextAreaInputProps<T extends FieldValues> {
  formItem: TextAreaInputItem<T>;
  control: Control<T>;
}