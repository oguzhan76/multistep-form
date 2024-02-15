import type { Offers, Addons } from "../types/DataTypes"

export const PlanOffers: Offers = {
    arcade: { monthly: '9', yearly: '90' }, 
    advanced: { monthly: '12', yearly: '120' },
    pro: { monthly: '15', yearly: '150' }
};

export const AddonOffers: Addons = {
    onlineService: {selected: true, price: '1'},
    largerStorage: {selected: true, price: '2'},
    customizableProfile: {selected: false, price: '2'}
}