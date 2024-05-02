import { useTranslation } from 'react-i18next';

/**
 * PopupProceed component for displaying a popup dialog with a proceed option.
 * @param {Object} props - Props for the PopupProceed component.
 * @param {boolean} props.isOpen - Boolean indicating whether the popup is open.
 * @param {() => void} props.onClose - Function to close the popup.
 * @param {string} props.title - Title of the popup dialog.
 * @param {string} [props.subTitle] - Subtitle of the popup dialog.
 * @param {JSX.Element} props.children - Content to be displayed within the popup.
 * @param {string} props.buttonText - Text to display on the button to proceed.
 * @param {() => void} [props.onCancel] - Function to handle cancellation. If not provided, closes the popup.
 * @param {() => void} props.onProceed - Function to proceed after confirmation.
 * @returns {JSX.Element | null} - PopupProceed component JSX or null if it's not open.
 */
export default function PopupProceed(props) {
	const { t } = useTranslation();

	/**
	 * Handles the proceed action and closes the popup.
	 */
	function handleProceed() {
		props.onClose();
		props.onProceed();
	}

	if (!props.isOpen) {
		return null;
	}

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center p-3'>
			{/* Overlay */}
			<div className='fixed inset-0 bg-black opacity-50' onClick={props.onClose}></div>

			{/* Popup Content */}
			<div className='relative flex flex-col content-between p-5 bg-white border rounded-md border-constrained w-2/5'>
				<div className='mb-4'>
					<h3 className='font-semibold text-title text-xl'>{props.title}</h3>
					<p className='mt-1 text-sm subtitle'>{props.subTitle}</p>
				</div>

				<div>{props.children}</div>

				<div className='flex items-center justify-end gap-2 mt-5'>
					<button
						className='px-4 py-2 text-sm font-semibold text-title'
						onClick={props.onCancel || props.onClose}
					>
						{t('Cancel')}
					</button>
					<button className='btn-pri' onClick={handleProceed}>
						{props.buttonText}
					</button>
				</div>
			</div>
		</div>
	);
}

/*
 const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleProceed = () => {
    // Your proceed logic here
    console.log('Proceeding...');
    closePopup();
  };

  const handleCancel = () => {
    // Your cancel logic here
    console.log('Canceled');
    closePopup();
  };

    <div className="App">
      <button onClick={openPopup}>Open Popup</button>
      <PopupProceed
        isOpen={isPopupOpen}
        onClose={closePopup}
        title="Confirmation"
        subTitle="Are you sure you want to proceed?"
        buttonText="Proceed"
        onCancel={handleCancel}
        onProceed={handleProceed}
      >
        <p>This is the content of the popup.</p>
      </PopupProceed>
    </div>
*/
