import { Dispatch, ReactNode, SetStateAction } from "react";
import * as z from 'zod'
import { loginSchema, newUserSchemaRequest, userSchemaResponse } from "./schemas";

export type ContextProps = {
    login: boolean;
    setLogin: Dispatch<SetStateAction<boolean>>
    changeLogin(): void;
    User: {
        login: (user: UserLogin) => Promise<UserResponse>;
        new: (user: UserRequest) => Promise<UserResponse>
        get: (id: string) => Promise<UserResponse>
        delete: (id: string) => Promise<void>
    }
}

export type ProviderType = {
    children: ReactNode;
}



export type UserResponse = z.infer<typeof userSchemaResponse>;

export type UserRequest = z.infer<typeof newUserSchemaRequest>

export type UserLogin = z.infer<typeof loginSchema>