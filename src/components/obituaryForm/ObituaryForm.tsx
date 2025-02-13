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

const ObituaryForm = () => {
  const user = useUserStore((state) => state.user);

  const form = useForm<TObituaryFormSchema>({
    resolver: zodResolver(obituaryFormSchema),
    defaultValues: {
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
      phoneNumber: user?.phoneNumber || '',
      address: user?.address || '',

      deceasedFirstName: '',
      deceasedLastName: '',
      // deceasedBirthDate: new Date(),
      // dateOfPassing: new Date(),
      wakeLocation: '',
      familyMembers: [],
      funeralServiceProvider: [],

      images: [],
      videos: [],
      obituaryText: ''
    }
  });
  
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);
  const { isMobile } = useWindowSize();

  const formSteps = [
    { step: 1, component: PersonalInfo, description: 'Provide your personal details for contact and verification.' },
    { step: 2, component: DeceasedInfo, description: 'Enter essential information about the deceased.' },
    { step: 3, component: ObituaryPageContent, description: 'Compose and customize the obituary content.' },
    { step: 4, component: ReviewForm, description: 'Review and confirm all details before submission.' }
  ];

  const changeStep = (step: number) => {
    setCurrentStep(step);
    setProgress(((step - 1) / (formSteps.length - 1)) * 100);
  };

  return (
    <Dialog>
      <DialogTrigger>Create</DialogTrigger>
      <DialogContent 
        className={`overflow-y-auto ${isMobile ? 'h-[100vh] w-[100vw]' : 'max-h-[700px]'}`}
        onPointerDownOutside={(e) => e.preventDefault()}>
        
        <DialogHeader>
          <DialogTitle>Obituary Form</DialogTitle>
          <DialogDescription>{formSteps[currentStep - 1].description}</DialogDescription>
          <Separator />
          <Progress value={progress} />
        </DialogHeader>

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(() => console.log('Submitting...'))} className="flex flex-col gap-2">
            {React.createElement(formSteps[currentStep - 1].component, { changeStep, currentStep })}
          </form>
        </FormProvider>
        
      </DialogContent>
    </Dialog>
  );
};

export default ObituaryForm;
