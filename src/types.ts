export interface Link {
    _id: number,
    url: string,
    text: string
}

export type ksslinks = {
    links: Links
}

export type Links = Link[]

export type newLink = Omit<Link, '_id'>
