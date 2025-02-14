import FormButtons from '../../formFields/FormButtons';

const ReviewForm = ({ step, changeStep, currentStep }: { step: number, changeStep: (step: number) => void; currentStep: number }) => {
  return (
    <>
      <h2 className="text-2xl text-center">Review Form</h2>

      <FormButtons step={step} changeStep={changeStep} currentStep={currentStep} />
    </>
  );
}

export default ReviewForm