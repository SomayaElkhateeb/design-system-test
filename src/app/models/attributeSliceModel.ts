import { statusGlobal } from '.';
import { Attribute, AttributeApiResponse } from '../interface/AttributeInterface';

export interface attributesSliceModel extends statusGlobal {
	attributesList: Attribute[];
    attributeShow: Attribute | null ;
}