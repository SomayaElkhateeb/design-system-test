import { useRef, useState } from 'react';
import useLocalStorage from '../comp/useLocalStorage';

export default function useDiscountForm() {
	const [discountName, setDiscountName] = useLocalStorage('discountName', '');
	const discountNameRef = useRef();
	const [percentage, setPercentage] = useState('');
	const [fixedAmount, setFixedAmount] = useLocalStorage('fixedAmount', '');
	const fixedAmountRef = useRef();
	const [discountType, setDiscountType] = useState('');
	const [showSelectCategories, setShowSelectCategories] = useState(false);
	const [applyTo, setApplyTo] = useState('');
	const [customerGets, setCustomerGets] = useState('');
	const [percentGets, setPercentGets] = useLocalStorage('percentGets', '');
	const [quantityGets, setQuantityGets] = useLocalStorage('quantityGets', '');
	const [selectedProducts, setSelectedProducts] = useState([]);
	const [selectedItems, setSelectedItems] = useState([]);

	// const [discounts, setDiscounts] = useLocalStorage("discounts", []);
	// useState category
	const [stateCategory, setStateCategory] = useState([]);
	// useState products
	const [stateProducts, setStateProducts] = useState([]);
	// useState customer groups
	const [stateGroups, setStateGroups] = useState([]);
	// useState customers
	const [stateCustomers, setStateCustomers] = useState([]);

	// customer Segment
	const [optionType, setOptionType] = useState('');
	const [customerSegment, setCustomerSegment] = useState('');
	const [showGroups, setShowGroups] = useState(false);
	const [showCustomers, setShowCustomers] = useState(false);
	const [selectedCustomers, setSelectedCustomers] = useState([]);

	// Minimum Requirements
	const [minimumReq, setMinimumReq] = useState('');
	const [showSelectButtons, setShowSelectButtons] = useState(false);
	const [minimumPrice, setMinimumPrice] = useLocalStorage('minimumPrice', '');
	const [minimumQuantity, setMinimumQuantity] = useLocalStorage('minimumQuantity', '');
	const [endDatePicker, setEndDatePicker] = useState(false);
	const [endDate, setEndDate] = useLocalStorage('endDate', /** @type {import("dayjs").Dayjs | null} */ (null));

	/*
	// LOCAL STORAGE
	// Function to add an item to the array
	// Function to add an object to the array
	const addObjectToArray = (object) => {
			setDiscounts([...discountName, object]);
	};

	// Function to clear the array
	const clearArray = () => {
			setDiscountName([]);
	};
	*/
	// //////////////////////
	/** @param {string} type */
	function handleDiscountTypeChange(type) {
		setDiscountType(type);
	}

	/** @param {string} value */
	function handleApplyToChange(value) {
		setApplyTo(value);
	}

	function handleCloseSelectCategories() {
		setShowSelectCategories(false);
	}

	/** @param {string} value */
	function handlePercentGetsChange(value) {
		setPercentGets(value);
	}

	/** @param {string} value */
	const handleQuantityGetsChange = (value) => {
		setQuantityGets(value);
	};

	/** @param {string} value */
	const handleCustomerGetsChange = (value) => {
		setCustomerGets(value);
	};

	/** @param {string} value */
	function handleCustomersChange(value) {
		setCustomerSegment(value);
	}

	/** @param {string} type */
	const handleOptionChange = (type) => {
		setOptionType(type);
	};

	function hideSelectCustomers() {
		setShowCustomers(false);
	}

	function hideSelectGroup() {
		setShowGroups(false);
	}

	// Minimum Requirements
	function handleCheckBoxClick() {
		setShowSelectButtons(!showSelectButtons);
	}

	/** @param {string} value */
	function handleMinimumChange(value) {
		setMinimumReq(value);
	}
	return {
		discountName,
		setDiscountName,
		discountNameRef,
		discountType,
		setDiscountType: handleDiscountTypeChange,
		fixedAmountRef,
		applyTo,
		setApplyTo: handleApplyToChange,
		customerGets,
		setCustomerGets: handleCustomerGetsChange,
		selectedProducts,
		// handleProductSelect,
		percentage,
		setPercentage,
		fixedAmount,
		setFixedAmount,
		percentGets,
		setPercentGets: handlePercentGetsChange,
		quantityGets,
		setQuantityGets: handleQuantityGetsChange,
		showSelectCategories,
		setShowSelectCategories,
		handleCloseSelectCategories,
		selectedItems,
		setSelectedCustomers,
		// customer segment
		optionType,
		setOptionType: handleOptionChange,
		customerSegment,
		setCustomerSegment: handleCustomersChange,
		selectedCustomers,

		// handleProductSelect,
		showGroups,
		setShowGroups,
		hideSelectGroup,
		showCustomers,
		setShowCustomers,
		hideSelectCustomers,
		// Minimum Requirements
		minimumReq,
		setMinimumReq: handleMinimumChange,
		showSelectButtons,
		setShowSelectButtons: handleCheckBoxClick,

		// handle local storage
		setSelectedItems,

		// discounts,
		// setDiscounts: addObjectToArray,
		// /////////////////////////////
		stateCategory,
		setStateCategory,
		stateProducts,
		setStateProducts,
		stateGroups,
		setStateGroups,
		stateCustomers,
		setStateCustomers,

		minimumPrice,
		setMinimumPrice,
		minimumQuantity,
		setMinimumQuantity,

		endDatePicker,
		setEndDatePicker,
		endDate,
		setEndDate,
	};
}
