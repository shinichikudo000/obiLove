import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DatePickerFormProps } from "@/types/components/formFields/datePickerForm";
import { FieldValues, Path, ControllerRenderProps } from "react-hook-form";

const DatePickerForm = <T extends FieldValues>({ formItem, control }: DatePickerFormProps<T>) => {
  return (
    <FormField
      control={control}
      name={formItem.name as Path<T>}
      render={({ field }: { field: ControllerRenderProps<T, Path<T>> }) => {
        const valueAsDate = field.value ? new Date(field.value) : undefined;
        return (
          <FormItem className="flex flex-col">
            <FormLabel>{formItem.label}</FormLabel>
            <Popover modal={true}>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[240px] pl-3 text-left font-normal",
                      !valueAsDate && "text-muted-foreground"
                    )}
                  >
                    {valueAsDate ? format(valueAsDate, "PPP") : <span>Pick a date</span>}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 z-[999]" align="start">
                <Calendar
                  mode="single"
                  selected={valueAsDate}
                  onSelect={(date) => field.onChange(date ?? null)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {formItem.description && (
              <FormDescription>
                {formItem.description}
              </FormDescription>
            )}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default DatePickerForm;
