import React, { useContext } from "react";
import { Context } from "../provider";
import { LoginComponent } from "../components/form/login";
import { RegisterComponent } from "../components/form/register";
import { Button } from "@mui/material";

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

            <div style={{ display: 'flex', flexDirection: 'column', margin: '50px' }}>
                {login ? "Ainda não é cadastrado?" : "Ja é cadastrado?"}
                <Button style={{ marginTop: '10px' }} variant="contained" onClick={changeLogin}>{login ? 'Cadastre-se' : 'Login'}</Button>
            </div>
        </div >


    );
}

export default Home;
