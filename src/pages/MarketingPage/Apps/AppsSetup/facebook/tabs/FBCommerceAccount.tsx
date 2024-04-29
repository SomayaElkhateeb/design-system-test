import React from 'react';

interface FBCommerceAccountProps {
  data: {
    title: string;
    description: string;
  };
}

const FBCommerceAccount: React.FC<FBCommerceAccountProps> = ({ data }) => {
  return (
    <div>
      <p>{data.description}</p>
    </div>
  );
};

export default FBCommerceAccount;
