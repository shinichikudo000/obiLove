import { useWindowSize } from "../../hooks/useWindowSize";
import { Card } from "../ui/card"
import { ReactNode } from "react";

const AuthFormContainer = ({ children }: {
    children: ReactNode
}) => {
    const { isMobile } = useWindowSize();
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <Card className={`
                ${isMobile ? 'w-full h-full border-0' : 'w-[500px]'}
                `}>
                {children}
            </Card>
        </div>
    )
}

export default AuthFormContainer