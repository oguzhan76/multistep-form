import arcadeIcon from '../assets/icon-arcade.svg';
import advancedIcon from '../assets/icon-advanced.svg';
import proIcon from '../assets/icon-pro.svg';
import { Offers } from "../types/DataTypes";
import { PlanType, PlanFormData } from '../types/FormTypes';
import { Recurral } from '../types/FormTypes';


type PlanFormProps = {
    offers: Offers,
    plan: PlanFormData,
    onChange: (plandata: Partial<PlanFormData>) => void
}

export default function PlanForm({ offers, plan, onChange }: PlanFormProps) {

    const handleRecurralToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked)
            onChange({ recurral: Recurral.YEARLY });
        else
            onChange({ recurral: Recurral.MONTHLY });
    }

    const handlePlanSelection = (e: React.MouseEvent<HTMLButtonElement>, plan: PlanType) => {
        e.preventDefault();
        onChange({ type: plan });
    }

    return (
        <div className="px-6 py-6 ds:pl-16 ds:pr-10 ds:pt-0 ds:pb-6">
            <h1 className="font-extrabold text-[24px] ds:text-[32px] text-marine_blue mb-1">Select your plan</h1>
            <p className="text-cool_gray mb-4 text-[16.5px] ds:text-[15.5px]">You have the option of monthly or yearly billing.</p>
            <section className='ds:mt-10 w-full flex flex-col ds:flex-row gap-3 ds:gap-5 text-marine_blue'>
                <button
                    className={`card p-4 ds:w-[136px] ds:flex-col ${plan.type === PlanType.ARCADE && 'selected-card'}`}
                    onClick={(e) => { handlePlanSelection(e, PlanType.ARCADE) }}
                >
                    <img src={arcadeIcon} />
                    <div className='ml-4 ds:ml-0 ds:mt-10 flex flex-col items-start'>
                        <h3 className="font-bold">Arcade</h3>
                        <p className='font-thin text-cool_gray text-sm'>{'$' + offers.arcade[plan.recurral] + (plan.recurral === 'monthly' ? '/mo' : '/yr')}</p>
                        {plan.recurral === 'yearly' && <p className='pt-1 text-xs font-medium font'>2 months free</p>}
                    </div>
                </button>
                <button
                    className={`card p-4 ds:w-[136px] ds:flex-col ${plan.type === PlanType.ADVANCED && 'selected-card'}`}
                    onClick={(e) => { handlePlanSelection(e, PlanType.ADVANCED) }}
                >
                    <img src={advancedIcon} />
                    <div className='ml-4 ds:ml-0 ds:mt-10 flex flex-col items-start'>
                        <h3 className="font-bold">Advanced</h3>
                        <p className='font-thin text-cool_gray text-sm'>{'$' + offers.advanced[plan.recurral] + (plan.recurral === 'monthly' ? '/mo' : '/yr')}</p>
                        {plan.recurral === 'yearly' && <p className='pt-1 text-xs font-medium font'>2 months free</p>}
                    </div>
                </button>
                <button
                    className={`card p-4 ds:w-[136px] ds:flex-col ${plan.type === PlanType.PRO && 'selected-card'}`}
                    onClick={(e) => { handlePlanSelection(e, PlanType.PRO) }}
                >
                    <img src={proIcon} />
                    <div className='ml-4 ds:ml-0 ds:mt-10 flex flex-col items-start'>
                        <h3 className="font-bold">Pro</h3>
                        <p className='font-thin text-cool_gray text-sm'>{'$' + offers.pro[plan.recurral] + (plan.recurral === 'monthly' ? '/mo' : '/yr')}</p>
                        {plan.recurral === 'yearly' && <p className='pt-1 text-xs font-medium font'>2 months free</p>}
                    </div>
                </button>
            </section>
            {/* Toggle Section */}
            <section>
                <div className="text-marine_blue flex bg-magnolia mt-6 ds:mt-10 justify-center h-12 items-center rounded-xl">
                    <p className={plan.recurral !== Recurral.MONTHLY ? 'text-cool_gray' : ''}>Monthly</p>
                    <div className='mx-4 flex justify-center items-center'>
                        <input
                            id='toggle'
                            className='w-0 h-0 invisible peer'
                            type="checkbox"
                            onChange={(e) => handleRecurralToggle(e)}
                            checked={plan.recurral === Recurral.YEARLY}
                        />
                        <label
                            className='relative cursor-pointer w-[2.4rem] h-[1.2rem] block rounded-[10rem] bg-marine_blue z-0 
                            hover:bg-purplish_blue focus:bg-purplish_blue peer-checked:*:translate-x-full peer-checked:*:left-[0.8rem]'
                            htmlFor="toggle"
                            tabIndex={0}
                        >
                            <span className='absolute w-[0.6rem] h-[0.6rem] bg-white top-[0.3rem] left-[0.3rem] rounded-full transition-transform'></span>
                        </label>

                    </div>
                    <p className={plan.recurral === Recurral.MONTHLY ? 'text-cool_gray' : ''}>Yearly</p>
                </div>
            </section>
        </div>
    )
}