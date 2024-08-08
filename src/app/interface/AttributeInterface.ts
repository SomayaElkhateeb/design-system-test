

export interface optionInterface {
    id: string
    admin_name: string
    label: string
    swatch_value: string
}
export interface AttributeInterface {
    id: string;
    name: string
    admin_name: string
    code: string
    type: string
    swatch_type: string
    options: optionInterface[]
}

export const InitialAttribute = () => {
    return {
        id: "",
        name: "",
        admin_name: "",
        code: "",
        type: "",
        swatch_type: "",
        options: []
    }
}

// export const initialCustomerData = () => {
//     return {
//         id: "",
//         name: "",
//         first_name: "",
//         last_name: "",
//         phone: "",
//         city: "",
//         Orders: 0,
//         email: "",
//         status: 0,
//         gender: "",
//         street:"",
//         customer_group_id: "",
//         subscribed_to_news_letter:0,
//         addresses: [],
//         orders: [],
//         Countries: []
//     }
// }