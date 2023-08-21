export interface TypedRequest<T, D> extends Express.Request {
    query?: T
    body: D
}

export type TCardList = {
    cards: Array<TCard>,
    amount: number
}

export type TCard = {
    id: string,
    username: string,
    mail: string,
    message: string,
    isDone: boolean
}

export type TQuery = {
    limits: string,
    offset: string
}