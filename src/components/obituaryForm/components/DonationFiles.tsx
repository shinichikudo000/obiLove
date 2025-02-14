import FileUploader from '@/components/formFields/FileUploader';
import FormButtons from '@/components/formFields/FormButtons';
import { FormItem } from '@/types/components/formFields/form';
import { TObituaryFormSchema } from '@/types/components/obituaryForm/obituaryForm';
import { useFormContext } from 'react-hook-form';

const DonationFiles = ({ step, changeStep, currentStep }: { step: number, changeStep: (step: number) => void; currentStep: number }) => {
    const { control } = useFormContext<TObituaryFormSchema>();
    
    const formItems: FormItem[] = [
        { name: "deathCertificate", label: "First Name", required: false, type: "file", multiple: false, fileType: "photos" },
        { name: "baranggayCertificate", label: "Last Name", required: false, type: "file", multiple: false, fileType: "photos" },
        { name: "governmentId", label: "Last Name", required: false, type: "file", multiple: false, fileType: "photos" },
        { name: "selfiePhoto", label: "Last Name", required: false, type: "file", multiple: false, fileType: "photos" },
    ];
  
    return (
      <>
        <h2 className="text-2xl text-center">For Donation</h2>
        <form>
          {formItems.map((item) => (
            <div key={item.name}>
              {item.type === "file" ? (
                <FileUploader 
                  formItem={item} 
                  control={control} 
                />
              ) : null}
            </div>
          ))}
          <FormButtons step={step} changeStep={changeStep} currentStep={currentStep} />
        </form>
      </>
    );
  }
export default DonationFiles