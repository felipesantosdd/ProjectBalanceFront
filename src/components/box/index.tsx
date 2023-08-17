import React, { ReactNode } from "react";
import { BoxStyled } from "./style";

type BoxComponentProps = {
    children: ReactNode;
};

export function BoxComponent({ children }: BoxComponentProps) {

    return <BoxStyled>{children}</BoxStyled>;
}


