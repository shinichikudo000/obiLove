import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useToast } from '../../hooks/use-toast';
import { Progress } from '../ui/progress';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { signInSchema, TSignInSchema } from '@/types/components/authForm';
import { authenticateUser } from '@/utils/components/authForm/signInForm';

const SignInForm = () => {
  const [formError, setFormError] = useState<string | null>(null);

  const form = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const navigate = useNavigate();
  const { toast } = useToast();

  const onSubmit = async (data: TSignInSchema) => {
    setFormError(null);
    try {
      const response = await authenticateUser(data);
      if (response && response.success) {
        toast({
          title: 'Welcome to Dashboard',
          description: 'You have successfully signed in.',
        });
        navigate({
            to: response.redirectTo
        });
      }
    } catch (error: any) {
      setFormError(error.message || 'An unexpected error occurred.');
      toast({
        title: 'Error',
        description: error.message || 'An unexpected error occurred.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Form {...form}>
      <div>
        <h2 className='font-sourceCodePro text-2xl text-center'>Sign In</h2>
        <p className='font-sourceCodePro text-lg text-center'>Enter credentials</p>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4 text-left">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='font-oxygen'>Email</FormLabel>
                <FormControl>
                  <Input type='email' placeholder="Email" {...field} className='font-oxygen' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='font-oxygen'>Password</FormLabel>
                <FormControl>
                  <Input type='password' placeholder="Password" {...field} className='font-oxygen' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={form.formState.isSubmitting} className='shad-button_primary font-sourceCodePro'>
            Sign in
          </Button>
          {form.formState.isSubmitting && <Progress value={33} />}
          <p className='font-oxygen text-center'>
            Doesn't have an account? <Link to='/signUp'>Sign up</Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SignInForm;
