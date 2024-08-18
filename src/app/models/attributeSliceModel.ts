import { statusGlobal } from '.';
import { AttributeApiResponse } from '../interface/AttributeInterface';

export interface attributesSliceModel extends statusGlobal {
	attributesList: AttributeApiResponse[];
    attributeShow: AttributeApiResponse | null;
}