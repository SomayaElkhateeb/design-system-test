

export interface CustomerInterface {
    id: number
    name?: string
    first_name?: string
    last_name?: string
    phone?: string
    city?: string
    Orders?: number
    email?: string
    "E-Subscription"?: boolean
    gender?: string
}

export const initialCustomerData = () => {
    return {
        id: 0,
        name: "",
        first_name: "",
        last_name: "",
        phone: "",
        city: "",
        Orders: 0,
        email: "",
        "E-Subscription": false,
        gender: "",
    }
}