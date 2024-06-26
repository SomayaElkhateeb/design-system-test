import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

export const getCategoriesTable = createAsyncThunk('CategoriesTable/getCategoriesTable', () =>
	PublicRequest.getData('categories'),
);
