
import GeneralSettings from './GeneralSettings'
import AddNewCustomer from './AddNewCustomer'
import OrderDetails from './OrderDetails'
import CustomerInfo from './CustomerInfo'

const AccordionSetting = () => {
  return (
    <div className='
     p-3 flex flex-col gap-4'>
      <GeneralSettings />
      <AddNewCustomer />
      <OrderDetails />
      <CustomerInfo />
    </div>
  )
}

export default AccordionSetting



