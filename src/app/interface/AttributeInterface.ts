export interface Option {
    id: number;
    admin_name: string;
    label: string;
    swatch_value: string | null;
}

export interface Attribute {
    id: number;
    name: string;
    admin_name: string;
    code: string;
    type: 'boolean' | 'select' | 'text' | 'textarea' | 'radio'; 
    swatch_type: string | null;
    options: Option[];
    created_at: string;
    updated_at: string;
}

export interface AttributeApiResponse {
    data: Attribute[];
}
