export interface Album {
    name        : string,
    year        : number,
    desc        : string,
    link        : string,
    cover       : string,
    primary?    : string,
    secondary?  : string,
    tracks      : Array<{track : number, name : string, link : string}>
}
