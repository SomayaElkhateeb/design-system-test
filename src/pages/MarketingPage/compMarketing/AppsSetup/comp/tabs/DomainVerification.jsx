import { Button } from "src/app/components";

const DomainVerification = ({ data }) => {
  return (
    <div className="flex justify-between items-center">
      <p>{data.description}</p>
      <div className="flex justify-end">
        <Button>Verify domain</Button>
      </div>
    </div>
  );
};

export default DomainVerification;
