export type user = {
    email: string,
    password: string,
    access_token?: string,
    firstname?: string,
    lastname?: string,
    num_ss?: string, 
    role?: string,
}

export type userStore = {
    user: user | null,
    isLogged: boolean
}