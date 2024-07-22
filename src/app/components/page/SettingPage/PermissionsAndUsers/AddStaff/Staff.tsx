import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import FormField from 'src/app/components/ui/form/field';
import { Input } from 'src/app/components/ui/input';
import { addStuffInterface } from './HookForAddStuff';
import { useQuery } from 'react-query';
import { RolesApi } from 'src/app/React-Query/RolesApi';
import SelectFormField from 'src/app/components/ui/form/SelectFormField';
import { RolesList } from 'src/app/interface/settingsInterface/rolesSettingsInterface';

export default function Stuff({ formStore }: { formStore: UseFormReturn<addStuffInterface> }) {
	//  hooks
	const { t } = useTranslation();

	//  get Roles data  with api request
	const { isLoading, data, isError, error } = useQuery(['rolesData'], () =>
		RolesApi.roles(),
	);

	let rolesData = data?.data?.data; 
	console.log('rolesData', rolesData);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		console.error('Error fetching roles data:', error);
		return <div>Error loading roles data</div>;
	}

	return (
		<div className='cardDetails-sharedClass p-5 '>
			<div className='flex-col-global md:w-[70%]'>
				<FormField
					formStore={formStore}
					name='name'
					label={t('Full name')}
					render={(field) => <Input {...field} />}
				/>

				{rolesData.length > 0 && (
					<SelectFormField
						name='storeIndustry'
						label={t('Role')}
						formStore={formStore}
						options={rolesData?.map((role: RolesList) => ({
							label: role?.name,
							value: role?.id?.toString(),
						}))}
						placeholder={t('Select role')}
					/>
				)}

				<FormField
					formStore={formStore}
					name='email'
					label={t('Email address')}
					render={(field) => <Input {...field} />}
				/>
			</div>
		</div>
	);
}
