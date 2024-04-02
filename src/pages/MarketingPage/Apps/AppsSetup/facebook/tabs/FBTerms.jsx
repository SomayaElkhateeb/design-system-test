import { Button } from "src/app/components/optimized";

const FBTerms = ({ data }) => {
  return (
    <div>
      <p>{data.description}</p>
      <div className="flex space-x-3 justify-end">
        <Button text="Read Terms" variant="secondaryBtn" />
        <Button text="Accept anyway" />
      </div>
    </div>
  );
};

export default FBTerms;
