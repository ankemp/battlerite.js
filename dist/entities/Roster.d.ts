import { Entity } from "./Entity";
import { Participant } from "./Participant";
export declare class Roster extends Entity {
  stats: {
    score: number;
    side: number;
  };
  won: boolean;
  _set(key: any, value: any): void;
  _getRelationships(): {
    participants: typeof Participant;
    team: any;
  };
}
