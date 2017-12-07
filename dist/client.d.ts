import { Match } from "./entities/Match";
export declare class Client {
  private token;
  constructor(token: string);
  getPlayer(id: string): Promise<any>;
  getPlayersById(ids: string | string[]): Promise<any>;
  getPlayersByName(names: string | string[]): Promise<any>;
  getMatch(id: string): Promise<any>;
  searchMatches(filters?: any, amount?: number, sort?: string): Promise<any>;
  getMatchTelemetry(match: Match): Promise<any>;
}
