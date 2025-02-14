import { useFormContext } from 'react-hook-form';
import { TObituaryFormSchema } from '@/types/components/obituaryForm/obituaryForm';
import FormButtons from '../../formFields/FormButtons';
import TextInput from '../../formFields/TextInput';
import { FormItem } from '@/types/components/formFields/form';

const PersonalInfo = ({ step, changeStep, currentStep }: { step: number, changeStep: (step: number) => void; currentStep: number }) => {
  const { control, watch } = useFormContext<TObituaryFormSchema>();
  
  const formItems: FormItem[] = [
    { name: 'email', label: 'Email', required: true, type: "email" },
    { name: 'phoneNumber', label: 'Phone Number', required: true, type: "text"},
    { name: 'address', label: 'Address', required: true, type: "text" }
  ];

  const formValues: Partial<TObituaryFormSchema> = watch();
  const isNextDisabled = formItems.some(({ name, required }) => required && !formValues[name as keyof TObituaryFormSchema]);

  return (
    <>
      {formItems.map((item) => (
        (item.type === "text" || item.type === "email") && (
          <TextInput key={item.name} formItem={item} control={control} />
        )
      ))}

      <FormButtons step={step} changeStep={changeStep} currentStep={currentStep} isDisabled={isNextDisabled} />
    </>
  );
};

export default PersonalInfo;
