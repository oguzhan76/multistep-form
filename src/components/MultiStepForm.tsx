import mobileBg from '../assets/bg-sidebar-mobile.svg';
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Form_1 from './Form_1';

export const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const isDesktop: boolean = useMediaQuery({ minWidth: 940 });

  const desktop = (
    <div className='flex justify-center pt-[100px]'>
      <div className="bg-white p-4 ds:w-[940px] h-[600px] ds:rounded-2xl flex">
        <div className="bg-desktop-sidebar pl-8 pt-10 w-[274px] ds:rounded-xl">
          <Step step={1} text='your info' currentStep={currentStep} />
          <Step step={2} text='select plan' currentStep={currentStep} />
          <Step step={3} text='add-ons' currentStep={currentStep} />
          <Step step={4} text='summary' currentStep={currentStep} />
        </div>
        <div className="bg-white p-10 font-medium flex-grow">
          <div className="w-full flex justify-between">
            <button className="text-cool_gray">Go Back</button>
            <button className="w-28 h-11 bg-marine_blue rounded-lg text-alabaster" >Next Step</button>
          </div>
        </div>
      </div>
    </div>
  )

  const mobile = (
    <div className='w-[375px] m-auto h-screen'>
      <div className="relative">
        <img className='absolute z-[-1]' src={mobileBg} />
      </div>
      <div className='flex flex-col justify-between pt-10 items-center h-full'>
        <section className='relative flex gap-4'>
          <Step step={1} currentStep={currentStep}/>
          <Step step={2} currentStep={currentStep}/>
          <Step step={2} currentStep={currentStep}/>
          <Step step={2} currentStep={currentStep}/>  
        </section>
        <section className='w-[350px] bg-white rounded-2xl relative'>
          <Form_1 />
        </section>
        <section className="w-full p-4 bg-white flex justify-between">
            <button className="text-cool_gray">Go Back</button>
            <button className="w-28 h-11 bg-marine_blue rounded text-alabaster" >Next Step</button>
        </section>
      </div>
    </div>
  )

  return isDesktop ? desktop : mobile;
}



const Step = ({ step, text, currentStep }: { step: number, text?: string, currentStep: number }) => {

  const activeStyles = step === currentStep ? "bg-light_blue text-black " : "";

  return (
    <div className="text-sm text-alabaster font-bold mb-7">
      <div className="flex">
        <p className={`min-w-8 min-h-8 border border-white rounded-2xl my-auto flex justify-center items-center ${activeStyles}`}>
          {step}
        </p>
        {text && <div className="ml-4">
          <h2 className="font-thin text-xs text-cool_gray">STEP {step}</h2>
          <h4 className="uppercase">{text}</h4> 
          </div>
        }
      </div>
    </div>
  )
}