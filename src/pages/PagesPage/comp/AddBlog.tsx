import { useForm } from 'src/app/utils/hooks/form';
import { z } from 'zod';
import AccordionCard from 'src/app/components/optimized/UiKits/AccordionCard';
import { GroupIcons, HeaderSettings } from 'src/app/components/optimized';
import { useTranslation } from 'react-i18next';
import { Form } from 'src/app/components/ui/form';
import QuickActions from 'src/app/components/optimized/UiKits/QuickActions';
import { useNavigate } from 'react-router-dom';
import MainInfoBlog from 'src/app/components/page/PagesPage/BlogPosts/MainInfoBlog';
import ContentSeoPage from 'src/app/components/page/PagesPage/PagesSection/ContentSeoPage';
import { useState } from 'react';
import AddPage from './AddPage';

export interface addPageInterface {
	pageTitle: string;
	link: string;
	metaKey: string;
	metaDescription: string;
	titleEn: string;
	titleAr: string;
	descriptionEn: string;
	descriptionAr: string;
}

const blogSchema = {
	pageTitle: z.string().min(3, { message: 'Page title is required' }),
	link: z.string().url(),
	metaKey: z.string(),
	metaDescription: z.string().min(7, { message: 'Meta description is required' }),
	titleEn: z.string().min(3).max(50),
	titleAr: z.string().min(3).max(50),
	descriptionEn: z.string().min(10).max(200),
	descriptionAr: z.string().min(10).max(200),
};

export default function AddBlog() {
	return <AddPage addblog/>;
}
