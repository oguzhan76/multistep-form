import arcadeIcon from '../assets/icon-arcade.svg';
import advancedIcon from '../assets/icon-advanced.svg';
import proIcon from '../assets/icon-pro.svg';
import { useState } from "react";
import { Offers } from "../types/DataTypes";
import { PlanType, planData } from '../types/FormTypes';
import { Recurral } from '../types/FormTypes';


type PlanFormProps = {
    offers: Offers,
    plan: planData,
    onChange: (plandata: Partial<planData>) => void
}

export default function PlanForm({ offers, plan, onChange }: PlanFormProps) {
    // const [selectedPlan, setSelectedPlan] = useState<PlanType>(planData.type);
    // const [recurral, setRecurral] = useState<Recurral>(Recurral.MONTHLY);

    const handleRecurralToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.checked) {
            // setRecurral(Recurral.YEARLY);
            onChange({recurral: Recurral.YEARLY});
        }
        else {
            // setRecurral(Recurral.MONTHLY);
            onChange({recurral: Recurral.MONTHLY});
        }
    } 

    const handlePlanSelection = (e: React.MouseEvent<HTMLButtonElement>, plan: PlanType ) => {
        e.preventDefault();
        console.log(plan, 'is selected');
        onChange({type: plan});
    }

    return (
        <div className="pl-4 pr-4 ds:pl-16 ds:pr-10 ds:pt-0 ds:pb-6">
            <h1 className="font-extrabold text-[32px] text-marine_blue mb-1">Select your plan</h1>
            <p className="text-cool_gray mb-8 text-[15.5px]">You have the option of montyly or yearly billing.</p>
            <div className='mt-10 flex w-full gap-5 text-marine_blue'>
                <button 
                    className={`p-4 border border-light_gray rounded-lg w-[136px] h-fit flex flex-col hover:border-purplish_blue ${plan.type === PlanType.ARCADE && 'selectedPlan'}`}
                    onClick={(e) => {handlePlanSelection(e, PlanType.ARCADE)}}
                >
                    <img src={arcadeIcon} />
                    <h3 className="mt-10 font-bold">Arcade</h3>
                    <p className='font-thin text-cool_gray text-sm'>{'$' + offers.arcade[plan.recurral] + (plan.recurral === 'monthly' ? '/mo' : '/yr')}</p>
                    {plan.recurral === 'yearly' && <p className='pt-1 text-xs font-medium font'>2 months free</p>}
                </button>
                <button 
                    className={`p-4 border border-light_gray rounded-lg w-[136px] h-fit flex flex-col hover:border-purplish_blue ${plan.type === PlanType.ADVANCED && 'selectedPlan'}`}
                    onClick={(e) => {handlePlanSelection(e, PlanType.ADVANCED)}}
                >
                    <img src={advancedIcon} />
                    <h3 className="mt-10 font-bold">Advanced</h3>
                    <p className='font-thin text-cool_gray text-sm'>{'$' + offers.advanced[plan.recurral] + (plan.recurral === 'monthly' ? '/mo' : '/yr')}</p>
                    {plan.recurral === 'yearly' && <p className='pt-1 text-xs font-medium font'>2 months free</p>}
                </button>
                <button 
                    className={`p-4 border border-light_gray rounded-lg w-[136px] h-fit flex flex-col hover:border-purplish_blue ${plan.type === PlanType.PRO && 'selectedPlan'}`}
                    onClick={(e) => {handlePlanSelection(e,PlanType.PRO)}}
                >
                    <img src={proIcon} />
                    <h3 className="mt-10 font-bold">Pro</h3>
                    <p className='font-thin text-cool_gray text-sm'>{'$' + offers.pro[plan.recurral] + (plan.recurral === 'monthly' ? '/mo' : '/yr')}</p>
                    {plan.recurral === 'yearly' && <p className='pt-1 text-xs font-medium font'>2 months free</p>}
                </button>
            </div>
            <div>
                <div className="text-marine_blue flex bg-magnolia mt-10 justify-center h-12 items-center rounded-xl">
                    <p className={plan.recurral !== 'monthly' ? 'text-cool_gray' : ''}>Monthly</p>
                    <div className='mx-4 flex justify-center items-center'>
                        <input
                            id='toggle'
                            className='w-0 h-0 invisible peer'
                            type="checkbox"
                            onChange={(e) => handleRecurralToggle(e)}
                        />
                        <label
                            className='relative cursor-pointer w-[2.4rem] h-[1.2rem] block rounded-[10rem] bg-marine_blue z-0 
                            hover:bg-purplish_blue peer-checked:*:translate-x-full peer-checked:*:left-[0.8rem]'
                            htmlFor="toggle"
                        >
                            <span className='absolute w-[0.6rem] h-[0.6rem] bg-white top-[0.3rem] left-[0.3rem] rounded-full transition-transform'></span>
                        </label>

                    </div>
                    <p className={plan.recurral === 'monthly' ? 'text-cool_gray' : ''}>Yearly</p>
                </div>
            </div>
        </div>
    )
}