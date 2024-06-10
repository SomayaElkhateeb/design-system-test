import { TableRow } from '../StoreReviews';
import TableMobile, { TableColumn } from 'src/app/components/optimized/TableMobile/TableMobile';

import { StarActiveIcon } from 'src/app/utils/icons';

const reviewColumns: TableColumn<TableRow>[] = [
  { label: 'Ratings No.', key: 'ratingsNo' },
  { label: 'Average', key: 'average', render: (value: any) => (
    <span className="flex gap-0.5 items-center">
      <StarActiveIcon className="fill-neutral-1" />
      <p>{value}</p>
    </span>
  )},
  { label: 'Orders', key: 'orders' },
  { label: 'Top customer group', key: 'topCustomerGroup' },
  { label: 'Returns', key: 'returns' },
];

export default function StoreReviewsTableMobile({ tableData }: { tableData: TableRow[] }) {
  return <TableMobile tableData={tableData} columns={reviewColumns} />;
}
