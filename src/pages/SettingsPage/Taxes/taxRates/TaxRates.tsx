import { nanoid } from "nanoid";
import ActionsStuffBtns from "../../PermissionsAndUsers/Staff/ActionsStuffBtns"
import { UseDeleteItem } from "src/app/utils/hooks/CustomDelete";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useResponsive from "src/app/utils/hooks/useResponsive";
import { useAppDispatch, useAppSelector } from "src/app/store";
import useSelectBox from "src/app/components/optimized/Menu/useSelectBox";
import { getTaxRatesList } from "src/app/store/slices/settingsPage/tax/taxRates/taxRateAsyncThunks";
import TaxRateTable from "./_comp/TaxRateTable";

const TaxRates = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { xs } = useResponsive();
  const dispatch = useAppDispatch();
  const { selectedOption, handleSelect, setSelectedOption } = useSelectBox();
  const { taxRatesList, isLoading } = useAppSelector((state) => state.taxRateSettings);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(getTaxRatesList());
  }, [dispatch]);

  // const filteredTaxRates = useMemo(() => {
  // 	return taxRatesList?.filter(rate =>
  // 		rate.name.toLowerCase().includes(searchQuery.toLowerCase())
  // 	);
  // }, [searchQuery, taxRatesList]);

  const sortMenus = [
    { id: nanoid(), text: 'Name A to Z' },
    { id: nanoid(), text: 'Name Z to A' },
  ];



  const {
    openDeleteDialog,
    custom_Id,
    handelDeleteItem,
    handelCloseDeleteDialog,
    handelId,
    handelOpenDialog,
  } = UseDeleteItem();

  useMemo(() => {
    switch (selectedOption) {
      case 'delete':
        handelOpenDialog();
        setSelectedOption('');
        break;
      case 'edit':
        setSelectedOption('');
        custom_Id && navigate(`addTaxRate?id=${custom_Id}`);
        break;
    }
  }, [selectedOption, custom_Id]);


  return (
    <div className='flex-col-global gap-2'>
      {/* header */}
      <div className='flex-col-global gap-0'>

        <ActionsStuffBtns selectedOption={selectedOption}
          handleSelect={handleSelect}
          sortMenus={sortMenus}
          data={taxRatesList}
          setSearchQuery={setSearchQuery} />

      </div>
      <hr />
      {/* table */}
      {/* <TaxRateTable /> */}
    </div>
  )
}

export default TaxRates
