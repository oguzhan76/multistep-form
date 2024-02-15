export interface Offers {
    [key: string]: {
        monthly: string,
        yearly: string
}}

export interface Addons {
    [key: string]: { 
        selected: boolean, 
        price: string 
    }
}