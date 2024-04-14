
import { useTranslation } from "react-i18next";
import BaseTable from "./TableLayoutGlobal/base.table";
import { Checkbox, Switch, TableCell } from "@mui/material";
import { CustomerInterface } from "src/app/interface/CustomerInterface";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { UseLanguage } from "../../CustomHook/LanguageHook";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import CustomTableHeaderCheckbox from "./CustomTableHeaderChckbox";
import CustomTableBodyCheckbox from "./CustomTableBodyChckbox";

export default function CustomersTable() {
    //  hooks
    const language = UseLanguage()
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [array, setArray] = useState<number[]>([])


    //  rows 

    const customers: CustomerInterface[] = [
        {
            id: 1,
            name: 'mohamed Mostafa',
            mobile: '01064545565',
            city: 'mansoura',
            Orders: 10,
            email: "mmmm@yahoo.com",
            'E-Subscription': true,
        },

    ];
    //  headers

    const customersHeaders = [
        { icon: <CustomTableHeaderCheckbox array={array} setArray={setArray} mainArray={customers?.map((e) => e.id)} />, title: t("Customer Name") }, { title: t("Mobile") }, { title: t("City") }, { title: t("Orders") }, { title: t("E-Subscription") }, { title: t("actions") }
    ]


    const actionsButtonStyleAr = "justify-end flex  items-center gap-4 cursor-pointer text-[1.2rem]"
    const actionsButtonStyleEn = "justify-start flex  items-center gap-4 cursor-pointer text-[1.2rem]"
    return (
        <BaseTable
            color='#55607A'
            headers={customersHeaders.map((h) => h)}
            rows={customers?.map((e: CustomerInterface, i: number) => {
                return {
                    item: e,
                    elements: [
                        <TableCell
                            sx={{
                                fontSize: "14px",
                                fontWeight: 400,
                            }}
                        >
                            <div className=" flex  items-center gap-[.2rem]">
                                <CustomTableBodyCheckbox array={array} setArray={setArray} id={e.id} />
                                <div className="flex flex-col gap-2">
                                    <p>{e.name}</p>
                                    <p className="text-subtitle text-[.8rem]">{e.email}</p>
                                </div>
                            </div>


                        </TableCell>,
                        <TableCell
                            sx={{
                                fontSize: '14px',
                                fontWeight: 400,
                            }}
                        >
                            {e.mobile}
                        </TableCell>,
                        <TableCell
                            sx={{
                                fontSize: '14px',
                                fontWeight: 400,
                            }}
                        >
                            {e.city}
                        </TableCell>,
                        <TableCell
                            sx={{
                                fontSize: '14px',
                                fontWeight: 400,
                            }}
                        >
                            {e.Orders}
                        </TableCell>,

                        <TableCell>
                            <Switch
                                checked={e['E-Subscription']}
                                // onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </TableCell>,
                        <TableCell>
                            <div className={language === "ar" ? actionsButtonStyleAr : actionsButtonStyleEn}>
                                <FaRegEdit onClick={() => navigate(`/addCustomer?id=${e?.id}`)} />
                                <HiOutlineDotsHorizontal />
                                {language === "ar" ?
                                    <IoIosArrowBack onClick={() => navigate(`/customers/${e?.id}`)} />
                                    :
                                    <IoIosArrowForward onClick={() => navigate(`/customers/${e?.id}`)} />
                                }

                            </div>
                        </TableCell>
                    ],
                };
            })}
        />
    );
}



