import { toast } from '../hooks/use-toast';

// Define the type for the toast options
interface ToastOptions {
  title: string;       // Required string for the title
  description?: string; // Optional string for the description
}

export const useToastStore = () => ({
  triggerToast: ({ title, description }: ToastOptions) =>
    toast({
      title,
      description,
    }),
});