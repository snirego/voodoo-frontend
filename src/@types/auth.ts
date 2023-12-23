export type SignInCredential = {
    email: string
    password: string
}

export type SignInResponse = {
    token: string
    userName: string
    email:string
    message?:string
}

export type SignUpResponse = SignInResponse

export type SignUpCredential = {
    username: string
    email: string
    password: string
}

export type ForgotPassword = {
    email: string
}

export type ResetPassword = {
    password: string
}
