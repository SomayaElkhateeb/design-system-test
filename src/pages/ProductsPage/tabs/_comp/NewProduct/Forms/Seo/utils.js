import { z } from 'zod';

export const productSeoSchema = {
	page_title: z.string().min(3).max(70),
	meta_title:z.string().min(3).max(70),
	meta_description: z.string().min(3).max(160),
	meta_keywords_en:z.string().min(3).max(70),
	meta_keywords_ar:z.string().min(3).max(70),
};

// Define default values for the schema
export const productSeoDefaultValues = {
	page_title: '',
	meta_title:'',
	// metaKeywords: [],
	meta_description: '',
	meta_keywords_en:'',
	meta_keywords_ar:''
};
