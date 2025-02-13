import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const FormButtons = ({ changeStep, currentStep, isDisabled }: { changeStep: (step: number) => void; currentStep: number, isDisabled?: boolean }) => {
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
                currentStep === 4 ? (
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