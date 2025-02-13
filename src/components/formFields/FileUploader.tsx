import { useRef, useState } from "react";
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { FileUploaderProps } from "@/types/components/formFields/fileUploader";
import { FieldValues, Path } from "react-hook-form";
import { Input } from "../ui/input";

const FileUploader = <T extends FieldValues>({ formItem, control }: FileUploaderProps<T>) => {
  const fileTypes: Record<string, string[]> = {
    pdf: ["application/pdf"],
    photos: ["image/png", "image/jpeg", "image/jpg", "image/gif"],
    videos: ["video/mp4", "video/webm", "video/ogg"],
  };

  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files ? Array.from(event.target.files) : [];
    const filteredFiles = selectedFiles.filter((file) =>
      fileTypes[formItem.fileType].includes(file.type)
    );
    setFiles((prevFiles) => [...prevFiles, ...filteredFiles]);
  };

  const handleRemoveFile = (event: React.MouseEvent, index: number) => {
    event.preventDefault();
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);

    if (updatedFiles.length === 0 && fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <FormItem>
      <FormLabel>
        {formItem.label}
        {formItem.required && <span>*</span>}
      </FormLabel>
      <FormField
        control={control}
        name={formItem.name as Path<T>}
        render={({ field }) => (
          <FormControl>
            <Input
              ref={fileInputRef}
              type="file"
              multiple={formItem.multiple}
              accept={fileTypes[formItem.fileType].join(",")}
              onChange={(e) => {
                handleFileChange(e);
                field.onChange(e.target.files);
              }}
              className="mb-2"
            />
          </FormControl>
        )}
      />
      <div className="w-full h-auto">
        <div className={`mt-4 overflow-x-auto flex justify-stretch gap-2 w-auto ${formItem.fileType === 'pdf' ? 'flex-col' : 'flex-row'}`}>
          {files.map((file, index) => (
            <div key={index} className="relative p-2 border rounded-lg flex-none">
              <button
                onClick={(e) => handleRemoveFile(e, index)}
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs"
              >
                X
              </button>
              {formItem.fileType === "pdf" && <p>{file.name}</p>}
              {formItem.fileType === "photos" && (
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="aspect-square w-48 object-cover rounded-lg"
                />
              )}
              {formItem.fileType === "videos" && (
                <video controls className="w-full h-auto max-h-48 rounded-lg">
                  <source src={URL.createObjectURL(file)} type={file.type} />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
    </FormItem>
  );
};

export default FileUploader;
