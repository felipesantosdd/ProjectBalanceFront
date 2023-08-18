import React from "react";
import GlobalStyles from "../../styles/global";
import { Provider } from "../provider";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Provider>
                <GlobalStyles />
                <Component {...pageProps} />
            </Provider>
        </>
    );
}

export default MyApp;
