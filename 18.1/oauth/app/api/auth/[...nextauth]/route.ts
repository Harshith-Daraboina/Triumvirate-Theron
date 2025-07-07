import NextAuth from "next-auth"

import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Sigin here',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "username (e.g. john)" },
      password: { label: "Password", type: "password" , placeholder: "password (e.g. 123456)" }
    },
    async authorize(credentials ) {
      
        const username = credentials?.username
        const password = credentials?.password

    if (username && password) {
      const user = {
        id: "1",
        name : "hithx", 
        email : "hithx@gmail.com",
      }
      return user
    }else{
        return null;
    }
  }
})
]
})

export { handler as GET, handler as POST }

