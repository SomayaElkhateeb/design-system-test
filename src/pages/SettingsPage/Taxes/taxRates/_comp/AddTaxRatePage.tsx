import TabPanel from '@mui/lab/TabPanel';
import { Tab } from '@mui/material';
import { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { Button, SubHeader } from 'src/app/components/optimized';
import AddButtonMobile from 'src/app/components/optimized/Buttons/AddButtonMobile';
import Tabs from 'src/app/components/optimized/Tabs/Tabs';
import { useNavigate } from 'react-router-dom';
import useResponsive from 'src/app/utils/hooks/useResponsive';
import AddTaxRate from './AddTaxRate';
import AddTaxAppliesTo from './AddTaxAppliesTo';

const AddTaxRatePage = () => {

    	//  hooks
	const { t } = useTranslation();
	const navigate = useNavigate();
	const [value, setValue] = useState(1);
	const { xs } = useResponsive();

  return (
    <>
    <SubHeader title={t('Tax Rates')}>
        {xs ? '' : <Button
            variant='primary'
            LeftIcon={IoMdAddCircle}
            onClick={() => {
                if (value !== 1) {
                    navigate('addTaxRate');
                } 
            }}
        >
            {value === 1 ? t('add tax rate') : t('add tax applies')}
        </Button>}

        {xs && <div />}
    </SubHeader>

    <Tabs
        body={
            <>
                <TabPanel value='1'>
                    <AddTaxRate />
                </TabPanel>
                <TabPanel value='2'>
                    <AddTaxAppliesTo />
                </TabPanel>
            </>
        }
    >
        {/*  children */}
        <Tab onClick={() => setValue(1)} label={t('tax rates')} value='1' />
        <Tab onClick={() => setValue(2)} label={t('tax configuration setting')} value='2' />
    </Tabs>

    {xs && (
        <div className='flex-end pr-3'>
            <AddButtonMobile onClick={() => {
                if (value !== 1) {
                    navigate('addTaxRate');
                }
            }} />
        </div>
    )}
</>
  )
}

export default AddTaxRatePage;
