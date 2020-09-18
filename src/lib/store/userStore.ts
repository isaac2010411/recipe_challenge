
import { hashSync } from 'bcryptjs';
import { getRepository } from 'typeorm';
import { User } from '../../entities/userEntity';




export const UserStore = {
  findUserByEmail: async (email: any) => {
    try {
      const repository = await getRepository(User)
        .findOne({email})
      return repository;

    } catch (error) {
      throw new Error("User not found , incorrected email");
    }
   
  },

  findUserById: async (id:any) => {
    try {
       
      const repository = await getRepository(User)
        .findOne({id},{relations:["recipes"]})
      
      return repository;

    } catch (error) {
      throw new Error("User not found , incorrected id");
      
    }
  },
  createNewUser: async (userData: User) => {
    
    const { name, email, password } = userData;
    try {

      const user = await getRepository<User>(User)
      .findOne({email})
  
      if (user) {
        console.log(user)
        throw new Error("Email already in use");
      }

      let saltNumber = 10;

      let newUser = {
        name,
        email,
        password: hashSync( password , saltNumber )
      }

     
      await getRepository(User)
        .save(newUser)
      return newUser;

    } catch (error) {
      console.log(error)
    }
    
  }
}