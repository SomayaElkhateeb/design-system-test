import platforms from "../comp/data.json";
import {
  FBBusinessManager,
  FBCommerceAccount,
  FBConnectAccount,
  FBDataSharing,
  FBDomainVerification,
  FacebookPage,
  FBTerms,
} from "./tabs";

export const useFacebookSetup = (platform) => {
  const { facebook_settings, facebook_title } = platforms[platform];
  const {
    connect_account,
    business_manager,
    domain_verification,
    facebook_page,
    data_sharing,
    commerce_account,
    terms_and_conditions,
  } = facebook_settings;

  const facebook_tabs = [
    {
      title: connect_account.title,
      content: <FBConnectAccount data={connect_account} />,
    },
    {
      title: business_manager.title,
      content: <FBBusinessManager data={business_manager} />,
    },
    {
      title: domain_verification.title,
      content: <FBDomainVerification data={domain_verification} />,
    },
    {
      title: facebook_page.title,
      content: <FacebookPage data={facebook_page} />,
    },
    {
      title: data_sharing.title,
      content: <FBDataSharing data={data_sharing} />,
    },
    {
      title: commerce_account.title,
      content: <FBCommerceAccount data={commerce_account} />,
    },
    {
      title: terms_and_conditions.title,
      content: <FBTerms data={terms_and_conditions} />,
    },
  ];

  return { facebook_title, facebook_tabs };
};
