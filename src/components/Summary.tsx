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


    return (
        <div className=" px-6 py-7 ds:px-4 ds:pl-16 ds:pr-10 ds:pt-0 ds:pb-6">
            <h1 className="font-extrabold text-[24px] ds:text-[32px] text-marine_blue mb-1">Finishing up</h1>
            <p className="text-cool_gray mb-6 ds:mb-8 text-[15.5px]">Double-check everything looks OK before confirming.</p>
            <div className="bg-magnolia p-4 rounded-md font-normal text-sm text-cool_gray select-none">
                <div className="flex justify-between border-b-[1px] border-light_gray font-bold text-base text-marine_blue">
                    <div className="pb-2">
                        <h4 className="capitalize" >{`${plan.type} (${plan.recurral})`}</h4>
                        <p
                            className="text-sm font-thin underline text-cool_gray hover:text-marine_blue hover:cursor-pointer"
                            onClick={reselectPlan}
                        >Change
                        </p>
                    </div>
                    <p>${PlanOffers[plan.type][plan.recurral]}{plan.recurral === 'yearly' ? '/yr' : '/mo'}</p>
                </div>
                {selectedAddons.map(addon =>
                    <div key={addon} className="flex justify-between mt-4">
                        <p className="capitalize">{AddonOffers[addon].title}</p>
                        <p className="text-marine_blue font-medium" >+${AddonOffers[addon].price[plan.recurral]}{plan.recurral === 'monthly' ? '/mo' : '/yr'}</p>
                    </div>
                )}
            </div>
            <div className="flex justify-between mt-6 mx-4">
                <p className="text-sm font-thin text-cool_gray" >Total (per {plan.recurral === 'monthly' ? 'month' : 'year'})</p>
                <h3 className="text-purplish_blue text-lg font-bold" >${totalPrice}{plan.recurral === 'yearly' ? '/yr' : '/mo'}</h3>
            </div>
        </div>
    )
}
