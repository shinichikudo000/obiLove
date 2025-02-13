import { Control, FieldValues } from "react-hook-form";
import { FormItemBase } from "./form";

export interface TextArrayInputItem<T extends FieldValues> extends FormItemBase<T> {
  type: "text-array";
}

export interface TextArrayInputProps<T extends FieldValues> {
  formItem: TextArrayInputItem<T>;
  control: Control<T>;
}