import { RefObject } from "react"


export interface CampaignActivityInterface {
    name: string,
    status: string,
    sales: string,
    expenses: string,
    netProfit: string,
    sessions: 28,
}

export interface CampaignDataInterface {

    name: string,
    status: string,
    sales: string,
    expenses: string,
    netProfit: string,
    activities:CampaignActivityInterface[]
}
export interface CampaignTableInterface {
    
    sortBy: string
    ref: RefObject<HTMLElement | undefined>
}