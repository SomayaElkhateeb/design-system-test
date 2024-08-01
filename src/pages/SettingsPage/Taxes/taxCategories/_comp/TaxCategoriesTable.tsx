import { useTranslation } from "react-i18next";
import BaseTable, { GlobalTableCell } from "src/app/components/optimized/TableLayoutGlobal/base.table";
import { TaxCategoriesListResponse, TaxCategory } from "src/app/interface/settingsInterface/TaxSettingsInterface";
import useLanguage from "src/app/utils/hooks/useLanguage";

const TaxCategoriesTable = ({
  data,
  handelId,
  isLoading,
  children
}: {
  data: TaxCategoriesListResponse[];
  handelId: (e: string) => void;
  isLoading: boolean;
  children: React.ReactNode;

}) => {

  //  hooks
  const { language } = useLanguage();
  const { t } = useTranslation();

  //  headers
  const dataHeaders = [
    { title: t('name & description') },
    { title: t('tax rates') },
    { title: t('code') },
    { title: t('actions') },
  ];

  return (
    <BaseTable
      isLoading={isLoading}
      language={language}
      color='#55607A'
      headers={dataHeaders.map((h) => h)}
      rows={data?.map((e: TaxCategory, i: number) => {
        return {
          item: e,
          elements: [
            <GlobalTableCell>
              <div className=' flex  items-center gap-[.3rem] '>
                <p className='title'>{e.name}</p>
                <p className='text-title text-sm'>{e.description}</p>
              </div>
            </GlobalTableCell>,
            <GlobalTableCell>
              <p className='text-title text-sm'>{e.code}</p>
            </GlobalTableCell>,
            <GlobalTableCell>
              <p className='text-title text-sm'>{e.taxrates}</p>
            </GlobalTableCell>,
            <GlobalTableCell>
              <div onClick={() => handelId(e?.id)}>{children}</div>
            </GlobalTableCell>,
          ],
        };
      })}
    />
  )
}

export default TaxCategoriesTable;
