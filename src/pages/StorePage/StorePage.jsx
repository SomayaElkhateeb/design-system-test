import { Button } from "src/app/components/optimized";
import CheckBox from "src/app/components/optimized/CheckBox/CheckBox";

const StorePage = () => {
  return (
    <div>
      <CheckBox />
      <CheckBox variant="minus" />

      <Button text="button" onClick={() => console.log("done")} />
    </div>
  );
};

export default StorePage;
