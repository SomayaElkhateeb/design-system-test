import platforms from "../comp/data.json";
import ConnectAccount from "./tabs/ConnectAccount";
import PaymentMethod from "./tabs/PaymentMethod";

export const useGooglsSetup = (platform) => {
  const { google_settings, google_title } = platforms[platform];
  const { connect_account, payment_method } = google_settings;

  const google_tabs = [
    {
      title: connect_account.title,
      content: <ConnectAccount data={connect_account} />,
    },
    {
      title: payment_method.title,
      content: <PaymentMethod data={payment_method} />,
    },
  ];

  return { google_title, google_tabs };
};
