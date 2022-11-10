export interface IDisease {
  sickCd: string;
  sickNm: string;
}

export type SearchResponse = Promise<IDisease[]>;
