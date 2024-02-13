import arcadeIcon from '../assets/icon-arcade.svg';
import advancedIcon from '../assets/icon-advanced.svg';
import proIcon from '../assets/icon-pro.svg';
import { useState } from "react";
import { Plans } from "../types/DataTypes";

type PlanFormProps = {
    plans: Plans
}

export default function PlanForm({ plans }: PlanFormProps) {
    const [selectedPlan, setSelectedPlan] = useState();
    const [recurral, setRecurral] = useState<"monthly" | "yearly">("monthly");

    console.log(plans);

    return (
        <div className="pl-4 pr-4 ds:pl-16 ds:pr-10 ds:pt-0 ds:pb-6">
            <h1 className="font-extrabold text-[32px] text-marine_blue mb-1">Select your plan</h1>
            <p className="text-cool_gray mb-8 text-[15.5px]">You have the option of montyly or yearly billing.</p>
            <div className='mt-10 flex w-full gap-5'>
                <PlanButton
                    icon={arcadeIcon}
                    title="Arcade"
                    subTitle={plans.arcade[recurral]}
                />                
                <PlanButton
                    icon={advancedIcon}
                    title="Pro"
                    subTitle={plans.advanced[recurral]}
                />
                <PlanButton
                    icon={proIcon}
                    title="Pro"
                    subTitle={plans.pro[recurral]}
                />
            </div>
            <div>

            </div>
        </div>
    )
}

type PlanButtonProps = {
    icon: string,
    title: string,
    subTitle: string
    selected?: boolean
}

function PlanButton({ icon, title, subTitle, selected }: PlanButtonProps) {
    return (
        <button className="p-4 border rounded-lg w-[136px] h-40">
            <img src={icon} />
            <h3 className="">{title}</h3>
            <p>{subTitle}</p>
        </button>
    )
}