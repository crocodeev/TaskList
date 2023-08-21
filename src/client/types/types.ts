import { TCard } from "src/types";

export type TCardsFetch = {
    cards: Array<TCard>,
    count: string,
    limits: number,
    offset: number
}

export enum ESortOrder {
    ascending = 0,
    descending
}

export enum ESortBy {
    username = 0,
    mail,
    isdone
}