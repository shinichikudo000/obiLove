import { Control, FieldValues } from "react-hook-form";
import { FormItemBase } from "./form";

export interface DatePickerFormItem<T extends FieldValues> extends FormItemBase<T> {
  type: "date";
}

export interface DatePickerFormProps<T extends FieldValues> {
  formItem: DatePickerFormItem<T>;
  control: Control<T>;
}