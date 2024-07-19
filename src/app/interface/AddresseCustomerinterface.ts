export interface AddressCustomerInterface {
    address_id:string
    id: string
    name: string;
    country: string;
    city: string;
    state: string;
    street: string;
    building: string;
    landmark: string;
    phone: string;
    search: string;
    gift_receiver_name?: string
}


export const initialCustomerAddresseInfo = () => {
    return {
        address_id:"",
        id: "",
        name: "",
        country: "",
        city: "",
        state: "",
        street: "",
        building: "",
        landmark: "",
        phone: "",
        search: "",
        gift_receiver_name: ""
    }
}