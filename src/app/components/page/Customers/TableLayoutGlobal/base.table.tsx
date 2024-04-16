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

} from "@mui/material";

import { Model } from "src/app/types/model.type";
import { ReactMetaElement } from "src/app/interface/react-meta-element.interface";
import { getImageUrl } from "src/app/utils";



interface header {
    title: string, icon?: React.ReactNode
}
type props = {


    headers: header[];
    rows: ReactMetaElement<any>[];
    isLoading?: boolean;
    color?: string;
    language?: string | null | undefined
};

const BaseTable = <T extends Model>({
    headers,
    rows,
    isLoading,
    color,
    language

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
                        {headers?.map((header: header, i: any) => (
                            <TableCell
                                sx={{
                                    color: color,
                                    fontSize: "14px",
                                    fontWeight: 400,
                                }}
                                key={`h-${i}`}>
                                <Box sx={{ display: "flex", justifyContent: header.icon ? "flex-start" :  language=== "ar" ? "flex-end" : "flex-start" , alignItems:"center"}}>
                                {header.icon && header.icon}
                                {header.title?.toUpperCase()}
                            </Box>
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
                                {e?.extras && <TableCell>{...e?.extras}</TableCell>}
                            </TableRow>
                        ))}
                </TableBody>
            )}
        </Table>
    </TableContainer>
        { rows?.length === 0 && (
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
                    src={getImageUrl("images/EmptyList.png")}
                    loading="lazy"
                    alt="emptyImg"
                />
            </Box>
        )}

    </>
);

export default BaseTable;
