import { AddressCustomerInterface } from "./AddresseCustomerinterface"
import { CountriesInterface } from "./CountriesInterface"


export interface CustomerInterface {
    id: string
    name: string
    first_name: string
    last_name: string
    phone: string
    city: string
    Orders: number
    email: string
    status: number
    gender: string
    subscribed_to_news_letter:number
    customer_group_id: string
    addresses: AddressCustomerInterface[]
    orders: AddressCustomerInterface[]
    Countries: CountriesInterface[]
}

export const initialCustomerData = () => {
    return {
        id: "",
        name: "",
        first_name: "",
        last_name: "",
        phone: "",
        city: "",
        Orders: 0,
        email: "",
        status: 0,
        gender: "",
        customer_group_id: "",
        subscribed_to_news_letter:0,
        addresses: [],
        orders: [],
        Countries: []
    }
}