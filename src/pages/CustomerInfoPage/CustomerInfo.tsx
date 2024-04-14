import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import TopHeader from "src/app/components/shared/TopHeader";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import CustomerData from "src/app/components/page/CustomersInfo/CustomerData";
import { IoIosAddCircle } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";


export default function CustomerInfo() {
    //  hooks
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { id } = useParams()

    //  fake array
    const array = [...Array(3)]
    return (
        <div className=" container mx-auto py-[1rem]">
            <div className="flex flex-col gap-[1.6rem]">
                {/*  top section */}
                <div className=" flex  items-center justify-between">
                    <TopHeader name={t("Customer Info")} />
                    <div className=" flex  items-center gap-[.8rem] ">
                        <FaRegEdit className="cursor-pointer" onClick={() => navigate(`/addCustomer?id=${id}`)} />
                        <HiOutlineDotsHorizontal className="cursor-pointer" />
                    </div>
                </div>

                {/*  customer section */}

                <div className="customer-border gap-[0.8rem]">
                    <p className="text-[0.8rem]  font-semibold px-[1.2rem]">{t("Customer")}</p>
                    <hr />
                    <div className=" flex flex-col gap-[.6rem] px-[1.2rem]">
                        {/* name */}
                        <CustomerData data="Mohamed Hasan" icon={<CiUser className="text-hint" />} />

                        {/* email*/}
                        <CustomerData data="web@artisan.com.sa (has active email subscribtion)" icon={<MdOutlineEmail className="text-hint" />} />

                        {/* phone */}
                        <CustomerData data="966502466733" icon={<FiPhoneCall className="text-hint" />} />

                    </div>

                </div>

                {/*  addresse section */}

                <div className="customer-border gap-[0.8rem]">
                    <div className="flex-row-global justify-between px-[1.2rem]">
                        <p className="text-[0.8rem]  font-semibold ">{t("Addresses")}</p>
                        <div className="flex-row-global gap-[.4rem] cursor-pointer" >
                            <IoIosAddCircle />
                            <p className="text-[0.8rem] font-semibold">{t("Add new address")}</p>
                        </div>
                    </div>

                    <hr />

                    <div className="w-[97%] mx-auto bg-white rounded-[12px] py-[.7rem] border border-[constrained] ">
                        <div className="flex-row-global-items-start justify-between   px-[1.2rem]">
                            <p className="text-[0.7rem]">Meed Market, 15 Haroon Al Rashied st.<br />Al Jazera, Riyadh <br /><span className="opacity-60">Saudi Arabia</span><br />+96841564566</p>
                            <div className="flex flex-col items-end gap-[2rem]">
                                <div className="flex-row-global gap-[1.2rem]">
                                    <RiDeleteBin6Line className="cursor-pointer" />
                                    <FiEdit className="cursor-pointer" />
                                </div>
                                <div className="flex-row-global gap-[.4rem] cursor-pointer">
                                    <IoLocationOutline />
                                    <p className="text-[0.8rem] font-semibold">{t("Show on map")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/*  orders section */}

                <div className="customer-border gap-[0.8rem]">
                    <div className="flex-row-global justify-between px-[1.2rem]">
                        <p className="text-[0.8rem]  font-semibold ">{t("Orders")}</p>
                        <div className="flex-row-global gap-[.4rem] cursor-pointer">
                            <IoIosAddCircle />
                            <p className="text-[0.8rem] font-semibold">{t("Add new order")}</p>
                        </div>
                    </div>

                    <hr />
                    <div className="flex flex-col gap-[1rem]">
                        {array?.map((e, i) =>
                        (
                            <div className="flex flex-col gap-[1rem]" key={i}>
                                <div className="flex-row-global-items-start justify-between   px-[1.2rem]">
                                    <div className="flex flex-col gap-[0.5rem]">
                                        <p className="text-[0.8rem]  font-semibold text-title">#8965742  <span className="font-normal">Processing</span></p>
                                        <p className="text-[.7rem] opacity-60" dir="ltr">6 Apr 2020</p>
                                    </div>
                                    <div className="flex flex-col items-end gap-[0.5rem]">


                                        <HiOutlineDotsHorizontal />
                                        <p className="text-[0.8rem] ">SAR 1000</p>

                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </div>
    )
}