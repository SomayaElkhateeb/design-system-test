import { Links, Meta } from "./SettingShareInterface";

export interface Role {
    id: number;
    name: string;
    description?: string;
    permission_type?: string;
    permissions?: any | null; 
    created_at?: string; 
    updated_at?: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    status: number;
    role: Role;
    created_at: string; 
    updated_at: string;
}

// admin user
export interface IUsers {
    data: User[];
    links: Links;
    meta: Meta;
}