const CURRENCY = 'SAR';

export const feeFormat = (fee: string | number): string => {
	return fee ? `${CURRENCY} ${fee}` : 'free';
};

export const transactionFormat = (fee: {
	flatFee: string | number;
	percentageFee: string | number;
}) => {
	const { flatFee, percentageFee } = fee;
	if (flatFee && percentageFee) {
		return `${percentageFee}% + ${CURRENCY} ${flatFee}`;
	} else if (flatFee && !percentageFee) {
		return `${CURRENCY} ${flatFee}`;
	} else if (!flatFee && percentageFee) {
		return `${percentageFee}%`;
	} else {
		return 'Free';
	}
};
