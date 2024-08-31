import z, { ParseStatus } from "zod" ; 

export const signupInput = z.object({
    username : z.string().email(), 
    password : z.string().min(6) , 
     name : z.string().optional()  
})
export const signinInput = z.object({
    username : z.string().email(), 
    password : z.string().min(6) , 
    
})
export const CreateBlogInput = z.object({
    title : z.string() , 
    content  : z.string() 
})

export const updateBlogInput = z.object({
    title : z.string() , 
    content  : z.string()  , 
    id  :  z.number() 
})

export type SignupInput = z.infer<typeof signupInput> ;
export type SigninInput = z.infer<typeof signinInput> ;
export type CreateBlogInput = z.infer<typeof CreateBlogInput> ;
export type updateBlogInput = z.infer<typeof updateBlogInput> ;
