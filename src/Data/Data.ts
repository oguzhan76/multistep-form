import type { Offers, Addons } from "../types/DataTypes"
import { AddonKeys, PlanType } from "../types/DataTypes";

export const PlanOffers: Offers = {
    [ PlanType.ARCADE ]: { monthly: 9, yearly: 90 }, 
    [ PlanType.ADVANCED ]: { monthly: 12, yearly: 120 },
    [ PlanType.PRO ]: { monthly: 15, yearly: 150 }
};

export const AddonOffers: Addons = {
    [AddonKeys.ONLINESERVICE as string]: {
        selected: true, 
        title: 'Online service',
        subtitle: 'Access to multiplayer games',
        price: { monthly: 1, yearly: 10 } 
    },
    [AddonKeys.LARGERSTORAGE  as string]: {
        selected: true, 
        title: 'Larger storage',
        subtitle: 'Extra 1TB of cloud save',
        price: { monthly: 2, yearly: 20 }, 
    },
    [AddonKeys.CUSTOMIZABLEPROFILE  as string]: {
        selected: false, 
        title: 'Customizable profile',
        subtitle: 'Custom theme on your profile',
        price: { monthly: 2, yearly: 20 }, 
    },
}