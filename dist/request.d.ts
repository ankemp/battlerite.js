export interface IAPIRequestParams {
  [key: string]: any;
}
export declare type APIMethod = "POST" | "GET";
export declare class APIError extends Error {
  statusCode: number | null;
  constructor(message: any, statusCode?: any);
}
export interface IData {
  id: string;
  attributes?: any;
  relationships?: any;
  [key: string]: any;
}
export interface IResponseData {
  data: IData[];
  included?: any[];
  meta?: any;
  [key: string]: any;
}
export declare function rawRequest(
  method: any,
  url: any,
  opts?: {}
): Promise<any>;
export declare function apiRequest(
  token: string,
  method: APIMethod,
  endpoint: string,
  params?: IAPIRequestParams
): Promise<IResponseData>;
export declare function apiRequestPaged(
  token: string,
  method: APIMethod,
  endpoint: string,
  params: IAPIRequestParams,
  amount: number
): Promise<IResponseData>;
