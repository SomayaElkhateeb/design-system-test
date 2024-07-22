import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

// const Accordion = styled((props: AccordionProps) => (
//     <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//     border: `1px solid ${theme.palette.divider}`,
//     '&:not(:last-child)': {
//         borderBottom: 0,
//     },
//     '&::before': {
//         display: 'none',
//     },
// }));

// const AccordionSummary = styled((props: AccordionSummaryProps) => (
//     <MuiAccordionSummary
//         expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
//         {...props}
//     />
// ))(({ theme }) => ({
//     backgroundColor:
//         theme.palette.mode === 'dark'
//             ? 'rgba(255, 255, 255, .05)'
//             : 'rgba(0, 0, 0, .03)',
//     flexDirection: 'row-reverse',
//     '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//         transform: 'rotate(90deg)',
//     },
//     '& .MuiAccordionSummary-content': {
//         marginLeft: theme.spacing(1),
//     },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//     padding: theme.spacing(2),
//     borderTop: '1px solid rgba(0, 0, 0, .125)',
// }));

// const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
//     '& .MuiCheckbox-root': {
//         marginRight: theme.spacing(2),
//     },
//     '& .MuiTypography-root': {
//         flexGrow: 1,
//     },
// }));


// type AccordionData = {
//     id: string;
//     title: string;
//     content: string;
// };

// type CustomizedAccordionsProps = {
//     data: AccordionData[];
// };

export default function CustomizedAccordions({ accordionData }) {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [checkedItems, setCheckedItems] = React.useState<{ [key: string]: boolean }>({});

    // const handleChange =
    //     (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    //         setExpanded(newExpanded ? panel : false);
    //     };

    // const handleCheckboxChange = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setCheckedItems({
    //         ...checkedItems,
    //         [id]: event.target.checked,
    //     });
    // };
    // const data = Object.values(accordionData);
    // const AccordionContent = styled(Typography)(({ theme }) => ({
    //     padding: theme.spacing(2),
    //     borderTop: '1px solid rgba(0, 0, 0, .125)',
    // }));
    // const StyledAccordion = styled(Accordion)(({ theme }) => ({
    //     border: `1px solid ${theme.palette.divider}`,
    //     '&:not(:last-child)': {
    //         borderBottom: 0,
    //     },
    //     '&::before': {
    //         display: 'none',
    //     },
    // }));
    return (
        <div>
            {/* {data.map((item, index) => (
                <StyledAccordion key={index} expanded={expanded === index} onChange={handleChange(index)}>
                    <StyledAccordionSummary aria-controls={`${index}-content`} id={`${index}-header`}>
                        <Checkbox
                            checked={checkedItems[index] || false}
                            onChange={handleCheckboxChange(index)}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <Typography sx={{ marginTop: 1 }}>{item.key}</Typography>
                    </StyledAccordionSummary>
                    <AccordionContent>
                        {Object.entries(item.children).map(([key, child], i) => (
                            <div key={i} className="flex">
                                <Checkbox
                                    checked={checkedItems[i] || false}
                                    onChange={handleCheckboxChange(i)}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                                <Typography sx={{ marginTop: 1 }}>{child.name}</Typography>
                            </div>
                        ))}
                    </AccordionContent>
                </StyledAccordion>
            ))} */}
        </div>
    );
}

//////////////////////////////////////

// import React, { useState } from 'react';
// import { styled } from '@mui/material/styles';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import Checkbox from '@mui/material/Checkbox';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

// // Styled Components
// const StyledAccordion = styled(Accordion)(({ theme }) => ({
//   border: `1px solid ${theme.palette.divider}`,
//   '&:not(:last-child)': {
//     borderBottom: 0,
//   },
//   '&::before': {
//     display: 'none',
//   },
// }));

// const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === 'dark'
//       ? 'rgba(255, 255, 255, .05)'
//       : 'rgba(0, 0, 0, .03)',
//   flexDirection: 'row-reverse',
//   '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//     transform: 'rotate(90deg)',
//   },
//   '& .MuiAccordionSummary-content': {
//     marginLeft: theme.spacing(1),
//     display: 'flex',
//     alignItems: 'center',
//   },
// }));

// const AccordionContent = styled(Typography)(({ theme }) => ({
//   padding: theme.spacing(2),
//   borderTop: '1px solid rgba(0, 0, 0, .125)',
// }));

// const DynamicAccordion = () => {
//   const [expanded, setExpanded] = useState<string | false>(false);
//   const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

//   const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
//     setExpanded(newExpanded ? panel : false);
//   };

//   const handleCheckboxChange = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCheckedItems({
//       ...checkedItems,
//       [id]: event.target.checked,
//     });
//   };

//   // Your accordionData object
//   const accordionData = {
//     panel1: {
//       id: 'panel1',
//       title: 'Collapsible Group Item #1',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
//     },
//     panel2: {
//       id: 'panel2',
//       title: 'Collapsible Group Item #2',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
//     },
//     panel3: {
//       id: 'panel3',
//       title: 'Collapsible Group Item #3',
//       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
//     },
//   };

//   // Convert the object to an array for rendering
//   const data = Object.values(accordionData);

//   return (
//     <div>
//       {data.map((item) => (
//         <StyledAccordion key={item.id} expanded={expanded === item.id} onChange={handleChange(item.id)}>
//           <StyledAccordionSummary aria-controls={`${item.id}-content`} id={`${item.id}-header`}>
//             <Checkbox
//               checked={checkedItems[item.id] || false}
//               onChange={handleCheckboxChange(item.id)}
//               inputProps={{ 'aria-label': 'controlled' }}
//             />
//             <Typography sx={{ marginTop: 1 }}>{item.title}</Typography>
//           </StyledAccordionSummary>
//           <AccordionContent>
//             <Typography>{item.content}</Typography>
//           </AccordionContent>
//         </StyledAccordion>
//       ))}
//     </div>
//   );
// };

// export default DynamicAccordion;
