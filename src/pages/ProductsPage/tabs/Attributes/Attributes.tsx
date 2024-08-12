import ThreeDotsButton from "src/app/components/optimized/Buttons/ThreedotsButton";
import AttributesHeader from "./_comp/AttributesHeader"
import AttributesTable from "./_comp/AttributesTable"
import { UseDeleteItem } from "src/app/utils/hooks/CustomDelete";
import { EditIcon } from 'src/app/utils/icons';
import { LiaTrashAlt } from 'react-icons/lia';
import useSelectBox from "src/app/components/optimized/Menu/useSelectBox";

const data = [
	{ code: 'A123', type: 'text', admin: 'name', swatch: 'color', option: 1 }
]
const Attributes = () => {
	const { selectedOption, handleSelect, setSelectedOption } = useSelectBox();


	const options = [
		{
			id: '1',
			text: 'edit',
			icon: <EditIcon className='fill-title' />,
		},
		{
			id: '2',
			text: 'delete',
			icon: <LiaTrashAlt size='28' className='fill-error' />,
		},
	];
	const {
		openDeleteDialog,
		custom_Id,
		handelDeleteItem,
		handelCloseDeleteDialog,
		handelId,
		handelOpenDialog,
	} = UseDeleteItem();


	return (
		<div className='flex-col-global gap-2 px-5'>
			<AttributesHeader />
			<hr />
			<AttributesTable handelId={handelId} data={data}>
				<ThreeDotsButton
					sortMenus={options}
					selectedOption={selectedOption}
					handelSelect={handleSelect}
				/>
			</AttributesTable>
		</div>
	)
}

export default Attributes
