import { DownIcon, LinkIcon, MoreIcon } from "src/app/utils/icons";
import { useState } from "react";

const CustomerInfo = () => {
  const [isShow, setIsShow] = useState(false)
  return (
    <>
      <div className="flex justify-between items-center bg-white pl-2 pr-4 w-[1186px] h-[58px]">
        <div className="flex gap-2 items-center">
        <button onClick={() => setIsShow(!isShow)}>
            <DownIcon className={`duration-150 transition-all ease-linear mt-0.5 cursor-pointer fill-title ${isShow ? 'rotate-0' : 'rotate-90'} `} />
          </button>
          <h2 className="text-title font-semibold">Customer Info</h2>
        </div>

        <div className="flex gap-6 items-center">
          <button><LinkIcon className="fill-title p-1 mb-2"/>  </button>
          <button ><MoreIcon className="fill-title"/></button>

        </div>

      </div>

      {isShow && <p className="duration-300 transition-all ease-linear">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas libero asperiores repudiandae dolore, corporis similique minus ratione fuga ex laboriosam tempora ad, a vel commodi voluptas animi? Dolore, doloremque deleniti!</p>}
    </>
  )
}

export default CustomerInfo;






