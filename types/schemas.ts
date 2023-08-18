import * as z from 'zod'

export const userSchemaResponse = z.object({
    username: z.string(),
    email: z.string(),
    password: z.string()
})

export const newUserSchemaRequest = z.object({
    username: z.string()
        .nonempty({ message: 'Hey, não seja tímido! Coloque um nome de usuário.' }),
    email: z.string()
        .email({ message: 'Vamos precisar do seu email.' }),
    password: z.string()
        .nonempty({ message: 'A senha é como um segredo. Nós prometemos não contar a ninguém!' }),
    passwordConfirmation: z.string()
        .nonempty({ message: 'Confirmação da senha: é sério, confirme essa senha para acabar se cofundindo.' })
});

export const loginSchema = z.object({
    username: z.string()
        .nonempty({ message: 'Não da pra logar sem o username, né?' }),
    password: z.string()
        .nonempty({ message: 'Ta esquecendo de nada não?' })
})