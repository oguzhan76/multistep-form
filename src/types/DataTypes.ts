import { AddonKeys } from "./FormTypes"

export interface Offers {
    [key: string]: {
        monthly: string,
        yearly: string
}}

export type Addons = {
    [key in AddonKeys as string]: { 
        selected: boolean, 
        title: string,
        subtitle: string, 
        price: string,
    }
}