import React from "react";
import { VerticalTabs } from "src/app/components/optimized";
import platforms from "./comp/data.json";
import {
  BusinessManager,
  CommerceAccount,
  ConnectAccount,
  DataSharing,
  DomainVerification,
  PlatformPage,
  Terms,
} from "./tabs";

const AppsSetupLayout = ({ platform }) => {
  const { platform_settings, platform_title } = platforms[platform];
  const {
    connect_account,
    business_manager,
    domain_verification,
    platform_page,
    data_sharing,
    commerce_account,
    terms_and_conditions,
  } = platform_settings;

  const tabs = [
    {
      title: connect_account.title,
      content: <ConnectAccount data={connect_account} />,
    },
    {
      title: business_manager.title,
      content: <BusinessManager data={business_manager} />,
    },
    {
      title: domain_verification.title,
      content: <DomainVerification data={domain_verification} />,
    },
    {
      title: platform_page.title,
      content: <PlatformPage data={platform_page} />,
    },
    {
      title: data_sharing.title,
      content: <DataSharing data={data_sharing} />,
    },
    {
      title: commerce_account.title,
      content: <CommerceAccount data={commerce_account} />,
    },
    {
      title: terms_and_conditions.title,
      content: <Terms data={terms_and_conditions} />,
    },
  ];

  return (
    <section>
      <div className="bg-white text-black p-4">
        <h3 className="text-xl font-medium">{platform_title}</h3>
      </div>
      <div className="bg-[#F9FAFC] p-4 flex flex-col ">
        <VerticalTabs tabs={tabs} />
      </div>
    </section>
  );
};

export default AppsSetupLayout;
