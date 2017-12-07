import { Entity } from "./Entity";
import { Player } from "./Player";
import { IChampion } from "../data/champions";
export declare class Participant extends Entity {
  actor: string;
  champion: IChampion;
  stats: {
    abilityUses: number;
    attachment: number;
    damageDone: number;
    damageReceived: number;
    deaths: number;
    disablesDone: number;
    disablesReceived: number;
    emote: number;
    energyGained: number;
    energyUsed: number;
    healingDone: number;
    healingReceived: number;
    kills: number;
    mount: number;
    outfit: number;
    score: number;
    side: number;
    timeAlive: number;
    userID: string;
  };
  player: Player;
  _set(key: any, value: any): void;
  _getRelationships(): {
    player: typeof Player;
  };
}
