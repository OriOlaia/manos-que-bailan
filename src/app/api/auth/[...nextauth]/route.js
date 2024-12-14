import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import db from '../../../libs/db'
import bcrypt from 'bcrypt'

const authOptions = {
    
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Oriana"},
                password: {label: "Password", type: "password", placeholder:"****"}
            },
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            async authorize(credentials, req){
                
                const userFound = await db.user.findUnique({
                    where:{
                        email: credentials.email
                    }
                })
                
                if (!userFound) throw new Error(JSON.stringify({
                    message: 'Usuario no encontrado',
                    ok: false,
                }))
                console.log(userFound)

                const matchPassword = await bcrypt.compare(credentials.password, userFound.password)

                if(!matchPassword) throw new Error('Contraseña incorrecta')

                return {
                    id: userFound.id,
                    name: userFound.username,
                    email: userFound.email,
                    
                }

            },
        })
    ],
    pages: {
        signIn: "/auth/login", 
    }
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}