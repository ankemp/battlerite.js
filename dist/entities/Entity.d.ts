export interface IRelationshipMap {
  [key: string]: typeof Entity;
}
export declare class Entity {
  id: string;
  _set(key: any, value: any): void;
  _getRelationships(): IRelationshipMap;
}
