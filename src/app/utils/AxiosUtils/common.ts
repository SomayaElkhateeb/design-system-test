import dayjs from "dayjs";
import {AxiosError} from "axios";

export default class CommonUtil {
    
    public static isObjEmpty = (obj: object): boolean => {
        return Object.keys(obj).length === 0;
    };

    public static getObjLength = (obj: object): number => {
        return Object.keys(obj).length;
    };

    public static findIndex<T>(
        array: T[],
        predicate: (e: T) => boolean,
        with_fail = false,
    ): number {
        const foundIndex = array.findIndex(predicate);

        if (foundIndex === -1 && with_fail) {
            throw new DOMException();
        }

        return foundIndex;
    }

    public static getErrorMessageFromException(e: unknown): string {
        if (typeof e === "string") {
            return e;
        }

        if (e instanceof AxiosError) {

            if (e?.response?.data?.errors) {
                return e.response.data.errors[0] ?? e.message;
            }

            return e.message;
        }

        return (e as any).toString();
    }

    public static formatDate = (date: string) => {
        if(date !==null ){
         return dayjs(new Date(date)).format("DD/MM/YYYY")
    };
    };

    public static formatDate2 = (date: Date|any): string => {
        return dayjs(new Date(date)).format("MM/DD/YYYY");
    };

    public static formatDate1(date: string | number | Date | any) {
         // eslint-disable-next-line prefer-const
         let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            // eslint-disable-next-line prefer-const
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    public static formatNumber = (data: number): string => {
    
    return new Intl.NumberFormat("en-US").format(data);
};

 public static componentToHex(c:any) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  public static rgbToHex(r:string, g:string, b:string) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }
}
