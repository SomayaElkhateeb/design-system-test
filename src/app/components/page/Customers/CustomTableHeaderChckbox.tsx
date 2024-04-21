import { Checkbox } from "@mui/material"

export default function CustomTableHeaderCheckbox({ array, mainArray, setArray }: { array: string[], mainArray: string[], setArray: (e: string[]) => void }) {


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