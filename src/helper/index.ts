import { getRepository } from "typeorm";
import { User } from "../entities/userEntity";

const jwt = require("jsonwebtoken")

module.exports = {
  verifyUser: async (authorization: String) => {
    try {
      let email 
      let token = authorization ? authorization.split(' ')[1] : null;

      if (token) {
        const payload = jwt.verify(token, process.env.SECRET_TOKEN_KEY || "mySecret");
        email = payload.email
      }
      
      let user = await getRepository(User)
        .findOne({ email })
      
      return {
        email,
        user
      };

    } catch (error) {
      throw new Error ("Login to continue");
    }
  }
}