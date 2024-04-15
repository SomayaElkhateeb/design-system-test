import { Checkbox } from "@mui/material"

export default function CustomTableBodyCheckbox({ array, setArray, id }: { array: string[], setArray: (e: string[]) => void, id: string }) {


    return (
        <Checkbox
            onChange={() => {
                if (array.includes(id)) {
                    setArray(array.filter((el) => el !== id))
                } else {
                    setArray([id, ...array])
                }
            }}
            checked={array.includes(id)}
        />
    )
}