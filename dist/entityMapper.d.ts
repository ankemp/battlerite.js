import { Entity } from "./entities/Entity";
import { IData } from "./request";
export interface IIncludedMap {
  [id: string]: any;
}
export declare function mapDataToEntity(
  data: IData | IData[],
  included: any[] | IIncludedMap,
  targetClass: typeof Entity
): any;
