import AppLayout from '../layout/appLayout';
import { useToastStore } from '../store/toastStore';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authed')({
  // beforeLoad: ({ context, location }) => {
  //   // const { triggerToast } = useToastStore()
    
  //   // if (!context.auth.accessToken) {
  //   //   triggerToast({
  //   //     title: 'You must be signed in to access this page!',
  //   //     description: 'Please sign in to continue.',
  //   //   })

  //   //   throw redirect({
  //   //   to: '/signIn',
  //   //     search: {
  //   //       redirect: location.href,
  //   //     },
  //   //   });
  //   // }
  // },
  component: AuthedComponent
})

function AuthedComponent() {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  )
}