import React, { useContext } from "react";
import { Context } from "../provider";
import { LoginComponent } from "../components/form/login";
import { RegisterComponent } from "../components/form/register";

export function Home() {

    const { login, changeLogin } = useContext(Context)

    return (

        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100vh',
        }}>
            {
                login === true ? (
                    <LoginComponent></LoginComponent>
                ) : (
                    <RegisterComponent></RegisterComponent>
                )
            }
            <button onClick={changeLogin}>Contained</button>
        </div>


    );
}

export default Home;
