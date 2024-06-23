import React from 'react';
import { Button } from 'src/app/components/optimized';

interface FBTermsProps {
  data: {
    description: string;
  };
}

const FBTerms: React.FC<FBTermsProps> = ({ data }) => {
  return (
    <div>
      <p>{data.description}</p>
      <div className='flex justify-end space-x-3'>
        <Button variant='secondary'>Read Terms</Button>
        <Button>Accept anyway</Button>
      </div>
    </div>
  );
};

export default FBTerms;
