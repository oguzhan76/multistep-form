export interface PersonalInfoFormData { 
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

export interface PlanFormData {
    type: PlanType,
    recurral: Recurral
}

export interface AddonsFormData {
    [key: string]: boolean
}

export interface FormData {
    personalInfo: PersonalInfoFormData;
    plan: PlanFormData,
    addons: AddonsFormData
  } 