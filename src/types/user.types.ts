export type User = {
    id?: number,
    email?: string,
    password?: string,
    accessToken?: string,
    firstname?: string,
    lastname?: string,
    numSs?: string,
    role?: string,
}

export type UserStore = {
    user: User | null,
    isLogged: boolean
}