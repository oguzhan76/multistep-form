import mobileBg from '../assets/bg-sidebar-mobile.svg';
import { ReactElement, useState } from "react";
import { useMediaQuery } from "react-responsive";
import PersonalForm from './PersonalInfoForm';
import type { PersonalInfoFormError } from './PersonalInfoForm';
import type { AddonsFormData, PersonalInfoFormData } from '../types/FormTypes';
import PlanForm from './PlanForm';
import { PlanOffers, AddonOffers } from '../Data/Data';
import { PlanFormData, Recurral, PlanType } from '../types/FormTypes';
import AddonsForm from './AddonsForm';

//Create object from addonOffers with only selected boolean as value.
const addonsFormData: AddonsFormData = {} as AddonsFormData;
Object.keys(AddonOffers).forEach((addonName) => {
  addonsFormData[addonName] = AddonOffers[addonName].selected;
  console.log(addonsFormData[addonName]);
})

export default function MultiStepForm() {
  const isDesktop: boolean = useMediaQuery({ minWidth: 940 });
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [pInfo, setPInfo] = useState<PersonalInfoFormData>({name: '', email: '', phone: ''});
  const [pInfoError, setPInfoError] = useState<PersonalInfoFormError>({name: null, email: null, phone: null});
  const [planData, setPlanData] = useState<PlanFormData>({ type: PlanType.ARCADE, recurral: Recurral.MONTHLY });
  const [addons, setAddons] = useState<AddonsFormData>(addonsFormData);

  const handlePlanChange = (planData: Partial<PlanFormData>) => {
    setPlanData(prev => ({...prev, ...planData}));
  }

  const FormPages: ReactElement[] = [
    <PersonalForm data={pInfo} onChange={setPInfo} error={pInfoError}/>,
    <PlanForm offers={PlanOffers} plan={planData} onChange={handlePlanChange}/>,
    <AddonsForm addons={addons} onChange={setAddons}/>
  ]

  const goNextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(currentStep === 0 && !validatePInfoFields())
      return;
    setCurrentStep(prev => prev + 1);
  }

  const goPrevStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentStep(prev => prev - 1);
  }

  // Returns true if all the fields are valid
  const validatePInfoFields = (): boolean => {
    const emptyField = 'This field is required';
    const errors: PersonalInfoFormError = {name: null, email: null, phone: null};
    if(!pInfo.name) errors.name = emptyField;

    const emailFormat = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(!pInfo.email) errors.email = emptyField;
    else if(!emailFormat.test(pInfo.email)) errors.email = "This field must be email format";
    
    const phoneFormat = /^[+][(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/g;
    if(!pInfo.phone) errors.phone = emptyField;
    else if(!phoneFormat.test(pInfo.phone)) errors.phone = "This field must be phone format"
    
    setPInfoError(errors);
    return !errors.name && !errors.email && !errors.phone
  }

  const buttonGroup = (
    <footer className="w-full p-4 ds:pr-12 ds:pl-14 bg-white flex justify-between flex-row-reverse">
      <button 
        className="w-24 h-10 ds:w-32 ds:h-12 text-sm ds:text-base text-alabaster bg-marine_blue hover:bg rounded-md ds:rounded-lg" 
        type='submit'
      >
        Next Step
      </button>
      {currentStep > 0 && <button className="text-cool_gray font-medium" onClick={(e) => goPrevStep(e)}>Go Back</button>}
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
          {FormPages[currentStep]}
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
      <form className='flex flex-col justify-between pt-10 items-center h-full' onSubmit={goNextStep} noValidate>
        <section className=''>
          <div className='flex justify-center gap-4'>
            <Step step={1} currentStep={currentStep} />
            <Step step={2} currentStep={currentStep} />
            <Step step={3} currentStep={currentStep} />
            <Step step={4} currentStep={currentStep} />
          </div>
          <section className='w-[344px] bg-white rounded-2xl relative'>
            {FormPages[currentStep]}
          </section>
        </section>
        {buttonGroup}
      </form>
    </div>
  )

  return isDesktop ? desktop : mobile;  
}



const Step = ({ step, text, currentStep }: { step: number, text?: string, currentStep: number }) => {

  const activeStyles = step === currentStep+1 ? "bg-light_blue text-black " : "";

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