import *as bcript from "bcrypt"
const saltRounds = 10; 

export const encryption={

 hashPassword: async (pass:string)=>{
    return bcript.hash(pass, saltRounds)
    .then((password)=>{
   return password
    })
},

 comparePassword:async (password:string,hashedPassword:string)=>{
    return await bcript.compare(password,hashedPassword)
    .then((resolve)=>{
    return resolve
    })
}
}
  
  
