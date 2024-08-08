import { useTranslation } from 'react-i18next';
import useLanguage from 'src/app/utils/hooks/useLanguage';
import BaseTable, {
  GlobalTableCell,
} from 'src/app/components/optimized/TableLayoutGlobal/base.table';
import { User } from 'src/app/interface/settingsInterface/UsersSettingsInterface';
import { useState } from 'react';
import FormSwitchField from 'src/app/components/ui/form/FormSwitchField';

export default function AttributesTable({
  data,
  handelId,
  isLoading,
  children,
}: {
  data: any[];
  handelId: (e: string) => void;
  children: React.ReactNode;
  isLoading: boolean;
}) {

  //  hooks
  const { language } = useLanguage();
  const { t } = useTranslation();

  //  headers
  const dataHeaders = [
    { title: t('code') },
    { title: t('type') },
    { title: t('admin name') },
    { title: t('swatch-type') },
    { title: t('default null-option') },
    { title: t('actions') },
  ];

  return (
    <BaseTable
      isLoading={isLoading}
      language={language}
      color='#55607A'
      headers={dataHeaders.map((h) => h)}
      rows={data?.map((e: User, i: number) => {
        return {
          item: e,
          elements: [
            <GlobalTableCell>
              <div className=' flex  items-center gap-[.3rem] '>
                <p className='title'>{e.code}</p>

              </div>
            </GlobalTableCell>,
            <GlobalTableCell>
              <p className='text-primary underline text-sm'>{e.type}</p>
            </GlobalTableCell>,
            <GlobalTableCell>
              <p className='text-title text-sm'>{e.admin}</p>
            </GlobalTableCell>,
            <GlobalTableCell>
              <p className='text-title text-sm'>{e.swatch}</p>
            </GlobalTableCell>,
            <GlobalTableCell>
              {/* <FormSwitchField
                formStore={formStore}
                label={e.option === 1 ? 'on' : 'off'}
              /> */}
              <p className='text-title text-sm'>{e.option === 1 ? 'on' : 'off'}</p>
            </GlobalTableCell>,
            <GlobalTableCell>
              <div onClick={() => handelId(e?.id)}>{children}</div>
            </GlobalTableCell>,
          ],
        };
      })}
    />
  );
}

