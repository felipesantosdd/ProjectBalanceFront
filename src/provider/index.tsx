import { createContext, ReactNode, useState } from "react";
import { ContextProps, ProviderType } from "../../types";

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
        static async newUser(data): Promise<any> {
            console.log(data)
            return data
        }

    }

    return (
        <Context.Provider value={{
            login,
            setLogin,
            changeLogin
        }}>{children}</Context.Provider>
    )
}
