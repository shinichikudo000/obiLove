import { createFileRoute } from '@tanstack/react-router'
import {
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import SignInForm from '../components/authForm/SignInForm'
import AuthFormContainer from '@/components/authForm/AuthFormContainer'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/signIn')({
  component: SignInComponent,
})

function SignInComponent() {
  return (
    <AuthFormContainer>
      <CardHeader>
        <CardTitle className='text-center'>OBILOVE</CardTitle>
      </CardHeader>
      <Separator className='mb-4'/>
      <CardContent>
        <SignInForm /> 
      </CardContent>
    </AuthFormContainer>
  )
}
