import { useEffect, useMemo, useState } from "react";
import HeaderTaxCategories from "./_comp/HeaderTaxCategories"
import useSelectBox from "src/app/components/optimized/Menu/useSelectBox";
import TaxCategoriesTable from "./_comp/TaxCategoriesTable";
import { useAppDispatch, useAppSelector } from "src/app/store";
import { getTaxCategoriesList } from "src/app/store/slices/settingsPage/tax/taxCategories/taxCategoriesAsyncThunks";
import { EditIcon, RemoveIcon } from "src/app/utils/icons";
import { UseDeleteItem } from "src/app/utils/hooks/CustomDelete";


const TaxCategories = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { selectedOption, handleSelect, setSelectedOption } = useSelectBox();
    const dispatch = useAppDispatch();
    // redux
    const { taxCategoriesList, isLoading } = useAppSelector((state) => state.taxCategorySettings);
    console.log('taxCategoriesList', taxCategoriesList)
    useEffect(() => {
        dispatch(getTaxCategoriesList());
    }, [dispatch]);


    const filteredTaxCategories = useMemo(() => {
        return taxCategoriesList?.filter(category =>
            category.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, taxCategoriesList]);


    // actions
    const {
        openDeleteDialog,
        custom_Id,
        handelDeleteItem,
        handelCloseDeleteDialog,
        handelId,
        handelOpenDialog,
    } = UseDeleteItem();
    return (
        <div className='flex-col-global gap-2'>
            {/* header */}
            <div className='flex-col-global gap-0'>

            <HeaderTaxCategories
                selectedOption={selectedOption}
                handleSelect={handleSelect}
                setSearchQuery={setSearchQuery} />
                </div>
            <hr />
            {/* table */}
            <TaxCategoriesTable data={filteredTaxCategories} isLoading={isLoading} handelId={handelId}>
                <EditIcon />
                <RemoveIcon />
            </TaxCategoriesTable>
        </div>
    )
}

export default TaxCategories
