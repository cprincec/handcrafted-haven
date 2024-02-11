 import type { NextAuthConfig, Session } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ request: { nextUrl }, auth }) {
     
      const isLoggedIn = !!auth?.user;
      const isOnProducts = nextUrl.pathname.startsWith("/products");
    
      if (isOnProducts) {
        if (isLoggedIn) {
          return true; // Allow access if logged in
        } else {
          return Response.redirect(new URL("/login", nextUrl)); // Redirect unauthenticated users to the login page
        }
      } 

      return true;
    },  

    async session({ session, token }: {
      session: Session;
      token?: { sub?: string };
    }) {
      if (token?.sub) (session.user as { id: string }).id = token.sub;
      return session;
    }
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig; 