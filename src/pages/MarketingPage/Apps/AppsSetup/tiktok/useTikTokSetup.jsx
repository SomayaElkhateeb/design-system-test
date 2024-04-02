import platforms from "../comp/data.json";

export const useTikTokSetup = (platform) => {
  const { tikTok_title, mega_title, tikTok_settings } = platforms[platform];

  const tikTok_tabs = [];

  return { tikTok_title, mega_title, tikTok_settings, tikTok_tabs };
};
