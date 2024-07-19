import AxiosHandler from "./axios-handler";

export default class PublicRequest {
    public static getData = async (path: string) => {
        return AxiosHandler.getResponse(200, AxiosHandler.vGetRequest, path);
    };

    public static postData = async (payload: any, path: string) => {
        return AxiosHandler.getResponse(
            200,
            AxiosHandler.vPostRequest,
            path,
            payload,
        );
    };

    public static putData = async (payload: any, path: string) => {
        console.log(path)
        return AxiosHandler.getResponse(
            200,
            AxiosHandler.vPutRequest,
            path,
            payload,
        );
    };

    public static putDataWithFormdata = async (payload: any, path: string) => {
        return AxiosHandler.getResponse(
            200,
            AxiosHandler.vPutRequest,
            path,
            AxiosHandler.buildFormData(payload),
        );
    };

    public static putDataWithNoFormData = async (
        payload: any,
        path: string,
    ) => {
        return AxiosHandler.getResponse(
            200,
            AxiosHandler.vPutwithNotFormdataRequest,
            path,
            payload,
        );
    };

    public static postFormData = async (payload: any, path: string) => {
        return AxiosHandler.getResponse(
            200,
            AxiosHandler.vPostFormRequest,
            path,
            AxiosHandler.buildFormData(payload),
        );
    };

    public static deleteData = async (path: string) => {
        return AxiosHandler.getResponse(200, AxiosHandler.vDeleteRequest, path);
    };
}
