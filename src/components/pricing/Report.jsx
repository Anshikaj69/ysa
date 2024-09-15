import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import Container from "../layout/Container";

const Report = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full my-14 px-8">
      <Container>
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-1"></div>

          <div className="col-span-2 border border-[#253359] rounded p-10">
            <Stepper
              activeStep={activeStep}
              isLastStep={(value) => setIsLastStep(value)}
              isFirstStep={(value) => setIsFirstStep(value)}
              color="#253359"
            >
              <Step onClick={() => setActiveStep(0)} color="#253359">1</Step>
              <Step onClick={() => setActiveStep(1)}>2</Step>
              <Step onClick={() => setActiveStep(2)}>3</Step>
            </Stepper>
            <div className="mt-16 flex justify-between">
              <Button onClick={handlePrev} disabled={isFirstStep}>
                Prev
              </Button>
              <Button onClick={handleNext} disabled={isLastStep}>
                Next
              </Button>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
}

export default Report;