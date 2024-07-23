import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/material';
import { getPermissions } from 'src/app/store/slices/settingsPage/roles/rolesAsyncThunks';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { AddRolesInterface } from './HookForAddRoles';
import { UseFormReturn } from 'react-hook-form';

// styles
const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    paddingTop: 0,
    paddingBottom: 0,
    '&:last-child': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'white',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    '& .MuiCheckbox-root': {
        marginRight: theme.spacing(2),
    },
    '& .MuiTypography-root': {
        flexGrow: 1,
    },
}));
//////////////////////////////////////////////////////
// the child accordion data
type PermissionsData = {
    [key: string]: {
        name: string;
        children?: PermissionsData;
    };
};

type CheckedItems = {
    [key: string]: boolean;
};

type HandleCheckboxChange = (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => void;

const updateCheckedItems = (
    key: string,
    checked: boolean,
    checkedItems: CheckedItems,
    data: PermissionsData,
    parentKey = ''
): { updatedItems: CheckedItems, checkedArray: string[] } => {
    const updatedItems: CheckedItems = { ...checkedItems, [key]: checked };
    const fullKey = parentKey ? `${parentKey}.${key}` : key; // get full name kyes
    const checkedArray: string[] = [fullKey];

    if (data[key] && data[key].children) {
        Object.keys(data[key].children).forEach((childKey) => {
            const { updatedItems: childUpdatedItems, checkedArray: childCheckedArray } =
                updateCheckedItems(childKey, checked, updatedItems, data[key].children!, fullKey);
            Object.assign(updatedItems, childUpdatedItems);
            checkedArray.push(...childCheckedArray);
        });
    }

    return { updatedItems, checkedArray };
};

const NestedAccordion = ({ data, checkedItems, handleCheckboxChange, parentKey = '' }: { data: PermissionsData; checkedItems: CheckedItems; handleCheckboxChange: HandleCheckboxChange, parentKey?: string }) => {
    const [nestedExpanded, setNestedExpanded] = React.useState<string | false>(false);

    const handleNestedChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setNestedExpanded(newExpanded ? panel : false);
        };

    return (
        <>
            {Object.entries(data).map(([key, child], index) => {
                const fullKey = parentKey ? `${parentKey}.${key}` : key;
                return child.children && Object.keys(child.children).length > 0 ? (
                    <Accordion key={index} expanded={nestedExpanded === key} onChange={handleNestedChange(key)}>
                        <StyledAccordionSummary aria-controls={`${key}-content`} id={`${key}-header`}>
                            <Checkbox
                                checked={checkedItems[fullKey] || false}
                                onChange={handleCheckboxChange(fullKey)}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <Typography sx={{ marginTop: 1 }}>{child.name}</Typography>
                        </StyledAccordionSummary>
                        <Box sx={{ padding: "0 60px" }}>
                            <NestedAccordion data={child.children} checkedItems={checkedItems} handleCheckboxChange={handleCheckboxChange} parentKey={fullKey} />
                        </Box>
                    </Accordion>
                ) : (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox
                            checked={checkedItems[fullKey] || false}
                            onChange={handleCheckboxChange(fullKey)}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <Typography sx={{ marginTop: 1 }}>{child.name}</Typography>
                    </div>
                )
            })}
        </>
    );
};

// PermissionsData
export default function PermissionType({ formStore }: { formStore: UseFormReturn<AddRolesInterface> }) {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [checkedItems, setCheckedItems] = React.useState<CheckedItems>({});
    const [checkedArray, setCheckedArray] = React.useState<string[]>([]);

    // redux
    const dispatch = useAppDispatch();
    const { permissions } = useAppSelector((state) => state.rolesSettings);

    React.useEffect(() => {
        dispatch(getPermissions());
    }, [dispatch]);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    const handleCheckboxChange: HandleCheckboxChange = (key: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCheckedStatus = event.target.checked;
        const { updatedItems, checkedArray: newCheckedArray } = updateCheckedItems(key, newCheckedStatus, checkedItems, permissions);
        setCheckedItems(updatedItems);

        // Update the array of checked items
        if (newCheckedStatus) {
            setCheckedArray((prevArray) => [...prevArray, ...newCheckedArray]);
        } else {
            setCheckedArray((prevArray) => prevArray.filter((item) => !newCheckedArray.includes(item)));
        }
    };

    React.useEffect(() => {
        console.log('Checked array:', checkedArray);
    }, [checkedArray]);

    return (
        <>
            {Object.entries(permissions).map(([key, item], index) => {
                const fullKey = key;
                return (
                    <Accordion key={index} expanded={expanded === key} onChange={handleChange(key)}>
                        <StyledAccordionSummary aria-controls={`${key}-content`} id={`${key}-header`}>
                            <Checkbox
                                checked={checkedItems[fullKey] || false}
                                onChange={handleCheckboxChange(fullKey)}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <Typography sx={{ marginTop: 1 }}>{item.name}</Typography>
                        </StyledAccordionSummary>
                        <Box sx={{ padding: "0 40px" }}>
                            <NestedAccordion data={item.children} checkedItems={checkedItems} handleCheckboxChange={handleCheckboxChange} parentKey={fullKey} />
                        </Box>
                    </Accordion>
                );
            })}
        </>
    );
}

