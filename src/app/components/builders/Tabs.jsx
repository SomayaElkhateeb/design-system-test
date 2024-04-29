import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'src/app/components/ui/tabs';
/**
 * @template {unknown} [ElemProps=undefined]
 *
 * @typedef {{
 *  title: string;
 *  Elem: (props: ElemProps) => JSX.Element;
 *  isInProgress?: boolean;
 * }} TabsBuilderItem
 */

/**
 * @template {unknown} [ElemProps=undefined]
 *
 * @param {{
 *  items: TabsBuilderItem<ElemProps>
 *  sharedProps?: ElemProps;
 * }} props
 */
export default function TabsBuilder(props) {
	const sharedProps = props.sharedProps;
	const { t } = useTranslation();
	return (
		<Tabs defaultValue={props.items[0].title} className='space-y-4'>
			<TabsList className='justify-start w-full h-auto max-w-full gap-6 p-0 overflow-auto bg-transparent border-b rounded-none border-inactive'>
				{props.items.map((tab) => (
					<TabsTrigger
						key={tab.title}
						value={tab.title}
						className='p-0 pb-2 shadow-none rounded-none data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary'
					>
						{/* @ts-ignore */}
						{t(tab.title)}{' '}
						{tab.isInProgress && <p className='text-sec-pressed'>&nbsp;({t('In Progress')})</p>}
					</TabsTrigger>
				))}
			</TabsList>
			{props.items.map((tab) => (
				<TabsContent key={tab.title} value={tab.title}>
					{/* @ts-ignore */}
					<tab.Elem {...sharedProps} />
				</TabsContent>
			))}
		</Tabs>
	);
}
