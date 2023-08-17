import * as z from 'zod'

const userScmehaResponse = z.object({
    username: z.string(),
    email: z.string(),
    password: z.string()
})

export const newUserSchemaRequest = z.object({
    username: z.string().nonempty({ message: 'Hey, não seja tímido! Coloque um nome de usuário, vai ser divertido.' }),
    email: z.string().email({ message: 'Vamos precisar do seu email tambem.' }),
    password: z.string().nonempty({ message: 'A senha é como um segredo. Nós prometemos não contar a ninguém!' }),
    passwordConfirmation: z.string().nonempty({ message: 'Confirmação da senha: é sério, confirme essa senha para acabar se cofundindo.' })
});