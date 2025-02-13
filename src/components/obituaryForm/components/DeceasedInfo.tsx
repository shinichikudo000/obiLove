import { useFormContext } from 'react-hook-form';
import { TObituaryFormSchema } from '@/types/components/obituaryForm/obituaryForm';
import FormButtons from '../../formFields/FormButtons';
import DatePickerForm from '../../formFields/DatePickerForm';
import TextArrayInput from '../../formFields/TextArrayInput';
import TextInput from '../../formFields/TextInput';
import { FormItem } from '@/types/components/formFields/form';

const DeceasedInfo = ({ changeStep, currentStep }: { changeStep: (step: number) => void; currentStep: number }) => {
  const { control, watch } = useFormContext<TObituaryFormSchema>();

  const formItems: FormItem[] = [
    { name: "deceasedFirstName", label: "First Name", required: true, type: "text" },
    { name: "deceasedLastName", label: "Last Name", required: true, type: "text" },
    { name: "deceasedBirthDate", label: "Birth Date", required: true, type: "date" },
    { name: "dateOfPassing", label: "Date of Passing", required: true, type: "date" },
    { name: "wakeLocation", label: "Wake Address", required: true, type: "text" },
    { name: "dateOfInternment", label: "Internment Date", required: true, type: "date" },
    { name: "familyMembers", label: "Family Members", required: true, type: "text-array" },
  ];

  const formValues = watch();
  
  const isNextDisabled = formItems.some(({ name, required }) => {
    const value = formValues[name as keyof TObituaryFormSchema];
  
    if (required) {
      if (Array.isArray(value)) {
        return value.length === 0 || (value[0]?.trim() === ""); 
      }
      return !value;
    }
    return false;
  });

  return (
    <>
      <h2 className="text-lg font-bold text-center">Deceased Information</h2>

      {formItems.map((item) =>
        item.type === "text" ? (
          <TextInput key={item.name} formItem={item} control={control} />
        ) : item.type === "date" ? (
          <DatePickerForm key={item.name} formItem={item} control={control} />
        ) : item.type === "text-array" ? (
          <TextArrayInput key={item.name} formItem={item} control={control}/>
        ) : null
      )}
      
      <FormButtons changeStep={changeStep} currentStep={currentStep} isDisabled={isNextDisabled}/>
    </>
  );
};

export default DeceasedInfo;
