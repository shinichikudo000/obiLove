import { ControllerRenderProps, FieldValues, Path } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Textarea } from '../ui/textarea';
import { TextAreaInputProps } from '@/types/components/formFields/textAreaInput';

const TextAreaInput = <T extends FieldValues>({ formItem, control }: TextAreaInputProps<T>) => {
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
                <Textarea
                    required={formItem.required}
                    placeholder={formItem.placeholder}
                    className="resize-none"
                    {...field}
                />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
}

export default TextAreaInput