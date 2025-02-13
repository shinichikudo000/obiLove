import { useToast } from '../../hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Progress } from '@radix-ui/react-progress';
import { Link, useNavigate } from '@tanstack/react-router';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { useWindowSize } from '@/hooks/useWindowSize';
import { signUpSchema, TSignUpSchema } from '@/types/components/authForm';
import { authenticateUser } from '@/utils/components/authForm/signUpForm';

const SignUpForm = () => {
  const [formError, setFormError] = useState<string | null>(null);

  const form = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { isMobile } = useWindowSize();
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const onSubmit = async (data: TSignUpSchema) => {
    setFormError(null); // Clear any previous errors
    try {
      const response = await authenticateUser(data);
      if (response && response.success) {
        toast({
          title: 'Account Creation Successful',
          description: 'Your new account has been successfully created.',
        });
        navigate({
          to: response.redirectTo
        });
      }
    } catch (error: any) {
      if (error.message.includes('firstName')) {
        form.setError('firstName', { message: error.message });
      } else if (error.message.includes('lastName')) {
        form.setError('lastName', { message: error.message });
      } else if (error.message.includes('email')) {
        form.setError('email', { message: error.message });
      } else if (error.message.includes('password')) {
        form.setError('password', { message: error.message });
      } else {
        setFormError(error.message || 'An unexpected error occurred.');
      }
      // toast({
      //   title: 'Error',
      //   description: error.message || 'An unexpected error occurred.',
      //   variant: 'destructive',
      // });
    }
  };

  const passwordValidation = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const errors: string[] = [];
    if (value.length < 8) errors.push('Password must be at least 8 characters long');
    if (!/[A-Z]/.test(value)) errors.push('Password must contain at least one uppercase letter');
    if (!/[a-z]/.test(value)) errors.push('Password must contain at least one lowercase letter');
    if (!/[0-9]/.test(value)) errors.push('Password must contain at least one number');
    if (!/[#?!@$%^&*-]/.test(value)) errors.push('Password must contain at least one special character (#?!@$%^&*-)');

    if (errors.length > 0) {
      form.setError('password', { type: 'manual', message: errors.join(', ') });
    } else {
      form.clearErrors('password');
    }
  }

  return (
    <Form {...form}>
      <div>
        <h2 className="font-sourceCodePro text-2xl text-center">Create New Account</h2>
        <p className="font-sourceCodePro text-lg text-center">Enter your details</p>
        {formError && (
          <p className="text-red-600 font-oxygen text-sm mt-2 text-center" role="alert" aria-live="assertive">
            {formError}
          </p>
        )}
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4 text-left">
          <div className={`w-full flex ${!isMobile ? 'justify-stretch gap-3' : 'flex-col gap-5'}`}>
            <FormField control={form.control} name="firstName" render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-oxygen">First Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Juan" {...field} className="font-oxygen" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="lastName" render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-oxygen">Last Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="De la Cruz" {...field} className="font-oxygen" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel className="font-oxygen">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} className="font-oxygen" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="password" render={({ field }) => (
            <FormItem>
              <FormLabel className="font-oxygen">Password</FormLabel>
              <FormControl>
              <Input 
                type="password" 
                placeholder="Password" 
                {...field} 
                className="font-oxygen"
                onChange={(e) => {
                  field.onChange(e)
                  passwordValidation(e)
                }}
              />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="confirmPassword" render={({ field }) => (
            <FormItem>
              <FormLabel className="font-oxygen">Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Confirm Password" {...field} className="font-oxygen" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <Button type="submit" disabled={form.formState.isSubmitting} className="shad-button_primary font-sourceCodePro">
            {form.formState.isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
          {form.formState.isSubmitting && <Progress value={50} />}
          <p className="font-oxygen text-center">
            Already have an account? <Link to="/signIn" className=''>Log in</Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SignUpForm;
