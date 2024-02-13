import mobileBg from '../assets/bg-sidebar-mobile.svg';
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Form_1 from './Form_1';
import type { PersonalInfoFormError } from './Form_1';
import type { personalInfoData } from '../types/FormTypes';


// const data: Form1Data = { name: '', email: '', phone: '' }

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [pInfo, setPInfo] = useState<personalInfoData>({name: '', email: '', phone: ''});
  const [pInfoError, setPInfoError] = useState<PersonalInfoFormError>({name: null, email: null, phone: null});

  const isDesktop: boolean = useMediaQuery({ minWidth: 940 });

  const goNextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(currentStep === 1) console.log(validatePInfoFields());
      return
    setCurrentStep(prev => prev + 1);
  }

  const goPrevStep = () => {
    setCurrentStep(prev => prev - 1);
  }

  const validatePInfoFields = () => {
    const emptyField = 'This field is required';
    const errors: PersonalInfoFormError  = { 
      name: pInfo.name ? null : emptyField,
      email: pInfo.email ? null : emptyField,
      phone: pInfo.phone ? null : emptyField
    }
    setPInfoError(errors);
    return !!errors.name || !!errors.email || !!errors.phone
  }

  const buttonGroup = (
    <footer className="w-full p-4 bg-white flex justify-between flex-row-reverse">
      <button 
        className="w-28 h-11 text-alabaster bg-marine_blue hover:bg rounded ds:rounded-lg" 
        type='submit'
      >
        Next Step
      </button>
      {currentStep > 1 && <button className="text-cool_gray" onClick={goPrevStep}>Go Back</button>}
    </footer>
  )

  const desktop = (
    <div className='flex justify-center pt-[100px]'>
      <div className="bg-white p-4 ds:w-[940px] h-[600px] ds:rounded-2xl flex">
        <section className="bg-desktop-sidebar pl-8 pt-10 w-[274px] ds:rounded-xl">
          <Step step={1} text='your info' currentStep={currentStep} />
          <Step step={2} text='select plan' currentStep={currentStep} />
          <Step step={3} text='add-ons' currentStep={currentStep} />
          <Step step={4} text='summary' currentStep={currentStep} />
        </section>
        <form 
          className="bg-white p-10 pb-0 font-medium flex-grow flex flex-col justify-between" 
          onSubmit={e => goNextStep(e)}
          noValidate
        >
          <section>
            <Form_1 data={pInfo} onChange={setPInfo} error={pInfoError}/>
          </section>
          {buttonGroup}
        </form>
      </div>
    </div>
  )

  const mobile = (
    <div className='w-[375px] m-auto h-screen'>
      <div className="relative">
        <img className='absolute z-[-1]' src={mobileBg} />
      </div>
      <form className='flex flex-col justify-between pt-10 items-center h-full' onSubmit={goNextStep}>
        <section className=''>
          <div className='flex justify-center gap-4'>
            <Step step={1} currentStep={currentStep} />
            <Step step={2} currentStep={currentStep} />
            <Step step={3} currentStep={currentStep} />
            <Step step={4} currentStep={currentStep} />
          </div>
          <section className='w-[350px] bg-white rounded-2xl relative'>
            <Form_1 data={pInfo} onChange={setPInfo} error={pInfoError}/>
          </section>
        </section>
        {buttonGroup}
      </form>
    </div>
  )
    // console.log(PInfoHasEmptyField());
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