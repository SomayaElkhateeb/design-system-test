import { DownIcon, LinkIcon, MoreIcon } from "src/utils/icons";
import { useState } from "react";

const CustomerInfo = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <div className="flex justify-between items-center  bg-white h-14 pl-2 pr-4 max-w-[1186px]">
        <div className="flex gap-2 items-center">
          <button onClick={() => setIsShow(!isShow)} className="duration-500 transition-all ease-linear"><DownIcon className={isShow ? "rotate-0 mt-0.5 cursor-pointer" : "rotate-90 mt-0.5 cursor-pointer"} /></button>
          <h2 className="text-title font-semibold">Customer Info</h2>
        </div>

        <div className="flex gap-4 items-center">
          <button><LinkIcon className="fill-title p-1 mb-2"/>  </button>
          <button ><MoreIcon className="fill-title"/></button>

        </div>

      </div>

      {isShow && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas libero asperiores repudiandae dolore, corporis similique minus ratione fuga ex laboriosam tempora ad, a vel commodi voluptas animi? Dolore, doloremque deleniti!</p>}
    </>
  )
}

export default CustomerInfo;






