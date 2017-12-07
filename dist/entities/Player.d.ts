import { Entity } from "./Entity";
export declare class Player extends Entity {
  type: string;
  name: string;
  patchVersion: string;
  shardId: string;
  titleId: string;
  _getRelationships(): {
    assets: any;
  };
}
