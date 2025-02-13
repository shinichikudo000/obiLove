import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { TextInputProps } from '@/types/components/formFields/textInput';
import { FieldValues, Path, ControllerRenderProps } from 'react-hook-form';

const TextInput = <T extends FieldValues>({ formItem, control }: TextInputProps<T>) => {
    return (
      <FormField
        key={String(formItem.name)}
        control={control}
        name={formItem.name as Path<T>}
        render={({ field }: { field: ControllerRenderProps<T, Path<T>> }) => (
          <FormItem>
            <FormLabel>
              {formItem.label}
              {formItem.required && <span>*</span>}
            </FormLabel>
            <FormControl>
              <Input
                  type="text"
                  {...field}
                  required={formItem.required}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
};

export default TextInput;
