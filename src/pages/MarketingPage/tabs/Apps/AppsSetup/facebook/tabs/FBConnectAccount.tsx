import React from 'react';
import { Button } from 'src/app/components/optimized';

interface FBConnectAccountProps {
  data: {
    title: string;
    description: string;
  };
}

const FBConnectAccount: React.FC<FBConnectAccountProps> = ({ data }) => {
  return (
    <div className='flex items-center justify-between'>
      <p>{data.description}</p>
      <Button>Connect Account</Button>
    </div>
  );
};

export default FBConnectAccount;
