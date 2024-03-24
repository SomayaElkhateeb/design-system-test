import { Button } from "src/app/components/optimized";

const DomainVerification = ({ data }) => {
  return (
    <div className="flex justify-between items-center">
      <p>{data.description}</p>
      <div className="flex justify-end">
        <Button text="Verify domain" />
      </div>
    </div>
  );
};

export default DomainVerification;
