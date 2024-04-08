import {
    Box,
    Fade,
    LinearProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Theme,
} from "@mui/material";




import emptyList from "../../../../assets/images/EmptyList.png";
import { Model } from "src/app/types/model.type";
import { ReactMetaElement } from "src/app/interface/react-meta-element.interface";
type props = {


    headers: string[];
    rows: ReactMetaElement<any>[];
    isLoading?: boolean;
    color?: string;
};

const BaseTable = <T extends Model>({
    headers,
    rows,
    isLoading,
    color,

}: props) => (
    <>
        <TableContainer
            sx={{
                marginTop: "20px",
                backgroundColor: "white",
                maxHeight: 600,
                minHeight: 100,
            }}>
            <Fade in={isLoading}>
                <LinearProgress color="primary" />
            </Fade>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {headers?.map((header: string, i: any) => (
                            <TableCell
                                sx={{
                                    color: color,
                                    fontSize: "14px",
                                    fontWeight: 400,
                                }}
                                key={`h-${i}`}>
                                {header?.toUpperCase()}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                {rows?.length > 0 && (
                    <TableBody>
                        {/*Rows*/}
                        {!isLoading &&
                            rows?.map((e: ReactMetaElement<T>, i: number) => (
                                <TableRow
                                    key={
                                        `r-${e.item.id}+${i}` ||
                                        `${e.item.user}+${i}`
                                    }>
                                    {...e?.elements}
                                    {/*Actions*/}
                                    {e?.extras &&<TableCell>{...e?.extras}</TableCell>}
                                </TableRow>
                            ))}
                    </TableBody>
                )}
            </Table>
        </TableContainer>
        {rows?.length === 0 && (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: "50px",
                    mb: "20px",
                    width: "100%",
                }}>
                <img
                    style={{
                        width: "259px",
                        height: "287px",
                    }}
                    src={emptyList}
                    loading="lazy"
                    alt="emptyImg"
                />
            </Box>
        )}

    </>
);

export default BaseTable;
