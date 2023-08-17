import * as R from 'react'
import react from 'react';
import { Button } from "@mui/material";
import { BoxComponent } from "../../box";
import TextField from '@mui/material/TextField';

export function LoginComponent() {

    const [loginData, setLoginData] = R.useState({
        userName: '',
        password: ''
    })

    function handleChangeData(event) {
        const { name, value } = event.target
        setLoginData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    function submit() {
        console.log(loginData)
    }

    return (
        <BoxComponent>
            <h1>Login</h1>
            <form
                style={{
                    margin: '20px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '300px'
                }}>
                <TextField
                    defaultValue={loginData.userName}
                    label="username"
                    name="userName"
                    variant="standard"
                    onChange={handleChangeData}
                />
                <TextField
                    defaultValue={loginData.password}
                    label="password"
                    name='password'
                    variant="standard"
                    type='password'
                    onChange={handleChangeData}
                />
            </form>

            <Button
                variant="contained"
                onClick={submit}
            >Contained</Button>
        </BoxComponent>
    )
}