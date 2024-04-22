export interface OrderInterface{
    date:string
    customer_name:string
    order_status:string
    branch_name?:string
    payment_status:string
    payment_name:string
    id:string
    total:number
    location:string
    delivery_status:string
}