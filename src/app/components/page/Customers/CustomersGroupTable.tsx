import { useTranslation } from "react-i18next";
import BaseTable from "./TableLayoutGlobal/base.table";
import { Checkbox, Switch, TableCell } from "@mui/material";
import { CustomerInterface } from "src/app/interface/CustomerInterface";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { CustomerGroupInterface } from "src/app/interface/CustomerGroupInterface";
import { UseLanguage } from "../../CustomHook/LanguageHook";
import { IoIosArrowBack } from "react-icons/io";
export default function CustomersGroupTable() {


    //  hooks
    const navigate = useNavigate()
    const { t } = useTranslation()
    const language = UseLanguage()
    //  headers

    //  headers
    const customersHeaders = [
        { icon: <Checkbox defaultChecked />, title: t("Group Name") }, { title: t("Customers No.") }, { title: t("Active?") }, { title: t("Actions") }
    ]

    //  rows

    const customerGroups: CustomerGroupInterface[] = [{
        id: 1,
        name: "group1",
        customerNumber: 45,
        describtion: "high group",
        active: true
    }];

    const actionsButtonStyleAr = "justify-end flex  items-center gap-4 cursor-pointer text-[1.2rem]"
    const actionsButtonStyleEn = "justify-start flex  items-center gap-4 cursor-pointer text-[1.2rem]"
    return (
        <BaseTable color="#55607A" headers={customersHeaders}

            rows={customerGroups?.map(
                (e: CustomerGroupInterface, i: number) => {
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
                                    <Checkbox defaultChecked />
                                    <div className="flex flex-col gap-2">
                                        <p>{e.name}</p>
                                        <p className="text-subtitle text-[.8rem]">{e.describtion}</p>
                                    </div>
                                </div>


                            </TableCell>,
                            <TableCell
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                }}>
                                {e.customerNumber}
                            </TableCell>,




                            <TableCell>
                                <Switch
                                    checked={e.active}
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
                },
            )}
        />

    )
}