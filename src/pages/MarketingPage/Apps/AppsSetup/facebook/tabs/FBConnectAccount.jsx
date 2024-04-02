import { Button } from "src/app/components/optimized";

const FBConnectAccount = ({ data }) => {
  return (
    <div className="flex items-center justify-between">
      <p>{data.description}</p>

      <Button text="Connect Account" />
    </div>
  );
};

export default FBConnectAccount;
