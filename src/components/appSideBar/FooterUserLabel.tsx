import { ReactNode } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const FooterUserLabel = ({ children }: {
    children?: ReactNode
}) => {
  return (
    <div className="flex justify-stretch items-center w-full h-full">
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="ml-2">
            <p className="font-semibold">My Account</p>
            <p className="font-normal">@example.com</p>
        </div>
        { children }
    </div>
  )
}

export default FooterUserLabel

//user info can be pass down through the context in tanstack router