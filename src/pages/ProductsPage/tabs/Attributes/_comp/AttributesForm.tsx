import { useTranslation } from 'react-i18next';
import { Button, SubHeader } from 'src/app/components/optimized';
import { Form } from 'src/app/components/ui/form';
import { useForm } from 'src/app/utils/hooks/form';
import {
  SubHeaderDefaultBtns,
  SubHeaderMobileBtns,
} from 'src/app/components/optimized/UiKits/SubHeaderActionBtns';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';
import useCustomHookAddAttribute, { addAttributeInterface } from '../_hook/HookAddAttributes';
import AttributeInfo from './AttributeInfo';
import { AddFillIcon, StarIcon } from 'src/app/utils/icons';
import OptionFields from './OptionFields';

const AttributesForm = () => {
  //  hooks
  const [addOption, setAddOption] = useState(false);
  const { t } = useTranslation();

  // custom hook
  const { handelDefaultValue, AddAttributeSchema } = useCustomHookAddAttribute();
  const handleSubmit = (values: addAttributeInterface) => {
    console.log(values);
  };

  const { formStore, onSubmit } = useForm({
    schema: AddAttributeSchema,
    handleSubmit: handleSubmit,
    defaultValues: handelDefaultValue(),
  });

  return (
    <Form {...formStore}>
      <form onSubmit={onSubmit} className='flex-col-global'>
        <SubHeader title={t('add attribute')}>
          <SubHeaderDefaultBtns onSubmit={onSubmit} />
        </SubHeader>
        <div className='custom_container custom-grid-parent'>
          <div className=' flex-col-global grid-left'>
            <AttributeInfo formStore={formStore} />

            {addOption ? <OptionFields formStore={formStore} /> : <div>
              <Button LeftIcon={AddFillIcon} variant='secondary' onClick={() => setAddOption(true)}>
                {t('Add Option')}
              </Button>
            </div>}

            <div>
              <Button LeftIcon={AddFillIcon} variant='secondary'>
                {t('add more option')}
              </Button>
            </div>

          </div>
          {/* actions */}
          <div className='grid-right'>
            <div className='global-cards'>
              <h3 className='title'>{t('Quick actions')}</h3>
              <div className='flex-row-global gap-2'>
                <FormSwitchField<addAttributeInterface>
                  formStore={formStore}
                  name='store'
                  enable
                />
                <p>{t('Available on store')}</p>
              </div>

              <div className='flex-row-global gap-2'>
                <StarIcon />
                <p>{t('Feature on the front page')}</p>
              </div>
            </div>

          </div>
        </div>
        <div className='flex-btn-end px-5'>
          <SubHeaderMobileBtns onSubmit={onSubmit} />
        </div>
      </form>
    </Form>
  );
}

export default AttributesForm
