import FormButtons from '@/components/formFields/FormButtons';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { TObituaryFormSchema } from '@/types/components/obituaryForm/obituaryForm';
import { Checkbox } from '@/components/ui/checkbox';
import { useFormContext } from 'react-hook-form';

const TermsAndCondition = ({ step, changeStep, currentStep }: { step: number, changeStep: (step: number) => void; currentStep: number }) => {
  const { control, watch } = useFormContext<TObituaryFormSchema>();

  const isChecked = watch('termsAndConditions');
  const isNextDisabled = !isChecked

  return (
    <>
      <h2 className="text-2xl text-center">Dummy Terms And Conditions</h2>
      <p>
        1. Introduction<br />
        These are the dummy terms and conditions for using this service. By accessing or using our service, you agree to be bound by these fake terms.
      </p>

      <p>
        2. Use of Service<br />
        This service is provided "as is" with no guarantees of any kind. You agree to use this service at your own risk and acknowledge that nothing here is legally binding.
      </p>

      <p>
        3. User Responsibilities<br />
        - Do not misuse the service.<br />
        - Do not hold us accountable for anything.<br />
        - Any violation of these fake terms will result in imaginary consequences.
      </p>

      <p>
        4. Privacy Policy<br />
        We do not collect any real data, but if we did, we would probably keep it safe.
      </p>

      <p>
        5. Liability Disclaimer<br />
        We are not responsible for anything that happens while using this service. Any issues you encounter are purely hypothetical and should be treated as such.
      </p>

      <p>
        6. Termination<br />
        We reserve the right to terminate your imaginary access to this service at any time for no reason whatsoever.
      </p>

      <p>
        7. Changes to Terms<br />
        We may update these terms at any time. However, since these are fake, you do not need to worry about it.
      </p>

      <FormField
        control={control}
        name="termsAndConditions"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(checked === true)}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>
                I agree to the Dummy Terms and Conditions
              </FormLabel>
            </div>
          </FormItem>
        )}
      />

      <FormButtons step={step} changeStep={changeStep} currentStep={currentStep} isDisabled={isNextDisabled} />
    </>
  );
};

export default TermsAndCondition;
