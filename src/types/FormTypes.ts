import { AddonKeys, PlanType, Recurring } from "./DataTypes";

export interface PersonalInfoFormData { 
    name: string,
    email: string, 
    phone: string,
}

export interface PlanFormData {
    type: PlanType,
    recurring: Recurring
}

export type AddonsFormData = {
    [key in AddonKeys as string]: boolean
}

export interface FormData {
    personalInfo: PersonalInfoFormData;
    plan: PlanFormData,
    addons: AddonsFormData
  } 