import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Separator } from '../ui/separator';
import { Progress } from '../ui/progress';
import { FormProvider, useForm } from 'react-hook-form';
import { obituaryFormSchema, TObituaryFormSchema } from '@/types/components/obituaryForm/obituaryForm';
import { zodResolver } from '@hookform/resolvers/zod';
import PersonalInfo from './components/PersonalInfo';
import DeceasedInfo from './components/DeceasedInfo';
import ObituaryPageContent from './components/ObituaryPageContent';
import ReviewForm from './components/ReviewForm';
import { useUserStore } from '@/store/userStore';
import { useWindowSize } from '@/hooks/useWindowSize';
import TermsAndCondition from './components/TermsAndCondition';
import DonationFiles from './components/DonationFiles';
import { Obituary, useObituaryStore } from '@/store/obituaryStore';

const ObituaryForm = ({ initialData, onClose }: { initialData?: Obituary, onClose: () => void }) => {
  const user = useUserStore((state) => state.user);

  const form = useForm<TObituaryFormSchema>({
    resolver: zodResolver(obituaryFormSchema),
    defaultValues: {
      firstName: initialData?.firstName || user?.firstName || '',
      lastName: initialData?.lastName || user?.lastName || '',
      email: initialData?.email || user?.email || '',
      phoneNumber: initialData?.phoneNumber || user?.phoneNumber || '',
      address: initialData?.address || user?.address || '',

      deceasedFirstName: initialData?.deceasedFirstName || '',
      deceasedLastName: initialData?.deceasedLastName || '',
      wakeLocation: initialData?.wakeLocation || '',
      familyMembers: initialData?.familyMembers || [],
      funeralServiceProvider: initialData?.funeralServiceProvider || [],

      images: initialData?.images || [],
      videos: initialData?.videos || [],
      obituaryText: initialData?.obituaryText || ''
    }
  });
  
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);
  const { isMobile } = useWindowSize();

  const formSteps = [
    { step: 1, component: TermsAndCondition, description: 'Read and ' },
    { step: 2, component: PersonalInfo, description: 'Provide your personal details for contact and verification.' },
    { step: 3, component: DeceasedInfo, description: 'Enter essential information about the deceased.' },
    { step: 4, component: ObituaryPageContent, description: 'Compose and customize the obituary content.' },
    { step: 5, component: DonationFiles, description: 'Add files to receive donations' },
    { step: 6, component: ReviewForm, description: 'Review and confirm all details before submission.' }
  ];

  const changeStep = (step: number) => {
    setCurrentStep(step);
    setProgress(((step - 1) / (formSteps.length - 1)) * 100);
  };

  const step = formSteps.length
  const addObituary = useObituaryStore((state) => state.addObituary); 
  const updateObituary = useObituaryStore((state) => state.updateObituary);

  return (
    <Dialog>
      <DialogTrigger>Create</DialogTrigger>
      <DialogContent 
        className={`overflow-y-auto ${isMobile ? 'h-[100vh] w-[100vw]' : 'max-h-[700px]'}`}
        >
        {/* onPointerDownOutside={(e) => e.preventDefault()} */}
        <DialogHeader>
          <DialogTitle>Obituary Form</DialogTitle>
          <DialogDescription>{formSteps[currentStep - 1].description}</DialogDescription>
          <Separator />
          <Progress value={progress} />
        </DialogHeader>

         <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit((data) => {
              if (initialData) {
                updateObituary({ ...data, id: initialData.id });
              } else {
                addObituary(data);
              }
              form.reset();
              onClose();
            })}
          >
            {React.createElement(formSteps[currentStep - 1].component, { changeStep, currentStep, step })}

            <div className="error-messages">
              {Object.keys(form.formState.errors).map((field) => {
                const error = form.formState.errors[field as keyof TObituaryFormSchema];
                return error ? <p key={field} className="text-red-600">{error.message}</p> : null;
              })}
            </div>
          </form>
        </FormProvider>
        
      </DialogContent>
    </Dialog>
  );
};

export default ObituaryForm;
