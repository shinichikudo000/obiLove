import { TObituaryFormSchema } from '@/types/components/obituaryForm/obituaryForm';
import FormButtons from '../../formFields/FormButtons';
import FileUploader from '../../formFields/FileUploader';
import { useFormContext } from 'react-hook-form';
import { FormItem } from '@/types/components/formFields/form';
import TextAreaInput from '@/components/formFields/TextAreaInput';

const ObituaryPageContent = ({ changeStep, currentStep }: { changeStep: (step: number) => void; currentStep: number }) => {
  const { control } = useFormContext<TObituaryFormSchema>();
  
  const formItems: FormItem[] = [
    { name: "images", label: "First Name", required: false, type: "file", multiple: true, fileType: "photos" },
    { name: "videos", label: "Last Name", required: false, type: "file", multiple: false, fileType: "videos" },
    { name: "obituaryText", label: "Obituary Text", required: false, type: "text-area", placeholder: 'Write something about the deceased' },
  ];

  return (
    <>
      <h2 className="text-2xl text-center">Obituary Page Content</h2>
      <form>
        {formItems.map((item) => (
          <div key={item.name}>
            {item.type === "file" ? (
              <FileUploader 
                formItem={item} 
                control={control} 
              />
            ) : item.type === "text-area" ? (
              <TextAreaInput formItem={item} control={control} />
            ) : null}
          </div>
        ))}
        <FormButtons changeStep={changeStep} currentStep={currentStep} />
      </form>
    </>
  );
}

export default ObituaryPageContent;
