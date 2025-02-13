import { createFileRoute } from '@tanstack/react-router'
import {
    CardContent,
    CardHeader,
    CardTitle,
  } from "../components/ui/card"
import SignUpForm from '../components/authForm/SignUpForm'
import AuthFormContainer from '@/components/authForm/AuthFormContainer'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/signUp')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
      <AuthFormContainer>
        <CardHeader>
          <CardTitle className='text-center'>OBILOVE</CardTitle>
        </CardHeader>
        <Separator className='mb-4'/>
        <CardContent>
          <SignUpForm /> 
        </CardContent>
      </AuthFormContainer>
    )
}
