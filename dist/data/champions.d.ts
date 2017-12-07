export interface IChampion {
  id: string;
  name: string;
}
export declare const champions: IChampion[];
export declare function getChampionById(id: string): IChampion;
