import { FieldValues } from "react-hook-form";
import { DatePickerFormItem } from "./datePickerForm";
import { FileUploaderFormItem } from "./fileUploader";
import { TextArrayInputItem } from "./textArrayInput";
import { TextInputItem } from "./textInput";
import { TextAreaInputItem } from "./textAreaInput";

export type FormItemBase<T extends FieldValues = FieldValues> = {
    name: keyof T;
    type: "text" | "date" | "select" | "checkbox" | "array" | "text-array" | "file" | "email" | "text-area";
    label: string;
    description?: string;
    required?: boolean;
    className?: string;
};

export type FormItem = 
  | DatePickerFormItem<FieldValues>
  | FileUploaderFormItem<FieldValues>
  | TextArrayInputItem<FieldValues>
  | TextInputItem<FieldValues>
  | TextAreaInputItem<FieldValues>