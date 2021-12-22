export type user = {
    email: string,
    password: string,
    accessToken?: string,
    firstname?: string,
    lastname?: string,
    numSs?: string,
    role?: string,
}

export type userStore = {
    user: user | null,
    isLogged: boolean
}