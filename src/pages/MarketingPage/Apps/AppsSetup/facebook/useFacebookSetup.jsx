import platforms from "../comp/data.json";
import {
  BusinessManager,
  CommerceAccount,
  ConnectAccount,
  DataSharing,
  DomainVerification,
  PlatformPage,
  Terms,
} from "./tabs";

export const useFacebookSetup = (platform) => {
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

  return { platformTitle: platform_title, tabs };
};
