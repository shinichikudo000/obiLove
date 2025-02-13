import { API } from "@/_api/api";
import { TSignUpSchema } from "@/types/components/authForm";
import { useAuthStore } from "@/store/authStore";

const authenticateUser = async (data: TSignUpSchema) => {
    try {
        const res = await API.post('/auth', {
            email: data.email,
            password: data.password,
            password_confirmation: data.confirmPassword,
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

const handleAuthSuccess = (res: any) => {
    const headers = res.headers || {};

    // Set API default headers
    API.defaults.headers['uid'] = headers['uid'];
    API.defaults.headers['access-token'] = headers['access-token'];
    API.defaults.headers['client'] = headers['client'];
    API.defaults.headers['expiry'] = headers['expiry'];

    // Store in localStorage
    localStorage.setItem('uid', headers['uid']);
    localStorage.setItem('access-token', headers['access-token']);
    localStorage.setItem('client', headers['client']);
    localStorage.setItem('expiry', headers['expiry']);

    // Update Zustand store
    useAuthStore.setState({
        accessToken: headers['access-token'],
        uid: headers['uid'],
        expiry: Number(headers['expiry']),
        client: headers['client'],
    });
};

export { authenticateUser, handleAuthSuccess };
