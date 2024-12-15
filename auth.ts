import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

//  конфигурация для авторизации с помощью oAuth github
export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [GitHub],
})