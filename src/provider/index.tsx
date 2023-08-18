import { createContext, ReactNode, useState } from "react";
import { ContextProps, ProviderType, UserLogin, UserRequest, UserResponse } from "../../types";

export const Context = createContext<ContextProps>({} as ContextProps)


export function Provider({ children }: ProviderType) {
    const [login, setLogin] = useState(true)

    function changeLogin() {
        if (login === true) {
            setLogin(false)
        } else {
            setLogin(true)
        }
    }

    class User {

        static async login(user: UserLogin): Promise<UserResponse> {
            console.log(user)
            return user
        }

        static async new(user: UserRequest): Promise<UserResponse> {
            console.log(user)
            return user
        }

        static async get(id: string): Promise<UserResponse> {
            console.log(id)
            const user: UserResponse = {}
            return user
        }

        static async delete(id: string): Promise<void> {
            console.log(id)
            return
        }

    }

    return (
        <Context.Provider value={{
            login,
            setLogin,
            changeLogin,
            User: {
                login: User.login,
                new: User.new,
                get: User.get,
                delete: User.delete
            }
        }}>{children}</Context.Provider>
    )
}
