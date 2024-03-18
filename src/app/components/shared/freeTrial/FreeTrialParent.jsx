import React from "react";
import FreeTrial from "./FreeTrial";
import { nanoid } from "nanoid";
const DATA = [
  {
    id: nanoid(),
    title: "Your trial ended, subscribe to continue using Dookan",
    description: "Subscribe now and open a world with no boundaries",
    trialEnded: "premium",
  },
  {
    id: nanoid(),
    freeTrial: "5 days",
    title: "You’re on free trial",
    description: "Subscribe now and open a world with no boundaries",
  },
];
const FreeTrialParent = () => {
  return (
    <div>
      {DATA.map((item) => (
        <FreeTrial key={item.id} data={item} />
      ))}
    </div>
  );
};

export default FreeTrialParent;
