import { Checkbox } from "@mui/material"

export default function CustomTableHeaderCheckbox({ array, mainArray, setArray }: { array: number[], mainArray: number[], setArray: (e: number[]) => void }) {


    return (
        <Checkbox

            checked={array?.length === mainArray?.length}
            onChange={() => {
                if (array?.length !== mainArray?.length) {
                    setArray(mainArray)
                } else {
                    setArray([])
                }
            }}
        />
    )
}