import FormButtons from '../../formFields/FormButtons';

const ReviewForm = ({ changeStep, currentStep }: { changeStep: (step: number) => void; currentStep: number }) => {
  return (
    <>
      <h2 className="text-2xl text-center">Review Form</h2>

      <FormButtons changeStep={changeStep} currentStep={currentStep} />
    </>
  );
}

export default ReviewForm