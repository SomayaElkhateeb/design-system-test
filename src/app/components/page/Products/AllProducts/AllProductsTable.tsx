
import { useTranslation } from "react-i18next";

import { TableCell } from "@mui/material";

import { FaRegEdit } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { UseLanguage } from "src/app/components/CustomHook/LanguageHook";
import CustomTableHeaderCheckbox from "../../Customers/CustomTableHeaderChckbox";
import BaseTable from "../../Customers/TableLayoutGlobal/base.table";
import CustomTableBodyCheckbox from "../../Customers/CustomTableBodyChckbox";
import { Product } from "src/app/interface/ProductInterface";
import { getImageUrl } from "src/app/utils";
import { IoIosStarOutline } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { MdCopyAll } from "react-icons/md";


export default function AllProductsTable() {
    //  hooks
    const language = UseLanguage()
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [array, setArray] = useState<string[]>([])


    //  rows 

    const products: Product[] = [
        {
            id: "1",
            title: 'mohamed Mostafa',
            category: '01064545565',
            SKU: 'mansoura',
            option: "10 option",
            quantity: 10,
            price: 1000,
            img: getImageUrl("images/product.png")
        },
        {
            id: "2",
            title: 'mohamed Mostafa',
            category: '01064545565',
            SKU: 'mansoura',
            option: "10 option",
            quantity: 0,
            price: 1000,
            img: getImageUrl("images/product.png")
        },

    ];
    //  headers

    const productsHeaders = [
        { icon: <CustomTableHeaderCheckbox array={array} setArray={setArray} mainArray={products?.map((e) => e.id)} />, title: t("Product & Category") }, { title: t("SKU") }, { title: t("QTY") }, { title: t("Price") }, { title: t("actions") }
    ]


    const actionsButtonStyleAr = "justify-end flex  items-center gap-4 cursor-pointer text-[1.2rem]"
    const actionsButtonStyleEn = "justify-start flex  items-center gap-4 cursor-pointer text-[1.2rem]"
    return (
        <BaseTable
            language={language}
            color='#55607A'
            headers={productsHeaders.map((h) => h)}
            rows={products?.map((e: Product, i: number) => {
                return {
                    item: e,
                    elements: [
                        <TableCell
                            sx={{
                                fontSize: "14px",
                                fontWeight: 400,
                            }}
                        >
                            <div className=" flex  items-center gap-[.4rem] ">
                                <div className="flex flex-col gap-[.4rem] items-center">
                                    <CustomTableBodyCheckbox array={array} setArray={setArray} id={e.id} />
                                    <IoIosStarOutline className="text-[1.5rem]" />
                                </div>
                                <img src={e.img} loading="lazy" alt={e.title} />
                                <div className="flex flex-col gap-2">
                                    <p className="text-title text-[.9rem] font-semibold">{e.title}</p>
                                    <p className="text-subtitle text-[.8rem]">{e.category}</p>
                                    <p className="text-title text-[.8rem]">{e.option}</p>
                                </div>
                            </div>


                        </TableCell>,
                        <TableCell
                            sx={{
                                fontSize: '14px',
                                fontWeight: 400,
                            }}
                        >
                            <p className="text-title">{e.SKU}</p>

                        </TableCell>,
                        <TableCell
                            sx={{
                                fontSize: '14px',
                                fontWeight: 400,
                            }}
                        >
                            <p className={e.quantity===0?"text-error":"text-black"}>{e.quantity>0?e.quantity:t("Out of stock")}</p>
                            
                        </TableCell>,
                        <TableCell
                            sx={{
                                fontSize: '14px',
                                fontWeight: 400,
                            }}
                        >
                            <span className="text-primary">SAR</span> {e.price}
                        </TableCell>,


                        <TableCell>
                            <div className={language === "ar" ? actionsButtonStyleAr : actionsButtonStyleEn}>
                                <IoEyeOutline className="text-subtitle"/>
                                <FaRegEdit className="text-subtitle" onClick={() => navigate(`/addProduct?id=${e?.id}`)} />
                                <MdCopyAll className="text-subtitle"/>
                                <HiOutlineDotsHorizontal className="text-subtitle" />
                                {language === "ar" ?
                                    <IoIosArrowBack className="text-subtitle" onClick={() => navigate(`/products/${e?.id}`)} />
                                    :
                                    <IoIosArrowForward className="text-subtitle" onClick={() => navigate(`/products/${e?.id}`)} />
                                }

                            </div>
                        </TableCell>
                    ],
                };
            })}
        />
    );
}



