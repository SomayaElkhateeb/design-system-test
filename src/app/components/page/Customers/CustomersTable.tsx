
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

export default function CustomersTable() {
	//  hooks
	const navigate = useNavigate();
	const { t } = useTranslation();
	//  headers
	const customersHeaders = ['Customer Name', 'Mobile', 'City', 'Orders', 'E-Subscription', 'actions'];

	//  rows


<!-- 	const customers: CustomerInterface[] = [
		{
			id: 1,
			name: 'mohamed Mostafa',
			mobile: '01064545565',
			city: 'mansoura',
			Orders: 10,
			'E-Subscription': true,
		},
	];
	return (
		<BaseTable
			color='#55607A'
			headers={customersHeaders.map((h: string) => h)}
			rows={customers?.map((e: CustomerInterface, i: number) => {
				return {
					item: e,
					elements: [
						<TableCell
							sx={{
								fontSize: '14px',
								fontWeight: 400,
							}}
						>
							{e.name}
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
							<div className=' flex  items-center gap-4 cursor-pointer text-[1.2rem]'>
								<FaRegEdit onClick={() => navigate(`/addCustomer?id=${e?.id}`)} />
								<HiOutlineDotsHorizontal />
								<IoIosArrowForward />
							</div>
						</TableCell>,
					],
				};
			})}
		/>
	);
} -->

    //  hooks
    const navigate = useNavigate()
    const language = UseLanguage()
    const { t } = useTranslation()
    //  headers
    const customersHeaders = [
        { icon: <Checkbox defaultChecked />, title: t("Customer Name") }, { title: t("Mobile") }, { title: t("City") }, { title: t("Orders") }, { title: t("E-Subscription") }, { title: t("actions") }
    ]

    //  rows

    const customers: CustomerInterface[] = [{
        id: 1,
        name: "mohamed Mostafa",
        email: "mmmmmm@yahoo.com",
        mobile: "01064545565",
        city: "mansoura",
        Orders: 10,
        "E-Subscription": true,
    }];

    const actionsButtonStyleAr = "justify-end flex  items-center gap-4 cursor-pointer text-[1.2rem]"
    const actionsButtonStyleEn = "justify-start flex  items-center gap-4 cursor-pointer text-[1.2rem]"
    return (
        <BaseTable color="#55607A" headers={customersHeaders}

            rows={customers?.map(
                (e: CustomerInterface) => {
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
                                    <p className="text-subtitle text-[.8rem]">{e.email}</p>
                                </div>
                                </div>
                               

                            </TableCell>,
                            <TableCell
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                }}>
                                {e.mobile}
                            </TableCell>,
                            <TableCell
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                }}>
                                {e.city}
                            </TableCell>,

                            <TableCell
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: 400,
                                }}>
                                {e.Orders}
                            </TableCell>,

                            <TableCell>
                                <Switch
                                    color="success"
                                    // checked={e["E-Subscription"]}
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

