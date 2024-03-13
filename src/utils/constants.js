import { nanoid } from "nanoid";

import {
  DashboardIcon,
  ProductsIcon,
  OrdersIcon,
  CustomersIcon,
  AnalyticsIcon,
  ReviewsIcon,
  PagesIcon,
  AdsIcon,
  AppsIcon,
  ServicesIcon,
  SettingsIcon,
  StoresIcon,

  CopyIcon,
  ExportIcon,
  RemoveIcon,
  ShippingIcon,
} from "./icons";



//  SIDEBAR
export const sidebarLinks = [
  { id: nanoid(), path: "/", name: "Home", Icon: DashboardIcon },
  { id: nanoid(), path: "products", name: "Products", Icon: ProductsIcon },
  { id: nanoid(), path: "orders", name: "Orders", Icon: OrdersIcon },
  { id: nanoid(), path: "customers", name: "Customers", Icon: CustomersIcon,},
  { id: nanoid(), path: "analytics", name: "Analytics", Icon: AnalyticsIcon},
  { id: nanoid(), path: "reviews", name: "Reviews", Icon: ReviewsIcon },
  { id: nanoid(), path: "pages", name: "Pages", Icon: PagesIcon },
  { id: nanoid(), path: "marketing", name: "Marketing", Icon: AdsIcon},
  { id: nanoid(), path: "apps", name: "Apps", Icon: AppsIcon },
  { id: nanoid(), path: "services", name: "Services", Icon: ServicesIcon },
  { id: nanoid(), path: "settings", name: "Settings", Icon: SettingsIcon },
  { id: nanoid(), path: "store", name: "Store", Icon: StoresIcon },
];

// Icons Social media
export const iconsSocial = [
  { id: nanoid(), img: 'F', url: '' },
  { id: nanoid(), img: 'G', url: '' },
  { id: nanoid(), img: 'M', url: '' },
  { id: nanoid(), img: 'T', url: '' },
]

// 1. Sorting
export const sortMenus = [
  { id: nanoid(), text: 'Name A to Z' },
  { id: nanoid(), text: 'Name Z to A' },
  { id: nanoid(), text: 'SKU Ascending' },
  { id: nanoid(), text: 'SKU Descending' },
  { id: nanoid(), text: 'Price Low in first' },
  { id: nanoid(), text: 'Price High in first' },
  { id: nanoid(), text: 'Date Added' },
  { id: nanoid(), text: 'Date modified' },
]

// 2. Control Products Menus
export const controlProductsMenus = [
  { id: nanoid(), Icon: CopyIcon, text: 'Copy product link' },
  { id: nanoid(), Icon: AnalyticsIcon, text: 'Product report' },
  { id: nanoid(), Icon: OrdersIcon, text: 'Product orders' },
  { id: nanoid(), Icon: ExportIcon, text: 'Export product orders XLS' },
  { id: nanoid(), Icon: RemoveIcon, text: 'Delete product' },
]

// 3. Product Status
export const productStatus = [
  {
    id: nanoid(),
    Icon : ShippingIcon,
    text: 'Simple Product',
    description: 'You don’t need advanced options to fill',
  
  },
  {
    id: nanoid(),
    Icon : ShippingIcon,
    text: 'Configurable product',
    description: 'You need all options available',
  
  },
  {
    id: nanoid(),
    Icon : ShippingIcon,
    text: 'Virtual Product',
    description: 'Services, ebooks, Downloadable',
    
  },
  {
    id: nanoid(),
    Icon : ShippingIcon,
    text: 'Food',
    description: 'Food & Drinks have special way shipping',

  },
  {
    id: nanoid(),
    Icon : ShippingIcon,
    text: 'Bundle',
    description: 'Collection of related products',
    
  },
]

// 1. Check
export const check = [
  { id: nanoid(), text: 'Place your text' },
  { id: nanoid(), text: 'Place your text' },
  { id: nanoid(), text: 'Place your text' },
  { id: nanoid(), text: 'Place your text' },
  { id: nanoid(), text: 'Place your text' },
]

