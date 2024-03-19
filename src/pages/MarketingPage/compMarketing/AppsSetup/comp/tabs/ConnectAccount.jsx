import { Button } from "src/app/components";

const ConnectAccount = ({ data }) => {
  return (
    <div className="flex items-center justify-between">
      <p>{data.description}</p>
      <Button>Connect Account</Button>
    </div>
  );
};

export default ConnectAccount;
