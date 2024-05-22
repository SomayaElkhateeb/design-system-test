import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'src/app/components/optimized';
import { EditIcon } from 'src/app/utils/icons';
import { CustomerNoteForm } from '../..';

export default function CustomerNote() {
	const { t } = useTranslation();
	const [edit, setEdit] = useState(false);
	return (
		<div className='cardDetails-sharedClass'>
			<div>
				<div className={`flex items-center justify-between p-3 ${edit && 'pb-0'}`}>
					<h2 className='title capitalize'>{t('Customer note')}</h2>

					{edit ? (
						''
					) : (
						<Button LeftIcon={EditIcon} variant='tertiary' onClick={() => setEdit(true)}>
							{t('edit')}
						</Button>
					)}
				</div>
			</div>
			{edit ? (
				<CustomerNoteForm onClose={() => setEdit(false)} />
			) : (
				<div>
					<hr />
					<div className='p-3 h-20 flex items-center justify-center'>
						<p className='text-sm text-hint'>{t('There are no notes')}</p>
					</div>
				</div>
			)}
		</div>
	);
}
