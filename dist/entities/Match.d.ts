import { Entity } from "./Entity";
import { Roster } from "./Roster";
import { Round } from "./Round";
import { Asset } from "./Asset";
import { IMap } from "../data/maps";
export declare class Match extends Entity {
  createdAt: Date;
  duration: number;
  gameMode: string;
  patchVersion: string;
  shardId: string;
  stats: any;
  map: IMap;
  assets: Asset[];
  rosters: Roster[];
  rounds: Round[];
  _set(key: any, value: any): void;
  _getRelationships(): {
    assets: typeof Asset;
    rosters: typeof Roster;
    rounds: typeof Round;
    spectators: any;
  };
}
