import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import { useState } from 'react';
export default function DropDownMenu({
	children,
	title,
	component
}: {
	title?: string;
	children: React.ReactNode;
	component?:React.ReactNode
}) {
	const [expanded, setExpanded] = useState(false);

	const handleExpansion = () => {
		setExpanded((prevExpanded) => !prevExpanded);
	};
	const titleClass = 'text-title font-normal text-[.8rem]';
	return (
		<Accordion
			expanded={expanded}
			onChange={handleExpansion}
			slots={{ transition: Fade as AccordionSlots['transition'] }}
			slotProps={{ transition: { timeout: 400 } }}
			sx={{
				'& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
				'& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
				boxShadow:"none"
			}}
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls='panel1-content'
				id='panel1-header'
			>
				{title &&<p className={titleClass}>{title}</p>}
				{component &&component}
			</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</Accordion>
	);
}
