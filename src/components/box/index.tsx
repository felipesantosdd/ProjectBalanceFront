import React, { ReactNode } from "react";

type BoxComponentProps = {
    children: ReactNode;
};

export function BoxComponent({ children }: BoxComponentProps) {
    const boxStyle = {
        background: "rgba(255, 255, 255, 0.2)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        padding: "16px",
    };

    return <div style={boxStyle}>{children}</div>;
}
