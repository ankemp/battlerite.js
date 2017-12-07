import { Entity } from "./Entity";
import { Participant } from "./Participant";
export declare class Round extends Entity {
  duration: number;
  ordinal: number;
  stats: {
    winningTeam: number;
  };
  participants: Participant[];
  _getRelationships(): {
    participants: typeof Participant;
  };
}
