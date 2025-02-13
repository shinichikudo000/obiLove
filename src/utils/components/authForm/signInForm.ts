import { API } from "@/_api/api";
import { TSignInSchema } from "@/types/components/authForm";
import { handleAuthSuccess } from "./signUpForm";

export const authenticateUser = async (data: TSignInSchema) => {
    try {
      const res = await API.post('/auth/sign_in', {
        email: data.email,
        password: data.password,
      });
  
      if (res.status === 200) {
        handleAuthSuccess(res);
        return { success: true, redirectTo: '/dashboard' };
      }
    } catch (error: any) {
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors.full_messages;
        throw new Error(errors.join(', '));
      } else {
        throw new Error('An error occurred. Please try again.');
      }
    }
};