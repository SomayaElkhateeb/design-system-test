

export interface CartRuleInterface {
    name: string;
    description: string;
    status: number; // 0 | 1
    customer_groups: number; // []
    coupon_type: number; // 0| 1
    use_auto_generation: number; // 0 | 1
    


}