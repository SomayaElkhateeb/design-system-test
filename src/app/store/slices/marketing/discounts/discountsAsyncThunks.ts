import { createAsyncThunk } from '@reduxjs/toolkit';
import PublicRequest from 'src/app/utils/AxiosUtils/PublicRequests';

export const getDiscounts = createAsyncThunk('discount/getDiscounts', () =>
	PublicRequest.getData('discount'),
);
