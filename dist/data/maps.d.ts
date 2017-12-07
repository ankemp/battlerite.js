export interface IMap {
  id: string;
  name: string;
}
export declare const maps: IMap[];
export declare function getMapById(id: string): IMap;
