import { Bell } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import ObituarySearchBar from '../searchBar/ObituarySearchBar'

const NavBar = () => {
  return (
    <header className='w-full h-[70px] shadow-shadow'>
        <nav className='h-full flex justify-center'> 
            <ul className='w-full max-w-[1500px] h-full flex justify-normal gap-[32px]'>
                <li className='h-full flex justify-center items-center'>
                    <p>logo</p>
                </li>
                <li className='ml-auto mr-[64px]'>
                    <ObituarySearchBar />
                </li>
                <li className='h-full flex flex-col justify-center items-center'>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Bell />
                            </TooltipTrigger>
                            <TooltipContent>
                            <p>Notifications</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </li>
                <li className='h-full flex flex-col justify-center items-center'>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Avatar className='h-[32px] w-[32px]'>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent>
                            <p>Account</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar