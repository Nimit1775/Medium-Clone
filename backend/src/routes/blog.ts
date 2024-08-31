import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { decode, verify } from "hono/jwt";

export const blogRouter = new Hono<
{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
        
    } , 
    Variables :{
        userId : string ,
    }
}>(); 
blogRouter.use("/*" , async (c , next )=>{
  const authHeader = c.req.header("Authorization") || "";
  const user = await verify(authHeader , c.env.JWT_SECRET) ;
  if(user) {
    // @ts-ignore
    c.set("userId", user.id) ; 
     await next()  ; 
  }
  else {
    c.status(401) ;
    return c.json({message : 'Unauthorized'}) ;
  }
  
})

blogRouter.post('/', async (c) => {
  const authorId = c.get("userId") ;
  const body = await c.req.json()
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL ,
  }).$extends(withAccelerate())

 const blog =  await prisma.blog.create({
    data :{
      title : body.title , 
      content : body.content ,
      authorId : Number(authorId) ,
    }
  })
    return c.json({
      id  : blog.id  ,  
    })
  })

  blogRouter.put('/',  async(c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL ,
  }).$extends(withAccelerate())

  const blog = await prisma.blog.update({
    where : {
      id : body.id , 
    } , 
    data :{
      title : body.title , 
      content : body.content ,
    }
  })

    return c.json({
      id  : blog.id  ,  
    })
  })


  // todo: add pagination ,  
  blogRouter.get('/bulk', async(c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL ,
  }).$extends(withAccelerate())

  const blogs = await prisma.blog.findMany() ; 

    return c.json({
      blogs , 
    })
  })
  
  blogRouter.get('/:id',  async (c) => {

    const id = await c.req.param("id")
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL ,
  }).$extends(withAccelerate())
  try {
  const blog = await prisma.blog.findFirst({
    where : {
      id : Number(id) , 
    } , 
   
  })

    return c.json({
         blog  , 
    })
  }catch (e) 
  {
    c.status(411) ;
    return c.json({message : 'error while fetching blog'}) ;
  }
  })
 