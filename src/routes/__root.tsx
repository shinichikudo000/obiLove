import { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet, redirect } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useAuthStore } from '../store/authStore';
import { Toaster } from '../components/ui/toaster';

// Loader to fetch current user details
export async function currentUserLoader() {
  const currentUser = {
    'access-token': localStorage.getItem('access-token') || '',
    uid: localStorage.getItem('uid') || '',
    expiry: localStorage.getItem('expiry') || '',
    client: localStorage.getItem('client') || '',
  };
  return currentUser;
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  auth: ReturnType<typeof useAuthStore.getState>;
}>()({
  component: RootComponent,
  // beforeLoad: ({ context }) => {
  //   // if (!!context.auth.accessToken) {
  //   //   throw redirect({
  //   //     to: '/dashboard',
  //   //   });
  //   // } 
  // },
  notFoundComponent: () => <div>Page Not Found</div>,
});

// Root component
function RootComponent() {

  return (
    <section className="w-full h-full">
      <Outlet />
      <Toaster />
      <ReactQueryDevtools position="top-right" />
      <TanStackRouterDevtools position="bottom-right" />
    </section>
  );
}
