import * as R from 'react'
import { Button } from "@mui/material";
import { BoxComponent } from "../../box";
import TextField from '@mui/material/TextField';
import { loginSchema } from '../../../../types/schemas';

export function LoginComponent() {

    const [loginData, setLoginData] = R.useState({
        userName: '',
        password: ''
    })

    const [erros, setErros] = R.useState([])

    function handleChangeData(event) {
        const { name, value } = event.target
        setLoginData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    function submit() {
        try {
            loginSchema.parse(loginData)
            console.log(loginData)
        } catch (error) {
            setErros(JSON.parse(error))
            console.log(erros)
        }
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
                    error={erros.some((ele) => ele.path[0] === "username")}
                    defaultValue={loginData.userName}
                    label="username"
                    name="userName"
                    variant="standard"
                    onChange={handleChangeData}
                    helperText={erros.some((ele) => ele.path[0] === "username") ? erros.find((ele) => ele.path[0] === "username").message : ""}
                />
                <TextField
                    error={erros.some((ele) => ele.path[0] === "password")}
                    defaultValue={loginData.password}
                    label="password"
                    name='password'
                    variant="standard"
                    type='password'
                    onChange={handleChangeData}
                    helperText={erros.some((ele) => ele.path[0] === "password") ? erros.find((ele) => ele.path[0] === "password").message : ""}
                />
            </form>

            <Button
                variant="contained"
                onClick={submit}>
                Entrar
            </Button>
        </BoxComponent>
    )
}