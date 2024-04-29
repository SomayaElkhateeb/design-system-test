import React from 'react';
import platforms from '../../_comp/data.json';
import MailchimpAudienceSelect from '../tabs/MailchimpAudienceSelect';
import MailchimpBeforeInstalling from '../tabs/MailchimpBeforeInstalling';
import MailchimpCreateAccount from '../tabs/MailchimpCreateAccount';

interface MailchimpTab {
	title: string;
	content: React.ReactNode;
}

interface MailchimpSetupData {
	mailchimp_title: string;
	mega_title: string;
	mailchimp_settings: {
		settings_title: string;
		mailchimp_intro: {
			title: string;
			linkURL: string;
			linkText: string;
		}[];
		before_installing: {
			title: string;
			notes: string[];
		};
		create_account: {
			title: string;
			description: string;
		};
		audience_select: {
			title: string;
			description: string;
			store_list: {
				name: string;
				url: string;
			}[];
		};
	};
	mailchimp_tabs: MailchimpTab[];
}

export const getMailchimpSetup = (platform: string): MailchimpSetupData | null => {
	const platformData = platforms[platform];

	if (!platformData) return null;

	const { mailchimp_title, mega_title, mailchimp_settings } = platformData;
	const { create_account, before_installing, audience_select } = mailchimp_settings;

	const mailchimp_tabs: MailchimpTab[] = [
		{
			title: before_installing.title,
			content: <MailchimpBeforeInstalling data={before_installing} />,
		},
		{
			title: create_account.title,
			content: <MailchimpCreateAccount data={create_account} />,
		},
		{
			title: audience_select.title,
			content: <MailchimpAudienceSelect data={audience_select} />,
		},
	];

	return { mailchimp_title, mega_title, mailchimp_settings, mailchimp_tabs };
};
