import { useTranslation } from 'react-i18next';
import { Input } from 'src/app/components/ui/input';
import FormField from 'src/app/components/ui/form/field';
import CustomPhoneInput from 'src/app/components/optimized/UiKits/CustomPhoneInput';
import SelectFormField from 'src/app/components/ui/form/SelectFormField';
import { CountriesApi } from 'src/app/React-Query/CountriesApi';
import { useQuery } from 'react-query';
import { CountriesInterface } from 'src/app/interface/CountriesInterface';
import { UseFormReturn } from 'react-hook-form';
import { BranchesType } from './_hook/useAddBranchForm';
import TabbedFormField from 'src/app/components/ui/form/tabbed-field';

const AddressBranch = ({ formStore }: { formStore: UseFormReturn<BranchesType> }) => {
    const { t } = useTranslation();
    const { data } = useQuery([`countriesData`], () => CountriesApi.countries());
    let CountryId = formStore.getValues('country') ? formStore.getValues('country') : '';
    const { data: CitiesData } = useQuery([`citiesData`, CountryId], () =>
        CountriesApi.cities(CountryId ? CountryId : ''),
    );
    let CountriesData = data?.data?.data;
    let cities = CitiesData?.data?.data;

    return (
        <div className='lg:col-span-2 grid grid-cols-2 gap-4'>
            <div className='grid gap-4 col-span-2'>
               
            </div>
        </div>
    );
}

export default AddressBranch



{/* {selectedOption === 'Add manually' ? (
        <div className='col-span-2'>
            <ManualAddressForm details={details} formStore={formStore} isName={isName} />
        </div>
    ) : (
        <div className='col-span-2'>
            <GoogleMapComponent
                setLocationEnabled={setLocationEnabled}
                setDisablePickButton={setDisablePickButton}
                height='300px'
            />
        </div>
)}  */}