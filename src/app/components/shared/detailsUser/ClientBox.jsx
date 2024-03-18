import { MoreIcon } from "src/app/utils/icons";

const ClientBox = ({title="Top clients", subtitle, avatar}) => {
  return (
    <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
            {avatar}
            <div>
              <h5 className="text-title text-sm font-semibold">{title}</h5>
              <p className="text-subtitle text-sm">This group is high niche</p>
            </div>
        </div>

        <button> <MoreIcon className="fill-subtitle"/></button>
    </div>
  )
}

export default ClientBox;