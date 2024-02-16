type Price = {
    [key in Recurring]: number
}

export enum Recurring {
    MONTHLY = 'monthly',
    YEARLY = 'yearly'
}

export enum PlanType {
    ARCADE = 'arcade',
    ADVANCED = 'advanced',
    PRO = 'pro'
}

export type Offers = {
    [key in PlanType]: Price
}

export enum AddonKeys {
    ONLINESERVICE = "onlineService",
    LARGERSTORAGE = "largerStorage",
    CUSTOMIZABLEPROFILE = "customizableProfile"
}

export type Addons = {
    [key in AddonKeys as string]: { 
        selected: boolean, 
        title: string,
        subtitle: string, 
        price: Price,
    }
}