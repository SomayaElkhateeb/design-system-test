
import GeneralSettings from './GeneralSettings'
import AddNewCustomer from './AddNewCustomer'
import OrderDetails from './OrderDetails'
import CustomerInfo from './CustomerInfo'

const Accordion = () => {
  return (
    <div className='p-3 flex flex-col gap-4 bg-red-200 w-[1226px]'>
      <GeneralSettings />
      <GeneralSettings />
      <AddNewCustomer />
      <OrderDetails />
      <CustomerInfo />
    </div>
  )
}

export default Accordion;



