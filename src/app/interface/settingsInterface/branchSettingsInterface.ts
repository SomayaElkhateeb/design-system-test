export interface LocationBranches {
    id: number;
    name: string;
    main_branch: string;
    type: string;
    phone: string | null;
    latitude: string | null;
    longitude: string | null;
    work_time: string | null;
    show_in_footer: string;
    pick_up: string;
    days: any[]; 
    address: string | null;
    street: string;
    city: string | null;
    area: string;
    state: string | null;
    country: string | null;
    building: string;
    landmark: string;
    created_at: string | null;
    updated_at: string | null;
}