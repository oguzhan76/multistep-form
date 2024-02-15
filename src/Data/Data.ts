import type { Offers, Addons } from "../types/DataTypes"
import { AddonKeys } from "../types/FormTypes";

export const PlanOffers: Offers = {
    arcade: { monthly: '9', yearly: '90' }, 
    advanced: { monthly: '12', yearly: '120' },
    pro: { monthly: '15', yearly: '150' }
};

export const AddonOffers: Addons = {
    [AddonKeys.ONLINESERVICE as string]: {
        selected: true, 
        title: 'Online service',
        subtitle: 'Access to multiplayer games',
        price: '1', 
    },
    [AddonKeys.LARGERSTORAGE  as string]: {
        selected: true, 
        title: 'Larger storage',
        subtitle: 'Extra 1TB of cloud save',
        price: '2', 
    },
    [AddonKeys.CUSTOMIZABLEPROFILE  as string]: {
        selected: false, 
        title: 'Customizable profile',
        subtitle: 'Custom theme on your profile',
        price: '2', 
    },
}