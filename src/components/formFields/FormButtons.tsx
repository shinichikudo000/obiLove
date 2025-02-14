import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const FormButtons = ({ step, changeStep, currentStep, isDisabled }: { step: number, changeStep: (step: number) => void; currentStep: number, isDisabled?: boolean }) => {
  return (
    <>
        <Separator />
        <div className="w-full flex mt-4 justify-end gap-4">
            {
                currentStep > 1 && (
                    <Button onClick={() => changeStep(currentStep - 1)} className="ml-auto bg-transparent text-accent-foreground hover:bg-accent">
                        Back
                    </Button>
                )
            }
            {
                currentStep === step ? (
                    <Button>
                        Submit
                    </Button>
                ) : (
                    <Button onClick={() => changeStep(currentStep + 1)} disabled={isDisabled}>
                        Next
                    </Button>
                )
            }
        </div>
    </>
  )
}

export default FormButtons