import { Hono } from "hono";
import {sign , verify} from 'hono/jwt' 
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate' 
export const userRouter =  new Hono <{
    Bindings : {
        DATABASE_URL : string , 
        JWT_SECRET : string , 
    }
}>()  ; 
userRouter.post('/signup', async(c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL ,
  }).$extends(withAccelerate())
  try  {
  const user = await prisma.user.create({
    data :{
      username : body.username , 
      password : body.password , 
      name : body.name , 
    }
  }) ; 
  const jwt = await sign({ 
   
    id : user.id 
  } , c.env.JWT_SECRET) ;
  return c.json({message : 'User created successfully' , token  : jwt}) ; 
  } catch (e) {
    c.status(403)  ; 
    return c.json({message : 'User already  exists'})  ;
  }
  }) ; 

  
userRouter.post('/signin',async  (c) => {
     
    const body = await c.req.json() ; 
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL ,
  }).$extends(withAccelerate())
  
    try  {
      const user = await prisma.user.findFirst({
        where : {
          username : body.username  , 
          password : body.password ,
        }
      });
  
      if(!user) {
        c.status(403) ; 
        return c.json({message : 'Invalid credentials'}) ; 
      }
  
      const jwt = await sign  ({ 
        id : user.id 
      } , c.env.JWT_SECRET) ;
      return c.json({ message: 'Signin successful', token: jwt });
    } catch(e) 
    {
      console.log(e) ; 
      c.status(403) ; 
      return c.json({message : 'Invalid credentials'}) ;
    }
  }) ; 