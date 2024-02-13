export interface personalInfoData { 
    name: string,
    email: string, 
    phone: string,
}

export interface planData {
    type: 'Arcade' | "Advanced" | "Pro",
    recurral: 'Monthly' | "Yearly"
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