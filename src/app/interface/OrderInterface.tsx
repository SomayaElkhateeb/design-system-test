import { Product } from 'src/pages/ProductsPage/_comp/data';
import { AddressCustomerInterface } from './AddresseCustomerinterface';

export interface OrderInterface {
	date: string;
	customer_name: string;
	order_status: string;
	branch_name?: string;
	payment_status: string;
	payment_name: string;
	id: string;
	total: number;
	location: string;
	delivery_status: string;
    base_currency_code: string;
	created_at: string;
	customer_email: string;
	customer_first_name: string;
	customer_last_name: string;
	customer_phone: string;
	discount_amount: string;
	discount_percent: string;
	grand_total: string;
    invoice_id: string;
	order_currency_code: string;
	payment_title: string;
	shipment_id: string;
	shipping_method: string;
	shipping_title: string;
	status: string;
	sub_total: string;
	tax_amount: string;
	total_item_count: number;
	total_qty_ordered: number;
	updated_at: string;
	shipping_address: AddressCustomerInterface;
	billing_address: AddressCustomerInterface;
	items: Product[];
}
