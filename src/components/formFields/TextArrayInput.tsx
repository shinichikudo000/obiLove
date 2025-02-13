import { ArrayPath, FieldValues, Path, useFieldArray } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TextArrayInputProps } from "@/types/components/formFields/textArrayInput";

const TextArrayInput = <T extends FieldValues>({ formItem, control }: TextArrayInputProps<T>) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: formItem.name as ArrayPath<T>, 
  });

  const handleAppend = () => {
    const newItem = ''; 
    append(newItem as any);
  };

  return (
    <FormItem>
      <FormLabel>
        {formItem.label} {formItem.required && <span>*</span>}
      </FormLabel>
      <div className="space-y-2">
        {fields.map((field, index) => (
          <FormField
            key={field.id}
            control={control}
            name={`${String(formItem.name)}.${index}` as Path<T>}
            render={({ field }) => (
              <div className="flex items-center gap-2">
                <FormControl>
                  <Input type={formItem.type || "text"} {...field} required={formItem.required} />
                </FormControl>
                {fields.length && (
                  <Button type="button" variant="destructive" onClick={() => remove(index)}>
                    X
                  </Button>
                )}
              </div>
            )}
          />
        ))}
      </div>
      <Button type="button" onClick={handleAppend} className="mt-2">
        Add {formItem.label}
      </Button>
      <FormMessage />
    </FormItem>
  );
};

export default TextArrayInput;
