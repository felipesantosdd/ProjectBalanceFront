import * as R from 'react'
import { BoxComponent } from "../../box";
import { Button, TextField } from '@mui/material';
import { newUserSchemaRequest } from '../../../../types/schemas';

export function RegisterComponent() {
    const [userData, setUserData] = R.useState({
        email: '',
        username: '',
        password: '',
        passwordConfirmation: ''
    })

    const [erros, setErros] = R.useState([])

    function handleChangeData(event) {
        const { name, value } = event.target
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    function submit() {
        try {
            newUserSchemaRequest.parse(userData)
            console.log(userData)
        } catch (error) {

            setErros(JSON.parse(error))
            // erros.map((ele) => console.log(ele))
            console.log(erros)
        }
    }

    return (
        <BoxComponent>
            <form
                style={{
                    margin: '20px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '300px'
                }}>
                <TextField
                    error={erros.some((ele) => ele.path[0] === "email")}
                    defaultValue={userData.email}
                    label="Email"
                    name="email"
                    variant="standard"
                    onChange={handleChangeData}
                    helperText={erros.some((ele) => ele.path[0] === "email") ? erros.find((ele) => ele.path[0] === "email").message : ""}
                />
                <TextField
                    error={erros.some((ele) => ele.path[0] === "username")}
                    defaultValue={userData.username}
                    label="User Name"
                    name='username'
                    variant="standard"
                    onChange={handleChangeData}
                    helperText={erros.some((ele) => ele.path[0] === "username") ? erros.find((ele) => ele.path[0] === "username").message : ""}
                />
                <TextField
                    error={erros.some((ele) => ele.path[0] === "username")}
                    defaultValue={userData.password}
                    label="password"
                    name='password'
                    variant="standard"
                    type='password'
                    onChange={handleChangeData}
                    helperText={erros.some((ele) => ele.path[0] === "password") ? erros.find((ele) => ele.path[0] === "password").message : ""}
                />
                <TextField
                    error={erros.some((ele) => ele.path[0] === "passwordConfirmation")}
                    defaultValue={userData.password}
                    label="password Confirm"
                    name='passwordConfirmation'
                    variant="standard"
                    type='password'
                    onChange={handleChangeData}
                    helperText={erros.some((ele) => ele.path[0] === "passwordConfirmation") ? erros.find((ele) => ele.path[0] === "passwordConfirmation").message : ""}
                />
            </form>
            <Button
                variant="contained"
                onClick={submit}>
                Registrar
            </Button>
        </BoxComponent>
    )
}