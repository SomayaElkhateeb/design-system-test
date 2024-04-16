
import { useTranslation } from "react-i18next";

import { TableCell } from "@mui/material";

import { FaRegEdit } from "react-icons/fa";

import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { UseLanguage } from "src/app/components/CustomHook/LanguageHook";
import CustomTableHeaderCheckbox from "../../Customers/CustomTableHeaderChckbox";
import BaseTable from "../../Customers/TableLayoutGlobal/base.table";
import CustomTableBodyCheckbox from "../../Customers/CustomTableBodyChckbox";
import { Product } from "src/app/interface/ProductInterface";

import { IoEyeOutline } from "react-icons/io5";

import {

    StarIcon,

    StarActiveIcon,
    CameraIcon,
    CopyIcon,
} from 'src/app/utils/icons';
import useSelectBox from "src/app/components/optimized/Menu/useSelectBox";
import ThreeDotsButton from "../../Customers/ThreedotsButton";
import { menuType } from "../../Customers/ActionsComp";

export default function AllProductsTable({ products, array, setArray, settingMenus }: { products: Product[], array: string[], setArray: (e: string[]) => void, settingMenus: menuType[] }) {
    //  hooks
    const language = UseLanguage()
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [isFavorite, setIsFavorite] = useState(false);

    //  custom hook for select setting item

    const { selectedOption, handleSelect } =
        useSelectBox();

    function toggleFavorite() {
        setIsFavorite(!isFavorite);
    }


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
                                    <button onClick={toggleFavorite}>
                                        {isFavorite ? <StarActiveIcon className='fill-neutral-1' /> : <StarIcon className='fill-hint' />}
                                    </button>
                                </div>
                                <div className="relative">
                                    <img src={e.img} loading="lazy" alt={e.title} />
                                    <CameraIcon className='bg-white rounded-[50%] p-[.1rem] w-[19px] h-[19px] absolute bottom-[.5rem] left-[.3rem]' />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="text-title text-[.9rem] font-semibold">{e.title}</p>
                                    <p className="text-subtitle text-[.8rem]">{e.category}</p>
                                    <p className="text-title text-[.8rem]">{e.option} {t("Options")}</p>
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
                            <p className={e.quantity === 0 ? "text-error" : "text-black"}>{e.quantity > 0 ? e.quantity : t("Out of stock")}</p>

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
                                <IoEyeOutline className="text-subtitle" />
                                <FaRegEdit className="text-subtitle" onClick={() => navigate(`/addProduct?id=${e?.id}`)} />

                                <CopyIcon className='fill-subtitle' />

                                <ThreeDotsButton sortMenus={settingMenus} selectedOption={selectedOption} handelSelect={handleSelect} />
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



