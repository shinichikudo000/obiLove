import { Control, FieldValues } from "react-hook-form";
import { FormItemBase } from "./form";

export interface FileUploaderFormItem<T extends FieldValues> extends FormItemBase<T> {
  type: "file";
  multiple: boolean;
  fileType: "pdf" | "photos" | "videos";
}

export interface FileUploaderProps<T extends FieldValues> {
  formItem: FileUploaderFormItem<T>;
  control: Control<T>;
}