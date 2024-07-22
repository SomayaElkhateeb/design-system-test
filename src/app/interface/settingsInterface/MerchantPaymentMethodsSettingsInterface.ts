interface PaymentMethod {
    id: number;
    method: string;
    method_title: string;
    description: string;
    type: string;
    monthly_fees_title: string;
    monthly_fees: number;
    extra_fee: number;
    setup_fees: number;
    status: string;
    sercret_code?: string;
    key_code: string;
    icon: string;
    sort: number;
    created_at: string;
    updated_at: string;
}

interface PaymentData {
    id: number;
    payment_method_id: number;
    price_more_than: number;
    items_more_than: number;
    account_number: string | null;
    account_name: string | null;
    bank_name: string | null;
    iban: string | null;
    sort: number | null;
    apply_with: string | null;
    active: number;
    main_method: number;
    show_in_footer: number;
    api_key: string | null;
    api_secret: string | null;
    server_key: string | null;
    client_key: string | null;
    entity_id: string | null;
    profile_id: string | null;
    merchant_name: string | null;
    merchant_country_code: string | null;
    access_code: string | null;
    merchant_identifier: string | null;
    merchant_reference: string | null;
    fort_id: string | null;
    signature: string | null;
    additional_data: string;
    created_at: string;
    updated_at: string;
    payment_method: PaymentMethod;
}

export interface MerchantPaymentList {
    data: PaymentData[];
}