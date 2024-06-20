import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { UseLanguage } from 'src/app/utils/hooks/LanguageHook';
import { Switch } from 'src/app/components/ui/switch';
import ThreeDotsButton from 'src/app/components/optimized/Buttons/ThreedotsButton';
import useSelectBox from 'src/app/components/optimized/Menu/useSelectBox';
import { nanoid } from 'nanoid';
import { AnalyticsIcon, CopyIcon, OrdersIcon, RemoveIcon, MoveIcon } from 'src/app/utils/icons';
import { useTranslation } from 'react-i18next';
import { getImageUrl } from 'src/app/utils';

function createData(name: string, products: number, active: boolean, img: string) {
	return {
		name,
		products,
		active,
		img,
		history: [
			{
				id: nanoid(),
				subName: 'mobility',
				subProducts: 51,
				subActive: true,
				subImg: 'images/product.png',
			},
			{
				id: nanoid(),
				subName: 'mobility',
				subProducts: 51,
				subActive: true,
				subImg: 'images/product.png',
			},
			{
				id: nanoid(),
				subName: 'mobility',
				subProducts: 51,
				subActive: true,
				subImg: 'images/product.png',
			},
		],
	};
}

function Row(props: { row: ReturnType<typeof createData> }) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);
	const language = UseLanguage();
	const { t } = useTranslation();
	const { selectedOption, handleSelect } = useSelectBox();

	const Menu = [
		{ id: nanoid(), text: t('Copy subcategory link'), icon: <CopyIcon className='iconClass' /> },
		{ id: nanoid(), text: t('Subcategory report'), icon: <AnalyticsIcon className='iconClass' /> },
		{ id: nanoid(), text: t('Subcategory products'), icon: <OrdersIcon className='iconClass' /> },
		{
			id: nanoid(),
			text: t('Delete subcategory'),
			icon: <RemoveIcon className='iconClass' />,
		},
	];

	const SubMenu = [
		{ id: nanoid(), text: t('Copy product link'), icon: <CopyIcon className='iconClass' /> },
		{ id: nanoid(), text: t('Product report'), icon: <AnalyticsIcon className='iconClass' /> },
		{ id: nanoid(), text: t('Products'), icon: <OrdersIcon className='iconClass' /> },
		{
			id: nanoid(),
			text: t('Delete product'),
			icon: <RemoveIcon className='iconClass' />,
		},
	];

	return (
		<React.Fragment>
			<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
				<TableCell>
					<IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component='th' scope='row' align={language === 'ar' ? 'right' : 'left'}>
					<div className='flex items-center gap-2'>
						<MoveIcon />
						<div className='size-8 border border-constrained rounded-md overflow-hidden'>
							<img src={getImageUrl(row.img)} />
						</div>

						<div>{row.name}</div>
					</div>
				</TableCell>
				<TableCell align={language === 'ar' ? 'right' : 'left'}>{row.products}</TableCell>
				<TableCell align={language === 'ar' ? 'right' : 'left'}>
					<Switch checked={row.active} />
				</TableCell>
				<TableCell align={language === 'ar' ? 'right' : 'left'}>
					<div className='flex gap-4 items-center'>
						<ThreeDotsButton
							sortMenus={Menu}
							selectedOption={selectedOption}
							handelSelect={handleSelect}
						/>
					</div>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell
					style={{ paddingBottom: 0, paddingTop: 0, paddingLeft: 100, paddingRight: 100 }}
					colSpan={15}
				>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Table size='small' aria-label='purchases'>
								<TableBody>
									{row.history.map((historyRow) => (
										<TableRow key={historyRow.id}>
											<TableCell component='th' scope='row'>
												<div className='flex items-center gap-2'>
													<MoveIcon />
													<div className='size-8 border border-constrained rounded-md overflow-hidden'>
														<img src={getImageUrl(row.img)} />
													</div>

													<div>{historyRow.subName}</div>
												</div>
											</TableCell>
											<TableCell>{historyRow.subProducts}</TableCell>
											<TableCell align='right'>
												<Switch checked={historyRow.subActive} />
											</TableCell>
											<TableCell align='right'>
												<div className='flex gap-4 items-center justify-end'>
													<ThreeDotsButton
														sortMenus={SubMenu}
														selectedOption={selectedOption}
														handelSelect={handleSelect}
													/>
												</div>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

const rows = [
	createData('General Wellness', 159, true, 'images/product.png'),
	createData('General Wellness', 237, true, 'images/product.png'),
	createData('General Wellness', 262, true, 'images/product.png'),
];

export default function SubCategoryTable() {
	const language = UseLanguage();
	const {t} =useTranslation()
	
	const handelAlign=language === 'ar' ? 'right' : 'left';
	
	return (
		<TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
			<Table aria-label='collapsible table'>
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell align={handelAlign}>{t("NAME")}</TableCell>
						<TableCell align={handelAlign}>{t("PRODUCTS NO.")}</TableCell>
						<TableCell align={handelAlign}>{t("AVAILABILITY")}</TableCell>
						<TableCell align={handelAlign}>{t("ACTIONS")}</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<Row key={row.name} row={row} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
