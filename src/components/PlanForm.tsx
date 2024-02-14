import arcadeIcon from '../assets/icon-arcade.svg';
import advancedIcon from '../assets/icon-advanced.svg';
import proIcon from '../assets/icon-pro.svg';
import { useRef, useState } from "react";
import { Plans } from "../types/DataTypes";

type PlanFormProps = {
    plans: Plans
}

export default function PlanForm({ plans }: PlanFormProps) {
    const [selectedPlan, setSelectedPlan] = useState();
    const [recurral, setRecurral] = useState<"monthly" | "yearly">("monthly");

    const handleRecurralToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.checked) setRecurral('yearly');
        else setRecurral('monthly');
    } 

    console.log(recurral);

    return (
        <div className="pl-4 pr-4 ds:pl-16 ds:pr-10 ds:pt-0 ds:pb-6">
            <h1 className="font-extrabold text-[32px] text-marine_blue mb-1">Select your plan</h1>
            <p className="text-cool_gray mb-8 text-[15.5px]">You have the option of montyly or yearly billing.</p>
            <div className='mt-10 flex w-full gap-5 text-marine_blue'>
                <button className="p-4 border rounded-lg w-[136px] h-fit flex flex-col">
                    <img src={arcadeIcon} />
                    <h3 className="mt-10 font-bold">Arcade</h3>
                    <p className='font-thin text-cool_gray text-sm'>{'$' + plans.arcade[recurral] + (recurral === 'monthly' ? '/mo' : '/yr')}</p>
                    {recurral === 'yearly' && <p className='pt-1 text-xs font-medium font'>2 months free</p>}
                </button>
                <button className="p-4 border rounded-lg w-[136px] h-fit flex flex-col">
                    <img src={advancedIcon} />
                    <h3 className="mt-10 font-bold">Advanced</h3>
                    <p className='font-thin text-cool_gray text-sm'>{'$' + plans.advanced[recurral] + (recurral === 'monthly' ? '/mo' : '/yr')}</p>
                    {recurral === 'yearly' && <p className='pt-1 text-xs font-medium font'>2 months free</p>}
                </button>
                <button className="p-4 border rounded-lg w-[136px] h-fit flex flex-col">
                    <img src={arcadeIcon} />
                    <h3 className="mt-10 font-bold">Arcade</h3>
                    <p className='font-thin text-cool_gray text-sm'>{'$' + plans.pro[recurral] + (recurral === 'monthly' ? '/mo' : '/yr')}</p>
                    {recurral === 'yearly' && <p className='pt-1 text-xs font-medium font'>2 months free</p>}
                </button>
            </div>
            <div>
                <div className="flex bg-magnolia mt-12 justify-center">
                    <p>Monthly</p>
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
                    <p>Yearly</p>
                </div>
            </div>
        </div>
    )
}