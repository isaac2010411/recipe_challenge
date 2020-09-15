import { skip } from 'graphql-resolvers'

export const isAuthenticated = (_: any, __: any, { email }: any) => {
  console.log(email)
  if (!email) {
    throw new Error("Login to contiued");
  }

  return skip;
}