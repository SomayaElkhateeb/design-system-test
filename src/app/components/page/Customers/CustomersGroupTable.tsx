import { useTranslation } from "react-i18next";
import BaseTable from "./TableLayoutGlobal/base.table";
import { Switch, TableCell } from "@mui/material";
import { CustomerInterface } from "src/app/interface/CustomerInterface";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { CustomerGroupInterface } from "src/app/interface/CustomerGroupInterface";

export default function CustomersGroupTable() {


    //  hooks
    const navigate = useNavigate()
    //  headers
    const customersHeaders = [
        "Group Name", "Customers No.", "Active?", "Actions"
    ]

    //  rows

    const customerGroups: CustomerGroupInterface[] = [{
        id: 1,
        name: "group1",
        customerNumber: 45,
        describtion: "high group",
        active: true
    }];

    //  commit
    return (
        <BaseTable color="#55607A" headers={customersHeaders.map((h: string) => h)}

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
                                <div className="flex flex-col gap-2">
                                    <p>{e.name}</p>
                                    <p className="text-subtitle text-[.8rem]">{e.describtion}</p>
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
                                <div className=" flex  items-center gap-4 cursor-pointer text-[1.2rem]">
                                    <FaRegEdit onClick={() => navigate(`/addCustomer?id=${e?.id}`)} />
                                    <HiOutlineDotsHorizontal />
                                    <IoIosArrowForward />
                                </div>
                            </TableCell>

                        ],

                    };
                },
            )}
        />

    )
}