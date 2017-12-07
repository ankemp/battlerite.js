import { Entity } from "./Entity";
export declare class Asset extends Entity {
  URL: string;
  name: string;
  description: string;
  createdAt: Date;
  _set(key: any, value: any): void;
}
