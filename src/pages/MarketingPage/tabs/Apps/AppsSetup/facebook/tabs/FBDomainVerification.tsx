import React from 'react';
import { Button } from 'src/app/components/optimized';

interface FBDomainVerificationProps {
  data: {
    description: string;
  };
}

const FBDomainVerification: React.FC<FBDomainVerificationProps> = ({ data }) => {
  return (
    <div className='flex items-center justify-between'>
      <p>{data.description}</p>
      <div className='flex justify-end'>
        <Button>Verify domain</Button>
      </div>
    </div>
  );
};

export default FBDomainVerification;
