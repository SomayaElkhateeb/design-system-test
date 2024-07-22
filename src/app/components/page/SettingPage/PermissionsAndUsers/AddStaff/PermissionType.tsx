import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';


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

// const Accordion = styled((props: AccordionProps) => (
//     <MuiAccordion disableGutters elevation={0} square {...props} />
// ))(({ theme }) => ({
//     paddingTop: 0,
//     paddingBottom: 0,
//     '&:last-child': {
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
//             ? 'white'
//             : 'white',
//     flexDirection: 'row-reverse',
//     '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
//         transform: 'rotate(90deg)',
//     },
//     '& .MuiAccordionSummary-content': {
//         marginLeft: theme.spacing(1),
//     },
// }));

// const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
//     '& .MuiCheckbox-root': {
//         marginRight: theme.spacing(2),
//     },
//     '& .MuiTypography-root': {
//         flexGrow: 1,
//     },
// }));




// const NestedAccordion = ({ data, checkedItems, handleCheckboxChange }) => {
//     const [nestedExpanded, setNestedExpanded] = React.useState<string | false>(false);

//     const handleNestedChange =
//         (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
//             setNestedExpanded(newExpanded ? panel : false);
//         };

//     return (
//         <>
//             {Object.entries(data).map(([key, child], index) => (
//                 // Check if there are children before rendering the accordion
//                 child.children && Object.keys(child.children).length > 0 ? (
//                     <Accordion key={index} expanded={nestedExpanded === key} onChange={handleNestedChange(key)} >
//                         <StyledAccordionSummary aria-controls={`${key}-content`} id={`${key}-header`}>
//                             <Checkbox
//                                 checked={checkedItems[key] || false}
//                                 onChange={handleCheckboxChange(key)}
//                                 inputProps={{ 'aria-label': 'controlled' }}
//                             />
//                             <Typography sx={{ marginTop: 1 }}>{child.name}</Typography>
//                         </StyledAccordionSummary>
//                         <Box>
//                             <NestedAccordion  data={child.children} checkedItems={checkedItems} handleCheckboxChange={handleCheckboxChange} />
//                         </Box>
//                     </Accordion>
//                 ) : (
//                     <div key={index} className="flex">
//                         <Checkbox
//                             checked={checkedItems[key] || false}
//                             onChange={handleCheckboxChange(key)}
//                             inputProps={{ 'aria-label': 'controlled' }}
//                         />
//                         <Typography sx={{ marginTop: 1 }}>{child.name}</Typography>
//                     </div>
//                 )
//             ))}
//         </>
//     );
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
        // <div>
        //     {Object.entries(accordionData).map(([key, item], index) => (
        //         <Box key={index} expanded={expanded === key} onChange={handleChange(key)} >
        //             <StyledAccordionSummary aria-controls={`${key}-content`} id={`${key}-header`}>

        //                 <Checkbox
        //                     checked={checkedItems[key] || false}
        //                     onChange={handleCheckboxChange(key)}
        //                     inputProps={{ 'aria-label': 'controlled' }}
        //                 />
        //                 <Typography sx={{ marginTop: 1 }}>{item.name}</Typography>
        //             </StyledAccordionSummary>

        //             <AccordionContent>
        //                 {Object.entries(item.children).map(([key, child], i) => (
        //                     <div key={i} className="flex">
        //                         <Checkbox
        //                             checked={checkedItems[i] || false}
        //                             onChange={handleCheckboxChange(i)}
        //                             inputProps={{ 'aria-label': 'controlled' }}
        //                         />
        //                         <Typography sx={{ marginTop: 1 }}>{child.name}</Typography>
        //                     </div>
        //                 ))}
        //             </AccordionContent>
        //         </StyledAccordion>
        //     ))}

        //             <Box sx={{padding: "0 25px"}}>
        //                 <NestedAccordion data={item.children} checkedItems={checkedItems} handleCheckboxChange={handleCheckboxChange} />
        //             </Box>
        //         </Box>
        //     ))}

        // </div>
        <>
        </>
    );
}




