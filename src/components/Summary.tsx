import { AddonsFormData, PlanFormData } from "../types/FormTypes";
import { PlanOffers, AddonOffers } from "../Data/Data";


type SummaryProps = {
    plan: PlanFormData,
    addons: AddonsFormData,
    totalPrice: number,
    reselectPlan: () => void,
}

export default function Summary({ plan, addons, totalPrice, reselectPlan }: SummaryProps) {

    const selectedAddons: string[] = [];
    Object.keys(addons).forEach((key: string) => {
        if (addons[key])
            selectedAddons.push(key);
    });

    const recurringAbbr: string = plan.recurring === 'yearly' ? '/yr' : '/mo';

    return (
        <div className=" px-6 py-7 ds:px-4 ds:pl-16 ds:pr-10 ds:pt-0 ds:pb-6">
            <h1 className="font-extrabold text-[24px] ds:text-[32px] text-marine_blue mb-1">Finishing up</h1>
            <p className="text-cool_gray mb-6 ds:mb-8 text-[15.5px]">Double-check everything looks OK before confirming.</p>
            <div className="bg-magnolia p-4 ds:p-6 rounded-md font-normal text-sm text-cool_gray select-none">
                <div className="flex justify-between items-center border-b-[1px] pb-2 ds:pb-6 border-light_gray font-bold text-base text-marine_blue">
                    <div className="">
                        <h3 className="capitalize text-sm ds:text-base" >{`${plan.type} (${plan.recurring})`}</h3>
                        <p
                            className="text-sm font-thin underline text-cool_gray hover:text-marine_blue hover:cursor-pointer"
                            onClick={reselectPlan}
                        >Change
                        </p>
                    </div>
                    <p>${PlanOffers[plan.type][plan.recurring]}{recurringAbbr}</p>
                </div>
                {selectedAddons.map(addon =>
                    <div key={addon} className="flex justify-between mt-4">
                        <p className="capitalize">{AddonOffers[addon].title}</p>
                        <p className="text-marine_blue font-medium" >+${AddonOffers[addon].price[plan.recurring]}{recurringAbbr}</p>
                    </div>
                )}
            </div>
            <div className="flex justify-between mt-6 mx-4 ds:mx-6">
                <p className="text-sm font-thin text-cool_gray" >Total (per {plan.recurring === 'monthly' ? 'month' : 'year'})</p>
                <h3 className="text-purplish_blue text-lg font-bold" >${totalPrice}{recurringAbbr}</h3>
            </div>
        </div>
    )
}
