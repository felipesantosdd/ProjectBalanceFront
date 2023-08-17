import { Dispatch, ReactNode, SetStateAction } from "react";

export type ContextProps = {
    login: boolean;
    setLogin: Dispatch<SetStateAction<boolean>>
    changeLogin(): void
}

export type ProviderType = {
    children: ReactNode;
}
