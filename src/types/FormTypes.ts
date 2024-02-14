export interface personalInfoData { 
    name: string,
    email: string, 
    phone: string,
}

export enum Recurral {
    MONTHLY = 'monthly',
    YEARLY = 'yearly'
}

export enum PlanType {
    ARCADE = 'arcade',
    ADVANCED = 'advanced',
    PRO = 'pro'
}

export interface planData {
    type: PlanType,
    recurral: Recurral
}

export interface addonsData {
    onlineService: boolean,
    largerStorage: boolean,
    CustomizableProfile: boolean
}

export interface formData {
    personalInfo: personalInfoData;
    plan: planData,
    addons: addonsData
  } 