import { z } from "zod";
import { adminSchema } from "../GeneralSettings/AdminSchema";


export interface languageSettingsInterface {
	defaultCountry?: string;
	defaultTime: string;
	defaultCurrency: string;
	defaultLength: string;
	defaultWeight: string;
	defaultLanguage: string
}
export default function useCustomHookLanguageSettings() {

	const handelDefaultValue = () => {
		return {
			defaultTime: '',
			defaultCountry: '',
			defaultCurrency: '',
			defaultLength: '',
			defaultWeight: '',
			defaultLanguage: 'English'
		};
	};
	// //////////////////////////////////////////
	const zodValidate = z.string().min(1)
	const languageSettingsSchema = {
		defaultLanguage: zodValidate,
		...adminSchema
	};
	return {
		languageSettingsSchema,
		handelDefaultValue
	}
}